import React, { Component } from "react";
import "../Styles/ContentCurso.css";
import gevideo from "../Images/gevideo.jpg"

class Curso3 extends Component {
    render() {
        return (
        <>
                <div className="container">
                    <h5 className="text-center space text-info">Gestion empresarial</h5>

                    <img class="space" src="../Images/gevideo.jpg" ></img>

                    <p className="space">La gestión empresarial es una actividad o plan de acción realizada por diferentes individuos especializados como directores institucionales, consultores, productores, gerentes, entre otros, que buscan mejorar la productividad y la competitividad de una empresa o de un negocio. Su finalidad es lograr determinadas metas, que bien podrían ser de tipo económico u organizativo.</p>

                    <p>Es decir, la finalidad de la gestión empresarial es que la empresa o compañía en cuestión sea viable económicamente.</p>


                    
                    <div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #1</h6>
                            <p class="card-text"><small class="text-muted">Duracion 5:01</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/H3SXStPhggA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #2</h6>
                            <p class="card-text"><small class="text-muted">Duracion 6:24</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/V2Vjg5V4DDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #3</h6>
                            <p class="card-text"><small class="text-muted">Duracion 9:46</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/HKBJ88FNazs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="card space">
                        <div class="card-body">
                            <h6 class="text-info card-title">Clase #3</h6>
                            <p class="card-text"><small class="text-muted">Duracion 7:20</small></p>
                        </div>
                        <iframe width="1110" height="450" src="https://www.youtube.com/embed/y10Kert45xs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
                       

                    </div>
        </>
    )
  }
}  

export default Curso3;