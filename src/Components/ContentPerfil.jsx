import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Content from "./Content.jsx"
import HeaderPerfil from "./HeaderPerfil.jsx"

class ContentPerfil extends Component {
  render() {
    return (
      <>
      <HeaderPerfil/>
      <div id="Content">
        <Content
        dataBox = {data.box}
        dataSpan = {data.span}
        dataBook = {data.book} />
       
      </div>
      </>
    );
  }
}
export default ContentPerfil;
