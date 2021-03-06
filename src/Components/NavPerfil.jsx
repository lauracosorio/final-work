import React from "react";
import logo from "../Images/logo.png";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function NavPerfil(props) {
  const { Perfil, dataDespliegue } = props;

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-info">
        <Link to="/mainPerfil" className="navbar-brand text-light" href="#">
          <img src={logo} width="100" alt="" />
        </Link>

        <div className="nav-list col-10">
          <ul className="nav col-8">
            {Perfil.map((item, index) => {
              return (
                <>
                  <Link to={item.link} className="nav-link text-light ">
                    <li className="nav-item perfil" key={`nav-item-${index}`}>
                      {item.name}
                    </li>
                  </Link>
                </>
              );
            })}
            <li className="nav-item dropdown ">
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
                    fillRule="evenodd"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {dataDespliegue.map((item, index) => {
                  return (
                    <Link
                      className="dropdown-item"
                      to={item.link}
                      key={`despliegue-${index}`}
                    >
                      <li className="nav-item" key={`despliegue-item-${index}`}>
                        {item.title}
                      </li>
                    </Link>
                  );
                })}

                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="">
                  Cerrar Sesión
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
