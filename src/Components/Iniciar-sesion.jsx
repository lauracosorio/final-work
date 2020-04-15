import React from "react";
import Sesion from "./Sesion.jsx"
import { data } from "../Utils/mocks/data.js";

const Iniciar = () => {
  return (
    <>
      <Sesion
      redesSociales = {data.redesSociales}
      iniciarSesion = {data.iniciarSesion} />
    </>
  );
};

export default Iniciar;
