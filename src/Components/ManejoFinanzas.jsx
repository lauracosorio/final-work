import React from "react";
import "../Styles/ContentCurso.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function ManejoFinanzas(props) {
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
                2. DIAGNOSTICO DE TUS FINANZAS - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                3. ANALIZA TUS RESULTADOS - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                4. EL CICLO DE LAS FINANZAS - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                5. AHORRO VS INVERSIÓN - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                6. PASOS PARA INVERTIR - 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                7. OPCIONES DE INVERSIÓN- 45:00 min
              </a>
              <a className="nav-link text-dark" href="#">
                8. BONUS
              </a>
              <a className="nav-link text-dark" href="#">
                9. PRIORIZACIÓN - 45:00 min
              </a>
            </nav>
          </nav>
        </aside>

        <section className="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9 text-center">
          <h3 className="mt-3 mb-5 title text-info col-8">
            Aprende a Manejar Tus Finanzas
          </h3>

          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/6_5Ibs5_TsM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            El manejo del dinero, es uno de los pilares más importantes en la
            vida de las personas; desde que somos jóvenes, pasando a nuestra
            etapa productiva, y hasta que llegamos a nuestra época dorada; el
            optimizar el manejo de nuestras finanzas nos permitirá cumplir metas
            personales.
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

export default ManejoFinanzas;
