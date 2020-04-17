import React, { Children } from "react";
// import Sesion from"../Components/Sesion.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Contraseña from "./Components/Contraseña.jsx";
import Registro from "./Components/Registro.jsx";
import Home from "./Components/Home.jsx";
import Iniciar from "./Components/Iniciar-sesion.jsx";
import Cursos from "./Components/Cursos.jsx";
import Libros from "./Components/Libros.jsx";

import Perfil from "./Pages/Perfil";

import ContentPerfil from "./Components/ContentPerfil.jsx";
import CursoMarketingR from "./Components/CursoMarketingR.jsx"
import CursosPerfil from "./Components/CursosPerfil";
import LibrosPerfil from "./Components/LibrosPerfil.jsx"
import ContentP from "./Components/ContentP.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Iniciar" component={Iniciar} />
          <Route path="/Contraseña" component={Contraseña} />
          <Route path="/Registrese" component={Registro} />
          <Route path="/Cursos" component={Cursos} />
          <Route path="/Libros" component={Libros} />
          <Route path="/miPerfil" component={Perfil} />
          <Route path="/mainPerfil" component={ContentPerfil} />
          <Route path="/CursoMarketing" component={CursoMarketingR} />
          <Route path= "/CursosPerfil" component={CursosPerfil} />
          <Route path= "/LibrosPerfil" component = {LibrosPerfil} />
          <Route path="/Asesorias" component = {ContentP} />
        </Switch>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
