import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function ControlEstres(props) {
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
                1. INTRODUCCIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                2. ¿QUÉ ES EL ESTRÉS? - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                3. ESTRÉS Y SALUD - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                4. ESTRÉS LABORAL - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                5. REDUCCIÓN DEL ESTRÉS - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                6. PREVENCIÓN DEL ESTRÉS - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                7. ESTRÉS PERSONAL - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                8. HERRAMIENTAS - 33:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                9. RETO DE LOS 66 DÍAS - 33:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Controla tu estrés
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/ERo897e-k_Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            En este curso te ayudaremos a desarrollar las habilidades necesarias
            para que puedas organizarte y aprendas a manejar efectivamente tu
            tiempo dentro y fuera del trabajo. A lo largo del curso aprenderás
            sobre la importancia que tiene el saber cómo organizar y administrar
            el tiempo, los indicios que nos hablan de un mal uso del mismo, la
            manera en que puedes planificar, programar y elaborar tus propias
            metas para aprovechar el tiempo al máximo, el manejo de los llamados
            “ladrones de tiempo” y los imprevistos, así como diversos consejos
            útiles para programar tu tiempo de manera realista.
          </p>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-3">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ControlEstres;
