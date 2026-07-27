import { useState } from "react";
import './App.css'
import MemberCard from './Components/TeamMemberCard'
import Component1 from './Components/components1'
import ComponentTwo from "./Components/Components2";
import A from "./Components/A";
import ReactTopics from "./Components/ReactTopics";
import StatesDemo from "./Components/StatesDemo";

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
      <ComponentTwo/>
      <h1>Hello Good Evening,This is My Team!!</h1>
      <MemberCard name="Ram" role="Designer"/>
      <MemberCard name="rama" role="UI/UX"/>
      <MemberCard name="Krishna" role="Developer"/>
      <ReactTopics/>
      <StatesDemo/>
    </>
     
  )
}


export default App
