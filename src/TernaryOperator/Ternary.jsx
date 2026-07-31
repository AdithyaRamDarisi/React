// Ternary Operator:  
// The ternary operator is a shorthand way of writing an if...else statement. 
// In React, it is mainly used to conditionally render JSX based on a condition.
// Syntax : condition? True:False

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