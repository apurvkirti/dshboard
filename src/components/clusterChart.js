import axios from "axios";
import { useEffect, useState } from "react";
import { LabelList, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// const form_Id = 3002;

export default function Clus(props) {
  const jwt = localStorage.getItem("jwt");
  let form_Id = (props.fid)?props.fid:1001;
  const [data, setData] = useState({});
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/dataDashboard/?form_Id=${form_Id}`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [form_Id,jwt]);

  const dataa = [
    { name: "Total", Total: data.tot },
    { name: "WIP", WIP: data.wip },
    { name: "CPL", CPL: data.cpl },
    { name: "YTS", YTS: data.yts },
  ];

  function getname(fid){
    if(fid === 1001) return "Techlab Civil";
    else if(fid ===1002) return "Workshop Civil";
    else if(fid === 2001) return "Techlab Delivery";
    else if(fid ===2002) return "Workshop Delivery";
    else if(fid === 3001) return "Techlab Installation";
    else return "Workshop Installation";
  }

  return (
    <>
    
    <div className="boxes-container">
      <BarChart className="bcc" width={220} height={150} data={dataa}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 70]} />
        <Tooltip />
        
        <Bar
          isAnimationActive={false}
          dataKey="Total"
          stackId="a"
          fill="#f8cbad"
        >
          <LabelList className="labellist" dataKey="Total" position="top" />
        </Bar>
        <Bar isAnimationActive={false} dataKey="WIP" stackId="a" fill="#ffc000">
          <LabelList dataKey="WIP" position="top" />
        </Bar>
        <Bar isAnimationActive={false} dataKey="CPL" stackId="a" fill="#009900">
          <LabelList dataKey="CPL" position="top" />
        </Bar>
        <Bar isAnimationActive={false} dataKey="YTS" stackId="a" fill="#1E90FF">
          <LabelList dataKey="YTS" position="top" />
        </Bar>
       
      </BarChart>
      <h1 className="stats">{getname(props.fid)} Status</h1>
    </div>
    
    </>
  );
}
