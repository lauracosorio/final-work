import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function ExitoEmpresas(props) {
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
                2. ¿QUÉ ES LA ADMINISTRACIÓN? - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                3. ¿QUÉ ES UN PROCESO? - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                4. PLANEACIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                5. ORGANIZACIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                6. INTEGRACIÓN - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                7. DIRIGIR - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                8. CONTROLAR - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                9. PRINCIPIOS GENERALES DEL FLUJO - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                10. PLANIFICACIÓN DEL FLUJO - 1HORA
              </a>
              <a class="nav-link text-dark" href="#">
                11. CONTROL DEL FLUJO - 1HORA
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Curso Administración de Empresas
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
            Planifica actividades y recursos, administra presupuestos y controla
            riesgos. Este Programa especializado cubre los procesos de
            iniciación y planificación de proyectos, definición y estimación de
            presupuestos, así como la gestión de riesgos y administración de
            cambios.
          </p>
          <Link to="/CursosPerfil">
            <button className="btn btn-info col-3">Volver</button>
          </Link>
        </section>
      </div>
    </>
  );
}

export default ExitoEmpresas;
