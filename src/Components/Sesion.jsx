import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sesion.css";


function Sesion() {
  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" titulo">
              ¡Inicia Sesión en tu cuenta!
            </h6>
            <hr />

            <form className="formulario  col-sm-7 col-md-7 col-lg-7 ">

            <div className="form-group">
                <button
                  type="submit"
                  className="form-control facebook-"
            
                ><i className="fab fa-facebook-f"></i>&nbsp;&nbsp;
                  <a href="/" data-purpose="facebook-link" className="face-title" target="_blank">Continuar con Facebook</a>  
                </button>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="form-control google-"
            
                ><i class="fab fa-google"></i>&nbsp;&nbsp;
                  <a href="/" data-purpose="facebook-link" className="google-title" target="_blank">Continuar con Google</a>  
                </button>
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
                    Inicia Sesión
                  </button>
                </Link>
              </p>

              <div className="text-center">
                <h6 className="col m12 condiciones ">
                  O <Link to ="/Contraseña" className="contraseña "><b className="password">¿Has olvidado tu Contraseña?</b></Link>
                  <hr className="hr" />
                </h6>
              </div>
            </form>

            <div className="">
              <p className="text-center">
                ¿No tienes una cuenta?{" "}
                <Link to="/Registrese" className="registrese">
                  <b className="inicia">Regístrate</b>{" "}
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sesion;
