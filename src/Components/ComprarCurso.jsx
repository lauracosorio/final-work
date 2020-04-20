import React from "react";
import "../Styles/comprar.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function ComprarCurso(props) {
  let history = useHistory(); //cambiar la ruta cuando le da submit
  const { Pago } = props;
  const [estadoPago, cambiarEstadoPago] = React.useState({});
  return (
    <>
      <form
        onSubmit={event => {
          fetch("/api/pago", {
            method: "POST",
            body: JSON.stringify(estadoPago),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              if (data.mensaje === "Pago") {
                Swal.fire({
                  icon: "success",
                  title: "Pago realizado con éxito"
                });
                history.push("/mainPerfil");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Upps...",
                  text: "No se pudo realizar el pago"
                });
                history.push("/ComprarCurso");
              }
            });
          event.preventDefault();
        }}
        method="POST"
        target="#"
      >
        <div className="container text-center">
          <h3 className="text-info mt-4 mb-4">PAGAR</h3>

          <h5 className="text-info mt-4">Seleciona el tipo de compra </h5>

          <div className="container d-flex justify-content-center tarjetas">
            <div class="card border-info mb-3 m-4 col-md-3">
          
              <div class="card-body text-info PB-3">
                <h5 class="card-title mt-3">CURSO</h5>
                <p class="card-text mt-4">
                  Acceso al curso seleccionado hasta que lo finalices. 
                </p>
              </div>

              <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label " htmlFor="exampleRadios1">
              $130.000
            </label>
          </div>

            </div>
            <div class="card border-info mb-3 m-4 col-md-3">          
              <div class="card-body text-info">
                <h5 class="card-title">SUSCRIPCIÓN SEMESTRAL</h5>
                <p class="card-text">
                  Acceso a 6 de los cursos dictados de manera ilimitada, para ti y 2 personas más.
                </p>
              </div>
              <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
            $350.000
            </label>
          </div>
            </div>

            <div class="card border-info mb-3 m-4 col-md-3">             
              <div class="card-body text-info">
                <h5 class="card-title">SUSCRIPCIÓN ANUAL</h5>
                <p class="card-text">
                Acceso a todos los cursos dictados de manera ilimitada, para ti y 4 personas más.
                </p>
              </div>
              <div className="form-check  m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
             $600.000
            </label>
          </div>
            </div>
            

          </div>
        </div>

        <div className="container">

        </div>

        <div className="container col-8 text-center">
          <h5 className="text-info mt-3">Datos para facturación </h5>
          <div className="form-check form-check">
            <div className="container mb-4 justify-content-center col-md-9  justify-content-center d-flex tarjetas">
              {Pago.map((item, index) => {
                return (
                  <>
                    <input                   
                      key={`registro-item-${index}`}
                      type={item.type}
                      name={item.name}
                      className={item.class}
                      required
                      minLength="2"
                      data-purpose={item.purpose}
                      placeholder={item.placeholder}
                      id={item.id}
                      maxLength="64"
                      onChange={event => {
                        cambiarEstadoPago(
                          Object.assign({}, estadoPago, {
                            [event.target.name]: event.target.value
                          })
                        );
                      }}
                    />
                  </>
                );
              })}
            </div>
          </div>
            <button className="btn btn-info ml-3 mb-5 col-3" type="submit">
              Comprar
            </button>
     
        </div>
      </form>
            
     

    </>
  );
}

export default ComprarCurso;
