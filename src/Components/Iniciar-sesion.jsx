import React from "react";
import HeaderPP from "./HeaderPP.jsx"
import Sesion from "./Sesion.jsx"
import { data } from "../Utils/mocks/data.js";

const Iniciar = () => {
  return (
    <>
    <HeaderPP />
      <Sesion
      redesSociales = {data.redesSociales}
      iniciarSesion = {data.iniciarSesion} />
    </>
  );
};

export default Iniciar;
