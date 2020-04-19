import React from "react";
import "../Styles/Content.css";
import { Link } from "react-router-dom";
import "../Styles/main.css"
import HeaderPerfil from "./HeaderPerfil";
import misLibros from "./misLibros";

function Librospag(props) {
  const {
    Libros,
  } = props;
console.log(Libros)
 const handleClick = e => {
    console.log("El botón ha sido presionado")  
  const {id, isInCart, removeFromCart, addToCart} = props;

  if (isInCart) {
    removeFromCart(id);
  }else {
    addToCart(id);
  }
  }

  const {isInCart} = props
  
  return (
    <>
      
    

      <div className="row justify-content-center text-center conjunto col-12">
        {Libros.map((item, index) => {
          return (
            <div
              className="border-info col-xs-12 col-sm-6 col-md-3 col-lg-3 card caja" 
              key={`librosperfil-${index}`}
              id="lista-libros"
            >
                <a href={item.comprar} target="_blank">
                <img
                src={item.image}
                className="card-img-top"
                width="100"
                height="300"
                alt="..."
                title="Click para ir a la librería donde lo puedes coseguir"
              />
              </a>
              <div className="card-body" width="100" >
                <h5 className="card-title text-info">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          
         
          
           
                  <button onClick={handleClick} className={isInCart ? "btn btn-info" : "btn btn-info"} id= {item.id}>
                  {/* {item.button} */}
                  {isInCart ? 'Quitar' : 'Agregar a favoritos'}
                  </button>
            
              </div>

              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Librospag;
