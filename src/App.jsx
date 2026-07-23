import { useState } from "react";
import './App.css'
import MemberCard from './Components/TeamMemberCard'
import Component1 from './Components/components1'
import ComponentTwo from "./Components/Components2";

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <>
      <ComponentTwo/>
      <h1>Hello Good Evening,This is My Team!!</h1>
      <MemberCard name="Ram" role="Designer"/>
      <MemberCard name="rama" role="UI/UX"/>
      <MemberCard name="Krishna" role="Developer"/>
      <Component1 />
    </>
     
  )
}


export default App
