import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function ModeloNegocio(props) {
  return (
    <>
      <HeaderPerfil />
      <div className="row">
        <aside className=" col-12 col-xs-8 col-md-5 col-lg-4 col-xl-3 bg-light">
          <nav
            id="navbar-brand"
            className="nav sticky-top navbar-light bg-light col-12"
          >
            <header
              className="navbar-brand flex-column text-center sidebar-header titulo"
              href="#"
            >
              Contenido del Curso
            </header>

            <nav className="nav  flex-column col-12">
              <a className="nav-link text-dark" href="#introduccion">
                1. INTRODUCCIÓN - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                2. PLANIFICACIÓN ESTRATÉGICA - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                3. OPCIONES ESTRATÉGICAS - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                4. MODELO DE NEGOCIO - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                5. CLIENTES - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                6. VALOR - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                7. VALOR Y CLIENTES - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                8. DIRECTORIOS
              </a>
              <a className="nav-link text-dark" href="#">
                9. FINANZAS Y COSTOS - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                10. FINANZAS Y PRECIOS - 25:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                11. FINANZAS - 25:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section className="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Diseña tu modelo de negocio
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/kEg8nh9_AvI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            Partirás de vídeos grabados para asentar bien los conceptos y
            entender el trabajo que debes realizar, así como también material,
            hojas de calculo, y lecturas extras propuestas. Toda la teoría la
            validarás y la pondrás en práctica, con apoyo del instructor.
          </p>
          <div>
          <h4 className="col-12">Precio: $130.000</h4>
          <Link to="/ComprarCurso">
          <button className="btn btn-info col-3"> Comprar Curso </button>
          </Link>
            
          
          </div>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-2 mt-5">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ModeloNegocio;
