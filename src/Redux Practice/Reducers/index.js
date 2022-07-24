/** Este se usa para el redux, yendo a memoria, descomentar y comentar el otro.
import {
    GET_NOTES, GET_NOTE, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE
} from '../Actions'
*/

import {
    GET_NOTES, GET_NOTE, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE 
} from '../../Redux Api Rest Practice/actions'

let initialNotes = [];

let reducer = (state = initialNotes, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.notes.notes
            }        
        case GET_NOTE:
            return state.filter (n => n.id === action.id);

        case ADD_NOTE:
            return {
                ...state,
                //action.note.id : action.note.id,
                notes: state.notes
            }

        case UPDATE_NOTE:
            return state.notes.map ((note) => {
                if (note.id !== action.note.id){
                    return note;
                }
                return action.note;
            })
        
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter (n => n.id !== action.id)
            }
        default:
            return state;
    }
};

//Esto se ahace para crear id's similares a como se crean en un backend
export const uniqueId = function (){
    let chars = '1234567890';
    return 'xxxx'.replace (/ [x] /g, function(c) {
        return chars.charAt (Math.random() * 37);
    })
}

/**
 * Random con letras y números:
 * 
 * 
   export const uniqueId = function (){
    let chars = 'abcdefghijklmnoprqrstuvwxyz1234567890';
    return 'xxxxxxxxxxxxxxxxxxxxxxxxxx'.replace (/ [x] /g, function(c) {
        return chars.charAt (Math.random() * 37);
    })
}
 * 
 * 
 */

export default reducer;