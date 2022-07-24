import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showName, changeName} from './Action';
import logo from '../logo.svg';
import '../App.css';

/**
 * Para hacer uso de redux debemos instalarlo:
 * 
 * Para instalar la versión estable:
 *       npm i -S redux
 *   Normalmente también vas a querer usar la conexión a React y las herramientas de desarrollo.
 *
 * npm i -S react-redux
 * npm i -D redux-devtools
 * 
 * Esto lo hice después y me funcionó mejor:
 * npm install --save redux react-redux
 */

class ReduxApp extends Component {
    change = () => {
        console.log ('Changed. ');
        this.props.appChangeName (this.refs.name.value);
    }

    render(){
        return(
            <div className="ReduxApp">
                <header className="ReduxApp-Header">
                    <img src={logo} className="ReduxApp-Logo" alt="logo"/>
                    <img src={logo} className="ReduxApp-Logo" alt="redux logo"/>
                    <h1 className="ReduxApp-Title">{this.props.appName}</h1>
                </header>
                <p className="ReduxApp-Intro">
                    <input type="text" ref="name"/>
                    <button onClick={() => this.change()}>
                        Cambiar Store
                    </button>
                </p>
            </div>
        );
    }
}

function mapStateToProps (state, props) {
    return {
        appName: state.name
    }
}

function mapDispatchToProps (dispatch) {
    return {
        appShowName: () => dispatch (showName ()),
        appChangeName: (data) => dispatch (changeName(data))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (ReduxApp)