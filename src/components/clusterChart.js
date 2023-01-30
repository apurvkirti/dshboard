import axios from "axios";
import { useEffect, useState } from "react";
import { LabelList, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const form_Id = 1001;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDczNDM5Mn0.QOlymyyu-XPFTdryPa6EeLAKlk-WYSGYgz8XAn8iQQs";
export default function Clus() {
  const [data, setData] = useState({});
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/dataDashboard/?form_Id=${form_Id}`;
    const headers = {
      Authorization: `Bearer ${token}`,
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
    { name: "Total", Total: data.tot },
    { name: "WIP", WIP: data.wip },
    { name: "CPL", CPL: data.cpl },
    { name: "YTS", YTS: data.yts },
  ];

  return (
    <div className="boxes-container">
      <BarChart width={250} height={200} data={dataa}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 65]} />
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
    </div>
  );
}
