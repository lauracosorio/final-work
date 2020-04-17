import React from "react";
import "../Styles/ContentCurso.css";
import mdvideo from "../Images/mdvideo.jpg";
import HeaderPerfil from "./HeaderPerfil";

function CursoMarketing(props) {
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
                <p className="space">
                  1. INTRODUCCIÓN GESTIÓN DE LA RELACIÓN CON CLIENTES - 45:00
                  min
                </p>
              </a>
              <a class="nav-link text-dark" href="#quees">
                <p>ABC DEL MARKETING RELACIONAL - 45:00 min</p>
              </a>
              <a class="nav-link text-dark" href="#anatomia">
                ESTRATEGIAS DE CLIENTES EN MARKETIN RELACIONAL - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#seleccionar">
                COMO DISEÑAR UN PLAN DE DESARROLLO DE CLIENTES - 45:00 min
              </a>
              <a class="nav-link text-dark" href="#fuentes">
                ESCENARIOS DE LA POLÍTICA DE FIDELIZACIÓN -45:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9">
          <h3 className="text-center justify-content-center space text-info col-8">
            Marketing Relacional
          </h3>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OmQBc5NjSYM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="ml-5"
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            El Marketing Relacional es una rama del Marketing cuyo enfoque va de
            contar con el cliente como eje central para el crecimiento de la
            empresa. Puede parecer obvio, pero algunas veces nos olvidamos de
            conceptos de “fidelizar” y anteponemos los conceptos de “captar” o
            de “vender”. Esta rama del Marketing implica una alta carga
            analítica sobre la cartera de clientes con fin de priorizar los
            recursos de la empresa en determinados grupos (segmentos) de
            clientes en función del valor de cada segmento de cliente. En este
            curso, te enseñaré los fundamentos del Marketing Relacional hasta
            hacer un plan básico de desarrollo de clientes. El principal
            objetivo del curso es dar una visión muy práctica de cómo aplicar
            técnicas analíticas de segmentación de clientes (RFM, Ciclo de Vida,
            etc.), generación de métricas básicas y definición de acciones sobre
            una cartera de clientes con el fin de fidelizar, activar y
            desarrollar los diferentes segmentos de clientes.
          </p>
        </section>
      </div>
    </>
  );
}

export default CursoMarketing;
