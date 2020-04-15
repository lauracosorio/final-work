import React from "react";
import HeaderPP from "./HeaderPP.jsx";
import FooterPP from "./FooterPP.jsx";
import Content from "./ContentPP.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registrese from "./Registrese.jsx";

function Layout(props) {
  return (
    <>
      {/* <BrowserRouter>
        <Switch>
          <HeaderPP>
            {" "}
            <Route path="/Registrese" component={Registrese} /> */}
         
          <HeaderPP/>
          {props.children}
          <FooterPP />
    {/* //     <Switch>
    //   </BrowserRouter> */}

      
    </>
  );
}

export default Layout;
