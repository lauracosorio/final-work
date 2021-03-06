import React from "react";
import "../Styles/Content.css";
import { Link } from "react-router-dom";
import logo from "../Images/inclass.png";

function ContentPagPrincipal(props) {
  const {
    dataCarousel,
    Carousel,
    Carousel1,
    dataBox,
    dataSpan,
    dataBook
  } = props;

  return (
    <>
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          {dataCarousel.map((item, index) => {
            return (
              <li
                data-target="#carouselCaptions"
                key={`carousel-item-${index}`}
                data-slide-to={item.slide}
              ></li>
            );
          })}
        </ol>
        <div className="carousel-inner">
          {Carousel.map((item, index) => {
            return (
              <div className="carousel-item active" key={`img-item-${index}`}>
                <img
                  src={item.image}
                  className="d-block w-100 image"
                  alt="..."
                />
                <div className=" carousel-caption d-none d-md-block">
                  <img src={logo} width="400" alt="" />

                  <p className="text-dark font-weight-bold">
                    {item.description}
                  </p>
                  <Link to="/Registrese">
                    <button type="button" className="btn btn-info col-2">
                      {item.button}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}

          {Carousel1.map((item, index) => {
            return (
              <div className="carousel-item" key={`img-item-${index}`}>
                <img
                  src={item.image}
                  className="d-block w-100 image"
                  alt="..."
                />
                <div className=" carousel-caption d-none d-md-block">
                  <img src={logo} width="400" alt="" />
                  <p className="text-dark font-weight-bold">
                    {item.description}
                  </p>
                  <Link to="/Registrese">
                    <button type="button" className="btn btn-info col-2">
                      {item.button}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <h2 className="text-info cursos text-center">Cursos destacados</h2>
      </div>
      <div className="row justify-content-center text-center conjunto col-12">
        {dataBox.map((item, index) => {
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
                <p className="card-text">{item.description}</p>
                <p className="duracion">{item.duracion}</p>
                <p>
                  <span role="img" arial-label="">
                    {item.calificacion}
                  </span>{" "}
                </p>
                <Link to="/Registrese" className="btn btn-info">
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

                <Link to="Registrese" className="btn btn-info col-12  boton">
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

export default ContentPagPrincipal;
