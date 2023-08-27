import React,{ useContext, useEffect,useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';

export default function Notes(props) {
    const context = useContext(noteContext);
    const {notes,editNote,getNotes} = context;
    let navigate = useNavigate();
    const [eNote,seteNote] = useState({id:"",title:"",description:"",tag:""});
    const ref = useRef(null);
    const refClose = useRef(null);
    useEffect(()=>{
      if (localStorage.getItem("token")) {
        getNotes();
      } else {
        navigate("/login")
      }
      // eslint-disable-next-line
    },[])
    const updateNote = (note)=>{
       ref.current.click();
      //  console.log(note._id);
      seteNote({id:note._id,title:note.title,description:note.description,tag:note.tag});
    }
    const handleClick = (e)=>{
      // e.preventDefault();
      editNote(eNote.id,eNote.title,eNote.description,eNote.tag);
      refClose.current.click();
      props.showAlert("Note updated successfully","success");
  }
  const onchange = (e)=>{
    seteNote({...eNote,[e.target.name]:e.target.value});
    console.log(eNote);
  }
  return (
    <>
    <Addnote showAlert={props.showAlert} />
    <button hidden type="button" className="btn btn-primary"  ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">


      <div className="container">
      <h1>Update Note</h1>
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" minLength={3} required defaultValue={eNote.title} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" minLength={5} required defaultValue={eNote.description} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" required defaultValue={eNote.tag} onChange={onchange}/>
  </div>
</form>
    </div>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
        <button disabled={eNote.title.length<3||eNote.description.length<5} type="button" className="btn btn-primary" onClick={handleClick} >Update Note</button>
      </div>
    </div>
  </div>
</div>
    <div>
        <div className="row">
      <h3>Your Notes</h3>
      {notes.length===0 && <div>No notes to display</div>}
      
      {notes.map((note)=>{
        return <Noteitem key={note._id} updateNote={updateNote}  note={note} showAlert={props.showAlert} />;
      })}
      </div>
    </div>
    </>
  )
}
