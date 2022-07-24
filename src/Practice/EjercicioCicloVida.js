import React, {Component} from 'react';

// Ciclo de vida de un componente React.

// Montaje del componente, se ejecuta cuando el componente se crae y se inserta en el DOM.
// constructor, componentWillMount, render, componentDidMount

//Actualización del componente, cuando se producen cambios de estado o de propiedades.
//componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate

//Desmontaje del componente, cuando se elimina el DOM. 
// componentWillUmount

// metodos que permiten llevar a cabo cambios directos en el componente:
// setState, forceUpdate


//Constructor
/**
 *    constructor (props) {
 *      
 *      super();  
 *      this.state = {nombre: valor, otroNombre: props.otroValor};
 * 
 *    }
 * 
 */

 // componentWillMount -> Este método se llama justo antes de que render se invoque y se muestre el componente.
 //                        Si se cambia el estado en este punto, no se provoca una nueva renderización.
 // Esto conviene reemplazarlo por la inicialización previa al constructor, o utilizar el mismo constructor.

 // render, método mínimo que debe tener todo componente, generalmente retorna código JSX.

 // componentDidMount -> Se llama luego que el componente se muestra, post a render(). Aquí por ejemplo se puede
 // aprovechar para lanzar peticiones a la red en oara cargar datos en componentes, si esos componentes modifican
 // estado, se volverá a llamar al render.

 // componentWillReceiveProps -> Se llama cuando el componente reciba nuevas propiedades. Sirve por ejemplo, cuando
 // el estado del componente depende de las properties, y se necesita modificarlo.

 /**
  * render () {
  *   return (
  *     <TableComponent ...>
  *     <HeaderComponent
  *       title={this.state.title}  
  *       rows={otherValue}
  *     >
  *   )
  * 
  * 
  * }
  */

  // Los mas importantes. 
  //  1) render ()
  //  2) componentDidUpdate > post actualización de componente. Acá por ejemplo se puede llamar a operaciones
  // que vayan a la red, no se llama a este método en la primer ejecución del componente.
  //  3) componentWillUmount > antes de destruirse el componente por completo se puede hacer algo. Es buen lugar para
  //  eliminar elementos del DOM, detener procesos, peticiones a la red, etc.
  //  4) setState > permite modificar el estado de un componente, y actualizar su aspecto.

  // Ejemplo de invocación

  class EjercicioCicloVida extends Component {

    constructor (props) {
      super(props);
      this.state = {
        numero: 10
      }
      console.log('Este es el constructor, mostrando propiedades', props);
      console.log('Este es el constructor, mostrando estado. ', this.state);
    }

    componentDidMount (){
      console.log('este es el componente did mount (al mostrarse). estado: ', this.state);
      console.log('este es el componente did mount (al mostrarse). propiedades: ', this.props);
    }

    componentWillReceiveProps (nextProps){
      console.log ('Se llamo al componente va a recibir propiedades. estado, props', this.state, this.props);
      console.log('Component recibirá propiedades, nextProps: ', nextProps);
    }

    //Este componente debe devolver verdadero o falso, según deba o no actualizarse el componente.
    shouldComponentUpdate (nextProps, nextState){
      console.log('debe actualizarse el componente, state, props', this.state, this.props);
      console.log('Debe actualizarse el componente, nextProp, nextState', nextProps, nextState);

      return true;
    }

    componentWillUpdate (nextProps, nextState){
      console.log('Se actualizará el componente, estado, prop', this.state, this.props);
      console.log('Se actualizará el componente con, nextProps, nextState', nextProps, nextState);
    }

    //Esto me parece que muestra el estadio y props anteriores, sería correcto poner previous props, y previous state ?
    componentDidUpdate (nextProps, nextState) {
      console.log('Se actualizó el componente, next Props, next state ', nextProps, nextState);
      console.log('Se actualizó el componente, las props quedaron, el state quedo: ', this.props, this.state);
    }

    laFuncionDeDiego () {
      console.log('Aprentando el boton');
      this.setState({ numero: Math.random()})
    }

    render(){
      console.log('Este es el render, propiedades, estado ', this.props, this.state);
      return(
        <div>
          <div>
          <header>
               VISUALIZAR LOS CAMBIOS DE ESTADOS EN LA CONSOLA.
              {<br/>}
              {<br/>, this.state.numero}
          </header>
          </div>
          <div className="EjercicioCicloVida">
            <button onClick={ () => this.laFuncionDeDiego()}>
              Actualizar
            </button>
          </div>
        </div>

      );
    }
  }

  export default EjercicioCicloVida;