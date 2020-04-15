import React from "react";
import "../Styles/Content.css";

function Perfil(props) {
  const { perfil, horario, opciones} = props;
  console.log(perfil, horario, opciones);
  return (
    <>
      <form className="">
        <div className="row justify-content-center">
          <div className="col-4 form-group">
            <input
              placeholder="Correo Electrónico"
              type="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="container text-center dias">
          
            <h5 className="text-info">Seleciona tu facilidad diaria </h5>
            <div className="form-check form-check-inline justify-content-center">
              {perfil.map((item, index) => {
                return (
                  <>
                    <input
                      key={`horario-${index}`}
                      className="form-check-input m-1 mb-3"
                      type="radio"
                      name="inlineRadioOptions"
                      id={item.id}
                      value={item.value}
                    />
                    <label
                      className="form-check-label m-1 mb-3"
                      htmlFor={item.for}
                    >
                      {" "}
                      {item.name}
                    </label>
                  </>
                );
              })}
            </div>
          </div>

          <div className="container text-center">
            <h5 className="text-info">Seleciona tu facilidad Horaria </h5>
            <div className="form-check form-check-inline">
              {horario.map((item, index) => {
                return (
                  <>
                    <input
                      key={`horario-${index}`}
                      className="form-check-input m-1 mb-3"
                      type="radio"
                      name="inlineRadioOptions"
                      id={item.id}
                      value={item.value}
                    />
                    <label
                      className="form-check-label m-1 mb-3"
                      htmlFor={item.for}
                    >
                      {" "}
                      {item.name}
                    </label>
                  </>
                );
              })}
            </div>
          </div>

          <div className="container text-center">
            <h5 className="text-info text-center">
              Selecciona el curso en especifico
            </h5>
            <select className="custom-select col-4" id="inlineFormCustomSelect">
              {opciones.map((item, index) => {
                return <option  key={`opciones-${index}`} value={item.value}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>

        <div className="container col-3 justify-content-center">
          <button type="submit" className="btn btn-info">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default Perfil;
