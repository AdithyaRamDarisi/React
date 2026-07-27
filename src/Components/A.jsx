import React from "react";
function A() {
    let a = 10;
    console.log(a);
    const person = {
    name: "Adithya",
    age: 22,
    city: "Hyderabad"
  };
      console.log(person);

    return(
        <div>
    <h1>{a}</h1>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
      <h2>City: {person.city}</h2>
    </div>
    )
}
export default A;