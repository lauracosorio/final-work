import React from 'react'
import { data } from '../Utils/mocks/data';
import NavPerfil from './NavPerfil';
import FooterPP from "./FooterPP.jsx"
import MainPerfil from "./Cursospag.jsx"
import Cursos from "./Cursos.jsx"


function HeaderPerfil (){

    return (
        <>
      
        <div id="HeaderPerfil">
        <NavPerfil 
        Perfil = {data.HeaderPerfil}
        Despliegue = {data.Despliegue}/>
        <Cursos/>

        <FooterPP/>
        </div>
        </>
    )
}

export default HeaderPerfil;
