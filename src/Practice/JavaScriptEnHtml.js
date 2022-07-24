import React , {Component} from 'react';

class JavaScriptEnCualquierLado extends React.Component {
    render(){
      return (
        <div>
          <h1> Acá seguido tenemos una funcion javascript </h1>
          { 
            console.log('Este texto surgió de una porción de código java script'),
            alert('Esta porción java script salió desde adentro de un html')
          }
        </div>
      );
    }
  }

  export default JavaScriptEnCualquierLado;