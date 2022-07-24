import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

//Este componente solamente permite volver al inicio.
class About extends Component {
    render(){
        return(
            <div className="About-App">
               <div className="About-Header">
                   <div className="About-lapp-title">
                        <h1>Componente About</h1>
                   </div>
                   <div>
                       Esto es todo lo que este componente sabe hacer&nbsp;&nbsp;&nbsp;
                       <Link to="/">Volver</Link>
                   </div>
               </div>
            </div>
        );
    }
}

export default About;