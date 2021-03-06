import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2'


function Registrese(props) {
  let history = useHistory(); //cambiar la ruta cuando le da submit
  const { registrese } = props;
  const [estadoFormulario, cambiarEstadoFormulario] = React.useState({});

  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" encabezado mt-4">
              Inscríbete y comienza a aprender para mejor la experiencia de tu
              empresa.{" "}
            </h6>
            <hr />

            <form
              className="formulario  col-sm-7 col-md-7 col-lg-7 "
              onSubmit={event => {
                fetch("/api/registrarse", {
                  method: "POST",
                  body: JSON.stringify(estadoFormulario),
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                  .then(response => response.json())
                  .then(data => {
                    if (data.mensaje === "Bienvenido") {
                      Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido',
                        text: '¡Tú registro ha sido satisfactorio!',              
                      })
                
                history.push("/mainPerfil");
                      
                    } else {
                      Swal.fire({
                        icon: 'error',
                        title: 'Upps',
                        text: '¡Tú registro no se ha podido realizar!',              
                      })
                      history.push("/Registrese");
                    }
                  });
                event.preventDefault();
              }}
              method="post"
              target="#"
            >
              <div className="form-group mb-4">
                {registrese.map((item, index) => {
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
                          cambiarEstadoFormulario(
                            Object.assign({}, estadoFormulario, {
                              [event.target.name]: event.target.value
                            })
                          );
                        }}
                      />
                    </>
                  );
                })}
              </div>

              <div>
     
    </div>

              <p className="">
                <button className="btn btn-info ml-3" type="submit" data-toggle="modal" data-target="#exampleModal">
                  Regístrate
                </button>
              </p>

              <div className="">
                <h6 className="col m12 condiciones">
                  Al registrarte, aceptas nuestras <b>Condiciones de uso</b> y{" "}
                  <b>Política de privacidad.</b>
                  <hr className="hr" />
                </h6>
              </div>
            </form>

            <div className="">
              <p className="text-center">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/Iniciar" className="login">
                  <b className="sesion">Iniciar Sesión</b>{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registrese;
