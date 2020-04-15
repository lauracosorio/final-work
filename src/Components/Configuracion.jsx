import React, { Component } from "react";
import "../Styles/config.css";

function Configuracion() {
  
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
          <h5 className="text-center spacetext2 text-info">
            Para cambiar tu nombre de usuario
          </h5>
          <div className="form-row align-items-center">
            <div className="col-auto spacetext justify-content-center">
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
            <div className="col-auto spacetext">
              <button type="submit" className="form2 btn btn-info mb-2 p-0">
                Cambiar
              </button>
            </div>
          </div>
        </form>

        <div className=" accordion" id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Politicas de privacidad
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                El presente Políticas de Privacidad establece los términos en
                que nosotros usamos y protegemos la información que es
                proporcionada por sus usuarios al momento de utilizar su sitio
                web. Esta compañía está comprometida con la seguridad de los
                datos de sus usuarios. Cuando le pedimos llenar los campos de
                información personal con la cual usted pueda ser identificado,
                lo hacemos asegurando que sólo se empleará de acuerdo con los
                términos de este documento. Sin embargo esta Política de
                Privacidad puede cambiar con el tiempo o ser actualizada por lo
                que le recomendamos y enfatizamos revisar continuamente esta
                página para asegurarse que está de acuerdo con dichos cambios.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link drodown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-haspopup="true"
                  id="btnGrouDrop1"
                >
                  Informacion Recogida
                </button>
              </h2>
            </div>
            <div className="dropdown-menu" aria-labelledby="btnGrouDrop1">
              <div className="dropdown-item">
                Nuestro sitio web podrá recoger información personal por
                ejemplo: Nombre, información de contacto como su dirección de
                correo electrónica e información demográfica. Así mismo cuando
                sea necesario podrá ser requerida información específica para
                procesar algún pedido o realizar una entrega o facturación.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Uso de la información recogida
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Nuestro sitio web emplea la información con el fin de
                proporcionar el mejor servicio posible, particularmente para
                mantener un registro de usuarios, de pedidos en caso que
                aplique, y mejorar nuestros productos y servicios. Es posible
                que sean enviados correos electrónicos periódicamente a través
                de nuestro sitio con ofertas especiales, nuevos productos y otra
                información publicitaria que consideremos relevante para usted o
                que pueda brindarle algún beneficio, estos correos electrónicos
                serán enviados a la dirección que usted proporcione y podrán ser
                cancelados en cualquier momento. nosotros está altamente
                comprometido para cumplir con el compromiso de mantener su
                información segura. Usamos los sistemas más avanzados y los
                actualizamos constantemente para asegurarnos que no exista
                ningún acceso no autorizado.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Cookies
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Una cookie se refiere a un fichero que es enviado con la
                finalidad de solicitar permiso para almacenarse en su ordenador,
                al aceptar dicho fichero se crea y la cookie sirve entonces para
                tener información respecto al tráfico web, y también facilita
                las futuras visitas a una web recurrente. Otra función que
                tienen las cookies es que con ellas las web pueden reconocerte
                individualmente y por tanto brindarte el mejor servicio
                personalizado de su web. Nuestro sitio web emplea las cookies
                para poder identificar las páginas que son visitadas y su
                frecuencia. Esta información es empleada únicamente para
                análisis estadístico y después la información se elimina de
                forma permanente. Usted puede eliminar las cookies en cualquier
                momento desde su ordenador. Sin embargo las cookies ayudan a
                proporcionar un mejor servicio de los sitios web, estás no dan
                acceso a información de su ordenador ni de usted, a menos de que
                usted así lo quiera y la proporcione directamente, visitas a una
                web . Usted puede aceptar o negar el uso de cookies, sin embargo
                la mayoría de navegadores aceptan cookies automáticamente pues
                sirve para tener un mejor servicio web. También usted puede
                cambiar la configuración de su ordenador para declinar las
                cookies. Si se declinan es posible que no pueda utilizar algunos
                de nuestros servicios.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Enlaces a terceros
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Este sitio web pudiera contener en laces a otros sitios que
                pudieran ser de su interés. Una vez que usted de clic en estos
                enlaces y abandone nuestra página, ya no tenemos control sobre
                al sitio al que es redirigido y por lo tanto no somos
                responsables de los términos o privacidad ni de la protección de
                sus datos en esos otros sitios terceros. Dichos sitios están
                sujetos a sus propias políticas de privacidad por lo cual es
                recomendable que los consulte para confirmar que usted está de
                acuerdo con estas.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Control de su información personal
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                En cualquier momento usted puede restringir la recopilación o el
                uso de la información personal que es proporcionada a nuestro
                sitio web. Cada vez que se le solicite rellenar un formulario,
                como el de alta de usuario, puede marcar o desmarcar la opción
                de recibir información por correo electrónico. En caso de que
                haya marcado la opción de recibir nuestro boletín o publicidad
                usted puede cancelarla en cualquier momento. Esta compañía no
                venderá, cederá ni distribuirá la información personal que es
                recopilada sin su consentimiento, salvo que sea requerido por un
                juez con un orden judicial. nosotros Se reserva el derecho de
                cambiar los términos de la presente Política de Privacidad en
                cualquier momento. Esta politica de privacidad se han generado
                en politicadeprivacidadplantilla.com.
              </div>
            </div>
          </div>
        </div>

        <div className="spacetext2 spacetext text-center">
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
