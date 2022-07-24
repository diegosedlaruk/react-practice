import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import SimpleLogin from '../SimpleLoginPractice/SimpleLogin';
import thunk from 'redux-thunk';
import reducer from '../Redux Practice/Reducers'

const logger = store => next => action => {
    console.group (action.type)
    console.info ('dispatching', action)
    let result = next (action)
    console.log ('next state', store.getState())
    console.groupEnd (action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ ||
    compose
    const store = createStore (
        reducer,
        composeEnhancers (
            applyMiddleware (thunk, logger)
        )
    )

class SimpleLoginPractice extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <SimpleLogin/>
                </Router>
            </Provider>
        );
    }
}

export default SimpleLoginPractice;