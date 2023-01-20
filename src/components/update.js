import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [ITIName, setITIName] = useState("");
  const [Cluster, setCluster] = useState("");
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  
  const [id, setID] = useState(null);
  

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setITIName(localStorage.getItem("ITIName"));
    setCluster(localStorage.getItem("Cluster"));
    setVal1(localStorage.getItem("val1"));
    setVal2(localStorage.getItem("val2"));
    setVal3(localStorage.getItem("val3"));
    
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://63c94eb3904f040a965b22d7.mockapi.io/fakenew/${id}`, {
        ITIName,
        Cluster,
        val1,
        val2,
        val3
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>ITI Name</label>
          <input
            placeholder="ITI Name"
            value={ITIName}
            onChange={(e) => setITIName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Cluster</label>
          <input
            placeholder="Last Name"
            value={Cluster}
            onChange={(e) => setCluster(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        <label>Val1</label>
          <input
            placeholder="Val1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        <label>Val2</label>
          <input
            placeholder="Val1"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
        <label>Val3</label>
          <input
            placeholder="Val1"
            value={val3}
            onChange={(e) => setVal3(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
