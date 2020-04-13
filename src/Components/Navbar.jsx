import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";


function Navbar(props) {
  const { dataNav, dataDespliegue } = props;

  return (
    <>
      <nav className="navbarset navbar navbar-expand-lg navbar-light bg-info">
        <Link to ="/Home" className="navbar-brand text-light" href="#">
          Nombre pag
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav mr-auto">
            {dataNav.map((item, index) => {
              return (
                <Link to= {item.link} className="nav-link text-light titulo">
                  <li className="nav-item" key={`nav-item-${index}`}>
                    {item.name}
                  </li>
                </Link>
              );
            })}

            <li className="nav-item dropdown desplegable">
              <a
                className="  nav-link dropdown-toggle text-white"
                data-toggle="dropdown"
                href="#"
                type="button"
                aria-haspopup="true"
                aria-expanded="false"
                id="dropdownMenu2"
              >
                más
              </a>
              </li>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

              {dataDespliegue.map((item, index) => {
              return (
                  <Link to = {item.link} >
                  <li className="nav-item" key={`despliegue-item-${index}`}>
                    {item.title}
                  </li>
                  </Link>
                   );
                })}
              </div>
           
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
