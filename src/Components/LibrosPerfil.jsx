import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import HeaderPerfil from "./HeaderPerfil.jsx"
import LibrospagPerfil from "./LibrosPaPerfil.jsx";

class Libros extends Component {
  render() {
    return (
      <div id="Content">
          <HeaderPerfil/>
        <div className="container">
          <h2 className="text-info text-center cursos">Libros Recomendados</h2>
        </div>
        <LibrospagPerfil Libros={data.Libros} />
      </div>
    );
  }
}
export default Libros;
