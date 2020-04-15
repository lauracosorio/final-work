import React from "react";
import "../Styles/Content.css";

function Perfil( props ) {
 
const { tipodia } = props;
console.log(tipodia)

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
            
          
           
                <input
              className="form-check-input m-1 mb-3"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label m-1 mb-3" htmlFor="inlineCheckbox1">
              Semana
            </label>
              
            
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Fin de semana
            </label>
          </div>
        </div>

        <div className="container text-center">
          <h5 className="text-info">Seleciona tu facilidad Horaria </h5>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-1 mb-3"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label m-1 mb-3" htmlFor="inlineCheckbox1">
              {" "}
              Mañana
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-1 mb-3"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label m-1 mb-3" htmlFor="inlineCheckbox2">
              Tarde
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input m-1 mb-3"
              type="checkbox"
              id="inlineCheckbox3"
              value="option3"
            />
            <label className="form-check-label m-1 mb-3" htmlFor="inlineCheckbox3">
              Noche
            </label>
          </div>
        </div>

        <div className="container text-center">
          <h5 className="text-info text-center">
            Selecciona el curso en especifico
          </h5>
          <select className="custom-select col-4" id="inlineFormCustomSelect">
           
            <option value="1">Marketing Digital</option>
            <option value="2">Manejo del Tiempo</option>
            <option value="3">Manejo del Personal</option>
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
