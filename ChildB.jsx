import React, { useContext } from "react";
import { nameData, ageData } from "../App";

const ChildB = () => {
  const fullName = useContext(nameData);
  const age = useContext(ageData);
  return (
    <div>
      <h1>my name is {fullName}</h1>
      <h1>my age is {age}</h1>
    </div>
  );
};

export default ChildB;
