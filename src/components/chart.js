import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from "recharts";
import axios from "axios";
import { useEffect, useState } from "react";

//for layout Container from react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../App.css";

let civilTechCompleted = 0;
let civilWorkshopCompleted = 0;

let delTechCompleted = 0;
let delWorkshopCompleted = 0;

let insTechCompleted = 0;
let insWorkshopCompleted = 0;

export default function Chart() {
  let navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl1 = `http://localhost:3000/api/test/?formCode=1000`;
    // const apiUrl2 = `http://localhost:3000/api/test/?formCode=2000`;
    // const apiUrl3 = `http://localhost:3000/api/test/?formCode=3000`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };

    Promise.all([
      axios.get(`${apiUrl}/college/test/?formCode=1000`, { headers }),
      axios.get(`${apiUrl}/college/test/?formCode=2000`, { headers }),
      axios.get(`${apiUrl}/college/test/?formCode=3000`, { headers }),
    ])
      .then((responses) => {
        setData1(responses[0].data);
        setData2(responses[1].data);
        setData3(responses[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jwt, apiUrl]);

  if (
    data1 &&
    data1.length > 1 &&
    data2 &&
    data2.length > 1 &&
    data3 &&
    data3.length > 1
  ) {
    civilTechCompleted = (data1[1].tech_actual / 9).toFixed(2);
    civilWorkshopCompleted = ((data1[1].wks_actual / 48) * 5).toFixed(2);

    delTechCompleted = (data2[1].tech_actual / 9).toFixed(2);
    delWorkshopCompleted = ((data2[1].wks_actual / 51) * 5).toFixed(2);

    insTechCompleted = (data3[1].tech_actual / 9).toFixed(2);
    insWorkshopCompleted = ((data3[1].wks_actual / 51) * 5).toFixed(2);
  }

  const dataa = [
    {
      name: "Civil Status",
      techlab: civilTechCompleted,
      workshop: civilWorkshopCompleted,
    },
    {
      name: "Delivery Status",
      techlab: delTechCompleted,
      workshop: delWorkshopCompleted,
    },
    {
      name: "Installation Status",
      techlab: insTechCompleted,
      workshop: insWorkshopCompleted,
    },
  ];

  const handleUpload = () => {
    navigate("/upd");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="first">
            <Row className="namer">Phase 1 (60 ITI's) Project overview</Row>
            <Row className="updimg">
              <Button className="uploadimage" onClick={handleUpload}>
                Uplaod Site-Status Photo
              </Button>
            </Row>
          </Col>

          <Col>
            <Table bordered hover className="childtable1">
              <thead>
                <tr className="headingfirst">
                  <td>Execution Activity</td>
                </tr>
              </thead>
              <tbody>
                <tr className="rowf1">
                  <td className="fontsize">Overall Civil Readiness %</td>
                </tr>
                <tr className="rows1">
                  <td className="fontsize">Overall Delivery Readiness %</td>
                </tr>
                <tr className="rowt1">
                  <td className="fontsize">Overall Installation Readiness %</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <Table bordered hover className="childtable2">
              <thead>
                <tr className="headingfirst">
                  <td>TECH</td>
                  <td>WKS</td>
                </tr>
              </thead>
              <tbody>
                <tr className="rowf">
                  <td className="aa">{civilTechCompleted} %</td>
                  <td className="bb"> {civilWorkshopCompleted} %</td>
                </tr>
                <tr className="rows">
                  <td className="aa">{delTechCompleted} %</td>
                  <td className="bb">{delWorkshopCompleted} %</td>
                </tr>
                <tr className="rowt">
                  <td className="aa">{insTechCompleted} %</td>
                  <td className="bb">{insWorkshopCompleted} %</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <BarChart
              className="barfull"
              width={800}
              height={198}
              data={dataa}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
            >
              <YAxis type="category" dataKey="name" />
              <XAxis type="number" domain={[0, 100]} />

              <Tooltip />
              <Bar isAnimationActive={false} dataKey="techlab" fill="#ffc000">
                <LabelList dataKey="techlab" position="right" />
              </Bar>
              <Bar isAnimationActive={false} dataKey="workshop" fill="#2f5597">
                <LabelList dataKey="workshop" position="right" />
              </Bar>
            </BarChart>
          </Col>
        </Row>
      </Container>
    </>
  );
}
