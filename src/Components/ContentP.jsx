import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Perfil from "./Perfil.jsx"

const ContentP = () => {
 
    return (
    <>
        <Perfil
        tipodia = {data.dias}
        />
        
  </>
    );
  }
export default ContentP;
