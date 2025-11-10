import React, { createContext, useState, useEffect } from "react";
import API from "../api";

// 1️⃣ Create the Context
export const RefreshContext = createContext();

// 2️⃣ Create the Provider Component
export const RefreshProvider = ({ children }) => {
  const [allHoldings, setAllHoldings] = useState([]);

  // 3️⃣ Define the function to fetch data
  const fetchHoldings = async () => {
    try {
      const res = await API.get("/Holdings");
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Error fetching holdings:", err);
    }
  };

  // 4️⃣ Fetch data once when the component mounts
  useEffect(() => {
    fetchHoldings();
  }, []);

  // 5️⃣ Return the provider and share data + function
  return (
    <RefreshContext.Provider value={{ allHoldings, fetchHoldings }}>
      {children} {/* 👈 This allows nested components (like App) to use the context */}
    </RefreshContext.Provider>
  );
};
