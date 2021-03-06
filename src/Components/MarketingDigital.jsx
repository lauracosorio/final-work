import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function MarketingDigital(props) {
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
                1. INTRODUCCIÓN - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                2. ESTRATEGIAS DEL MARKETING DIGITAL - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                3. ¿QUÉ ES SEO? - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                4. MOTORES DE BÚSQUEDA - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                5. REDES SOCIALES - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                6. LOS DIFERENCIADORES DE TU MARCA - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                7. ¿CÓMO PROMOCIONAR TU MARCA? - 40:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                8. MARKETING VIA EMAIL
              </a>
              <a className="nav-link text-dark" href="#">
                9. PRIORIZACIÓN - 40:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section className="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">Marketing Digital</h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/S_CIpntTllw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            Ascenso es el curso más completo de marketing digital en español.
            Está diseñado para que todo lo que aprendas, lo puedas aplicar
            inmediatamente en tu negocio, organización o idea. Compuesto por
            varios módulos y decenas de lecciones, desde redes sociales hasta
            analíticas pasando por email y SEO, te convertiras en un profesional
            del marketing digital para que hagas crecer tu empresa, producto, o
            marca personal.
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

export default MarketingDigital;
