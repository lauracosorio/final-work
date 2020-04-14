import React from "react";

import { Link } from "react-router-dom";

function NavPerfil(props) {
  const { Perfil, Despliegue } = props;
  

return (
<>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <Link to = "/Home" class="navbar-brand text-light" href="#">
          Navbar
        </Link>

        <div
          class="collapse navbar-collapse col-8 justify-content-center"
          id="navbarSupportedContent"
        >
          <form class="form-inline ">
            <input
              class="form-control mr-sm-2 col-8"
              type="search"
              placeholder="Cursos, libros ..."
              aria-label="Search"
              size="70"
            />
            <button class="btn bg-light my-2 mr-sm-5 ml-sm-2 col-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="nav-list">
          <ul class="nav justify-content-end">
            {Perfil.map((item, index) => {
              return (
                <li class="nav-item" key={`nav-item-${index}`}>
                  <Link to = {item.link} class="nav-link text-light ">
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-light "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  class="bi bi-person-fill"
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Mi Perfil
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">

              {Despliegue.map((index, item) => {
                return(
              
                  <p class="dropdown-item text-dark"  href={item.link} key={`despliegue-${index}`}>
                  {item.title}
                </p>
               
                )

              })}

               
                <div class="dropdown-divider"></div>
            
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavPerfil;