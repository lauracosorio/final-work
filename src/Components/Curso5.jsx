import React, { Component } from "react";
import "../Styles/ContentCurso.css";
import opymtvideo from "../Images/opymtvideo.jpg"

class Curso5 extends Component {
    render() {
        return (
        <>
                <div className="container">
                    <h5 className="text-center space text-info">Organizacion personal y Manejo del tiempo </h5>

                    <img class="space" src="../Images/opymtvideo.jpg" ></img>

                    <p className="space">La gestión del tiempo u organización del tiempo es el proceso de planear y ejercitar el control consciente del tiempo empleado en actividades concretas, especialmente para aumentar la eficacia, la eficiencia o la productividad. Supone para la persona el manejo simultáneo y la acomodación de actividades laborales, sociales, familiares, hobbys, compromisos e intereses con la finitud del tiempo.</p>

                    <p>Un sistema de gestión del tiempo es una combinación diseñada de procesos, herramientas, técnicas y métodos con esta finalidad. La gestión del tiempo normalmente es una necesidad en cualquier desarrollo de proyecto, porque determina su alcance y el momento en que se completará del todo. También es importante entender que existen diferencias técnicas y estructurales en la gestión del tiempo debidas a distintas concepciones culturales del tiempo.</p>


                    
                    <div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #1</h6>
                            <p class="card-text"><small class="text-muted">Duracion 42:47</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/RlZab7UecAs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<h6 className="space text-info">5 Tips para manejar de manera correcta tu tiempo: </h6><br/><br/>

<h7 className="space text-info">1. Aprende a reconocer qué te hace perder el tiempo</h7><br/>
<p>Muchas veces ignoramos cómo una simple actividad puede hacernos perder muchas horas de productividad. A veces, una cosa como ver televisión, no sólo nos hace perder tiempo, sino que nos cambia el estado de ánimo y no queremos hacer nada más después. Hay que rastrear y anotar todo lo que hacemos a diario para poder identificar estos gastadores de tiempo.</p>

<h7 className="space text-info">2. Descubre tus prioridades</h7><br/>
<p>Si sólo pudieras hacer un par de cosas en el día y nada más ¿Cuáles te generarían las mejores ganancias? Aprendiendo a determinar nuestras prioridades nos permite ser efectivos en el manejo del tiempo, incluso si no llegamos a desarrollar las demás tareas de menor importancia.</p>

<h7 className="space text-info">3. Aprende a delegar</h7><br/>
<p> A veces cuando una actividad es muy fácil o monótona, es mejor dársela a otra persona o pagar para que sea hecha y así poder enfocarnos en cosas más importantes. No veas esto como una pérdida de dinero, sino como una ganancia de más horas durante el día.</p>

<h7 className="space text-info">4. Crea una rutina y síguela diariamente</h7><br/>
<p>Tómate el tiempo de hacer un horario con el tiempo necesario para realizar cada una de tus actividades y así podrás guiarte a través del día. Si solamente piensas en una actividad a la vez y no tomas en cuenta lo demás que tienes que hacer, es probable que te prolongues más de lo necesario.</p>

<h7 className="space text-info">5. Establece tiempos específicos para cada actividad</h7><br/>
<p>A más actividades a realizar, menos tiempo para dedicarle a cada una. Toma en consideración cuales serían los tiempos apropiados para cada actividad y dedícaselos.</p>
                    </div>
        </>
    )
  }
}  

export default Curso5;