import React from "react";
import FooterPP from "./FooterPP.jsx";

function Layout(props) {
  return (
    <>
      <FooterPP />
      {props.children}
    </>
  );
}

export default Layout;
