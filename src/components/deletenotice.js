import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Deletenotice(){

  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);
  const jwt = localStorage.getItem("jwt");
  const [notes, setNotes] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:3000/note/allNotes",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                `Bearer ${jwt}`,
            },
          }
          )
          .then((response) => {
            setNotes(response.data.notes);
          },
          
          )
          .catch((error) => {
            console.error(error);
          });
      }, [jwt]);

function handleDelete(id){
    axios
      .post(
        "http://localhost:3000/note/deleteNote",
        { "note_Id": `${id}` },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      
      .catch((error) => {
        console.log(error);
      });
  
}

    return (
        <div className="note-grid">
        {notes.map((note) => (
          <div className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.noteId)}>Delete</button>
          </div>
        ))}
      </div>
    )
    
};