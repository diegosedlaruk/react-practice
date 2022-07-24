import React , {Component} from 'react';

class BucleForDos extends React.Component {

    render(){
      const columnas = ["Indice", "Nombre", "Edad", "Profesión"];
      const registros = [
        {nombre: "Daniel", edad:20, profesion:"Peluquero"},
        {nombre:"Arnaldo", edad:29, profesion:"Panadero"},
        {nombre:"Gustavo", edad:45, profesion:"Pastelero"}
      ];
      var variable = 0
  
      const estilo = ({
        width :'50%',
        backgroundColor : 'orange',
        textAlign : 'center'
      });
  
      return(
        <div>
          <table style={estilo}>
            <thead>
            <tr>
              {
                columnas.map (function(columna){
                  return(
                    <th key={columna}>{columna}</th>
                  );
                })
              }
            </tr>
            </thead>
            <tbody>
            {
                registros.map (function(registro){
                  variable = variable + 1
                  return(
                      <tr key={variable}>
                        <td>{variable}</td>
                        <td>{registro.nombre}</td>
                        <td>{registro.edad}</td>
                        <td>{registro.profesion}</td>
                      </tr>
                  );
                })
              }
            <tr>{
              columnas.map (function(registro) {
                variable = variable + 1
                return(
                <td key={variable}>{variable}</td>
                )  
                }
              )
            }
            </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  export default BucleForDos;