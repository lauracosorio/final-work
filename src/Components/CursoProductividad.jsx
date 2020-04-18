import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function CursoManejoPersonal(props) {
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
                1. INTRODUCCIÓN - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                2. HÁBITOS INTELIGENTES - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                3. EL TIEMPO, EL RECURSO MÁS ESCASO - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                4. FUNDAMENTOS DE LA PRODUCTIVIDAD - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                5. BASES DE LA PRODUCTIVIDAD - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                6. HÁBITOS Y RUTINAS - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                7. PROCESOS DE CREACIÓN DE OBJETOS - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                8. DISTRACCIONES Y PROCRASTINACIONES - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#">
                9. PRIORIZACIÓN - 45:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Productividad total
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/Sk42ARzX9jw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            Podrás aplicar los conocimientos que adquieras en cuanto a
            conciencia personal y profesional, organización y compromiso, y
            utilizar las herramientas, técnicas y métodos aprendidos para
            fijarte metas, jerarquizar tareas, programar y delegar, todo con el
            fin de superar las dificultades asociadas a la gestión del tiempo y
            mejorar la productividad.
          </p>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-3">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default CursoManejoPersonal;
