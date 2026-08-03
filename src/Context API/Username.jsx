import React, { useContext } from "react";
import { UserContext } from "./Usercontext";

const Username = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Count: {user.count}</h3>
      <h3>Age: {user.Age}</h3>
    </div>
  );
};

export default Username;