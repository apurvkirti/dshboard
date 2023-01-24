import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MyComponent = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/getId/?id=101&form_Id=1001', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDQ1NjM2MX0.JIRtmiHXnrUnUUA53RgTE3p1HTNr-l0t1jbwqBistQ8'
      }
    })
    .then(res => setData(res.data))
  }, [])

  return (
    <div>
    <h1>Data</h1>
    <p>Cluster: {data.Cluster}</p>
    <p>District: {data.District}</p>
    <p>ITI Name: {data.ITI_Name}</p>
    <p>Custom ID: {data.customId}</p>
    <p>Basic Infra: {data.Basic_Infra}</p>
    <p>Flooring: {data.Flooring}</p>
    <p>False Ceiling: {data.False_Ceiling}</p>
    <p>Internal Painting: {data.Internal_Painting}</p>
    <p>Aluminium Partition: {data.Aluminium_Partition}</p>
    <p>AC: {data.AC}</p>
    <p>MCB: {data.MCB}</p>
    <p>Networking: {data.Networking}</p>
    <p>LT Pannel: {data.LT_Pannel}</p>
    <p>Electric Supply: {data.Electric_Supply}</p>
    <p>UPS: {data.UPS}</p>
    <p>External Painting: {data.External_Painting}</p>
    <p>Cleaning: {data.Cleaning}</p>
    <p>__v: {data.__v}</p>
    <div>Hello world</div>
  </div>
  )
}

export default MyComponent







