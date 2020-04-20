import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

function Navbar(props) {
  const { dataNav } = props;

  return (
    <>
      <nav className="navbarset navbar navbar-expand-lg navbar-light bg-info ">
        <Link to="/Home" className="navbar-brand text-light col-1" href="#">
          <img src={logo} width="100" alt="" />
        </Link>

        <div className=" navbar" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto col-12">
            {dataNav.map((item, index) => {
              return (
                <Link to={item.link} className="nav-link text-light titulo">
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
