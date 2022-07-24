import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class About extends Component {
    render() {
        return(
            <div className="About-App">
                <div className="About-Header">
                    <h1 className="About-Title">ESTE ES EL TITULO DE ABOUT REACT REDUX CRUD</h1>
                </div>
                <div>
                    &copy; Pello Altadill - http://pello.io
                    <Link to="/">Volver</Link>
                </div>
            </div>
        );
    }
}

export default About;