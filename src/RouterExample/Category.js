import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../App.css';

//Este componente recibe como parámetro una categoría.
class Category extends Component {
    render(){
        const category = this.props.match.params.category;
        return(
            <div className="Category-App">
                <div className="Category-Header">
                    <div className="Category-lapp-Header">
                        <h1>Componente Categoría</h1>
                    </div>
                    <div>
                        {category !== 'fail' ? (
                            <div>Esta es la pagina de Categoría: {category}</div>
                            ) : (
                            <Redirect to={{
                                pathname: '/404',
                                state: {from: this.props.location, sample:666}
                            }}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;