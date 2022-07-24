import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

//Componente encargado de probar los enlaces 
class Default extends Component {
    render(){
        return(
            <div className="Default-App">
                <div className="Default-header">
                    <div className="Defatul-lapp-header">
                        <h1> Componente Default </h1>
                    </div>
                    <div>
                        <header><h1>Estos ejercicios son propios de Routing</h1></header>
                        <Link to="/"> Home </Link> |
                        <Link to="/about"> About </Link> |
                        <Link to="/nowhere"> Faulty link </Link> |
                        <Link to="/category/movies"> Category: movies </Link> |
                        <Link to="/category/fail"> Category: fail (va a redireccionar)</Link> |
                        <Link to="/sample/42/isacc"> Sample: 2 parámetros </Link> |
                        <Link to="/sample/0/fail"> Sample: fail (va a redireccionar)</Link> |
                    </div>
                    <br/>
                    <div>
                        <header><h1>Ejercicios de Práctica</h1></header>
                        <Link to="/defaultApp"> Componente React default</Link> | 
                        <Link to="/letVariablesSimple"> Declarar variables let y usarlas en Render </Link> | 
                        <Link to="/variablesConst"> Declarar Const y usarlas en Render </Link> | 
                        <Link to="/condicionales"> Condicionales </Link> | 
                        <Link to="/condicionalesDos"> Condicionales Dos</Link> | 
                        <br/>
                        <Link to="/bucleFor"> Bucle For </Link> | 
                        <Link to="/bucleForDos"> Bucle For Dos</Link> | 
                        <Link to="/javaScriptEnHtml"> Javascript en html </Link> | 
                        <Link to="/estilosPropiosCss"> Estilos propios Css </Link> | 
                        <Link to="/propertiesExample"> Properties de un componente </Link> |
                        <Link to="/cambioEstados"> Cambios de estados </Link> |
                        <Link to="/ciclosDeVida"> Ciclos de vida </Link> |
                        <br/>
                        <Link to="/importacionFichero"> Importacion componente externo </Link> |
                        <Link to="/ficheroDos"> División de componentes, clases importadas mejor practica </Link> |
                        <Link to="/seleccionMultiple"> Seleccion Multiple </Link> |
                        <Link to="/radioCheckbox"> Radio y Checkbox </Link> |
                        <br/>
                        <Link to="/formularioLogin"> Formulario Login </Link> |
                        <Link to="/formularioLoginConRef"> Formulario Login con Ref </Link> |
                        <Link to="/formularioValidacionEstado"> Formulario con validacion de estado </Link> |
                        <Link to="/reactClock"> React Hook: Clock </Link> |
                        <Link to="/reactContext"> React Context </Link> |
                    </div>
                    <div>
                        <header><h1>Ejercicios de Redux</h1></header>
                        <Link to="/reduxPractice"> Redux, one reducer </Link> |
                        <Link to="/reduxPracticeLogin"> Login practice </Link> |
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;