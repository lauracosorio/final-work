import React, { Component } from 'react';
import { data } from '../Utils/mocks/data';
import Configuracion from './Configuracion';

class ConfiguracionP extends Component {
    render() {
        return (
            <div id="Configuracion">
               <Configuracion 
               dataConfiguracion= {data.configuracion}
               />
                </div>
                            
                      
        );
    }

}
export default ConfiguracionP;