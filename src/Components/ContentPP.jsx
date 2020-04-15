import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Content from "./Content.jsx"
import HeaderPP from "./HeaderPP";

class ContentPP extends Component {
  render() {
    return (
      <>
      
      <div id="Content">
        <Content
        dataCarousel = {data.Carousel}
        Carousel = {data.Carousel1}
        Carousel1 = {data.Carousel2}
        dataBox = {data.box}
        dataSpan = {data.span}
        dataBook = {data.book} />
      </div>
      </>
    );
  }
}
export default ContentPP;
