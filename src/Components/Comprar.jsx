import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import HeaderPerfil from "./HeaderPerfil.jsx"
import ComprarCurso from "./ComprarCurso";


const Comprar = () => {
 
    return (
    <>
    <HeaderPerfil />
        <ComprarCurso
        ComprarCurso = {data.Comprar}
        Pago = {data.Pago}/>
        
  </>
    );
  }
export default Comprar;
