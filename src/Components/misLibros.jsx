import React, { Component } from "react";
import {Link} from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil.jsx";

class misLibros extends Component {
  render() {
    return (
      <>
        <HeaderPerfil />
        <div id="Content">
        <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>¡BIENVENIDO! </strong>Acercate a nuestro mundo digital y
              transformate en conocimieno, experiencia y realidad
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          <div className="container">
            

            <h2 className="text-info cursos text-center"> MIS LIBROS FAVORITOS</h2>
            <div className="Contenido">


            </div>
          </div>
          <div className=" text-center">
              <Link to ="/mainPerfil">
                  <button className="btn btn-info mt-5 mb-5 col-5 align-items-center" type="button">Encuentra todo lo que INCLASS tiene para ti</button>
              </Link>
          </div>
        </div>
      </>
    );
  }
}
export default misLibros;
