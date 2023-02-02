import React from "react";
import { Icon, Table, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
// import "../stylesheets/del.css";

// import { Link } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Cluster = "PATNA";
const form_Id = 3001; //3 for workshop 1 for tech
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMywidXNlcm5hbWUiOiJ1c2VyMyIsImlhdCI6MTY3NTA2MzEwM30.nfLryFeBG18l4hrUTUTRTWPrWziQhWvmwacyN3b16bc";


export default function UpdateForminsttech() {




  const options = [
    { key: "option1", text: "", value: -1 },
    { key: "option2", text: "", value: 0 },
    { key: "option3", text: "", value: 1 },
  ];


  const [APIData, setAPIData] = useState([]);

  

  useEffect(() => {
    // Fetch prefilled data from the backend
    const headers = {
      Authorization:
        `Bearer ${token}`,
    };
    axios
      .get(
        `http://localhost:3000/api/getCluster/?form_Id=${form_Id}&cluster=${Cluster}`,
        { headers }
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const setData = (data) => {
    let {
      customId,
      ITI_Name,
      Cluster,
      Furniture,
      Server_Rack,
      Dell_Workstations,
      Dell_Server,
      VSAT,
      VSAT_Studio,
      IOT_Kit_and_Sensors,
      IOTLab_Laptop,
      D3_Printer_EOS,
      D3_Printer_3DS,
      Laser_Cutter,
      Product_Design_DS,
      POD_CARVELCO,
      PVA_ANSYS,
      PVA_FEAST,
      MASTERCAM,
      IGETIT,
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Furniture", Furniture);
    localStorage.setItem("Server_Rack", Server_Rack);
    localStorage.setItem("Dell_Workstations", Dell_Workstations);
    localStorage.setItem("Dell_Server", Dell_Server);
    localStorage.setItem("VSAT", VSAT);
    localStorage.setItem("VSAT_Studio", VSAT_Studio);
    localStorage.setItem("IOT_Kit_and_Sensors", IOT_Kit_and_Sensors);
    localStorage.setItem("IOTLab_Laptop", IOTLab_Laptop);
    localStorage.setItem("D3_Printer_EOS", D3_Printer_EOS);
    localStorage.setItem("D3_Printer_3DS", D3_Printer_3DS);
    localStorage.setItem("Laser_Cutter", Laser_Cutter);
    localStorage.setItem("Product_Design_DS", Product_Design_DS);
    localStorage.setItem("POD_CARVELCO", POD_CARVELCO);
    localStorage.setItem("PVA_ANSYS", PVA_ANSYS);
    localStorage.setItem("PVA_FEAST", PVA_FEAST);
    localStorage.setItem("MASTERCAM", MASTERCAM);
    localStorage.setItem("IGETIT", IGETIT);
    
   
    // console.log(data);
  };

  // Handle form submission
  const temp = 1;
  if(temp === 2) setData();
  function renderIcon(val) {
    let color;
    if (val === -1) {
      color = "grey";
    } else if (val === 0) {
      color = "yellow";
    } else if (val === 1) {
      color = "green";
    }
    return <Icon color={color} name="check circle" size="large" />;
  }

  function handleChange(customId, value, val) {
    setAPIData((prevData) =>
      prevData.map((item) => {
        if (item.customId === customId) {
          item[val] = value;
        }
        return item;
      })
    );
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        `Bearer ${token}`,
    };
    axios
      .patch(
        `http://localhost:3000/api/update_tmp/?id=${customId}&form_Id=${form_Id}`,
        {
          [val]: value,
        },
        { headers }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
   
  return (
    <div>
    <h2 className="topheader1">TTL Installation status</h2>
    <Table celled structured collapsing className="tabcontainer">
      <Table.Header >
        <Table.Row>
          <Table.HeaderCell rowSpan="3" textAlign="center">
            ITI Name
          </Table.HeaderCell>
          <Table.HeaderCell rowSpan="3" textAlign="center">
            Cluster
          </Table.HeaderCell>
          <Table.HeaderCell rowSpan="3" textAlign="center">
            District
          </Table.HeaderCell>

          <Table.HeaderCell textAlign="center" colSpan="17" style={{backgroundColor: "blue"}}>
            TECHNOLOGY LAB
          </Table.HeaderCell>
        </Table.Row>
        
        <Table.Row>
          <Table.HeaderCell className="th">Furniture</Table.HeaderCell>
          <Table.HeaderCell className="th">Server_Rack</Table.HeaderCell>
          <Table.HeaderCell className="th">Dell_Workstations</Table.HeaderCell>
          <Table.HeaderCell className="th">Dell_Server</Table.HeaderCell>
          <Table.HeaderCell className="th">VSAT</Table.HeaderCell>
          <Table.HeaderCell className="th">VSAT_Studio</Table.HeaderCell>
          <Table.HeaderCell className="th">IOT_Kit_and_Sensors</Table.HeaderCell>
          <Table.HeaderCell className="th">IOTLab_Laptop</Table.HeaderCell>
          <Table.HeaderCell className="th">D3_Printer_EOS</Table.HeaderCell>
          <Table.HeaderCell className="th">D3_Printer_3DS</Table.HeaderCell>
          <Table.HeaderCell className="th">Laser_Cutter</Table.HeaderCell>
          <Table.HeaderCell className="th">Product_Design_DS</Table.HeaderCell>
          <Table.HeaderCell className="th">POD_CARVELCO</Table.HeaderCell>
          <Table.HeaderCell className="th">PVA_ANSYS</Table.HeaderCell>
          <Table.HeaderCell className="th">PVA_FEAST</Table.HeaderCell>
          <Table.HeaderCell className="th">MASTERCAM</Table.HeaderCell>
          <Table.HeaderCell className="th">IGETIT</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row>
              <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
              <Table.Cell collapsing>{data.Cluster}</Table.Cell>
              <Table.Cell collapsing>{data.District}</Table.Cell>

              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Furniture}
                  onChange={(e, { value }) => {
                    handleChange(data.customId, value, "Furniture");
                    switch (value) {
                      case -1:
                        NotificationManager.success(
                          `Updated ${data.ITI_Name}'s Basic Infra to Not yet started`,
                          "",
                          6000,
                          {}
                        );
                        break;
                      case 0:
                        NotificationManager.success(
                          "Updated to work in Progress",
                          "",
                          6000,
                          {}
                        );
                        break;
                      case 1:
                        NotificationManager.success(
                          "Updated to work completed",
                          "",
                          6000,
                          {}
                        );
                        break;
                      default:
                        break;
                    }
                  }}
                />
                {renderIcon(data.Furniture)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Server_Rack}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Server_Rack");
                      switch (value) {
                        case -1:
                          NotificationManager.success(
                            `Updated ${data.ITI_Name}'s Server_Rack to Not yet started`,
                            "",
                            6000,
                            {}
                          );
                          break;
                        case 0:
                          NotificationManager.success(
                            "Updated to work in Progress",
                            "",
                            6000,
                            {}
                          );
                          break;
                        case 1:
                          NotificationManager.success(
                            "Updated to work completed",
                            "",
                            6000,
                            {}
                          );
                          break;
                        default:
                          break;
                      }
                    }
                  }}
                />
                {renderIcon(data.Server_Rack)}
              </Table.Cell>

              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Dell_Workstations}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Dell_Workstations");
                    }
                  }}
                />
                {renderIcon(data.Dell_Workstations)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Dell_Server}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Dell_Server");
                    }
                  }}
                />
                {renderIcon(data.Dell_Server)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.VSAT}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "VSAT");
                    }
                  }}
                />
                {renderIcon(data.VSAT)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.VSAT_Studio}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "VSAT_Studio");
                    }
                  }}
                />
                {renderIcon(data.VSAT_Studio)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.IOT_Kit_and_Sensors}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "IOT_Kit_and_Sensors");
                    }
                  }}
                />
                {renderIcon(data.IOT_Kit_and_Sensors)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.IOTLab_Laptop}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "IOTLab_Laptop");
                    }
                  }}
                />
                {renderIcon(data.IOTLab_Laptop)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.D3_Printer_EOS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "D3_Printer_EOS");
                    }
                  }}
                />
                {renderIcon(data.D3_Printer_EOS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.D3_Printer_3DS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "D3_Printer_3DS");
                    }
                  }}
                />
                {renderIcon(data.D3_Printer_3DS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Laser_Cutter}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Laser_Cutter");
                    }
                  }}
                />
                {renderIcon(data.Laser_Cutter)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Product_Design_DS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Product_Design_DS");
                    }
                  }}
                />
                {renderIcon(data.Product_Design_DS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.POD_CARVELCO}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "POD_CARVELCO");
                    }
                  }}
                />
                {renderIcon(data.POD_CARVELCO)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.PVA_ANSYS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "PVA_ANSYS");
                    }
                  }}
                />
                {renderIcon(data.PVA_ANSYS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.MASTERCAM}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "MASTERCAM");
                    }
                  }}
                />
                {renderIcon(data.MASTERCAM)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.PVA_FEAST}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "PVA_FEAST");
                    }
                  }}
                />
                {renderIcon(data.PVA_FEAST)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.IGETIT}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "IGETIT");
                    }
                  }}
                />
                {renderIcon(data.IGETIT)}
              </Table.Cell>
              
            </Table.Row>
          );
        })}
      </Table.Body>
      <NotificationContainer className="notification-container" />
    </Table>
    </div>
  );
}