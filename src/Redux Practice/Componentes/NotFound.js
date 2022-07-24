import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class NotFound extends Component {
    render () {
        return (
            <div className="NotFound-App">
                <div className="NotFound-header">
                    <div className="NotFound-lapp-header">
                        <h1> Componente Not Found </h1>
                    </div> 
                    <div>
                        Esa página no se pudo encontrar
                        <Link to="/">Volver</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;