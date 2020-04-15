import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Perfil from "./Perfil.jsx"

const ContentP = () => {
 
    return (
    <>
        <Perfil
        perfil = {data.Perfil}
        horario = {data.Horario}
        opciones = {data.Opciones}
        title = {data.Title}/>
        
  </>
    );
  }
export default ContentP;
