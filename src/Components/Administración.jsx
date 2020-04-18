import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function Administracion(props) {
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
                2. ORGANIZACIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                3. RETOS ORGANIZACIONALES - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                4. ESTRUCTURA ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                5. EL QUÉ ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                7. EL PARA QUÉ ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                8. MISIÓN ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                9. VISIÓN ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                10. INTRODUCCIÓN A LA GUÍA DEL DISEÑO ORGANIZACIONAL - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                11. GUÍA DEL DISEÑO ORGANIZACIONAL 1 - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                12. GUÍA DEL DISEÑO ORGANIZACIONAL 2 - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                13. GUÍA DEL DISEÑO ORGANIZACIONAL 3 - 1HORA
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Herramientas Para El Éxito De Empresas
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/AwUoEGf4p1E"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            Mostrar a través de guías practicas el como desarrollar una
            estructura eficiente, con enfoque al logro de los objetivos
            organizacionales. Identificar los puestos claves que lograran los
            objetivos rectores, estratégicos y tácticos, justificar la razón de
            ser de cada puesto dentro de una estructura organizacional, dominar
            el desarrollo de Qué y Para qué de una organización y dominar el
            desarrollo de Misión y Visión y como llevarlas a la practica.
          </p>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-3">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Administracion;
