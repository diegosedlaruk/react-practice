import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux Practice/Reducer';
import ReduxApp from './Redux Practice/ReduxApp'
import anotherReducer from './Redux Practice/Reducers'
import ReduxCrudCompleto from './Redux Practice/ReduxCrudCompleto';
import thunk from 'redux-thunk';

const textoEjemplo = "Dragoon Ball Z";
const decirChau = () => {
    alert('kame hame ha');
};



//Esto se usa para pasar parámetros a los componentes.

ReactDOM.render (
    <Router>
        <App/>
    </Router>, document.getElementById ('root'));
 
//ReactDOM.render(<App title={textoEjemplo} version={5} fun={decirChau}/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 
const store = createStore (reducer);
//Si se quiere probar el store, descomentar esta linea.
ReactDOM.render (
    <Provider store={store}>
        <Router>
            <ReduxApp/>
        </Router>
    </Provider>, document.getElementById ('root'));
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * 
 * Esto es para usar redux pero yendo a memoria, se pueden guardar datos, pero no es posible 
 * utilizarlos una vez que se cierra el navegador, podría usarse como una especie de contexto.
 * 
const anotherStore = createStore (anotherReducer);
ReactDOM.render(<Provider store={anotherStore}>
    <Router>
        <ReduxCrudCompleto/>
    </Router>
</Provider>, document.getElementById('root'));
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** 
 * ESTO ES REDUX THUNK, SIRVE PARA HACER LLAMADAS A API REST QUE IMPACTEN EN UNA BASE DE DATOS POR EJEMPLO.
 * 
 * yarn add redux-thunk -> Correr esto en la terminal para instalar redux thunk
 * 
*/
/*
const logger = store => next => action => {
    console.group (action.type)
    console.info ('dispatching', action)
    let result = next (action)
    console.log ('next state', store.getState())
    console.groupEnd (action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ||
    compose
    const store = createStore (
        anotherReducer,
        composeEnhancers (
            applyMiddleware (thunk, logger)
        )
    )
 
ReactDOM.render (<Provider store={store}>
    <Router>
        <ReduxCrudCompleto/>
    </Router>
</Provider>, document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
