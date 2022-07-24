import React, {Component} from 'react';

import { Route, Link, Switch } from 'react-router-dom';
import Default from './RouterExample/Default';
import About from './RouterExample/About';
import Category from './RouterExample/Category';
import NotFound from './RouterExample/NotFound';
import Sample from './RouterExample/Sample';
import DefaultApp from './Practice/DefaultApp';
import LetVariables from './Practice/LetVariables';
import VariablesConst from './Practice/VariablesConst';
import Condicionales from './Practice/Condicionales';
import CondicionalesExampleDos from './Practice/CondicionalesDos';
import BucleFor from './Practice/BucleFor';
import BucleForDos from './Practice/BucleForDos';
import JavaScriptEnCualquierLado from './Practice/JavaScriptEnHtml';
import Estilos from './Practice/CreandoEstilosEnCss';
import PropertiesExample from './Practice/PropertiesExample';
import CambioDeEstado from './Practice/EstadoComponente';
import EjercicioCicloVida from './Practice/EjercicioCicloVida';
import ImportacionFichero from './Practice/ImportacionComponenteExterno';
import FicheroDos from './Practice/FicheroDos';
import SeleccionMultiple from './Practice/SeleccionMultiple';
import RadioCheckBox from './Practice/RadioCheckbox';
import EjemploFormularioLogin from './Practice/FormularioLogin';
import EjemploFormularioConRef from './Practice/FormularioConRef';
import FormWithStateValidation from './Practice/FormularioConValidacionEstado';
import ReactHookClock from './Practice/ReactHookClock';
import ReactContext from './Practice/EjemploContexto';
import ReduxPractice from './Practice/ReduxPractice';
import SimpleLoginRedux from './Practice/SimpleLoginRedux';

//Creamos las clases .js que vamos a ir importando: Default.js, NotFound.js, Sample.js, About.js, Category.js.
//Las creamos dentro de la carpeta RouterExample en el mismo nivel.


//Para navegar de un componente a otro es necesario hacer uso de React Router
// en index.js -> import react-router-dom y se indica que se va a usar el rounting alrededor de un componente.
// Para eso debemos instalar:
//                            -   npm i react-router-dom
//                            -   npm install --save react-router-dom



class EjemploRouting extends Component {
  render(){
    return(
      <div className="App-Routing">
        <div className="Header-Routing">
          <div className="lapp-Header-Routing">
            <h1> Ejemplo de Routing</h1>
          </div>
          <div>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to="/sample">Sample</Link> |
          </div>
          <Switch>
            <Route exact path="/" component={Default}/>
            <Route exact path="/404" component={NotFound}/>
            <Route path="/sample/:id/:name" component={Sample}/>
            <Route exact path="/about" component={About}/>
            <Route path="/category/:category" component={Category}/>
            <Route path="/defaultApp" component={DefaultApp}/>
            <Route path="/letVariablesSimple" component={LetVariables}/>
            <Route path="/variablesConst" component={VariablesConst}/>
            <Route path="/condicionales" component={Condicionales}/>
            <Route path="/condicionalesDos" component={CondicionalesExampleDos}/>
            <Route path="/bucleFor" component={BucleFor}/>
            <Route path="/bucleForDos" component={BucleForDos}/>
            <Route path="/javaScriptEnHtml" component={JavaScriptEnCualquierLado}/>
            <Route path="/estilosPropiosCss" component={Estilos}/>
            <Route path="/propertiesExample" component={PropertiesExample}/>
            <Route path="/cambioEstados" component={CambioDeEstado}/>
            <Route path="/ciclosDeVida" component={EjercicioCicloVida}/>
            <Route path="/importacionFichero" component={ImportacionFichero}/>
            <Route path="/ficheroDos" component={FicheroDos}/>
            <Route path="/seleccionMultiple" component={SeleccionMultiple}/>
            <Route path="/radioCheckbox" component={RadioCheckBox}/>
            <Route path="/formularioLogin" component={EjemploFormularioLogin}/>
            <Route path="/formularioLoginConRef" component={EjemploFormularioConRef}/>
            <Route path="/formularioValidacionEstado" component={FormWithStateValidation}/>
            <Route path="/reactClock" component={ReactHookClock}/>
            <Route path="/reactContext" component={ReactContext}/>
            <Route path="/reduxPractice" component={ReduxPractice}/>
            <Route path="/reduxPracticeLogin" component={SimpleLoginRedux}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default EjemploRouting;
