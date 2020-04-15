import React, { Component } from "react";
import "../Styles/config.css";

function Configuracion(props) {
  const{dataConfiguracion} = props
  console.log(dataConfiguracion)
  return (
    <>
      <div className="container">
        {/* <form>
            <h5 className="text-center text-info">
              Para borrar un curso o libro
            </h5>
            <div className="form-row spacetext">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Usuario</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Curso o libro que eliminará</label>
              <select id="inputState" className="form-control">
                <option selected>Escoge...</option>
                <option>...</option>
              </select>
            </div>

            <button type="submit" className="form1 btn btn-info ml-n4">
              Eliminar
            </button>
          </form> */}

        <form>
          <h5 className="text-center spacetext text-info">
            Para cambiar tu nombre de usuario
          </h5>
          <div className="form-row justify-content-center mb-5 ">
            <div className="col-auto mt-4 justify-content-center">
              <label className="sr-only" htmlFor="inlineFormInputGroup">
                Usuario Nuevo
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Usuario Nuevo"
                />
              </div>
            </div>
            <div className="col-auto mt-4 p-0">
              <button type="submit" className="form2 btn btn-info mb-2 ">
                Cambiar
              </button>
            </div>
          </div>
        </form>

        <div className="configuraciones">

{dataConfiguracion.map((item, index) => {

  return(
    <>
  <button
  key={`configuracion-${index}`}
  type="button"
  className="btn btn-outline-info m-2 "
  data-toggle="modal"
  data-target={item.target}
>
 {item.name}
</button>

<div
  className="modal fade"
  id={item.id}
  tabIndex="-1"
  role="dialog"
  aria-labelledby={item.labelledby}
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id={item.labelledby}>
          {item.title}
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       {item.description}
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
         {item.close}
        </button>
      </div>
    </div>
  </div>
</div>
  </>
  )
})}
</div>

        <div className=" spacetext text-center">
          <h6>¿No resolvimos tus dudas? Escribenos a este correo:</h6>
          <h6 className="font-weight-bold text-info">
            nosotrosempresa@gmail.com
          </h6>
        </div>
      </div>
    </>
  );
}

export default Configuracion;
