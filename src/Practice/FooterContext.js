import React from 'react';
import {OurContext} from './OurContext';

class FooterContext extends React.Component {
    render(){
        return(
            <footer>
                <small> Este es el pié {this.context.title}</small>
            </footer>
        );
    }
}
FooterContext.contextType = OurContext;
export default FooterContext;