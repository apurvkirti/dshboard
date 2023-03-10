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

const form_Id = 3001; //3 for workshop 1 for tech

export default function UpdateForminsttech(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = props.clust ? props.clust : "PATNA";

  const options = [
    { key: "option1", text: "Yet to Start", value: -1 },
    { key: "option2", text: "Work in Progress", value: 0 },
    { key: "option3", text: "Completed", value: 1 },
  ];

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    // Fetch prefilled data from the backend
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(
        `http://localhost:3000/api/getCluster/?form_Id=${form_Id}&cluster=${ClustName}`,
        { headers }
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, [ClustName, jwt]);
  const setData = (data) => {
    let {
      customId,
      ITI_Name,
      Cluster,
      Furniture,
      Server_Rack,
      Workstations_and_Monitors,
      Server,
      Distance_Learning_Classroom,
      IOT_Kit,
      IOT_Desktops,
      D3_Printer_Tech1,
      D3_Printer_Tech2,
      Tech_Tools_Product_Design1,
      Tech_Tools_Product_Design2,
      Tech_Tools_Product_Verification1,
      Tech_Tools_Product_Verification2,
      Tech_Tools_Advance_Manufacturing1,
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Furniture", Furniture);
    localStorage.setItem("Server_Rack", Server_Rack);
    localStorage.setItem(
      "Workstations_and_Monitors",
      Workstations_and_Monitors
    );
    localStorage.setItem("Server", Server);
    localStorage.setItem(
      "Distance_Learning_Classroom",
      Distance_Learning_Classroom
    );
    localStorage.setItem("IOT_Kit", IOT_Kit);
    localStorage.setItem("IOT_Desktops", IOT_Desktops);
    localStorage.setItem("D3_Printer_Tech1", D3_Printer_Tech1);
    localStorage.setItem("D3_Printer_Tech2", D3_Printer_Tech2);
    localStorage.setItem(
      "Tech_Tools_Product_Design1",
      Tech_Tools_Product_Design1
    );
    localStorage.setItem(
      "Tech_Tools_Product_Design2",
      Tech_Tools_Product_Design2
    );
    localStorage.setItem(
      "Tech_Tools_Product_Verification1",
      Tech_Tools_Product_Verification1
    );
    localStorage.setItem(
      "Tech_Tools_Product_Verification2",
      Tech_Tools_Product_Verification2
    );
    localStorage.setItem(
      "Tech_Tools_Advance_Manufacturing1",
      Tech_Tools_Advance_Manufacturing1
    );
  };

  // Handle form submission
  const temp = 1;
  if (temp === 2) setData();
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
      Authorization: `Bearer ${jwt}`,
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
        console.log("Updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="ttop">
      <div>
        <h2 className="formheader3">TTL Installation status</h2>
        <div className="legend">
          Yet to start: <Icon color="grey" name="check circle" size="large" />{" "}
          Work in progress:{" "}
          <Icon color="yellow" name="check circle" size="large" /> Completed:{" "}
          <Icon color="green" name="check circle" size="large" />
        </div>
      </div>
      <Table celled collapsing className="ti">
      <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              ITI Name
            </Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              Cluster
            </Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" rowSpan="3" textAlign="center">
              District
            </Table.HeaderCell>

            <Table.HeaderCell  id="teclab-heading" textAlign="center" colSpan="15">
              TECHNOLOGY LAB ( INSTALLATION )
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell id="base-techlab" className="th">Furniture</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">Server Rack</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">Workstations and Monitors</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">Server</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">Distance Learning Classroom</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">IOT Kit</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">IOT Desktops</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">3D Printer Tech-1</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">3D Printer Tech-2</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">TechTools Product Design 1</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">TechTools Product Design 2</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">TechTools Product Verification 1</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">TechTools Product Verification 2</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">TechTools Advance Manufacturing</Table.HeaderCell>
            <Table.HeaderCell id="base-techlab" className="th">E-Learning Platform</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
                <Table.Cell collapsing>{data.Cluster}</Table.Cell>
                <Table.Cell collapsing>{data.District}</Table.Cell>

                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Furniture}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Furniture");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Furniture to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Furniture to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Furniture marked Completed`,
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
                  {renderIcon(data.Furniture)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Server_Rack}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Server_Rack");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Server Rack to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Server Rack to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Server Rack marked Completed`,
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

                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Workstations_and_Monitors}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Workstations_and_Monitors");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Workstations_and_Monitors to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Workstations_and_Monitors to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Workstations_and_Monitors marked Completed`,
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
                  {renderIcon(data.Workstations_and_Monitors)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Server}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Server");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Server to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Server to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Server marked Completed`,
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
                  {renderIcon(data.Server)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Distance_Learning_Classroom}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Distance_Learning_Classroom");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Distance_Learning_Classroom to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Distance_Learning_Classroom to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Distance_Learning_Classroom marked Completed`,
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
                  {renderIcon(data.Distance_Learning_Classroom)}
                </Table.Cell>
               
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IOT_Kit}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "IOT_Kit"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IOT_Kit to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IOT_Kit to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IOT_Kit marked Completed`,
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
                  {renderIcon(data.IOT_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IOT_Desktops}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "IOT_Desktops");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IOT_Desktops to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IOT_Desktops to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IOT_Desktops marked Completed`,
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
                  {renderIcon(data.IOT_Desktops)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.D3_Printer_Tech1}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "D3_Printer_Tech1");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s 3D_Printer_Tech1 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s 3D_Printer_Tech1 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s 3D_Printer_Tech1 marked Completed`,
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
                  {renderIcon(data.D3_Printer_Tech1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.D3_Printer_Tech2}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "D3_Printer_Tech2");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s 3D_Printer_Tech2 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s 3D_Printer_Tech2 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s 3D_Printer_Tech2 marked Completed`,
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
                  {renderIcon(data.D3_Printer_Tech2)}
                </Table.Cell>
               
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tech_Tools_Product_Design1}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tech_Tools_Product_Design1");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Design1 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Design1 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tech_Tools_Product_Design1 marked Completed`,
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
                  {renderIcon(data.Tech_Tools_Product_Design1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tech_Tools_Product_Design2}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tech_Tools_Product_Design2");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Design2 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Design2 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tech_Tools_Product_Design2 marked Completed`,
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
                  {renderIcon(data.Tech_Tools_Product_Design2)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tech_Tools_Product_Verification1}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tech_Tools_Product_Verification1");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Verification1 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Verification1 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tech_Tools_Product_Verification1 marked Completed`,
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
                  {renderIcon(data.Tech_Tools_Product_Verification1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tech_Tools_Product_Verification2}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tech_Tools_Product_Verification2");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Verification2 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Product_Verification2 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tech_Tools_Product_Verification2 marked Completed`,
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
                  {renderIcon(data.Tech_Tools_Product_Verification2)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Tech_Tools_Advance_Manufacturing1}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Tech_Tools_Advance_Manufacturing1");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Advance_Manufacturing1 to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Tech_Tools_Advance_Manufacturing1 to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Tech_Tools_Advance_Manufacturing1 marked Completed`,
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
                  {renderIcon(data.Tech_Tools_Advance_Manufacturing1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.E_Learning_Platform}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "E_Learning_Platform");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s E_Learning_Platform to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s E_Learning_Platform to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s E_Learning_Platform marked Completed`,
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
                  {renderIcon(data.E_Learning_Platform)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <NotificationContainer className="notification-container" />
    </div>
  );
}
