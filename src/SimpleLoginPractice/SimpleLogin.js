import React from 'react';
import { connect } from 'react-redux';
import { validateUserAsync, createUserAsync } from './actions';

class SimpleLogin extends React.Component {

    validate = (e) => {
        e.preventDefault();
        this.setState ({
          login : this.refs.userInput.value,
          password: this.refs.passwordInput.value
        })
        this.props.validateUser(this.state);
      }


    render(){
        return(
            <div>
                <div>
                    <h1>Usuario</h1>
                    <input ref="userInput"></input>
                </div>
                <div>
                    <h1>Contraseña</h1>
                    <input type="password" ref="passwordInput"></input>
                    <div>
                        <input type="submit" value="Ingresar" onClick={this.validate}/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state, props){
    console.log("Simple login state to props", state)
    return {
        user: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        validateUser : (user) => dispatch (validateUserAsync (user)),
        createUser: (user) => dispatch (createUserAsync (user)),
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (SimpleLogin);