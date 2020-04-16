import React from "react";
import "../Styles/ContentCurso.css";
import mdvideo from "../Images/mdvideo.jpg";

function Curso1(props) {
  return (
    <>
      <div class="row">
        <aside class=" col-12 col-xs-8 col-md-5 col-lg-4 col-xl-3 bg-light">
          <nav id="navbar-brand" class="nav sticky-top navbar-light bg-light col-12">
            <header
              class="navbar-brand flex-column text-center sidebar-header titulo"
              href="#"
            >
              Contenido del Curso
            </header>

            <nav class="nav  flex-column col-12">
              <a class="nav-link text-dark" href="#introduccion">
                <p className="space">1. INTRODUCCIÓN - 00:10</p>
              </a>
              <a class="nav-link text-dark" href="#quees">
                <p>2. EL MARKETING DIGITAL - 02:16</p>
              </a>
              <a class="nav-link text-dark" href="#anatomia">
                Anatomía de un conjunto de reglas CSS
              </a>
              <a class="nav-link text-dark" href="#seleccionar">
                Seleccionar múltiples elementos
              </a>
              <a class="nav-link text-dark" href="#fuentes">
                Fuentes y texto
              </a>
              <a class="nav-link text-dark" href="#cajas">
                Cajas, cajas, se trata de cajas
              </a>
              <a class="nav-link text-dark" href="#color">
                Cambiar el color de la página
              </a>
              <a class="nav-link text-dark" href="#ordenar">
                Ordenar el cuerpo
              </a>
              <a class="nav-link text-dark" href="#posicionar">
                Posicionar y diseñar el título de nuestra página principal
              </a>
              <a class="nav-link text-dark" href="#centrando">
                Centrando la imagen
              </a>
              <a class="nav-link text-dark" href="#referencias">
                Referencias
              </a>
            </nav>
          </nav>
        </aside>

        <section class="col-12 col-xs12 col-md-7 col-lg-8 col-xl-9">
          <h3 className="text-center justify-content-center space text-info col-8">Marketing Digital</h3>
          <iframe
          className="col-12"
            width="auto"
            height="450"
            src="https://www.youtube.com/embed/V92Jx72x88c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <h5 className="space col-12">Descripción del Curso</h5>

          <p className="space col-12">
            El marketing digital es la aplicación de las estrategias de
            comercialización llevadas a cabo en los medios digitales. Todas las
            técnicas del mundo off-line son imitadas y traducidas a un nuevo
            mundo, el mundo online. En el ámbito digital aparecen nuevas
            herramientas como la inmediatez, las nuevas redes que surgen día a
            día, y la posibilidad de mediciones reales de cada una de las
            estrategias empleadas. Se conocen dos instancias:
          
            -La primera se basa en la web 1.0, que no difiere de la utilización
            de medios tradicionales. Su mayor característica es la imposibilidad
            de comunicación y exposición de los usuarios. Solamente la empresa
            tiene el control de aquello que se publica sobre sí misma.
          
            -Con la web 2.0 nace la posibilidad de compartir información
            fácilmente gracias a las redes sociales y a las nuevas tecnologías
            de información que permiten el intercambio casi instantáneo de
            piezas que antes eran imposibles, como videos, gráfica, etc. Se
            comienza a usar internet no solo como medio para buscar información
            sino como comunidad, donde hay relaciones constantemente y feedback
            con los usuarios de diferentes partes del mundo.
          </p>

          
        </section>
      </div>
    </>
  );
}

export default Curso1;
