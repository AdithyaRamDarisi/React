import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MemberCard from './Components/TeamMemberCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Good Evening,This is My Team!!</h1>
      <MemberCard name="Ram" role="Designer"/>
      <MemberCard name="rama" role="UI/UX"/>
      <MemberCard name="Krishna" role="Developer"/>
    </>
  )
}

export default App
