import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Registro.css";

function Registrese(props) {
  const { registrese } = props;
console.log(registrese)
  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" encabezado">
              Inscríbete y comienza a aprender para mejor la experiencia de tu
              empresa.{" "}
            </h6>
            <hr />

            <form className="formulario  col-sm-7 col-md-7 col-lg-7 ">
              <div className="form-group mb-4">
                {registrese.map((item, index) => {
                  return (
                    <>
                      <input
                      key={`registro-item-${index}`}
                        type={item.type}
                        name={item.name}
                        className="textinput textInput form-control m-3"
                        required=""
                        minLength="2"
                        data-purpose={item.purpose}
                        placeholder={item.placeholder}
                        id={item.id}
                        maxLength="64"
                      ></input>
                    </>
                  );
                })}
              </div>

           

              <p className="">
                <Link to="/Perfil">
                  <button className="btn btn-info ml-3" type="submit">
                    Regístrate
                  </button>
                </Link>
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
