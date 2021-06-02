import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nico",
    loggedIn: false,
  });

  const logUserIn = () => setUser({ ...user, loggedIn: true });

  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
