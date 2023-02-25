import "./pdf.css";
import Table from "react-bootstrap/Table";
import React from "react";
import axios from "axios";

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
      patnadata1: [],
      patnadata2: [],
      patnadata3: [],
      patnadata4: [],
      patnadata5: [],
      patnadata6: [],
      motiharidata1: [],
      motiharidata2: [],
      motiharidata3: [],
      motiharidata4: [],
      motiharidata5: [],
      motiharidata6: [],
      katihardata1: [],
      katihardata2: [],
      katihardata3: [],
      katihardata4: [],
      katihardata5: [],
      katihardata6: [],
      muzzdata1: [],
      muzzdata2: [],
      muzzdata3: [],
      muzzdata4: [],
      muzzdata5: [],
      muzzdata6: [],
      mungerdata1: [],
      mungerdata2: [],
      mungerdata3: [],
      mungerdata4: [],
      mungerdata5: [],
      mungerdata6: [],
      nalandadata1: [],
      nalandadata2: [],
      nalandadata3: [],
      nalandadata4: [],
      nalandadata5: [],
      nalandadata6: [],
      rohtasdata1: [],
      rohtasdata2: [],
      rohtasdata3: [],
      rohtasdata4: [],
      rohtasdata5: [],
      rohtasdata6: [],
      supauldata1: [],
      supauldata2: [],
      supauldata3: [],
      supauldata4: [],
      supauldata5: [],
      supauldata6: [],
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };

    const endpoints1 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=PATNA`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=PATNA`,
    ];
    const endpoints2 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=MOTIHARI`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=MOTIHARI`,
    ];

    const endpoints3 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=KATIHAR`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=KATIHAR`,
    ];

    const endpoints4 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=MUZAFFARPUR`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=MUZAFFARPUR`,
    ];
    const endpoints5 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=Munger`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=Munger`,
    ];
    const endpoints6 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=NALANDA`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=NALANDA`,
    ];
    const endpoints7 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=ROHTAS`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=ROHTAS`,
    ];
    const endpoints8 = [
      `${apiUrl}/college/getCluster/?form_Id=1001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=2001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=3001&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=1002&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=2002&cluster=SUPAUL`,
      `${apiUrl}/college/getCluster/?form_Id=3002&cluster=SUPAUL`,
    ];

    endpoints1.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`patnadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints2.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`motiharidata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints3.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`katihardata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints4.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`muzzdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints5.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`mungerdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints6.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`nalandadata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints7.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`rohtasdata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });

    endpoints8.forEach((endpoint, index) => {
      axios
        .get(endpoint, { headers })
        .then((response) => {
          this.setState({ [`supauldata${index + 1}`]: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  render() {
    const { patnadata1 } = this.state;
    const { patnadata2 } = this.state;
    const { patnadata3 } = this.state;
    const { patnadata4 } = this.state;
    const { patnadata5 } = this.state;
    const { patnadata6 } = this.state;

    const { motiharidata1 } = this.state;
    const { motiharidata2 } = this.state;
    const { motiharidata3 } = this.state;
    const { motiharidata4 } = this.state;
    const { motiharidata5 } = this.state;
    const { motiharidata6 } = this.state;

    const { katihardata1 } = this.state;
    const { katihardata2 } = this.state;
    const { katihardata3 } = this.state;
    const { katihardata4 } = this.state;
    const { katihardata5 } = this.state;
    const { katihardata6 } = this.state;

    const { muzzdata1 } = this.state;
    const { muzzdata2 } = this.state;
    const { muzzdata3 } = this.state;
    const { muzzdata4 } = this.state;
    const { muzzdata5 } = this.state;
    const { muzzdata6 } = this.state;

    const { mungerdata1 } = this.state;
    const { mungerdata2 } = this.state;
    const { mungerdata3 } = this.state;
    const { mungerdata4 } = this.state;
    const { mungerdata5 } = this.state;
    const { mungerdata6 } = this.state;

    const { nalandadata1 } = this.state;
    const { nalandadata2 } = this.state;
    const { nalandadata3 } = this.state;
    const { nalandadata4 } = this.state;
    const { nalandadata5 } = this.state;
    const { nalandadata6 } = this.state;

    const { rohtasdata1 } = this.state;
    const { rohtasdata2 } = this.state;
    const { rohtasdata3 } = this.state;
    const { rohtasdata4 } = this.state;
    const { rohtasdata5 } = this.state;
    const { rohtasdata6 } = this.state;

    const { supauldata1 } = this.state;
    const { supauldata2 } = this.state;
    const { supauldata3 } = this.state;
    const { supauldata4 } = this.state;
    const { supauldata5 } = this.state;
    const { supauldata6 } = this.state;

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
      "IO Engine Vehicle",
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
      "IO_Engine_Vehicle",
      "EV_Kit",
      "Industrial_Robotics_Setup",
      "VFD_Machine",
      "Plumbing_Kit",
      "CNC_Machine",
      "VMC_Machine",
      "Tools_and_Meters",
      "Advance_Machining_Simulators",
    ];

    return (
      <div className="full-container">
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: PATNA)</h3>
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
              {patnadata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {patnadata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {patnadata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* patna workshop */}
        <div className="onepage">
          <h3>WORKSHOP</h3>
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
              {patnadata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {patnadata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {patnadata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: katihar */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: KATIHAR)</h3>
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
              {katihardata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {katihardata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {katihardata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* katihar workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: KATIHAR)</h3>
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
              {katihardata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {katihardata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {katihardata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster: motihari */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MOTIHARI)</h3>
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
              {motiharidata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {motiharidata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {motiharidata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* motihari workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MOTIHARI)</h3>
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
              {motiharidata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {motiharidata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {motiharidata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzaffarpur */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MUZAFFARPUR)</h3>
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
              {muzzdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {muzzdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {muzzdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzz workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MUZAFFARPUR)</h3>
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
              {muzzdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {muzzdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {muzzdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster munger */}
        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: MUNGER)</h3>
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
              {mungerdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {mungerdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {mungerdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* muzz workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: MUNGER)</h3>
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
              {mungerdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {mungerdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {mungerdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster nalanda */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: NALANDA)</h3>
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
              {nalandadata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {nalandadata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {nalandadata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* nalanda workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: NALANDA)</h3>
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
              {nalandadata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {nalandadata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {nalandadata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster rohtas */}

        <div className="onepage">
          <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: ROHTAS)</h3>
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
              {rohtasdata1.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {rohtasdata2.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {rohtasdata3.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelTech.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* rohtas workshop */}
        <div className="onepage">
          <h3>WORKSHOP (CLUSTER: ROHTAS)</h3>
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
              {rohtasdata4.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsCivilWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {rohtasdata5.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
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
              {rohtasdata6.map((data) => {
                return (
                  <tr>
                    <td style={thStyle} className="table-data">
                      {data.ITI_Name}
                    </td>
                    {cellContentsDelWks.map((content) => (
                      <td style={thStyle} className="table-data">
                        {data[content]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        {/* cluster supaul */}

        <div className="onepage">
         
         <h3 className="table-name">TECHNOLOGY LAB (CLUSTER: SUPAUL)</h3>
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
             {supauldata1.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsCivilTech.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
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
             {supauldata2.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsDelTech.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
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
             {supauldata3.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsDelTech.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
                     </td>
                   ))}
                 </tr>
               );
             })}
           </tbody>
         </Table>
       </div>

       {/* rohtas workshop */}
       <div className="onepage">
         <h3>WORKSHOP (CLUSTER: SUPAUL)</h3>
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
             {supauldata4.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsCivilWks.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
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
             {supauldata5.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsDelWks.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
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
             {supauldata6.map((data) => {
               return (
                 <tr>
                   <td style={thStyle} className="table-data">
                     {data.ITI_Name}
                   </td>
                   {cellContentsDelWks.map((content) => (
                     <td style={thStyle} className="table-data">
                       {data[content]}
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
