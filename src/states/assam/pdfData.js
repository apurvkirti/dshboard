import "./pdf.css";
import Table from "react-bootstrap/Table";
import React from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Barchart2 from "./barChart2";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

const jwt = localStorage.getItem("jwt");
const thStyle = {
  padding: "0%",
};

class DataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      currentDate: new Date().toLocaleDateString(),

      overall1: [],
      overall2: [],
      overall3: [],

      data1: [],
      data2: [],
      data3: [],

      cluster1itidata1: [],
      cluster1itidata2: [],
      cluster1itidata3: [],
      cluster1itidata4: [],
      cluster1itidata5: [],
      cluster1itidata6: [],

      cluster1poldata1: [],
      cluster1poldata2: [],
      cluster1poldata3: [],
      cluster1poldata4: [],
      cluster1poldata5: [],
      cluster1poldata6: [],

      cluster2itidata1: [],
      cluster2itidata2: [],
      cluster2itidata3: [],
      cluster2itidata4: [],
      cluster2itidata5: [],
      cluster2itidata6: [],

      cluster2poldata1: [],
      cluster2poldata2: [],
      cluster2poldata3: [],
      cluster2poldata4: [],
      cluster2poldata5: [],
      cluster2poldata6: [],

      cluster3itidata1: [],
      cluster3itidata2: [],
      cluster3itidata3: [],
      cluster3itidata4: [],
      cluster3itidata5: [],
      cluster3itidata6: [],

      cluster3poldata1: [],
      cluster3poldata2: [],
      cluster3poldata3: [],
      cluster3poldata4: [],
      cluster3poldata5: [],
      cluster3poldata6: [],

      cluster4itidata1: [],
      cluster4itidata2: [],
      cluster4itidata3: [],
      cluster4itidata4: [],
      cluster4itidata5: [],
      cluster4itidata6: [],

      cluster4poldata1: [],
      cluster4poldata2: [],
      cluster4poldata3: [],
      cluster4poldata4: [],
      cluster4poldata5: [],
      cluster4poldata6: [],
      
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };

    this.interval = setInterval(() => {
      this.setState({
        currentDate: new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      });
    }, 1000);

    const endpoints0 = [
      `${apiUrl}/college/test/?formCode=7000`,
      `${apiUrl}/college/test/?formCode=8000`,
      `${apiUrl}/college/test/?formCode=9000`,
    ];
 

    const endpoints1 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster1ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster1ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster1ITI`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster1ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster1ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster1ITI`,
    ];
    const endpoints2 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster1Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster1Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster1Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster1Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster1Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster1Polytechnic`,
    ];

    const endpoints3 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster2ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster2ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster2ITI`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster2ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster2ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster2ITI`,
    ];

    const endpoints4 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster2Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster2Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster2Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster2Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster2Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster2Polytechnic`,
    ];
    const endpoints5 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster3ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster3ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster3ITI`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster3ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster3ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster3ITI`,
    ];
    const endpoints6 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster3Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster3Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster3Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster3Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster3Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster3Polytechnic`,
    ];
    const endpoints7 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster4ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster4ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster4ITI`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster4ITI`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster4ITI`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster4ITI`,
    ];
    const endpoints8 = [
      `${apiUrl}/college/getCluster/?form_Id=7001&cluster=Cluster4Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8001&cluster=Cluster4Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9001&cluster=Cluster4Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=7002&cluster=Cluster4Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=8002&cluster=Cluster4Polytechnic`,
      `${apiUrl}/college/getCluster/?form_Id=9002&cluster=Cluster4Polytechnic`,
    ];

   
    endpoints0.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`overall${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
    

    endpoints1.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster1itidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints2.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster1poldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints3.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster2itidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints4.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster2poldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints5.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster3itidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints6.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster3poldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints7.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster4itidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints8.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`cluster4poldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

   

  }

  render() {
    

    const { overall1 } = this.state;
    const { overall2 } = this.state;
    const { overall3 } = this.state;

    let civilTechCompleted = 0;
    let civilWorkshopCompleted = 0;

    let delTechCompleted = 0;
    let delWorkshopCompleted = 0;

    let insTechCompleted = 0;
    let insWorkshopCompleted = 0;

    if (
      overall1 &&
      overall1.length > 1 &&
      overall2 &&
      overall2.length > 1 &&
      overall3 &&
      overall3.length > 1
    ) {
      civilTechCompleted = ((overall1[1].tech_actual / overall1[1].tech_overall)*100).toFixed(2);
      civilWorkshopCompleted = ((overall1[1].wks_actual / overall1[1].wks_overall)*100).toFixed(2);
  
      delTechCompleted = ((overall2[1].tech_actual / overall2[1].tech_overall)*100).toFixed(2);
      delWorkshopCompleted = ((overall2[1].wks_actual / overall2[1].wks_overall) * 100).toFixed(2);
  
      insTechCompleted = ((overall3[1].tech_actual / overall3[1].tech_overall)*100).toFixed(2);
      insWorkshopCompleted = ((overall3[1].wks_actual / overall3[1].wks_overall)*100).toFixed(2);
    }

    const { cluster1itidata1 } = this.state;
    const { cluster1itidata2 } = this.state;
    const { cluster1itidata3 } = this.state;
    const { cluster1itidata4 } = this.state;
    const { cluster1itidata5 } = this.state;
    const { cluster1itidata6 } = this.state;

    const { cluster1poldata1 } = this.state;
    const { cluster1poldata2 } = this.state;
    const { cluster1poldata3 } = this.state;
    const { cluster1poldata4 } = this.state;
    const { cluster1poldata5 } = this.state;
    const { cluster1poldata6 } = this.state;

    const { cluster2itidata1 } = this.state;
    const { cluster2itidata2 } = this.state;
    const { cluster2itidata3 } = this.state;
    const { cluster2itidata4 } = this.state;
    const { cluster2itidata5 } = this.state;
    const { cluster2itidata6 } = this.state;

    const { cluster2poldata1 } = this.state;
    const { cluster2poldata2 } = this.state;
    const { cluster2poldata3 } = this.state;
    const { cluster2poldata4 } = this.state;
    const { cluster2poldata5 } = this.state;
    const { cluster2poldata6 } = this.state;

    const { cluster3itidata1 } = this.state;
    const { cluster3itidata2 } = this.state;
    const { cluster3itidata3 } = this.state;
    const { cluster3itidata4 } = this.state;
    const { cluster3itidata5 } = this.state;
    const { cluster3itidata6 } = this.state;

    const { cluster3poldata1 } = this.state;
    const { cluster3poldata2 } = this.state;
    const { cluster3poldata3 } = this.state;
    const { cluster3poldata4 } = this.state;
    const { cluster3poldata5 } = this.state;
    const { cluster3poldata6 } = this.state;

    const { cluster4itidata1 } = this.state;
    const { cluster4itidata2 } = this.state;
    const { cluster4itidata3 } = this.state;
    const { cluster4itidata4 } = this.state;
    const { cluster4itidata5 } = this.state;
    const { cluster4itidata6 } = this.state;

    const { cluster4poldata1 } = this.state;
    const { cluster4poldata2 } = this.state;
    const { cluster4poldata3 } = this.state;
    const { cluster4poldata4 } = this.state;
    const { cluster4poldata5 } = this.state;
    const { cluster4poldata6 } = this.state;

    const cellContentsCivilTechHead = [
      "Basic Infra",
      "Flooring",
      "False Ceiling",
      "Internal Painting",
      "Windows",
      "Doors",
      "Aluminium Partition",
      "AC",
      "MCB",
      "Networking",
      "LT Pannel",
      "Electric Supply",
      "UPS",
      "External Painting",
      "Cleaning",
    ];
    const cellContentsCivilTech = [
      "Basic_Infra",
      "Flooring",
      "False_Ceiling",
      "Internal_Painting",
      "Windows",
      "Doors",
      "Aluminium_Partition",
      "AC",
      "MCB",
      "Networking",
      "LT_Pannel",
      "Electric_Supply",
      "UPS",
      "External_Painting",
      "Cleaning",
    ];
    const cellContentsDelTechHead = [
      "Furniture",
      "Server Rack",
      "Workstations and Monitors",
      "Server",
      "Distance Learning Classroom",
      "IOT Kit",
      "IOT Desktops",
      "3D Printer Tech1",
      "3D Printer Tech2",
      "TechTools Product Design1",
      "TechTools Product Design-2",
      "TechTools Product Verification-1",
      "TechTools Product Verification-2",
      "TechTools Advance Manufacturing",
      "E-Learning Platform",
    ];
    const cellContentsDelTech = [
      "Furniture",
      "Server_Rack",
      "Workstations_and_Monitors",
      "Server",
      "Distance_Learning_Classroom",
      "IOT_Kit",
      "IOT_Desktops",
      "D3_Printer_Tech1",
      "D3_Printer_Tech2",
      "Tech_Tools_Product_Design1",
      "Tech_Tools_Product_Design2",
      "Tech_Tools_Product_Verification1",
      "Tech_Tools_Product_Verification2",
      "Tech_Tools_Advance_Manufacturing1",
      "E_Learning_Platform",
    ];
    const cellContentsCivilWksHead = [
      "Basic Infra",
      "Flooring",
      "Internal Painting",
      "Windows",
      "Shutter",
      "Aluminium Partition",
      "AC",
      "MCB",
      "Networking",
      "LT Pannel",
      "Electric Supply",
      "UPS",
      "DG Set",
      "External Painting",
      "Cleaning",
      "Floor Painting",
    ];
    const cellContentsCivilWks = [
      "Basic_Infra",
      "Flooring",
      "Internal_Painting",
      "Windows",
      "Shutter",
      "Aluminium_Partition",
      "AC",
      "MCB",
      "Networking",
      "LT_Pannel",
      "Electric_Supply",
      "UPS",
      "DG_Set",
      "External_Painting",
      "Cleaning",
      "Floor_Painting",
    ];
    const cellContentsDelWksHead = [
      "Laser Cutter",
      "PaintBooth",
      "Car Lift",
      "Industrial Process Control Unit",
      "VR Welding & Painting",
      "Auto MRO Cut Sections",
      "Battery Electrical Vehicle",
      "IC Engine Vehicle",
      "EV Kit",
      "Industrial Robotics Setup",
      "VFD Machine",
      "Plumbing Kit",
      "CNC Machine",
      "VMC Machine",
      "Tools & Meters",
      "Advance Machining Simulators",
    ];

    const cellContentsDelWks = [
      "Laser_Cutter",
      "PaintBooth",
      "Car_Lift",
      "Industrial_Process_Control_Unit",
      "VR_Welding_and_Painting",
      "Auto_MRO_Cut_Sections",
      "Battery_Electrical_Vehicle",
      "IC_Engine_Vehicle",
      "EV_Kit",
      "Industrial_Robotics_Setup",
      "VFD_Machine",
      "Plumbing_Kit",
      "CNC_Machine",
      "VMC_Machine",
      "Tools_and_Meters",
      "Advance_Machining_Simulators",
    ];

    
    function renderIcon(val) {
      let color;
      if (val === -1) {
        color = "grey";
        return <Icon color={color} name="square" />;
      } else if (val === 0) {
        color = "yellow";
        return <Icon color={color} name="clock"  />;
      } else if (val === 1) {
        color = "green";
        return <Icon color={color} name="check circle" />;
      }
    }

    return (
      <div className="full-container">
        <div className="onepage">
          <div className="firstpagebox">
            <h1 className="heading-one">Overall Report: Assam ( Date: {this.state.currentDate} )</h1>
            <div className="overall-box">
              <Table bordered>
                <thead>
                  <tr>
                    <td className="grey-color">Execution Activity</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Overall Civil Readiness %</td>
                  </tr>
                  <tr>
                    <td>Overall Delivery Readiness %</td>
                  </tr>
                  <tr>
                    <td>Overall Installation Readiness %</td>
                  </tr>
                </tbody>
              </Table>
              <Table bordered>
                <thead>
                  <tr>
                    <td className="yellow-color" >TECHLAB</td>
                    <td className="blue-color" >WORKSHOP</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{civilTechCompleted} %</td>
                    <td> {civilWorkshopCompleted} %</td>
                  </tr>
                  <tr>
                    <td>{delTechCompleted} %</td>
                    <td>{delWorkshopCompleted} %</td>
                  </tr>
                  <tr>
                    <td>{insTechCompleted} %</td>
                    <td>{insWorkshopCompleted} %</td>
                  </tr>
                </tbody>
              </Table>
            </div>
           
            <Row className="clusterwise-chart-container">
              <Col className="bcc">
                <Barchart2 fid={7001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={7002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={8001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={8002} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={9001} />
              </Col>
              <Col className="bcc">
                <Barchart2 fid={9002} />
              </Col>
            </Row>
          </div>
        </div>
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: cluster 1 (ITI))</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster1itidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster1itidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster1itidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster1iti workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: cluster 1 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster1itidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster1itidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster1itidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: cluster1pol */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 1 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster1poldata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster1poldata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster1poldata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster1pol workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: Cluster 1 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster1poldata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster1poldata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster1poldata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: cluster2iti */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 2 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster2itidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster2itidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster2itidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster2iti workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 2 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster2itidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster2itidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster2itidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

    

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 2 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster2poldata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster2poldata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster2poldata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster2pol workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 2 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster2poldata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster2poldata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster2poldata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster cluster3iti */}
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 3 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster3itidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster3itidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster3itidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster2pol workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 3 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster3itidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster3itidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster3itidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster cluster3pol */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 3 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster3poldata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster3poldata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster3poldata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster3pol workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 3 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster3poldata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster3poldata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster3poldata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster cluster4iti */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 4 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster4itidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster4itidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster4itidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster4iti workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 4 ITI)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster4itidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster4itidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster4itidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster cluster4pol */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (Cluster 4 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>

                {cellContentsCivilTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data1  */}
              {cluster4poldata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data2 */}
              {cluster4poldata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelTechHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data3 */}
              {cluster4poldata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster4iti workshop */}
        <div className="onepage">
          <h3>WORKSHOP (Cluster 4 Polytechnic)</h3>
          {/* civil */}
          <div className="table-name">CIVIL</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsCivilWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data4 */}
              {cluster4poldata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* delivery */}
          <div className="table-name">Delivery</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data5 */}
              {cluster4poldata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {/* Installation */}
          <div className="table-name">Installation</div>
          <Table style={thStyle} bordered className="pdf-table">
            <thead>
              <tr>
                <th style={thStyle}>ITI NAME</th>
                {cellContentsDelWksHead.map((content) => (
                  <th style={thStyle} className="table-header">
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* cluster's data6 */}
              {cluster4poldata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {renderIcon(data[content])}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>


      </div>
    );
  }
}
export default DataComponent;
