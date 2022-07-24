import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Note extends Component {
    showDetail = () => {
        console.log (' Clicking detail: ', this.state.showDetail);
        this.setState ({
            showDetail: !this.state.showDetail
        })
    }

    constructor (props){
        super(props);
        this.state = {showDetail: false}
    }

    render () {
        const note = this.props.note;
        return (
            <div className="Note-App">{note.content}
                <div className="Note-controls">
                    <a onClick={() => this.showDetail ()}> Detalle </a> |
                    <Link to={`/reduxPractice/notes/edit/${note.id}`}> Actualizar </Link> |
                    <a onClick={() => this.props.delete (note.id)}>Eliminar</a>
                </div>
                {
                    this.state.showDetail && 
                    <div>
                        <div><b> ID: </b>{note.id}</div>
                        <div><b>Time: </b>{note.timestamp}</div>
                    </div>
                }
            </div>
        );
    }
}

export default Note;
