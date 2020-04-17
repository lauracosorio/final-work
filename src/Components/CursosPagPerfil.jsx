import React from "react";
import "../Styles/Content.css";
import { Link } from "react-router-dom";
import "../Styles/main.css"

function CursosPagPerfil(props) {
  const {
    Cursos
  } = props;

  return (
    <>
      

      <div className="row justify-content-center text-center conjunto col-12">
        {Cursos.map((item, index) => {
          return (
            <div
              className="border-info col-xs-12 col-sm-6 col-md-3 col-lg-3 card caja"
              key={`marketingDigital-${index}`}
            >
              <img
                src={item.image}
                className="card-img-top"
                width="100"
                height="240"
                alt="..."
              />
              <div className="card-body" width="100">
                <h5 className="card-title text-info">{item.name}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p className="duracion">{item.duracion}</p>
         <p>
          <span role="img" arial-label="">{item.calificacion}</span> </p>
                <Link to ={item.Link} className="btn btn-info">
                  {item.boton}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CursosPagPerfil;
