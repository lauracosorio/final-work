import React, { Component } from "react";


class ContentP extends Component {
    render() {
      return (
        <center><div class="Container ">
          <form> 
        <div class="container">
            <div class="row abs-center">
                
        <div class="col-4 form-group">
        <center><label  for="">Correo Electronico</label></center>
        <input type="email" class="form-control" id="exampleInputPassword1"/>
      </div>
      </div>

    <div class="container justify-content-center">
    <h5 class="text-info">Seleciona tu facilidad diaria </h5>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
      <label class="form-check-label" for="inlineCheckbox1">Semana</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
      <label class="form-check-label" for="inlineCheckbox2">Fin de semana</label>
    </div>
    </div>

    <div class="container align-items-center">
    <h5 class="text-info">Seleciona tu facilidad Horaria </h5>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
      <label class="form-check-label" for="inlineCheckbox1"> Mañana</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
      <label class="form-check-label" for="inlineCheckbox2">Tarde</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
      <label class="form-check-label" for="inlineCheckbox3">Noche</label>
    </div>
    </div>
    
    <div class="container align-items-center">
    <div class="col-4 my-1 ">
          <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Selecciona el curso en especifico</label>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option selected>...</option>
            <option value="1">Marketing Digital</option>
            <option value="2">Manejo del Tiempo</option>
            <option value="3">Manejo del Personal</option>
          </select>
        </div>
        </div>
        

        <div class="container col-4 justify-content-center">
      <button type="submit" class="btn btn-info">Enviar</button>
      </div>
      </div>
    </form>
    </div></center>
      )
      }
    }


export default ContentP;