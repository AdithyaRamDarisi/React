// Prop Drilling:
// Prop drilling is passing props through multiple intermediate components to a nested child component,
// even when those intermediate components don't use the props.

import React from 'react'
import { Profile } from './Profile'

export const Dashboard = ({name}) => {
  return (
    <div>
        <h2>Dashboard</h2>
    <Profile name={name}/>
    
    </div>
    
  )
}
export default Dashboard;
