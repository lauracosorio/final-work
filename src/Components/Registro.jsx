import React from "react";
import HeaderPP from "./HeaderPP.jsx"
import Registrese from "./Registrese.jsx";
import { data } from "../Utils/mocks/data";


const Registro = () => {
  return (
    <>
    <HeaderPP/>
      <Registrese 
      registrese = {data.Registrese}
     />
    </>
  );
};

export default Registro;
