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
      <div className="row justify-content-center conjunto">
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
              className="btn-group-info span"
              role="group"
              aria-label="First group"
              key={`span-item-${index}`}
            >
              <button type="button" className="btn btn-info">
                <img src={item.image} />
                {item.title}
              </button>
            </div>
          );
        })}
      </div>

      <div className="container">
        <center>
          <h2 className="text-info libros">Libros destacados</h2>
        </center>
      </div>
      <div className="accordion  col-lg-12 d-flex book justify-content-center" id="accordionExample">
        {dataBook.map((item, index) => {
          return (
            <div className="card col-lg-3 bookbox " key={`book-item-${index}`}>
              <div className="card-header text-center " id="headingOne">
                <h4 className="">
                <img src={item.image} width="auto" height="250" />
                  <p className="text-info text-center title">{item.title}</p>

                  <button
                    type="button"
                    className="float-right btn btn-info btn-lg text-center"
                  >
                    {item.button}
                  </button>
                </h4>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
