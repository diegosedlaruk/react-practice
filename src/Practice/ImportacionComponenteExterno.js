import React, {Component} from 'react';
import TituloAPArtirDePropertie from './TituloAPArtirDePropertie';
import ParrafoConFuncionEnPropertie from './ParrafoConFuncionEnPropertie';
import logo from '../logo.svg';

////////////////////////// DIVISION DE COMPONENTES ///////////////////////////////////
class ImportacionFichero extends Component {
    showMsg (msg){
      alert ('This button works: ' + msg);
    }
    render(){
      return(
        <div className="ImportacionFichero">
          <TituloAPArtirDePropertie logo={logo}/>
          <ParrafoConFuncionEnPropertie shMsg={this.showMsg}/>
        </div>
      );
    }
  }
  
  export default ImportacionFichero;