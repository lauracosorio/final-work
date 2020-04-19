import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logo from "../Images/logo.png"

function Footer(props) {
  const { dataFooter, dataLista, dataMas, dataImg } = props;

  return (
    <>
      <div className="card text-center bg-info ">
        <div className="card-header text-light">
          <img src={logo} alt="" width="100"/>
        </div>

        <div className="row text-center col-12 justify-content-center">
          <ul className="  text-light acerca">
            <li className=" text-light titulo col-12"><img src={logo} alt="" width="100"/></li>

            {dataLista.map((item, index) => {
              return <li className="col-12" key={`listaMas-item-${index}`}>{item.name}</li>;
            })}
          </ul>

          <ul className=" justify-content-right text-light acerca">
            <li className=" text-light titulo col-12">MÁS</li>

            {dataMas.map((item, index) => {
              return <li className="col-12" key={`lista-item-${index}`}>{item.name}</li>;
            })}
          </ul>
          <ul>
            {dataImg.map((item, index) => {
              return (
               <li className="d-img col-12">
                  <img
                  className="justify-content-center"
                  src={item.src}
                  key={`imgdonwload-item-${index}`}
                  alt=""
                />
               </li>
              );
            })}
          </ul>
        </div>
        <div className="card-footer text-light">
          © 2020 Todos los derechos reservados.
          <div className="text-light icons ">
      
              {dataFooter.map((item, index) => {
                return (
                  <Link to={item.link} className=" text-light titulo">
                      <i key={`icons-item-${index}`} className={item.icon}></i>&nbsp; &nbsp;
               
                  </Link>
                );
              })}
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
