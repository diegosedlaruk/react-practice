
import React, {Component} from 'react';

/// Campos controlados completos check box y radio.
class RadioCheckBox extends Component {
  
    handleChange = (event) => {
      const target = event.target;
      let value = target.value;
      if (target.type === 'checkbox' && !target.checked){
        value = '';
      }
      const name = target.name;
      this.setState ({
        [name] : value
      });
    }
  
    constructor(props){
      super(props);
      this.state = {
        username : '', password: '', description: '', maritalState: '', s_primary: false, s_bachelor: false,
        s_master: false, sex: ''
      }
    }
  
    render(){
      return(
        <div className="RadioCheckBox-App">
          <header className="RadioCheckBox-Header">
            <h1 className="RadioCheckBox-Title">Login Complejo</h1>
          </header>
          <div className="RadioCheckBox-Form">
            <form onSubmit={this.handleSubmit}>
              <div><label>Nombre de Usuario</label></div>
              <div><input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
              <div><label>Contraseña</label></div>
              <div><input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
              <div><label>Descripcion</label></div>
              <div><textarea name="description" value={this.state.description} onChange={this.handleChange}/></div>
              <div><label>Estado Civil</label></div>
              <div><select name="estadoCivil" value={this.state.maritalState}
               onChange={this.handleChange}> 
                      <option value="1">Soltera/o</option>
                      <option value="2">Divorciada/o</option>
                      <option value="3">Viuda/o</option>
                      <option value="4">Casada/o</option>
              </select></div>
              <div><label>Estudios</label></div>
              <div><input type="checkbox" name="s_primary" id="s_primary" value="s_primary" 
                    checked={this.state.s_primary === 's_primary'} onChange={this.handleChange}/>
                    <label htmlFor="s_primary">Primario</label></div>
  
              <div><input type="checkbox" name="s_bachelor" id="s_bachelor" value="s_bachelor" 
                  checked={this.state.s_bachelor === 's_bachelor'} onChange={this.handleChange}/>
                  <label htmlFor="s_bachelor">Bachiller</label></div>
  
              <div><input type="checkbox" name="s_master" id="s_master" value="s_master" 
                  checked={this.state.s_master === 's_master'} onChange={this.handleChange}/>
                  <label htmlFor="s_master">Doctorado</label></div>
  
              <div><label>Sexo</label></div>
              <div><input type="radio" name="sex" value="male" id="male" 
                      checked={this.state.sex === 'male'} onChange={this.handleChange}/>
                      <label htmlFor="male">Masculino</label></div>
              <div><input type="radio" name="sex" value="female" id="female" 
                      checked={this.state.sex === 'female'} onChange={this.handleChange}/>
                      <label htmlFor="female">Femenino</label></div>
              <div><input type="submit" value="Login"/></div>
            </form>
            <div>{Object.keys (this.state).map ((key) => 
                  <div key={key}><b>{key}:</b> {this.state[key]} </div>)}
                  {this.state.sex} - {this.state.s_master}
            </div>
          </div>
        </div>
      );
    }
  }

  export default RadioCheckBox;