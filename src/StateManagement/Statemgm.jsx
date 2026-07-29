import React, { useEffect, useState } from "react";

const Statemgm = () => {
  const [city, setCity] = useState("Ongole");

  console.log(city);

  useEffect(() => {
    if (city === "Ongole") {
      setCity("Bangalore");
    }
  }, [city]);

  return (
    <div>
      <h1>I Live in {city}</h1>
    </div>
  );
};

export default Statemgm;