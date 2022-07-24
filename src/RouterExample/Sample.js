import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../App.js';

//Este componente hace una redirección por programación, es decir, que por ejemplo, 
// al apretar un botón se fuerce a que se vaya a otra ruta.
class Sample extends Component {
    goBack = () => {
        this.setState ({redirectToDefault: true});
    }
    constructor(props){
        super(props);
        this.state = {redirectToDefault: false};
    }
    render(){
        const id = this.props.match.params.id;
        const name = this.props.match.params.name;
        if(this.state.redirectToDefault){
            return <Redirect to="/"/>;
        }
        return(
            <div className="Sample-App">
                <div className="Sample-Header">
                    <div className="Sample-lapp-Header">
                        <h1>Componente Sample</h1>
                    </div>
                    <div>
                        Parametros pasados: {id} y {name}
                        { id === '0' ?
                            (
                            <Redirect to="/404"/>
                            ) : (
                                <div>El Id no es cero </div>
                            )
                        }
                        <button onClick={this.goBack}> Volver </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sample;