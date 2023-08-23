import React, { useState } from "react";
import NoteContext from "./NoteContext"

const NoteState = (props)=> {
    const notesInitial = [
      {
        "_id": "64df92f56a7a5b91a306e0e9",
        "user": "64cf4b0d6fcc0d2268b59b27",
        "title": "My title",
        "description": "Please wake up early",
        "tag": "Personal",
        "date": "2023-08-18T15:49:09.109Z",
        "__v": 0
    },
    {
        "_id": "64df930b6a7a5b91a306aefde0ec",
        "user": "64cf4b0d6fcc0d2268b59b27",
        "title": "My title",
        "description": "Please sleep early",
        "tag": "Personal",
        "date": "2023-08-18T15:49:31.943Z",
        "__v": 0
    },
    {
      "_id": "64df930b6a7asf5b91adsga306e0e",
      "user": "64cf4b0d6fcc0d2268b59b27",
      "title": "My title",
      "description": "Please sleep early",
      "tag": "Personal",
      "date": "2023-08-18T15:49:31.943Z",
      "__v": 0
  },{
    "_id": "64df930b6a7a5b91asdf3sdf06e0",
    "user": "64cf4b0d6fcc0d2268b59b27",
    "title": "My title",
    "description": "Please sleep early",
    "tag": "Personal",
    "date": "2023-08-18T15:49:31.943Z",
    "__v": 0
},{
  "_id": "64df930b6a7a5b91a3fs06e0ec5",
  "user": "64cf4b0d6fcc0d2268b59b27",
  "title": "My title",
  "description": "Please sleep early",
  "tag": "Personal",
  "date": "2023-08-18T15:49:31.943Z",
  "__v": 0
},{
  "_id": "64df930b6a7a5b91a306e0sdfdsf1ec4",
  "user": "64cf4b0d6fcc0d2268b59b27",
  "title": "My title",
  "description": "Please sleep early",
  "tag": "Personal",
  "date": "2023-08-18T15:49:31.943Z",
  "__v": 0
} 
  ]

  const note2 = [
    {
      "_id": "64df92f56a7a5b91a306e0e9",
      "user": "64cf4b0d6fcc0d2268b59b27",
      "title": "My title 1",
      "description": "Please wake up early",
      "tag": "Personal",
      "date": "2023-08-18T15:49:09.109Z",
      "__v": 0
  },
  {
      "_id": "64df930b6a7a5b91a306aefde0ec",
      "user": "64cf4b0d6fcc0d2268b59b27",
      "title": "My title 2",
      "description": "Please sleep early",
      "tag": "Personal",
      "date": "2023-08-18T15:49:31.943Z",
      "__v": 0
  },
  {
    "_id": "64df930b6a7asf5b91adsga306e0e",
    "user": "64cf4b0d6fcc0d2268b59b27",
    "title": "My title 3",
    "description": "Please sleep early",
    "tag": "Personal",
    "date": "2023-08-18T15:49:31.943Z",
    "__v": 0
}
]
    const [notes,setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title,description,tag)=>{
     const note = {
      "_id": "64xcvdf",
      "user": "64cf4b0d6fsdccxcv0d2268b5lk9b27",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-08-18Tx15:49:36.943Z",
      "__v": 0
    }; 
    setNotes(notes.concat(note));
    // const newNotes = notes;
    // newNotes.push(note)
    // console.log(newNotes);
    // setNotes(newNotes);
    }
    //Delete a Note
    const deleteNote = (id)=>{

    }

    //Edit a Note
    const editNote = (id)=>{

    }

    return (
      <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
      </NoteContext.Provider>
    )
}

export default NoteState;