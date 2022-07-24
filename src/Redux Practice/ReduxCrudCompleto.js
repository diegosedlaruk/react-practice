
import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import reduxLogo from '../logo.svg';
import '../App.css';
/** 
 * Este se usa para el redux, yendo a memoria, descomentar y comentar el otro.
 * import Notes from './Componentes/Notes';
*/
import Notes from '../Redux Api Rest Practice/Components/Notes';
import NoteForm from './Componentes/NoteForm';
import NotFound from './Componentes/NotFound';
import About from './Componentes/About';

class ReduxCrudCompletoApp extends Component {
    render() {
        return (
            <div className="ReduxCrudCompletoApp">
                <div className="ReduxCrudCompletoApp-Header">
                    <h1> React Redux CRUD ejemplo</h1>
                    <img src={reduxLogo} className="ReduxCrudCompletoApp-Logo" alt="redux logo"/>
                </div>
                <div>
                    <Link to="/reduxPractice/">View Notes</Link> | 
                    <Link to="/reduxPractice/notes/new">New Note</Link> | 
                    <Link to="/reduxPractice/about">About</Link> |
                </div>
                <Switch>
                    <Route exact path='/reduxPractice/' component={Notes}/>
                    <Route exact path='/reduxPractice/notes/new' component={NoteForm}/>
                    <Route exact path='/reduxPractice/notes/edit/:id' component={NoteForm}/>
                    <Route exact path='/reduxPractice/404' component={NotFound}/>
                    <Route exact path='/reduxPractice/notes/:id' component={Notes}/>
                    <Route exact path='/reduxPractice/about' component={About}/>
                </Switch>
            </div>
        );
    }
}

export default ReduxCrudCompletoApp;