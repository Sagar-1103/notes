import React ,{ useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';


export default function Addnote(props) {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title:"",description:"",tag:""});
    const handleClick = (e)=>{
        // e.preventDefault();
        addNote(note);
      props.showAlert("Note added successfully","success");
    }
    const onchange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
  return (
    <>
      <div className="container my-3">
      <h1>Add a Note</h1>
      <form onSubmit={handleClick}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" minLength={3} required onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" required minLength={5} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onchange}/>
  </div>
  <button disabled={note.title.length<3||note.description.length<5} type="submit" className="btn btn-primary">Add Note</button>
</form>
    </div>
    </>
  )
}
