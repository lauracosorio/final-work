import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.jsx"
import { data } from '../Utils/mocks/data.js';

function Header (){

        return (
            <div id="Header">
                <Navbar
                dataNav = {data.Header} 
                dataDespliegue = {data.Despliegue}/>
                
            </div>
        );
    }

export default Header;