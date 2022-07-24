
import React, {Component} from 'react';

///// Ejemplos con campos de selección múltiples, check box y select.

class SeleccionMultiple extends Component {
  
    handleChangeSelect = (evento) => {
      const list = evento.target.selectedOptions;
      let possessions = [];
      possessions = Object.keys (list).map (index => list[index].value);
      this.setState ({
        possessions : possessions
      });
    }
  
    handleChangeCheckbox = (evento) => {
      const target = evento.target;
      let studies = this.state.studies;
      if(target.checked){
        studies.push (target.value);
      } else {
        studies.splice (studies.indexOf (target.value), 1);
      }
      this.setState ({
        [target.name] : studies
      });
    }
  
    inArray = (element) => {
      return this.state.studies.indexOf (element) !== -1;
    }
  
    constructor (props){
      super(props);
      this.state = {
        possessions : [],
        studies : []
      }
    }
  
    render() {
      return(
        <div className="SeleccionMultiple-App">
          <header className="Header-Seleccion-Multiple">
            <h1 className="title-Seleccion Multiple">Campos de Múltiples Valores</h1>
          </header>
          <div className="Formulario-Seleccion-Multiple">
            <form onSubmit={this.handleSubmit}>
              <div><label>Posesiones</label></div>
              <div>
                <select multiple onChange={this.handleChangeSelect}>
                  <option value="101">Teléfono inteligente</option>
                  <option value="102">Tablet</option>
                  <option value="103">Computadora Personal</option>
                  <option value="104">Ipad</option>
                </select>
              </div>
              <div><label>Estudios</label></div>
              <div>
                <div><input type="checkbox" id="s_primary" value="s_primary"
                    checked={this.inArray ('s_primary')} onChange={this.handleChangeCheckbox}/>
                    <label htmlFor="s_primary">Primary</label>
                </div>
                <div>
                  <input type="checkbox" id="s_bachelor" value="s_bachelor"
                    checked={this.inArray ('s_bachelor')} onChange={this.handleChangeCheckbox}/>
                    <label htmlFor="s_bachelor"> Bachiller</label>
                </div>
                <div>
                  <input type="checkbox" id="s_master" value="s_master"
                  checked={this.inArray ('s_master')} onChange={this.handleChangeCheckbox}/>
                  <label htmlFor="s_master">Doctorado</label>
                </div>
              </div>
            <div>
              <input type="submit" value="Login"/>
            </div>
          </form>
          <div>Pos: {Object.keys (this.state.possessions).map ((key) => 
              <span key={key}>{this.state.possessions[key]},</span>)}
          </div>
          <div>Studies: {Object.keys (this.state.studies).map ((key) => 
              <span key={key}>{this.state.studies[key]},</span>)}
          </div>
        </div>
      </div>
      );
    }
  }

  export default SeleccionMultiple;