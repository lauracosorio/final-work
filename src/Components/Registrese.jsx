import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Registro.css";

function Registrese(props) {
  const { registrese, onChange, name, password, email, formValues} = props;
  console.log(registrese);

  // state = {
  //   loading: false,
  //   form: {
  //     firstname: "",
  //     email: "",
  //     contraseña: "",
  //   }
  // }

  // handleChange = e =>

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
               
                      <input
                   onChange= {props.onChange}
                        type="text"
                        name="fullname"
                        className="textinput textInput form-control m-3"
                        required=""
                        minLength="2"
                        data-purpose="fullname"
                        placeholder="Nombre Completo"
                        id="id_fullname"
                        maxLength="64"
                        value={formValues.name}
                        required
                      ></input>
                 
              </div>
              <div className="form-group mb-4">
               
                      <input
                       onChange= {onChange}
                        type="email"
                        name="email"
                        className="textinput textInput form-control m-3"
                        required=""
                        minLength="2"
                        data-purpose="fuuemail"
                        placeholder="Correo Electrónico"
                        id="id_email"
                        maxLength="64"
                        value={formValues.email}
                        required
                      ></input>
              
              </div>
              <div className="form-group mb-4">
                <input
                onChange= {onChange}
                  type="password"
                  name="password"
                  className="textinput textInput form-control m-3"
                  required=""
                  minLength="2"
                  data-purpose="password"
                  placeholder="Contraseña"
                  id="id_password"
                  maxLength="64"
                  value={formValues.password}
                  required
                ></input>
              </div>

              <p className="">
                <button className="btn btn-info ml-3" type="submit">
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
