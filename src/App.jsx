import { useState } from "react";
import MemberCard from './Components/TeamMemberCard'
import Component1 from './Components/components1'
import ComponentTwo from "./Components/Components2";
import A from "./Components/A";
import ReactTopics from "./Components/ReactTopics";
import StatesDemo from "./Components/StatesDemo";
import Instagram from "./Components/Instagram";
import Fruits from "./Components/Example";
import FirstComponent from "./PropsContainer/FirstComponent";
import SecondComp from "./PropsContainer/SecondComp";
import ThirdComp from "./PropsContainer/ThirdComp";
import FourComp from "./PropsContainer/FourComp";


function App() {
  const user ={
    name : "Shiva",
    place :"Ongole",
    area : "Rajiv Nagar"

  }

  return (
  <div>
    <FirstComponent name ={user.name}/>
    <SecondComp  area = {user.area}/>
    <ThirdComp name="Rama"/>
    <FourComp name="Teja"/>
</div>
  )
}


export default App
