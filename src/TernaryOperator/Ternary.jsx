import React from 'react'
import { useState } from 'react'
import ComponentTwo from '../Components/Components2'


export const Ternary = () => {
    const[sampleCondition,setSampleCondition] = useState(true)
  return (
    
    <div>
        <h2>Welcome To React</h2>
        
  
{sampleCondition? <ComponentTwo/>:"This is a false statement"}
    </div>
  )
}
export default Ternary;