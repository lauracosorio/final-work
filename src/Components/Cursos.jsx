import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Cursospag from "./Cursospag.jsx";
import HeaderPP from "./HeaderPP.jsx";

class Cursos extends Component {
  render() {
    return (
      <div id="Content">
        <HeaderPP />
        <div className="container">
          <h2 className="text-info text-center cursos">Cursos Ofrecidos</h2>
        </div>

        <Cursospag Cursos={data.Cursos} />
      </div>
    );
  }
}
export default Cursos;
