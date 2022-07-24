import React, {Component} from 'react';

class VariablesConst extends Component {
    render(){
        const header = (
          <header>
            <h1>Title</h1>
            <p>
              This is the home
            </p>
          </header>
        );
  
        const content = (
          <main>
            <h2>Other title</h2>
            <p>This is other content</p>
          </main>
        );
  
        const borderStyle = (
          {
            border: '2px solid red',
            width: '20%'
          }
        );
  
        const borderStyleDos = (
          {
            border: '2px solid green',
            width: '50%'
          }
        );
  
  
  
        return (
          <div style={borderStyleDos}>
            {header}
            {content}
          </div>
        );
    }
  }

  export default VariablesConst;