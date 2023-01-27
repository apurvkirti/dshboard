import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const form_Id = 1001;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDczNDM5Mn0.QOlymyyu-XPFTdryPa6EeLAKlk-WYSGYgz8XAn8iQQs";
export default function Clus() {
  const [data, setData] = useState({});
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/dataDashboard/?form_Id=${form_Id}`;
    const headers = {
      Authorization:
        `Bearer ${token}`,
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const dataa = [
    { name: "Total", value: data.tot },
    { name: "WIP", value: data.wip },
    { name: "CPL", value: data.cpl },
    { name: "YTS", value: data.yts },
    // { name: 'May', value: 50 }
  ];





  return (
    <div className="boxes-container">
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
    <BarChart width={250} height={200} data={dataa}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="value" fill="#ed7d31" />
    </BarChart> 
  </div>
    
  );
}
