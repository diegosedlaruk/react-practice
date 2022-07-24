import  { SHOW_NAME, CHANGE_NAME } from './Action'

let reducer = (state = {name: 'Anonymus'}, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {name: action.name};
        case SHOW_NAME:
            console.log('Show name: ', state.name)
            return state;
        default:
            return state;
    }
};
export default reducer;