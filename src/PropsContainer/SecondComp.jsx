import React from 'react'

const SecondComp = (props) => {
  console.log(props);
  return (
    <div>{props.name}</div>
  )
}

export default SecondComp