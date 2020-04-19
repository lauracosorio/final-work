import React, { Children } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Contraseña from "./Components/Contraseña.jsx";
import Registro from "./Components/Registro.jsx";
import Home from "./Components/Home.jsx";
import Iniciar from "./Components/Iniciar-sesion.jsx";
import Cursos from "./Components/Cursos.jsx";
import Libros from "./Components/Libros.jsx";
import ContentPerfil from "./Components/ContentPerfil.jsx";
import CursoMarketingR from "./Components/CursoMarketingR.jsx";
import CursoManejoTiempo from "./Components/CursoManejoTiempo.jsx";
import CursoManejoPersonal from "./Components/CursoManejoPersonal.jsx";
import Productividad from "./Components/CursoProductividad.jsx";
import OrganizacionPersonal from "./Components/CursoOrganizacion.jsx";
import ControlEstres from "./Components/ControlEstres.jsx";
import ManejoFinanzas from "./Components/ManejoFinanzas.jsx";
import Administracion from "./Components/Administración.jsx";
import ExitoEmpresas from "./Components/ExitoEmpresas.jsx";
import MarketingDigital from "./Components/MarketingDigital.jsx";
import ModeloNegocio from "./Components/ModeloNegocio.jsx";
import GestionEmpresarial from "./Components/GestionEmpresarial.jsx";
import CursosPerfil from "./Components/CursosPerfil";
import LibrosPerfil from "./Components/LibrosPerfil.jsx";
import ContentP from "./Components/ContentP.jsx";
import ConfiguracionP from "./Components/ConfiguracionP.jsx";
import misCursos from "./Components/misCursos.jsx";
import misLibros from "./Components/misLibros.jsx";
import Comprar from "./Components/Comprar.jsx";




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
          <Route path="/mainPerfil" component={ContentPerfil} />
          <Route path= "/CursosPerfil" component={CursosPerfil} />
          <Route path= "/LibrosPerfil" component={LibrosPerfil} />
          <Route path="/Asesorias" component={ContentP} />
          <Route path="/Configuracion" component={ConfiguracionP} />
          <Route path="/misCursos" component={misCursos} />
          <Route path="/CursoMarketing" component={CursoMarketingR} />
          <Route path="/ManejoTiempo" component={CursoManejoTiempo} />
          <Route path="/ManejoPersonal" component={CursoManejoPersonal} />
          <Route path="/misLibros" component={misLibros} />
          <Route path="/Productividad" component={Productividad} />
          <Route path="/OrganizacionPersonal" component={OrganizacionPersonal} />
          <Route path="/ControlEstres" component={ControlEstres} />
          <Route path="/ManejoFinanzas" component={ManejoFinanzas} />
          <Route path="/AdministracionEmpresas" component={Administracion} />
          <Route path="/ExitoEmpresas" component={ExitoEmpresas} />
          <Route path="/MarketingDigital" component={MarketingDigital} />
          <Route path="/ModeloNegocio" component={ModeloNegocio} />
          <Route path="/GestionEmpresarial" component={GestionEmpresarial} />
          <Route path="/ComprarCurso" component={Comprar} />
        </Switch>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
