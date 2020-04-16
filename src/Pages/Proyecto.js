import React, { Children } from "react";
// import Sesion from"../Components/Sesion.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Components/Layout.jsx";
import Contraseña from "../Components/Contraseña.jsx";
import Registrese from "../Components/Registrese.jsx";
import Home from "../Components/Home.jsx";
import Iniciar from "../Components/Iniciar-sesion.jsx";
import Cursos from "../Components/Cursos.jsx";
import Libros from "../Components/Libros.jsx";
import ContentPP from "../Components/ContentPP.jsx";
import FooterPP from "../Components/FooterPP.jsx";

import HeaderPP from "../Components/HeaderPP.jsx"
import ConfiguracionP from "../Components/ConfiguracionP.jsx";



function Proyecto(props) {
  return (
    <BrowserRouter>
      <Switch>
      <Layout>
        
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        {/* <Route path="/Perfil" component={Perfil} /> */}
        <Route path="/Iniciar" component={Iniciar} />
        <Route path="/Contraseña" component={Contraseña} />
        <Route path="/Registrese" component={Registrese} />
        <Route path="/Cursos" component={Cursos} />
        <Route path="/Libros" component={Libros} />
        </Layout> 
    
      </Switch>
    </BrowserRouter>
  );
}

export default Proyecto;
