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
                  <a href="https://m.facebook.com/login/?locale2=es_ES" data-purpose="facebook-link" className="face-title" target="_blank">Continuar con Facebook</a>  
                </button>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="form-control google-"
            
                ><i class="fab fa-google"></i>&nbsp;&nbsp;
                  <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&passive=1209600&osid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fintro%3Fhl%3Des&followup=https%3A%2F%2Fmyaccount.google.com%2Fintro%3Fhl%3Des&hl=es&csig=AF-SEnaqvzd2oumofwMy%3A1586877220&flowName=GlifWebSignIn&flowEntry=ServiceLogin" data-purpose="facebook-link" className="google-title" target="_blank">Continuar con Google</a>  
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
