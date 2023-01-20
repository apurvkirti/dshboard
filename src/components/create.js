import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';


export default function Create() {

    // ITI name, Cluster, and 16 values initialised by null and 0
    const [ITIName, setITIName] = useState('');
    const [Cluster, setCluster] = useState('');
    const [val1, setval1] = useState(0);
    const [val2, setval2] = useState(0);
    const [val3, setval3] = useState(0);
    // .... can create all 16 values but also need to increase in form below

    //post data function which posts the data to the server api
    const postData = () => {
        axios.post(`https://63c94eb3904f040a965b22d7.mockapi.io/fakenew`, {
          ITIName,
          Cluster,
          val1,
          val2,
          val3
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>ITI Name</label>
                    <input placeholder='ITI Name' onChange={(e) => setITIName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Cluster Name</label>
                    <input placeholder='Cluster Name' onChange={(e) => setCluster(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Value 1</label>
                    <input placeholder='Value 1' onChange={(e) => setval1(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Value 2</label>
                    <input placeholder='Value 2' onChange={(e) => setval2(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Value 3</label>
                    <input placeholder='Value 3' onChange={(e) => setval3(e.target.value)}/>
                </Form.Field>
                
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}