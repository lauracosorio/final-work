import React, { Component } from "react";
import { data } from "../Utils/mocks/data";
import Content from "./Content.jsx"

class ContentPP extends Component {
  render() {
    return (
      <div id="Content">
        <Content
        dataCarousel = {data.Carousel}
        Carousel = {data.Carousel2}
        dataBox = {data.box}
        dataSpan = {data.span}
        dataBook = {data.book} />
      </div>
    );
  }
}
export default ContentPP;
