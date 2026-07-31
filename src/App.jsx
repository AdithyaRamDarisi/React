import Example1 from "./Forms/Example1";
import { Dashboard } from "./PropsDrilling/Dashboard";
import { useState } from "react";


const App = () => {
  const[name,setName] = useState("Adithya")
  return (
    <div>
      <h1>App</h1>
       <Dashboard name={name}/>
    </div>
  );
};

export default App;