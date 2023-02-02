import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

//for layout Container from react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "../App.css";

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
    civilTechCompleted =((data1[1].tech_actual)/9).toFixed(2);
    civilWorkshopCompleted = (((data1[1].wks_actual)/48)*5).toFixed(2);

    delTechCompleted = ((data2[1].tech_actual)/9).toFixed(2);
    delWorkshopCompleted = (((data2[1].wks_actual)/51)*5).toFixed(2);

    insTechCompleted = ((data3[1].tech_actual)/9).toFixed(2);
    insWorkshopCompleted = (((data3[1].wks_actual)/51)*5).toFixed(2);
   
  }
 
  const dataa = [
    { name: "Civil", techlab: civilTechCompleted, workshop: civilWorkshopCompleted},
    { name: "Delivery", techlab: delTechCompleted, workshop: delWorkshopCompleted },
    { name: "Inst", techlab: insTechCompleted, workshop: insWorkshopCompleted},
   
  ];

  return (
    <>
    <Container>
      <Row>
        <Col className="first">
        <div >Phase 1 (60 ITI's) Project overview</div>
        </Col>
        <Col>
        <div className="secondcontainer">
          <div className="firstsec">Execution Activity</div>
          <div className="secsec">Overall BSBCCL Civil Readiness %</div>
          <div className="thirdsec">Overall TTL Delivery Readiness %</div>
          <div className="fourthsec">Overall Installation Readiness %</div>
        </div>
        </Col>
        <Col><Table bordered hover className='childtable'>
        <thead>
          <tr className="headingfirst">
            <th>TECH</th>
            <th>WKS</th>
          
          </tr>
        </thead>
        <tbody>
          <tr className="rowf">
            
            <td>{civilTechCompleted} %</td>
            <td>{civilWorkshopCompleted} %</td>
           
          </tr>
          <tr className="rows">
            
            <td>{delTechCompleted} %</td>
            <td>{delWorkshopCompleted} %</td>
       
          </tr>
          <tr className="rowt">
            <td>{insTechCompleted} %</td>
            <td>{insWorkshopCompleted} %</td>
          </tr>
        </tbody>
      </Table>
      </Col>
        <Col><BarChart className="barfull"
      width={800}
      height={200}
      data={dataa}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <YAxis type="category" dataKey="name" />
      <XAxis type="number" domain={[0, 60]} />
      
      <Tooltip />
      <Bar isAnimationActive={false} dataKey="techlab" fill="#221f1e">
        <LabelList dataKey="techlab" position="right" />
      </Bar> 
      <Bar isAnimationActive={false} dataKey="workshop" fill="#776e6a">
        <LabelList dataKey="workshop" position="right" />
      </Bar>
    </BarChart></Col>
      </Row>
     
    </Container>
    
    </>
  );
}
