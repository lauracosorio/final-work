import React, { Component } from 'react';
import { data } from '../Utils/mocks/data';
import Footer from "./Footer.jsx"

class FooterPP extends Component {
    render() {
        return (
            <div id="Footer">
               <Footer 
               dataFooter = {data.Footer}/>
                </div>
                            
                      
        );
    }

}
export default FooterPP;