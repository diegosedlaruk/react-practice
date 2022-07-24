import React, {Component} from 'react';
//Ejemplo de Validación de Formulario en el state

class FormWithStateValidation extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState = ({
        login: '',
        password: '',
        loginValid: true,
        passwordValid: true
      })
    }
    loginCheck = (event) => {
      const target = event.target;
      this.setState ({
        [target.name]: target.value,
        loginValid: this.isLoginValid (target.value)
      });
    }
    passwordCheck = (event) => {
      const target = event.target;
      this.setState ({
        [target.name]: target.value,
        passwordValid: this.isPasswordValid (target.value)
      });
    }
    isLoginValid = (login) => (login.length > 2);
    isPasswordValid = (password) => (password.length > 7);
    handleSubmit = (event) => {
      event.preventDefault();
      if(!this.isLoginValid(this.state.login) || !this.isPasswordValid(this.state.password)){
        alert('Los campos están incorrectos.');
      }else{
        alert('Los campos están correctos.');
      }
    }
    constructor(props){
      super(props);
      this.state = {
        login: '', password: '', loginValid: true, passwordValid: true
      }
    }
    render(){
      console.log (this.state.loginValid);
      let loginError = (this.state.loginValid)
        ? ''
        : <div className="Login-Error">Login no válido</div>;
      let passwordError = (this.state.passwordValid)
        ? ''
        : <div className="Password-Error">Password Inválido</div>;
      return(
        <div className="Form-With-Valid">
          <header className="Form-Valid">
            <h1 className="Form-With-Valud-Title">Formulario Login With Valid</h1>
          </header>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div><label>Credenciales</label></div>
              {loginError}
              <div>
                <input type="text" name="login" onBlur={this.loginCheck}></input>
              </div>
              <div><label>Contraseña</label></div>
              {passwordError}
              <div>
                <input type="password" name="password" onBlur={this.passwordCheck}></input>
              </div>
              <div>
                <input type="submit" value="Login"></input>
              </div>
            </form>
          </div>
          <div>
          <div>Login: {this.state.login}, password: {this.state.password}</div>
          </div>
        </div>
      )
    }
  }
  
  export default FormWithStateValidation;