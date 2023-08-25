import React ,{ useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext';


export default function Addnote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title:"",description:"",tag:""});
    const handleClick = (e)=>{
        // e.preventDefault();
        addNote(note);
    }
    const onchange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
  return (
    <>
      <div className="container my-3">
      <h1>Add a Note</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>
    </div>
    </>
  )
}
