import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Perfil from "./Perfil.jsx"
import HeaderPerfil from "./HeaderPerfil";

const ContentP = () => {
 
    return (
    <>
    <HeaderPerfil />
        <Perfil
        perfil = {data.Perfil}
        horario = {data.Horario}
        opciones = {data.Opciones}
        modalidad = {data.modalidad}
        title = {data.Title}
        inputs= {data.inputs}/>
        
        
  </>
    );
  }
export default ContentP;
