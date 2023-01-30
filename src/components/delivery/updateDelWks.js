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
const form_Id = 2002;//2 for delivery and 2 for workshop
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMiwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTY3NTA4MTE1NX0.QOwxz1p_d1w69IsvNoPGntwQw0ull8cmFYVDVTZQEho";


export default function UpdateForm() {

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
      Ind_Paint_Booth,
      Car_Lift,
      IPC_AVEVA,
      VR_welding_Painting,
      Auto_MRO_Cut_Sections,
      TIGOR_EV,
      TATA_Ace,
      EV_Kit,
      Industrial_Robotics,
      VFD,
      Plumbing_Kit,
      CNC_Tsugami,
      VMC_HAAS,
      HAAS_Tools_Meters,
      HAAS_Simulators,
  
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Ind_Paint_Booth", Ind_Paint_Booth);
    localStorage.setItem("Car_Lift", Car_Lift);
    localStorage.setItem("IPC_AVEVA", IPC_AVEVA);
    localStorage.setItem("VR_welding_Painting", VR_welding_Painting);
    localStorage.setItem("Auto_MRO_Cut_Sections", Auto_MRO_Cut_Sections);
    localStorage.setItem("TIGOR_EV", TIGOR_EV);
    localStorage.setItem("TATA_Ace", TATA_Ace);
    localStorage.setItem("EV_Kit", EV_Kit);
    localStorage.setItem("Industrial_Robotics", Industrial_Robotics);
    localStorage.setItem("VFD", VFD);
    localStorage.setItem("Plumbing_Kit", Plumbing_Kit);
    localStorage.setItem("CNC_Tsugami", CNC_Tsugami);
    localStorage.setItem("VMC_HAAS", VMC_HAAS);
    localStorage.setItem("HAAS_Tools_Meters", HAAS_Tools_Meters);
    localStorage.setItem("HAAS_Simulators", HAAS_Simulators);

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
    <h2 className="topheader1">TTL Delivery Status</h2>
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

          <Table.HeaderCell textAlign="center" colSpan="15" style={{backgroundColor: "blue"}}>
            WORKSHOP
          </Table.HeaderCell>
        </Table.Row>
        
        <Table.Row>
          <Table.HeaderCell className="th">Ind Paint Booth</Table.HeaderCell>
          <Table.HeaderCell className="th">Car Lift</Table.HeaderCell>
          <Table.HeaderCell className="th">IPC AVEVA</Table.HeaderCell>
          <Table.HeaderCell className="th">VR Welding Painting</Table.HeaderCell>
          <Table.HeaderCell className="th">Auto MRO Cut Sections</Table.HeaderCell>
          <Table.HeaderCell className="th">TIGOR EV</Table.HeaderCell>
          <Table.HeaderCell className="th">TATA Ace</Table.HeaderCell>
          <Table.HeaderCell className="th">EV Kit</Table.HeaderCell>
          <Table.HeaderCell className="th">Industrial Robotics</Table.HeaderCell>
          <Table.HeaderCell className="th">VFD</Table.HeaderCell>
          <Table.HeaderCell className="th">Plumbing Kit</Table.HeaderCell>
          <Table.HeaderCell className="th">CNC Tsugami</Table.HeaderCell>
          <Table.HeaderCell className="th">VMC HAAS</Table.HeaderCell>
          <Table.HeaderCell className="th">HAAS Tools Meters</Table.HeaderCell>
          <Table.HeaderCell className="th">HAAS Simulators</Table.HeaderCell>
         
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
                  value={data.Ind_Paint_Booth}
                  onChange={(e, { value }) => {
                    handleChange(data.customId, value, "Ind_Paint_Booth");
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
                {renderIcon(data.Ind_Paint_Booth)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Car_Lift}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Car_Lift");
                      switch (value) {
                        case -1:
                          NotificationManager.success(
                            `Updated ${data.ITI_Name}'s Car_Lift to Not yet started`,
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
                {renderIcon(data.Car_Lift)}
              </Table.Cell>

              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.IPC_AVEVA}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "IPC_AVEVA");
                    }
                  }}
                />
                {renderIcon(data.IPC_AVEVA)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.VR_welding_Painting}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "VR_welding_Painting");
                    }
                  }}
                />
                {renderIcon(data.VR_welding_Painting)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Auto_MRO_Cut_Sections}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Auto_MRO_Cut_Sections");
                    }
                  }}
                />
                {renderIcon(data.Auto_MRO_Cut_Sections)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.TIGOR_EV}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "TIGOR_EV");
                    }
                  }}
                />
                {renderIcon(data.TIGOR_EV)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.TATA_Ace}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "TATA_Ace");
                    }
                  }}
                />
                {renderIcon(data.TATA_Ace)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.EV_Kit}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "EV_Kit");
                    }
                  }}
                />
                {renderIcon(data.EV_Kit)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Industrial_Robotics}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Industrial_Robotics");
                    }
                  }}
                />
                {renderIcon(data.Industrial_Robotics)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.VFD}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "VFD");
                    }
                  }}
                />
                {renderIcon(data.VFD)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Plumbing_Kit}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Plumbing_Kit");
                    }
                  }}
                />
                {renderIcon(data.Plumbing_Kit)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.CNC_Tsugami}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "CNC_Tsugami");
                    }
                  }}
                />
                {renderIcon(data.CNC_Tsugami)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.VMC_HAAS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "VMC_HAAS");
                    }
                  }}
                />
                {renderIcon(data.VMC_HAAS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.HAAS_Tools_Meters}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "HAAS_Tools_Meters");
                    }
                  }}
                />
                {renderIcon(data.HAAS_Tools_Meters)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.HAAS_Simulators}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "HAAS_Simulators");
                    }
                  }}
                />
                {renderIcon(data.HAAS_Simulators)}
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