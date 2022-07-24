
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNoteAsync, updateNoteAsync } from '../../Redux Api Rest Practice/actions';
/**  Este se usa para el redux, yendo a memoria, descomentar y comentar el otro.
import { addNote, updateNote } from '../Actions';
*/
class NoteForm extends Component {
    handleContentChange = (event) => {
        this.setState ({
            note: {
                ... this.state.note,
                content: event.target.value
            }
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.note.id === undefined ) this.props.addNote (this.state.note);
        else this.props.updateNote (this.state.note);

        this.setState ({redirectToDefault: true})
    }
    componentDidMount = () => {
        if (this.props.note) this.setState ({ note: this.props.note})
    }
    constructor (props) {
        super(props);
        this.state = {
            note: {
                content: '',
                timestamp: Date.now(),
                id: props.match.params.id,
            },
            redirectToDefault: false
        }
    }
    render() {
        if (this.state.redirectToDefault) return <Redirect to="/reduxPractice/"/>;

        return (
            <div className="NoteForm-App">
                <form onSubmit={this.handleSubmit}>
                    <div><label>Tarea</label></div>
                    <div>
                        <textarea name="content" value={this.state.note.content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Grabar Nota"/>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps (state, props){
    const id = props.match.params.id || ''
    return {
        notes: state.notes,
        note: state.notes.find (n => n.id === id)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addNote: (note) => dispatch (addNoteAsync (note)),
        updateNote: (note) => dispatch (updateNoteAsync (note))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
) (NoteForm);