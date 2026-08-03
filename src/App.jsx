import { useState } from "react";
import DashBoard from "./Context API/DashBoard";
import { UserContext } from "./Context API/Usercontext";

const App = () => {
  const [name] = useState("Adithya");
  const [count] = useState(10);
  const [Age] = useState(23);

  return (
    <UserContext.Provider value={{ name, count, Age }}>
      <h1>App Component</h1>
      <DashBoard />
    </UserContext.Provider>
  );
};

export default App;