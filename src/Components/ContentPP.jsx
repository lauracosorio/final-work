import React, { Component } from "react";
import { data } from "../Utils/mocks/data";

import ContentPagPrincipal from "./ContentPagPrincipal.jsx";
import HeaderPP from "./HeaderPP.jsx"

class ContentPP extends Component {
  render() {
    return (
      <>
      
      <div id="Content">
      <HeaderPP/>
        <ContentPagPrincipal
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
