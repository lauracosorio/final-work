import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function GestionEmpresarial(props) {
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
                1. INTRODUCCIÓN - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                2. ¿QUÉ ES UNA ESTRATEGIA? - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                3. ¿QUÉ ES UNA GESTIÓN ESTRATEGICA? - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                4. PASOS DE UNA GESTIÓN ESTRATEGICA - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                5. FORMULACIÓN DE ESTRATEGIA - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                6. FACTORES ASOCIADOS A UNA ESTRATEGIA EXITOSA - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                8. PERSPECTIVAS DE LA GESTIÓN ESTRATÉGICA - 45:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section className="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Gestión empresarial
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/HtdVYndQ49M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            La gestión empresarial es una actividad o plan de acción realizada
            por diferentes individuos especializados como directores
            institucionales, consultores, productores, gerentes, entre otros,
            que buscan mejorar la productividad y la competitividad de una
            empresa o de un negocio. Su finalidad es lograr determinadas metas,
            que bien podrían ser de tipo económico u organizativo.
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

export default GestionEmpresarial;
