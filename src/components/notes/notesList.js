import React from 'react';
import Note from './Note';
import './note.css'

const NotesList =({notes})=>{
    return(
        <div className="noteslist">
        {notes && notes.map(note => <Note note={note} key={note.id}/>)}
        </div>
    )
}
export default NotesList;