import React, { useContext } from "react";
import { UserContext } from "./context";
import Header from "./Header";

const Screen = () => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>First Screen</h1>
      <button onClick={logUserIn}>Log user in</button>
    </div>
  );
};

export default Screen;
