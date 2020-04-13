import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Contraseña.css";

function Contraseña() {
  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" titulo">¿Has olvidado la contraseña?</h6>
            <hr />

            <form className="formulario  col-sm-7 col-md-7 col-lg-7 ">
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

              <p className=" align-left">
                <button className="btn btn-info restablecer" type="submit">
                  Restablecer Contraseña
                </button>
              </p>

              <div className="">
                <h6 className="col m12 condiciones text-center">
                  O{" "}
                  <Link to="/Iniciar" className="contraseña">
                    <b className="log">Iniciar Sesión</b>
                  </Link>
                  <hr className="hr" />
                </h6>
              </div>

              <div class="form-check text-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  required=""
                />
                <label class="form-check-label" for="defaultCheck1">
                  No soy un robot 
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contraseña;