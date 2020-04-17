import React from "react";
import { Link,  useHistory } from "react-router-dom";
import "../Styles/Sesion.css";



function Sesion(props) {
  let history = useHistory(); //cambiar la ruta cuando le da submit
  const {redesSociales, iniciarSesion } = props
  const [estadoLogin, cambiarEstadoLogin] = React.useState({});

  return (
    <>
      <section className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <h6 className=" titulo">
              ¡Inicia Sesión en tu cuenta!
            </h6>
            <hr />

            <form className="formulario  col-12 col-sm-7 col-md-8 col-lg-7 " onSubmit={(event) => {
                            fetch('/api/login', {
                                method: 'POST',
                                body: JSON.stringify(estadoLogin),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if(data.mensaje === "Bienvenido"){
                                      alert("BIENVENIDO")
                                        history.push("/mainPerfil");
                                    }else{
                                      alert("NO TE ENCUENTRAS REGISTRADO")
                                        history.push("/Registrese");
                                    }
                                });
                            event.preventDefault();
                        }} method="post" target="#" >

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
                        required
                        onChange={(event) => {
                          cambiarEstadoLogin(Object.assign(
                              {},
                              estadoLogin,
                              {
                                  [event.target.name]: event.target.value
                              }
                          ))
                      }}
                      ></input>
                    </>
                  );
                })}
               
              </div>

              

              <p className="">
             
                  <button className="btn btn-info" type="submit">
                    Inicia Sesión
                  </button>
              
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
