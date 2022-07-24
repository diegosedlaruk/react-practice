import React from 'react';
import '../App.css';
import HeaderContext from './HeaderContext';
import FooterContext from './FooterContext';
import {OurContext, defaultValues} from './OurContext';

class EjemploContexto extends React.Component {
    render() {
        return(
            <div className="Ejemplo-Contexto-App">
                <OurContext.Provider value={defaultValues}>
                    <HeaderContext/>
                    <div>Este es un ejemplo de contenido</div>
                    <FooterContext/>
                </OurContext.Provider>
            </div>
        );
    }
}

export default EjemploContexto;