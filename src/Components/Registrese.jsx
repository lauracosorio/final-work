import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Registro.css";


function Registrese() {
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
              <div className="form-group  ">
                <input
                  type="text"
                  name="fullname"
                  className="textinput textInput form-control nombre"
                  required=""
                  minlength="2"
                  data-purpose="fullname"
                  placeholder="Nombre completo"
                  id="id_fullname"
                  maxlength="64"
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="textinput textInput form-control"
                  required=""
                  minlength="2"
                  data-purpose="fullname"
                  placeholder="Correo Electrónico"
                  id="id_email"
                  maxlength="64"
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="textinput textInput form-control"
                  required=""
                  minlength="2"
                  data-purpose="password"
                  placeholder="Contraseña"
                  id="id_password"
                  maxlength="64"
                ></input>
              </div>

              <p className="">
                <Link to="/Perfil">
                  <button className="btn btn-info" type="submit">
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
