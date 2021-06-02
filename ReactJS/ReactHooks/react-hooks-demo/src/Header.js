import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
  const {
    user: { name, loggedIn },
  } = useContext(UserContext);

  return (
    <header>
      <a href="#">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "logged in" : " anonymous"}
    </header>
  );
};

export default Header;
