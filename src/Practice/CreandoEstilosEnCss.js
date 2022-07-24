import React , {Component} from 'react';
import '../App.css';

//Utilizando estilos definidos en App.css
class Estilos extends Component {
    render(){
      return (
        <div>
          <header>
            <h1>
              Styled Component
            </h1>
          </header>
          <main>
            <h2 id="supertitle"> Main content</h2>
            {/** Por jerarquía, regular  Dos y Tres aplican background, pero el background 
             * que se aplicará será el que dentro del css definido, es el que está mas debajo
            */}
            <p className="regularDos regularTres regular">Esto es un componente fachero</p>
          </main>
        </div>
      );
    }
  }

  export default Estilos;