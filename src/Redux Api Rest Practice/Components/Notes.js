import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotesAsync, deleteNoteAsync } from '../actions';
import Note from '../../Redux Practice/Componentes/Note';
import '../../App.css';

class Notes extends Component {

    componentWillMount = () => {
        this.props.getNotes();
    }

    componentDidMount () {
        console.log('imprimiendo documentos, component did mount: ', this.state, this.props);
    }

    render () {

        if(this.props.notes.notes != undefined){
            return(
                <div className="App">
                    <div>
                        {
                            this.props.notes.notes.map ((note) => 
                                <Note note={note} key={note.id} delete={this.props.deleteNote}/>
                            )
                        }
                    </div>
                </div>
            );
        } else{
            return(
                <div>
                    
                </div>
            );
        }

        
    }
}

function mapStateToProps (state, props){
    console.log("Note.js", state)
    return {
        notes: state
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getNotes : () => dispatch (getNotesAsync ()),
        deleteNote: (id) => dispatch (deleteNoteAsync (id)),
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (Notes);