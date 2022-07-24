import { validate, create } from '../api';

export const VALIDATE_USER = 'VALIDATE_USER';
export const CREATE_USER = 'CREATE_USER';

export function validateUser(user){
    return {
        type: VALIDATE_USER,
        user
    }
}

export function validateUserAsync(user){
    return dispatch => (
        validate(user).then( user => dispatch(validateUser(user)))
    )
}

export function createUser (user) {
    return {
        type : CREATE_USER,
        user
    }
}

export function createUserAsync (user) {
    return dispatch => (
        create (user).then (user => dispatch(createUser (user)))
    )
}