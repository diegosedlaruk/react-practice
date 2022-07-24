import React, {Component} from 'react';
import logo from '../logo.svg';
///Propiedades y estados de los componentes REACT.

//Creamos un componente llamado AppDos y gestionamos sus properties de la siguiente manera:
class PropertiesExample extends Component {

    static defaultProps = {
      title : 'Dragon Ball Z',
      text : 'Goku',
      version : 0,
      hijos : ['gohan'],
      fun : this.poder
    }
  
    poder  () {
      alert('kame hame ha');
    }
  
  
    render(){
      const funcion = this.props.fun;
      const text = this.props.text;
      const version = this.props.version;
  
      return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> {this.props.title} v{version}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p> Texto: {text}</p>
          <button onClick={funcion}>
            {this.props.text}
          </button>
        </header>
      </div>
      );
    }
  }

  export default PropertiesExample;