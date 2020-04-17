import React from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"

function Navbar(props) {
  const { dataNav} = props;

  return (
    <>

    


      <nav className="navbarset navbar navbar-expand-lg navbar-light bg-info ">
        <Link to ="/Home" className="navbar-brand text-light col-1" href="#">
         <img src={logo} width="100" alt=""/>
        </Link>

        {/* <div
          className="collapse navbar-collapse col-6 justify-content-center"
          id="navbarSupportedContent"
        >
          <form className="form-inline ">
            <input
              className="form-control mr-sm-2 col-6"
              type="search"
              placeholder="Cursos, libros ..."
              aria-label="Search"
              size="50"
            />
            <button className="btn bg-light my-2 mr-sm-5 ml-sm-2 col-2" type="submit">
              Buscar
            </button>
          </form>
        </div> */}
   
        <div className=" navbar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto col-12 ">
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
