import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function CursoManejoPersonal(props) {
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
                1. AUTORIDAD, DIRECCIÓN Y LIDERAZGO - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                2. HABILIDADES GERENCIALES - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                3. LIDERAZGO EFECTIVO - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                4. FUNCIÓN DIRECTIVA - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                5. EJERCICIO DE LA AUTORIDAD- 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                6. NATURALEZA DEL PODER - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                7. ELEMENTOS DE LA DIRECCIÓN - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                8. MEDIOS DE LA DIRECCIÓN - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                9. ESTILO DE LIDERAZGO - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                10. PEFILES - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                11. PERFIL LÍDER EFECTIVO - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                12. DESARROLLO DIRECTIVO - 45:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section className="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Manejo del personal
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/Xr2L9-hyA5E"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            En este curso, identificarás las principales responsabilidades y
            actividades que realiza un directivo en cualquier nivel de mando.
            Revisarás ejemplos que reflejan la importancia del ejercicio del
            liderazgo resaltando el valor del manejo adecuado de la
            comunicación, toma de decisiones, motivación, delegación,
            supervisión y coordinación del equipo de trabajo. Por otra parte,
            reconocerás los diferentes estilos de liderazgo y como éstos deben
            ser utilizados dependiendo de las particularidades de cada
            situación.
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

export default CursoManejoPersonal;
