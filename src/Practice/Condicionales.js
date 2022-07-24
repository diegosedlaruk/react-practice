import React, {Component} from 'react';

//Condicionales
//Condicional en el return
class CondicionalesExample extends React.Component {
  
    pepe={valor:20, otroValor:20}
    pepeDos={valor:500}
  
    render(){
  
      if(this.pepe.valor >= this.pepe.otroValor && this.pepeDos.valor == 1000)  {
        return (
          <div>
            <h1>
              Esto sería por el caso de verdadero
            </h1>
              <p>
                Con su subtitulo
              </p>
          </div>
        )
      } else {
        return (
          <div>
            <h1> esto sería si viniese por el caso de falso</h1>
            <p>con su titulo pequeño</p>
          </div>
        )
      }
    }
  }

  export default CondicionalesExample;