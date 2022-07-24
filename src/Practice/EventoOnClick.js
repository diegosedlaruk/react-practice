import React , {Component} from 'react';

/////////////////////////////////////////////////////EVENTOS////////////////////////////////////////////////////
//Esto, no está del todo bien, porque se ejecuta al cargar la página. Lo ideal es usar Arrow function.
// No: onClick={alert('cambiar esto por un arrow function')}
class EventoOnClick extends React.Component {

    eventoConArrow = (e) => {
      e.preventDefault();
      alert('Esto es una referencia a un evento con arrow.!!!! => => =>');
    }
  
    eventoSinArrow (e) {
      e.preventDefault();
      alert('Este alert es de una función sin arrow !=> ');
    }
  
    render(){
      return(
        <div>
          <button onClick={() => alert('It Works')}>
            Texto Libre
          </button>
  
          <br/>
  
          <button onClick={this.eventoConArrow}>
            Boton que referencia a un método con arrow.
          </button>
  
          <br/>
  
          <button onClick={(e) => this.eventoSinArrow(e)}>
            Boton que en si mismo tiene un arrow que llama a una funcion sin arrow.
          </button>
  
          <br/>
  
          {/** A veces las funciones necesitar mandarse a sí mismo para obtener alguna referencia
           * o propiedad de la clase, por lo que se pasa la palabra this con el método bind
          */}
          <button onClick={this.eventoConArrow.bind(this)}>
            Esto es pasan el this, osea el botón y bindearlo
          </button>
        </div>
      );
    }
  }

  export default EventoOnClick;