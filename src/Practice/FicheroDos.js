import React, {Component} from 'react';

////El ejercicio de division de componentes pero con mejores practicas, en las clases importadas comentadas!!!! ->
///////////////Ficheros/////////////////
class FicheroDos extends Component {

    handleChange = (e) => {
      this.setState ({
        name: e.target.value
      })
    }
  
    constructor (props){
      super(props);
      this.state = {name: 'Default name'};
    }
    render(){
      return(
        <div>
          <header className="Fichero-Header">
            <h1 className="Fichero-Title">{this.state.name}</h1>
          </header>
          <p className="Fichero-Intro">
            <div><label>Texto de ejemplo</label></div>
            <div>
              <input type="text" value={this.state.name}
                defaultValue='default text' onChange={this.handleChange}/>
            </div>
          </p>
        </div>
      );
    }
  }

  export default FicheroDos;
  