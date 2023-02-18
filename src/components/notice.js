import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const AddNotice = () => {
  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [designation, setDesignation] = useState("");
  const jwt = localStorage.getItem("jwt");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !designation) {
      return alert("All fields are required.");
    }
    try {
      // eslint-disable-next-line
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
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      // console.log(response.data);
      setIsModalOpen(false);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const username = localStorage.getItem("username");
  function handlenav() {
    if (username === "master_admin") {
      navigate("/del");
    } else {
      window.alert("Sorry! You are not authorized to access this feature");
    }
  }

  return (
    <>
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>
          Click here to proceed
        </button>
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
                required
              />
            </div>
          </div>
          <div>
            <textarea
              className="textarea"
              placeholder="Enter the content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="8"
              cols="50"
              required
            />
          </div>
          <div className="titlearea">
            <input
              className="inputtitle"
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <div className="buttonnotice">
            <Button className="addnotice" type="submit" variant="primary">
              Add Notice
            </Button>
            <div>
              <Button onClick={() => handlenav()} variant="secondary">
                Delete(only for masterAdmin)
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AddNotice;
