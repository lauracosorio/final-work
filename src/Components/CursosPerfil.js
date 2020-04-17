import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import HeaderPP from "./HeaderPP.jsx";
import CursosPagPerfil from "./CursosPagPerfil";
import HeaderPerfil from "./HeaderPerfil";

class CursosPerfil extends Component {
  render() {
    return (
      <div id="Content">
        <HeaderPerfil />
        <div className="container">
          <h2 className="text-info text-center cursos">Cursos Ofrecidos</h2>
        </div>

        <CursosPagPerfil Cursos={data.Cursos} />
      </div>
    );
  }
}
export default CursosPerfil;
