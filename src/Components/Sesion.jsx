import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sesion.css";



function Sesion(props) {

  const {redesSociales, iniciarSesion } = props
  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" titulo">
              ¡Inicia Sesión en tu cuenta!
            </h6>
            <hr />

            <form className="formulario  col-12 col-sm-7 col-md-8 col-lg-7 ">

            <div className="form-group">
              {redesSociales.map((item, index) => {

                return(
<button
                  type="submit"
                  className={item.class}
                  key={`buttons-${index}`}
                ><i className={item.icon}></i>&nbsp;&nbsp;
                  <a href={item.Link} data-purpose={item.purpose} className={item.linkName} target="_blank">{item.title}</a>  
                </button>
                )
              })}
                
              </div>

              <div className="form-group col ml-n3">

              {iniciarSesion.map((item, index) => {
                  return (
                    <>
                      <input
                      key={`registro-${index}`}
                        type={item.type}
                        name={item.name}
                        className="textinput textInput form-control m-3"
                        required=""
                        minlength="2"
                        data-purpose={item.purpose}
                        placeholder={item.placeholder}
                        id={item.id}
                        maxlength="64"
                      ></input>
                    </>
                  );
                })}
               
              </div>

              

              <p className="">
                <Link to="/mainPerfil">
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
