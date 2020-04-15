import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";


function Navbar(props) {
  const { dataNav} = props;

  return (
    <>

    


      <nav className="navbarset navbar navbar-expand-lg navbar-light bg-info ">
        <Link to ="/Home" className="navbar-brand text-light" href="#">
          Nombre pag
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
   
        <div className=" navbar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            {dataNav.map((item, index) => {
              return (
                <Link to= {item.link} className="nav-link text-light titulo">
                  <li className="nav-item" key={`nav-item-${index}`}>
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
