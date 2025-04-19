import React from "react";

function Expression() {
  const name = "Vashim";
  const lName = "Nadaf";
  const num = 7;

  return (
    <div>
      <h1>Hello {name} {lName} </h1>
      <p>Your lucky number is {num + 7}</p>
    </div>
  );
}

export default Expression;
