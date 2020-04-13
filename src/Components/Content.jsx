import React from "react";
import "../Styles/Content.css";

function Content(props) {
  const { dataCarousel, Carousel, dataBox, dataSpan, dataBook } = props;

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {dataCarousel.map((item, index) => {
            return (
              <li
                data-target="#carouselExampleCaptions"
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
                <img src={item.image} className="d-block w-100" alt="..." />
                <div className=" carousel-caption d-none d-md-block">
                  <h5 className="text-info font-weight-bold">{item.title}</h5>
                  <p className="text-dark font-weight-bold">
                    {item.description}
                  </p>
                  <button type="button" className="btn btn-info">
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <center>
          <h2 className="text-info cursos">Cursos destacados</h2>
        </center>
      </div>
      <div className="row justify-content-center text-center conjunto col-12">
        {dataBox.map((item, index) => {
          return (
            <div
              className="border-info col-6 col-md-3 card caja"
              key={`box-item-${index}`}
            >
              <img
                src={item.image}
                className="card-img-top"
                width="100"
                height="240"
                alt="..."
              />
              <div className="card-body" width="100">
                <h5 className="card-title text-info">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-info">
                  {item.button}
                </a>
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
        <center>
          <h2 className="text-info libros">Libros destacados</h2>
        </center>
      </div>


      <div className="row justify-content-center text-center conjunto col-12">
        {dataBook.map((item, index) => {
          return (
            <div
              className="border-info col-6 col-md-3 col-lg-3 card caja"
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
                <h5 className="card-title text-info text-center">{item.title}</h5>

                <a href="#" className="btn btn-info col-12  boton">
                  {item.button}
                </a>
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
