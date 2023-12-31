import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=> {
  const host = process.env.REACT_APP_LINK;
    const notesInitial = [];
    const [notes,setNotes] = useState(notesInitial);

    //Get a Note
    const getNotes = async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token')
        },
       });
      //  console.log(response);
       const json = await response.json();
      //  console.log(json);
      setNotes(json);
    }

    //Add a Note
    const addNote = async({title,description,tag})=>{
      const response = await fetch(`${host}/api/notes/addnote`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({title,description,tag})
       });
       // eslint-disable-next-line
       const json = await response.json();

    //  const note = {
    //   "_id": "64xcvdf",
    //   "user": "64cf4b0d6fsdccxcv0d2268b5lk9b27",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2023-08-18Tx15:49:36.943Z",
    //   "__v": 0
    // }; 
    // setNotes(notes.concat(note));
    }
    //Delete a Note
    const deleteNote = async(id)=>{

      const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "auth-token":localStorage.getItem('token')
        }
       });
       // eslint-disable-next-line
       const json = response.json();
  
    const newNotes = notes.filter((note)=>{
      return note._id!==id;
    });
    setNotes(newNotes);
    }

    //Edit a Note
    const editNote = async(id,title,description,tag) =>{
     const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag})
     });
     // eslint-disable-next-line
     const json = await response.json();
     let newNotes = JSON.parse(JSON.stringify(notes))
      for (let i = 0; i < newNotes.length; i++) {
        const element = newNotes[i];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
      setNotes(newNotes);
    }
    

    return (
      <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
      </NoteContext.Provider>
    )
}

export default NoteState;