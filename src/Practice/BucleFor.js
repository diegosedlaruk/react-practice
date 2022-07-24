import React, {Component} from 'react';

//Bucle: 
class BucleFor extends React.Component {
    render () {
      const family = [
        {name : "diego", edad : 27},
        {name : "emma", edad : 4},
        {name : "julieta", edad : 24}
      ];
      return (
        <div>
          <h1>Este es el listado de mi familia:</h1>
          <ul>
            {
              family.map ( function (f){
                return (
                <li key={f.name}>
                    <b>{f.name}</b>: {f.edad} years
                </li>);
              })
            }
          </ul>
  
        </div>
      );
    }
  }
  
  export default BucleFor;