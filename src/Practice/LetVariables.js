import React , {Component} from 'react';

//comentario de una sola linea

/**
 * Comentario
 * de varias
 * lineas
 * */
class LetVariables extends Component {
    render () {
      let title = 'This is a title'
      let content = 'Some content'
      return (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      )
    }
  }
  
  export default LetVariables;