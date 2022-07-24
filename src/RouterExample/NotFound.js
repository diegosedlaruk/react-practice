import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.js';

//Error 404, rutas a ninguna parte.
class NotFound extends Component {
    render(){
        //{this.props.history.location.state.from.pathname}
        return(
            <div className="NotFound-App">
                <div className="NotFound-Header">
                    <div clasName="NotFound-lapp-Header">
                        <h1> Componente No encontrado</h1>
                    </div>
                    <div>
                        No se puede acceder a la página:&nbsp;&nbsp;
                        <Link to="/">Volver</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;