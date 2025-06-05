const express = require("express");
const connectToDB = require("./config/config.db");
const userRouter = require("./routes/user.route");
const multer = require("multer");
const cors = require("cors");
const path = require("path"); // You need this for `path.extname`
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const BASE_IMAGE_URL = process.env.BASE_IMAGE_URL || ''; // Optional default

const app = express();

// ✅ Enable CORS BEFORE defining routes
app.use(cors({
  origin: "http://localhost:5173", // Allow Vite frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // If using cookies/auth
}));

app.use(express.json());

// Multer setup
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

// Static route for uploaded images
app.use("/images", express.static("upload/images"));

// Upload endpoint
app.post("/upload", upload.single("user"), (req, res) => {
  const imageHost = BASE_IMAGE_URL || `${req.protocol}://${req.get("host")}`;
  res.json({
    success: 1,
    image_url: `${imageHost}/images/${req.file.filename}`,
  });
});

// API route
app.use("/profiles", userRouter);

// Server start
app.listen(PORT, async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
