import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const AddNotice = () => {

  

  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !designation) {
    return alert("Both 'title' and 'content' fields are required.");
  }
    try {
      const response = await axios.post(
        "http://localhost:3000/note/addNote",
        {
          title,
          content,
          designation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NTMzNzYyNX0.11OgSMViw9JyjIWzY2E9a0PWHhdsh-PMA10IoL3zWto",
          },
        }
      );
      // console.log(response.data);
      setIsModalOpen(false);
      navigate('/db')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>Click to add a notice</button>
      )}
      {isModalOpen && (
        <form className="noticeform" onSubmit={handleSubmit}>
          <div>
            <h1 className="headingnotice">Note:</h1>
            <div className="titlearea">
             <input
              className="inputtitle"
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
           
            />   
            </div> 
          </div>
          <div>
            <textarea className="textarea"
              placeholder="Enter the content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows='8'
              cols='50'
            />
          </div>
          <div className="titlearea">
             <input
              className="inputtitle"
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
           
            />   
            </div> 
          <div className="buttonnotice">
          <Button type="submit" variant="primary">Add Notice</Button>
            {/* <button className="btn" type="submit">Add Notice</button> */}
          </div>
        </form>
      )}
    </>
  );
};

export default AddNotice;
