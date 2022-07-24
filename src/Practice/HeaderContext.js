import React from 'react';
import {OurContext} from './OurContext';

class HeaderContext extends React.Component {
    render() {
        return(
            <header style={{color: this.context.color}}>
                <h1>Este es el header</h1>
                <h2>{this.context.title}</h2>
            </header>
        );
    }
}
HeaderContext.contextType = OurContext;
export default HeaderContext;