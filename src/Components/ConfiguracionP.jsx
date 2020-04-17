import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Configuracion from "./Configuracion";
import HeaderPerfil from "./HeaderPerfil";

class ConfiguracionP extends Component {
  render() {
    return (
      <>
        <HeaderPerfil />
        <div id="Configuracion">
          <Configuracion dataConfiguracion={data.configuracion} />
        </div>
      </>
    );
  }
}
export default ConfiguracionP;
