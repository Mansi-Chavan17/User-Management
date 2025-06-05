const express = require("express");
const connectToDB = require("./config/config.db");
const userRouter = require("./routes/user.route");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL || ''; 

const app = express();

app.use(cors({
  origin: "https://user-management-pi-henna.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true 
}));

app.use(express.json());


const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });


app.use("/images", express.static("upload/images"));


app.post("/upload", upload.single("user"), (req, res) => {
  const imageHost = BASE_IMAGE_URL || `${req.protocol}://${req.get("host")}`;
  res.json({
    success: 1,
    image_url: `${imageHost}/images/${req.file.filename}`,
  });
});


app.use("/profiles", userRouter);


app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
