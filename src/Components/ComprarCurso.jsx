import React from "react";
import HeaderPerfil from "./HeaderPerfil";
import { Link, useHistory } from "react-router-dom";

function ComprarCurso(props) {
  let history = useHistory(); //cambiar la ruta cuando le da submit
  const { ComprarCurso, Pago } = props;
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
                alert("TU PAGO HA SIDO REALIZADO CON ÉXTIO ");
                history.push("/mainPerfil");
              } else {
                alert("NO SE PUDO REALIZAR EL PAGO");
                history.push("/ComprarCurso");
              }
            });
          event.preventDefault();
        }}
        method="POST"
        target="#"
      >
        <div className="container text-center">
          <h5 className="text-info mt-4">Seleciona el tipo de compra </h5>

          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              
            />
            <label className="form-check-label" for="exampleRadios1">
              Comprar curso - $130.000
            </label>
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label " for="exampleRadios2">
              Comprar suscripción semestral - $350.000
            </label>
          </div>

          <div className="form-check  m-2">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" for="exampleRadios3">
              Comprar suscripción mensual - $600.000
            </label>
          </div>

          {/* <div className="form-check">
            {ComprarCurso.map((item, index) => {
              return (
                <>
                  <input
                    key={`horario-${index}`}
                      className="form-check-input   ml-1 mt-2 col-8"
                    type="radio"
                    name="Radio"
                    id={item.id}
                    value={item.value}
                  />
                  <label
                    className="form-check-label m-1 mb-2 col-12"
                    htmlFor={item.for}
                  >
                    {" "}
                    {item.name}
                  </label>
                </>
              );
            })}
          </div> */}
        </div>

        <div className="container text-center">
          <h5 className="text-info mt-3">Datos para facturación </h5>
          <div className="form-check form-check-inline">
            <div className="form-group mb-4">
              {Pago.map((item, index) => {
                return (
                  <>
                    <input
                      key={`registro-item-${index}`}
                      type={item.type}
                      name={item.name}
                      className="textinput textInput form-control m-3"
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
          <p className="">
            <button className="btn btn-info ml-3 col-3" type="submit">
              Comprar
            </button>
          </p>
        </div>
      </form>
    </>
  );
}

export default ComprarCurso;
