/**
import React, {Component} from 'react';

class ParrafoConFuncionEnPropertie extends Component {
    render(){
        return(
            <p className="Parrafo-Intro">
                Para comenzar, edite el <code> src/App/App.jd</code>, grabe y recarge la página.
                <button onClick={() => this.props.shMsg('Hola')}> Presione Aquí </button>

            </p>
        );
    }
}
 */
import React from 'react';

export default function ParrafoConFuncionEnPropertie ({shMsg}) {
    return(
        <p className="Parrafo-Intro">
            Para comenzar, edite el <code> src/App/App.jd</code>, grabe y recarge la página.
            <button onClick={() => shMsg('Por acá pasamos texto a mostrar en el children!!!!')}> Presione Aquí </button>

        </p>
    );
}