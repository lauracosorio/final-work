import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import ContentP from "./ContentP.jsx"

class ContentPerfil extends Component {
  render() {
    return (
      <div id="ContentP">
        <ContentP
        datainput = {data.input}  
        datacheckbox = {data.checkbox}
        datacheckbox2 = {data.checkbox2}
         />
      </div>
    );
  }
}
export default ContentPerfil;
