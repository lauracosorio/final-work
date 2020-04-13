import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const { dataFooter } = props;

  return (
    <>
      <div className="card text-center bg-info">
        <div className="card-header text-light">Nombre de pag</div>
        <div className="card-body">
          <h5 className="card-title text-light">¿Quieres saber mas de nosotros?</h5>
          <p className="card-text text-light">
            Aqui estan nuestras redes sociales:
          </p>
          <div className="float-right  text-light">
            <ul>
              {dataFooter.map((item, index) => {
                return (
                  <Link to={item.link} className="nav-link text-light titulo">
                    <li key={`footer-item-${index}`}>
                      <i className={item.icon}></i>&nbsp; &nbsp;
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <p className="float-left grey-text text-light right" href="#!">
                Hecho con amor en Medellin, Colombia.
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer text-light">© 2020 nombre pag</div>
      </div>
    </>
  );
}

export default Footer;
