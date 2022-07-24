import React, {Component} from 'react'; 

//Ejemplo de acceso a campos por REF.
//Si un elemento, tiene una propiedad ref, se le puede acceder a el a traves de this.refs.nombre_atributo.value

class EjemploFormularioLogin extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
      this.setState ({
        login : this.refs.login.value,
        password: this.refs.password.value
      })
    }
  
    constructor(props){
      super(props);
      this.state = {login : '', password : ''}
    }
  
    render(){
      return(
        <div className="LoginEjemplo-Class">
          <header className="LoginEjemplo-Header">
            <h1 className="LoginEjemplo-Titulo"> Formulario de Login</h1>
          </header>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div><label>Login</label></div>
              <div>
                <input type="text" ref="login"/>
              </div>
              <div><label>Contraseña</label></div>
              <div>
                <input type="password" ref="password"/>
              </div>
              <div>
                <input type="submit" value="Login"/>
              </div>
            </form>
          </div>
         <div>Login: {this.state.login}, Contraseña:{this.state.password}</div>
        </div>
      );
    }
  }
  
  export default EjemploFormularioLogin;