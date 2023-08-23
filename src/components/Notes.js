import React,{ useContext } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

export default function Notes() {
    const context = useContext(noteContext);
    const {notes} = context;
    
  return (
    <>
    <Addnote/>
    <div>
        <div className="row">
      <h3>Your Notes</h3>
      {notes.map((note)=>{
        return <Noteitem key={note._id} note={note} />;
      })}
      </div>
    </div>
    </>
  )
}
