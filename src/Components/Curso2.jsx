import React, { Component } from "react";
import "../Styles/ContentCurso.css";
import mdnvideo from "../Images/mdnvideo.jpg"

class Curso2 extends Component {
    render() {
        return (
        <>
                <div className="container">
                    <h5 className="text-center space text-info">Diseña tu modelo de negocio</h5>

                    <img class="space" src="../Images/mdnvideo.jpg" ></img>

                    <p className="space">Un modelo de negocio es una "representación abstracta de una organización, ya sea de manera textual o gráfica, de todos los conceptos relacionados, acuerdos financieros, y el portafolio central de productos o servicios que la organización ofrece y ofrecerá con base en las acciones necesarias para alcanzar las metas y objetivos estratégicos."</p>

                    <p>Los modelos de negocio son utilizados para describir y clasificar negocios, específicamente en un contexto de emprendimiento, pero también se utiliza dentro de las empresas por los directivos para explorar las posibilidades de desarrollo en el futuro.</p>


                    
                    <div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #1</h6>
                            <p class="card-text"><small class="text-muted">Duracion 5:02</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/kEg8nh9_AvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #2</h6>
                            <p class="card-text"><small class="text-muted">Duracion 5:22</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/ygjD9BvoSoM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #3</h6>
                            <p class="card-text"><small class="text-muted">Duracion 8:51</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/qEZIsf9AENE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
                       

                    </div>
        </>
    )
  }
}  

export default Curso2;