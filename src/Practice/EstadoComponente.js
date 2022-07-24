import React, {Component} from 'react';
import logo from '../logo.svg';

//////////////////////////////// ESTADOS /////////////////////////////
//Al modificar un estado, automáticamente se llama a render(), de forma
// tal que se vea impactado el cambio en la interfaz.

class CambioDeEstado extends Component {

    constructor (props) {
      super(props);
      this.state = {
        title : 'Default',
        time: new Date ().toLocaleTimeString (),
        number: 0,
        numbers: []
      }
    }

    changeState () {
      let number = Math.round (Math.random() * 4);
      let numbers = this.state.numbers;
      numbers.push(number);

      this.setState({
        time: new Date().toLocaleTimeString(),
        numbers: numbers,
        number: number,
        title: ((number % 2 === 0) ? 'Es par' : 'No es par')
      })
      console.log('changeState>', this.state);
    }

    render() {
      console.log ('Se llamo a render, con este estado: ', this.state)
      const colors = ['red', 'yellow', 'green', 'blue', 'orange']
      const color = colors[this.state.number]
      
      return(
        <div className="CambioDeEstado" style={{backgroundColor: color}}>
          <header className="CabioDeEstado-header">
            <img src={logo} className="CambioDeEstado-logo" alt="logo"/>
            <h1 className="CambioDeEstado-title">
              {this.state.title} - {this.state.number}
            </h1>
          </header>
          <div className="CambioDeEstado-intro">
            <div>{this.state.time}</div>
              Presiona el botón para cambiar el estado
            <div>
              <button onClick={() => this.changeState()}>
                Cambiar Estado
              </button>
            </div>
            <div>
              Generar Numeros
                <ul>
                  {
                    this.state.numbers.map ((x) => (
                    <li>{x}</li>
                     ))
                  }
                </ul>
            </div>
          </div>          
        </div>
      );
    }
}

export default CambioDeEstado;