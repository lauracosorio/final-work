import React, { Component } from "react";
import "../Styles/ContentCurso.css";
import ctevideo from "../Images/ctevideo.jpg"

class Curso6 extends Component {
    render() {
        return (
        <>
                <div className="container">
                    <h5 className="text-center space text-info">Controla tu estres</h5>

                    <img class="space" src="../Images/ctevideo.jpg" ></img>

                    <p className="space">Es difícil evitar el estrés en estos días con tantas demandas de tiempo y atención que compiten entre sí. Pero con buenas habilidades para manejar el estrés, puedes lidiar con el estrés de una manera saludable.</p>

                    <p>

                     Uno de los primeros pasos hacia un buen manejo del estrés es entender cómo reaccionas ante el estrés y hacer cambios si es necesario. Echa un vistazo honesto a cómo reaccionas ante el estrés y luego adopta o modifica las técnicas de control del estrés para asegurarte de que el estrés en tu vida no conduzca a problemas de salud.</p>


                    
                    <div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #1</h6>
                            <p class="card-text"><small class="text-muted">Duracion 29:56</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/moL1E6gULr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #2</h6>
                            <p class="card-text"><small class="text-muted">Duracion 8:45</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/6QeBhbgy1Fk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

                    </div>
        </>
    )
  }
}  

export default Curso6;