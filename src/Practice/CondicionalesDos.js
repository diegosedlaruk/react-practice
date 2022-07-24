import React, {Component} from 'react';

// Sentencia If-else-switch en el render
class CondicionalesExampleDos extends React.Component {
    variable = {valor:0, otroValor:300}
    render(){
  
      switch(this.variable.otroValor){
        case 100 : 
          return (<div> <h1>Acá entro al primer switch</h1></div>);
        case 200 : 
          return (
            <div>
            <h1>  Acá empieza a validar el primer condicional </h1>
            {
              this.variable.valor > 90 && 
                <p> acá estaría entrando por el valor verdadero</p>
            }
            <h2> Acá empieza a validar el segundo condicional</h2>
            {
              this.variable.valor >= 100 ? ( <p>Caso verdadero segundo condicional</p>) : (<p>caso falso segundo condicional</p>)
            }
          </div>
        );
        default :
          return (<div> <h3>vino por default</h3></div>);
      }
    }
  }

  export default CondicionalesExampleDos;