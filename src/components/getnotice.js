import React, { useState, useEffect } from "react";
import axios from "axios";

function NotesList() {
  const [notes, setNotes] = useState([]);
//   if(!notes){
//     return Nothing to show
//   }
  useEffect(() => {
    axios.get("http://localhost:3000/note/allNotes")
      .then(response => {
        setNotes(response.data.notes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="box1" style={{width: '200px', height: '200px', overflow: 'auto'}}>
      {notes.map(note => (
        <div  key={note._id}>
         
          <div className="notec">
          {note.title}<marquee  width="100%" direction="left"  scrollamount="3" >{note.content}
          </marquee>
          create by abc at date
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default NotesList;