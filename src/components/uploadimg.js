import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSiteNameChange = (event) => {
    setSiteName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("siteName", siteName);

    fetch("http://localhost:3000/cloudImg/upload", {
      method: "POST",
      body: formData,
    },
    {
           headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${jwt}`,
        },
      }
    ).then((response) => response.json());
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={handleCaptionChange}
      />
      <input
        type="text"
        placeholder="Site Name"
        value={siteName}
        onChange={handleSiteNameChange}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploader;
