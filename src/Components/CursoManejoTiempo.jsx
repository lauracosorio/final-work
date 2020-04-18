import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function CursoManejoTiempo(props) {
  return (
    <>
      <HeaderPerfil />
      <div class="row">
        <aside class=" col-12 col-xs-8 col-md-5 col-lg-4 col-xl-3 bg-light">
          <nav
            id="navbar-brand"
            class="nav sticky-top navbar-light bg-light col-12"
          >
            <header
              class="navbar-brand flex-column text-center sidebar-header titulo"
              href="#"
            >
              Contenido del Curso
            </header>

            <nav class="nav  flex-column col-12">
              <a class="nav-link text-dark" href="#introduccion">
                1. IMPORTANCIA DEL ORDEN EN EL ÁREA DE TRABAJO - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                2. CADA COSA EN SU LUGAR - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                3. LOGRAR EL ORDEN EN TODAS LAS ÁREAS DE LA ORGANIZACIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                4. IMPORTANCIA DEL TIEMPO DE SU EQUIPO - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                5. IMPORTANCIA DE SU TIEMPO - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                6. DIAGNOSTICO PERSONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                7. DIAGNOSTICO ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                8. TÉCNICAS EFECTIVAS - 1HORA
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">Manejo del tiempo</h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/qZszlTtubf8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            En este curso realizarás varios ejercicios para diagnosticar y
            desarrollar destrezas para el manejo efectivo de tu tiempo al
            clasificar prioridades y necesidades de la empresa. Por otra parte,
            desarrollarás habilidades para fortalecer una actitud de orden y
            respeto por las normas y procedimientos de trabajo valorando la
            importancia de contar con un clima organizado en donde todo el
            equipo se siente cómodo y sabe dónde encontrar los materiales
            relacionados con el trabajo del área.
          </p>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-3">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default CursoManejoTiempo;
