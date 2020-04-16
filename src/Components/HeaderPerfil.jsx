import React from 'react'
import { data } from '../Utils/mocks/data';
import ContentPerfil from "./ContentPerfil.jsx"
import NavPerfil from './NavPerfil';


function HeaderPerfil (){

    return (
        <>
       <NavPerfil
        Perfil = {data.HeaderPerfil}
        dataDespliegue = {data.Despliegue}/>
        <div id="HeaderPerfil">
       
        <ContentPerfil
       
        
         dataFooter = {data.Footer}
         dataLista = {data.Lista}
         dataMas = {data.Mas}
         dataImg = {data.img}
        />

        </div>
        </>
    )
}

export default HeaderPerfil;
