import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import HeaderPP from "./HeaderPP.jsx"
import Librospag from "./LibrosPag.jsx";

class Libros extends Component {
  render() {
    return (
      <div id="Content">
        <HeaderPP/>
        <div className="container">
          <h2 className="text-info text-center cursos">Libros Recomendados</h2>
        </div>
        <Librospag Libros={data.Libros} />
      </div>
    );
  }
}
export default Libros;
