import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDczNDM5Mn0.QOlymyyu-XPFTdryPa6EeLAKlk-WYSGYgz8XAn8iQQs";

let civilTechCompleted =0;
let civilWorkshopCompleted =0;



let delTechCompleted =0;
let delWorkshopCompleted =0;

let insTechCompleted =0;
let insWorkshopCompleted =0;


export default function Chart() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  
  useEffect(() => {
    const apiUrl1 = `http://localhost:3000/api/test/?formCode=1000`;
    const apiUrl2 = `http://localhost:3000/api/test/?formCode=2000`;
    const apiUrl3 = `http://localhost:3000/api/test/?formCode=3000`;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
  
    Promise.all([
      axios.get(apiUrl1, { headers }),
      axios.get(apiUrl2, { headers }),
      axios.get(apiUrl3, { headers }),
    ])
      .then((responses) => {
        setData1(responses[0].data);
        setData2(responses[1].data);
        setData3(responses[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  if ((data1 && data1.length > 1) && (data2 && data2.length > 1) && (data3 && data3.length > 1)) {
    civilTechCompleted = Math.ceil((data1[1].tech_actual)/9);
    civilWorkshopCompleted = Math.ceil(((data1[1].wks_actual)/48)*5);

    delTechCompleted = Math.ceil((data2[1].tech_actual)/9);
    delWorkshopCompleted = Math.ceil(((data2[1].wks_actual)/51)*5);

    insTechCompleted = Math.ceil((data3[1].tech_actual)/9);
    insWorkshopCompleted = Math.ceil(((data3[1].wks_actual)/51)*5);
   
  }
 
  const dataa = [
    { name: "Civil", techlab: civilTechCompleted, workshop: civilWorkshopCompleted},
    { name: "Delivery", techlab: delTechCompleted, workshop: delWorkshopCompleted },
    { name: "Inst", techlab: insTechCompleted, workshop: insWorkshopCompleted},
   
  ];

  return (
    <BarChart
      width={800}
      height={200}
      data={dataa}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <YAxis type="category" dataKey="name" />
      <XAxis type="number" domain={[0, 100]} />
      {/* <CartesianGrid x={false} y={true} strokeDasharray="3 3" /> */}
      <Tooltip />
      <Bar dataKey="techlab" fill="#8884d8" />
      <Bar dataKey="workshop" fill="#1E90FF" />
    </BarChart>
  );
}
