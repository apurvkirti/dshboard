import React, { useState, useEffect } from "react";
import axios from "axios";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const jwt = localStorage.getItem("jwt");

  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const dateParts = formattedDate.split(",");
    const finalday = dateParts[0].trim().split(" ");

    return ` ${finalday[1].trim()} ${finalday[0].trim()}, ${dateParts[1].trim()}`;
  }

 

  function convert24to12(time) {
  
    var fulltime = time.split(":");
    var hr = parseInt(fulltime[0].trim());
    var min = parseInt(fulltime[1].trim());
    
    var ampm = (hr >= 12) ? "PM" : "AM";
    hr = hr % 12;
    hr = hr ? hr : 12; // the hour '0' should be '12'

    return `${hr }:${min } ${ampm}`;
  }

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

  return (
    <div
      className="box1"
      style={{ width: "235px", height: "148px", overflow: "auto" }}
    >
      {notes.map((note) => (
        <div key={note._id}>{note.title}
          <div className="notec">
            {/* eslint-disable-next-line */}
            <marquee width="100%" direction="left" scrollamount="3">
             <div className="intext">
               {note.content}
              </div>
            </marquee>
            <div className="des">
              -{note.designation}, ({formatDate(note.createdAt)},{" "}
              {convert24to12(note.timeUpdate)})
            </div>
          </div>
          <hr className="hrr"></hr>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
