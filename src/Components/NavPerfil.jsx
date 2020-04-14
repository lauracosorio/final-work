import React from "react";

import { Link } from "react-router-dom";

function NavPerfil(props) {
  const { Perfil, dataDespliegue } = props;
  

return (
<>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <Link to = "/Home" className="navbar-brand text-light" href="#">
          Navbar
        </Link>

        <div
          className="collapse navbar-collapse col-8 justify-content-center"
          id="navbarSupportedContent"
        >
          <form className="form-inline ">
            <input
              className="form-control mr-sm-2 col-8"
              type="search"
              placeholder="Cursos, libros ..."
              aria-label="Search"
              size="70"
            />
            <button className="btn bg-light my-2 mr-sm-5 ml-sm-2 col-2" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="nav-list">
          <ul className="nav justify-content-end">
            {Perfil.map((item, index) => {
              return (
                <li className="nav-item" key={`nav-item-${index}`}>
                  <Link to = {item.link} className="nav-link text-light ">
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light "
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="dropdownMenu2"
              >
                <svg
                  className="bi bi-person-fill"
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
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

              {dataDespliegue.map((item, index) => {
                return(
              
                  <Link className="dropdown-item"  to={item.link} key={`despliegue-${index}`}>
                  <li className="nav-item" key={`despliegue-item-${index}`}>
                  {item.title}
                  </li>
                </Link>
               
                );

              })}

               
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item"  to="/Descripcion">
                  Descripción
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavPerfil;