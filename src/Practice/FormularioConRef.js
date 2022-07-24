import React, {Component} from 'react';

//Formulario no controlado más Copleto -> utilización de REF
// this.refs.form.studies -> esto permite acceder a los elementos a través 
// de esa referencia.
class EjemploFormularioConRef extends Component {

    handleChange = (event) => {
      console.log('Imprimiendo: ', this.refs.maritalState.value)
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      let studies = [];
      for (let value of this.refs.form.studies){
        if (value.checked){
          studies.push(value.value);
        }
      }
      this.setState ({
        username: this.refs.username.value,
        password: this.refs.password.value,
        description: this.refs.description.value,
        maritalState: this.refs.maritalState.value,
        studies: studies,
        sex: this.refs.form.sex.value
      })
    }
    constructor (props){
      super(props);
      this.state = {
        username: '', password: '', description: '',
        maritalState: '', studies: [], sex: ''
      }
    }
  
    render(){
      return(
        <div className="App-Formulario-Con-Ref">
          <header className="Header-Formulario-Con-Ref">
            <h1 className="Titulo-Formulario-Ref">Formulario de Logeo con Ref</h1>
          </header>
          <div className="Form-Formulario-Ref">
            <form onSubmit={this.handleSubmit} ref="form">
              <div><label>Nomre de Usuario</label></div>
              <div>
                <input type="text" ref="username"/>
              </div>
              <div><label>Contraseña</label></div>
              <div>
                <input type="password" ref="password"/>
              </div>
              <div><label>Descripción</label></div>
              <div>
                <textarea ref="description"/>
              </div>
              <div><label>Esado Civil</label></div>
              <div>
                <select ref="maritalState" onChange={this.handleChange}>
                  <option value="1">Soltera/o</option>
                  <option value="2">Casada/o</option>
                  <option value="3">Viuda/o</option>
                  <option value="4">Divorciada/o</option>
                </select>
              </div>
              <div><label>Estudios</label></div>
              <div>
                <input type="checkbox" name="studies" ref="s_primary" value="primary" id="s_primary"/>
                <label htmlFor="s_primary">Primario</label>
              </div>
              <div>
                <input type="checkbox" name="studies" ref="s_bachelor" value="bachelor" id="s_bachelor"/>
                <label htmlFor="s_bachelor">Secundario</label>
              </div>
              <div>
                <input type="checkbox" name="studies" ref="s_master" value="master" id="s_master"/>
                <label htmlFor="s_master">Universiario</label>
              </div>
              <div>
                <div><label>Sexo</label></div>
                <div><input type="radio" name="sex" value="male" id="male"/>
                    <label htmlFor="male">Masculino</label></div>
                <div><input type="radio" name="sex" value="female" id="female"/>
                    <label htmlFor="female">Femenino</label></div>
              </div>
              <div>
                <input type="submit" value="Login"/>
              </div>
            </form>
            <div>
              {
                Object.keys (this.state).map ((key) => 
                  <div key={key}> <b>{key}:</b> {this.state[key]}</div>)
              }
            </div>
          </div>
        </div>
      );
    } 
  }
  
  export default EjemploFormularioConRef;