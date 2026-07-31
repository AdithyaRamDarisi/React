import React from "react";

function Example() {
  const handleClick = () => {
    alert("Button clicked from Example1");
  };

  return (
    <div>
      <h2>Example Component</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default Example;