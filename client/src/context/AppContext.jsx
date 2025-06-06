

import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const backend_url = "https://user-management-tdzt.onrender.com";

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backend_url}/profiles/get-user`);
      console.log("Fetched data:", response.data);

      // Extract the profile array from the response
      if (response.data && response.data.profile) {
        setUser(response.data.profile);
      } else if (Array.isArray(response.data)) {
        setUser(response.data);
      } else {
        setUser([]); 
      }
    } catch (error) {
      console.error("Failed to fetch residents:", error);
      setUser([]);
    }
};

  useEffect(() => {
    fetchData();
  }, [backend_url]);

  return (
    <AppContext.Provider value={{ user, setUser, backend_url, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
