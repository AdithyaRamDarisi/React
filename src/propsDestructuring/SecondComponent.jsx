import React from 'react'

 const SecondComponent = (props) => {
    const{name, place, model, year}=props.myCar
  return (
    <div>
        <h1>Car Details</h1>
        <p>Name:{name}</p>
        <p> Place:{place}</p>
        <p> Model{model}</p>
        <p>{year}</p>
    </div>
  )
}
export default SecondComponent;
