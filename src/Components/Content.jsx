import React from "react";
import "../Styles/Content.css";
import { Link } from "react-router-dom";
import HeaderPerfil from "./HeaderPerfil";

function Content(props) {
  const {
    dataBox,
    dataSpan,
    dataBook
  } = props;

  return (
    <>
    <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>¡ BIENVENIDO ! </strong>Acercate a nuestro mundo digital y transformate en conocimieno, experiencia y realidad
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

      <div className="container">
      
          <h2 className="text-info cursos text-center">Cursos destacados</h2>

      </div>
      <div className="row justify-content-center text-center conjunto col-12">

      {dataBox.map((item, index) => {
          return (
            <div
              className="border-info col-xs-12 col-sm-6 col-md-3 col-lg-3 card caja"
              key={`marketingDigital-${index}`}>

              <img
                src={item.image}
                className="card-img-top"
                width="100"
                height="240"
                alt="..."
              />
              <div className="card-body" width="100">
                <h5 className="card-title text-info">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="duracion">{item.duracion}</p>
         <p>
          <span role="img" arial-label="">{item.calificacion}</span> </p>
                <Link to ={item.link} className="btn btn-info">
                  {item.boton}

                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className=" btn-toolbar bg-info justify-content-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        {dataSpan.map((item, index) => {
          return (
            <div
              className="group-light span"
              role="group"
              aria-label="First group"
              key={`span-item-${index}`}
            >
              <span type="" className="info span">
                <img src={item.image} /> &nbsp;
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="container">
   
          <h2 className="text-info libros text-center">Libros Recomendados</h2>
      
      </div>

      <div className="row justify-content-center text-center conjunto col-12">
        {dataBook.map((item, index) => {
          return (
            <div
              className="border-info ccol-xs-12 col-sm-6 col-md-3 col-lg-3 card caja"
              key={`book-item-${index}`}
            >
              <img
                src={item.image}
                className="card-img-top"
                width="100"
                height="240"
                alt="..."
              />

              <div className="card-body" width="100">
                <h5 className="card-title text-info text-center">
                  {item.title}
                </h5>

                <Link to = "misLibros" className="btn btn-info col-12  boton">
                  {item.button}
                </Link>
                <p className="card-text description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
