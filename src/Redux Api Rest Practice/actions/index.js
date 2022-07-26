import {get, getAll, create, update, remove} from '../api';

export const GET_NOTES = 'GET_NOTES'
export const GET_NOTE = 'GET_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export function getNotes (notes) {
    return {
        type : GET_NOTES,
        notes
    }
}

export function getNotesAsync (notes) {
    return dispatch => (
        getAll ().then (notes => dispatch (getNotes (notes)))
    )
}

export function getNote (id){
    return {
        type : GET_NOTE,
        id
    }
}

export function getNoteAsync (id) {
    return dispatch => (
        get (id).then (note => dispatch(getNote (note)))
    )   
}

export function addNote (note) {
    return {
        type : ADD_NOTE,
        note
    }
}

export function addNoteAsync (note) {
    return dispatch => (
        create (note).then (note => dispatch(addNote (note)))
    )
}

export function updateNote (note){
    return {
        type : UPDATE_NOTE,
        note
    }
}

export function updateNoteAsync (note){
    return dispatch => (
        update (note).then ( note => dispatch (updateNote(note)))
    )
}

export function deleteNote (id) {
    return {
        type : DELETE_NOTE,
        id
    }
}

export function deleteNoteAsync (id) {
    return dispatch => (
        remove (id).then (() => dispatch(deleteNote(id)))
    )
}