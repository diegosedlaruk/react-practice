/**
import React, {Component} from 'react';

class TituloAPArtirDePropertie extends Component {
    render(){
        return(
        <header className="Application-Header">
            <img src={this.props.logo} className="logo-Application-header" alt="logo"/>
            <h1 className="titulo-App-header"> Es es el titulo</h1>
        </header>
        );
    }
}
 */
import React, {Component} from 'react';

export default function TituloAPArtirDePropertie ({logo, title = 'Acá va el titulo'}) {
    return(
        <header className="Application-Header">
            <img src={logo} className="logo-Application-header" alt="logo"/>
    <h1 className="titulo-App-header"> {title}</h1>
        </header>
    ); 
}