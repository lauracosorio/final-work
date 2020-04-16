import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import CursosPagPerfil from "./CursosPagPerfil.jsx";


class CursosPerfil extends Component {
  render() {
    return (
      <div id="Content">
          <div className="container">
     
          <h2 className="text-info text-center cursos">Cursos Ofrecidos</h2>
       
      </div>
     
      
     
        <CursosPagPerfil
        Cursos = {data.Cursos}
        
         />
      </div>
    );
  }
}
export default CursosPerfil;
