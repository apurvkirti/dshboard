import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
function ImageUploader() {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [siteName, setSiteName] = useState("");
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSiteNameChange = (event) => {
    setSiteName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("siteName", siteName);

    try {
      // eslint-disable-next-line
      const response = await axios.post(`${apiUrl}/cloudImg/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwt}`,
        },
      });

      navigate("/dashboardAssam");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const username = localStorage.getItem("username");
  function handledelete() {
    if (username.startsWith("master_admin")) {
      navigate("/gallaryAssam");
    } else {
      window.alert("Sorry! You are not authorized to access this feature");
    }
  }
  function handleMaster() {
    if (username === "master_admin") {
      window.alert(
        "Sorry, try to sign in as any of the state admins of the state you want to add image of."
      );
      navigate("/dashboardAssam");
    }
  }

  return (
    <>
      <div className="upload-form">
       
        <form onSubmit={handleSubmit}>
          <input className="file-selector" type="file" onChange={handleImageChange} required />
          <div className="a">
          <input
            type="text"
            placeholder="Caption"
            className="upload-caption"
            value={caption}
            onChange={handleCaptionChange}
            required
          /> 
          </div>
          <div className="b">
          <input
            type="text"
            placeholder="Site Name"
            className="upload-site"
            value={siteName}
            onChange={handleSiteNameChange}
            required
          />
          </div>
          <div className="c">
          <Button className="image_upload_button" type="submit" onClick={handleMaster}>
            Upload
          </Button>
          </div>
         <div className="d">
         <Button className="delete-image-b" onClick={() => handledelete()}>Delete Images</Button>
         </div>
        
        </form>
      </div>
    </>
  );
}

export default ImageUploader;
