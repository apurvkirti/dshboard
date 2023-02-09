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
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !designation) {
      return alert("All fields are required.");
    }
    try {
      // eslint-disable-next-line

      const response = await axios.post(
        `${apiUrl}/note/addNote`,
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
  return (
    <>
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>
          Click to add a notice
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
            <Button type="submit" variant="primary">
              Add Notice
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddNotice;
