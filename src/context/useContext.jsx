import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(); // Create the UserContext

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // Initialize userData as null

  useEffect(() => {
    try {
      // Load user data from sessionStorage
      if (!userData) {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }
      // Save userData to sessionStorage whenever it changes
      if (userData?.access_token) {
        sessionStorage.setItem("userData", JSON.stringify(userData));
      }
    } catch (error) {
      console.error("Error accessing sessionStorage:", error);
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
