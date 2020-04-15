import React from "react";
import Registrese from "./Registrese";
import { data } from "../Utils/mocks/data";


const Registro = () => {
  return (
    <>
      <Registrese 
      registrese = {data.Registrese}
     />
    </>
  );
};

export default Registro;
