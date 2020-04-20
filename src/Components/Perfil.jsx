import React from "react";
import "../Styles/Content.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import asesoria from "../Images/asesorias.jpg";

function Perfil(props) {
  const { perfil, horario } = props;
  // console.log(perfil, horario, opciones);
  const [estadoAsesoria, cambiarEstadoAsesoria] = React.useState({});
  let history = useHistory(); //cambiar la ruta cuando le da submit
  return (
    <>
      <h3 className="text-info text-center mt-4">Solicitud Asesoría</h3>
      <div className=" tarjetas col-12">
        <div className="col-md-4 col-12 align-middle">
         
         <div>
         <img className="asesorias mt-5" src={asesoria} alt="" />
         </div>

          <h5 className="asesoria col-12 p-0 mt-5">
            Queremos acompañar tu proceso de aprendizaje, selecciona el horario
            en que desees recibir una asesoría personalizada con nuestros
            profesionales, donde podrás resolver inquietudes relacionada con lo
            aprendido durante los cursos. Estas asesorías no tienen un costo
            adicional.
          </h5>
        </div>

        <span className="col-md-8 col-12 align-middle">

        <form
          className=" col-xs-12"
          onSubmit={event => {
            fetch("/api/asesorias", {
              method: "POST",
              body: JSON.stringify(estadoAsesoria),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(response => response.json())
              .then(data => {
                if (data.mensaje === "Asesoria") {
                  Swal.fire({
                    icon: "success",
                    title: "Asesoría solicitado con éxito",
                    text: "¡Pronto nos estaremos poniendo en contacto contigo!"
                  });
                  history.push("/mainPerfil");
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Upps..",
                    text: "¡Tú solicitud no se pudo realizar, intenta de nuevo!"
                  });
                }
              });
            event.preventDefault();
          }}
        >
          <div className="row justify-content-center col-md-9">
            <div className="col-md-8 col-12 form-group mt-5">
              <input
                placeholder="Nombre Completo"
                type="text"
                name="username"
                className="form-control"
                id="exampleInputPassword1"
                required
                onChange={event => {
                  cambiarEstadoAsesoria(
                    Object.assign({}, estadoAsesoria, {
                      [event.target.name]: event.target.value
                    })
                  );
                }}
              />
            </div>
          </div>

          <div className="row justify-content-center col-md-9">
            <div className="col-md-8 col-12 mt-n3 form-group">
              <input
                placeholder="Correo Electrónico"
                type="email"
                name="email"
                className="form-control"
                id="exampleInputPassword2"
                required
                onChange={event => {
                  cambiarEstadoAsesoria(
                    Object.assign({}, estadoAsesoria, {
                      [event.target.name]: event.target.value
                    })
                  );
                }}
              />
            </div>

            <div className="container text-center dias col-md-8">
              <h5 className="text-info m-2">
                Seleciona que día de la semana se ajusta más a tu disponibilidad
              </h5>

              <select class="mt-3 custom-select custom-select-lg mb-3">
                {perfil.map((item, index) => {
                  return (
                    <>
                      <option key={`dia-${index}`} value={item.value}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>

            <div className="container text-center col-md-8">
              <h5 className="text-info">Seleciona tu facilidad Horaria </h5>
              <select class="mt-3 custom-select custom-select-lg mb-3">
                {horario.map((item, index) => {
                  return (
                    <>
                      <option key={`dia-${index}`} value={item.value}>
                        {item.name}
                      </option>
                    </>
                  );
                })}
              </select>

              <div className="container mt-2 justify-content-center">
                <label htmlFor="exampleFormControlTextarea1">
                  <h5 className="text-info text-center">
                  Escribe tus preguntas en el siguiente espacio para conectarte con el asesor que tenga mayor experiencia en este tema
                  </h5>
                </label>
                <textarea
                  className="form-control col-md-12 justify-content-center"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  cols="3"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div className="container col-3 justify-content-center">
            <button type="submit" className="btn btn-info mb-5">
              Enviar
            </button>
          </div>
        </form>
        </span>
      </div>
    </>
  );
}

export default Perfil;
