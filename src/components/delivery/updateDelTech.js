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

const form_Id = 2001; //2 for delivery 1 for tech

export default function UpdateForm(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = props.clust ? props.clust : "PATNA";

  const options = [
    { key: "option1", text: "Yet to Start", value: -1 },
    { key: "option2", text: "Work in Progress", value: 0 },
    { key: "option3", text: "Completed", value: 1 },
  ];

  const [APIData, setAPIData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // Fetch prefilled data from the backend
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(
        `${apiUrl}/college/getCluster/?form_Id=${form_Id}&cluster=${ClustName}`,
        { headers }
      )
      .then((response) => {
        setAPIData(response.data);
      });
  }, [ClustName, jwt,apiUrl]);
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
    const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
    axios
      .patch(
        `${apiUrl}/college/update_tmp/?id=${customId}&form_Id=${form_Id}`,
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
    <div className="ttop">
      <div>
        <h2 className="formheader1">TTL Delivery Status</h2>
        <div className="legend">
          Yet to start: <Icon color="grey" name="check circle" size="large" />{" "}
          Work in progress:{" "}
          <Icon color="yellow" name="check circle" size="large" /> Completed:{" "}
          <Icon color="green" name="check circle" size="large" />
        </div>
      </div>
      <Table className="td" celled structured collapsing>
        <Table.Header>
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

            <Table.HeaderCell
              textAlign="center"
              colSpan="17"
              style={{ backgroundColor: "blue" }}
            >
              TECHNOLOGY LAB
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell className="th">Furniture</Table.HeaderCell>
            <Table.HeaderCell className="th">Server Rack</Table.HeaderCell>
            <Table.HeaderCell className="th">
              Dell Workstations
            </Table.HeaderCell>
            <Table.HeaderCell className="th">Dell Server</Table.HeaderCell>
            <Table.HeaderCell className="th">VSAT</Table.HeaderCell>
            <Table.HeaderCell className="th">VSAT Studio</Table.HeaderCell>
            <Table.HeaderCell className="th">
              IOT Kit and Sensors
            </Table.HeaderCell>
            <Table.HeaderCell className="th">IOTLab Laptop</Table.HeaderCell>
            <Table.HeaderCell className="th">D3 Printer EOS</Table.HeaderCell>
            <Table.HeaderCell className="th">D3 Printer 3DS</Table.HeaderCell>
            <Table.HeaderCell className="th">Laser Cutter</Table.HeaderCell>
            <Table.HeaderCell className="th">
              Product Design DS
            </Table.HeaderCell>
            <Table.HeaderCell className="th">POD CARVELCO</Table.HeaderCell>
            <Table.HeaderCell className="th">PVA ANSYS</Table.HeaderCell>
            <Table.HeaderCell className="th">PVA FEAST</Table.HeaderCell>
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
                              `Updated ${data.ITI_Name}'s Server_Rack to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Server_Rack to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Server_Rack marked Completed`,
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
                    value={data.Dell_Workstations}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Dell_Workstations");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Dell_Workstations to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Dell_Workstations to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Dell_Workstations marked Completed`,
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
                  {renderIcon(data.Dell_Workstations)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Dell_Server}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Dell_Server");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Dell_Server to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Dell_Server to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Dell_Server marked Completed`,
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
                  {renderIcon(data.Dell_Server)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.VSAT}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "VSAT");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s VSAT to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s VSAT to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s VSAT marked Completed`,
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
                  {renderIcon(data.VSAT)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.VSAT_Studio}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "VSAT_Studio");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s VSAT_Studio to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s VSAT_Studio to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s VSAT_Studio marked Completed`,
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
                  {renderIcon(data.VSAT_Studio)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IOT_Kit_and_Sensors}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(
                          data.customId,
                          value,
                          "IOT_Kit_and_Sensors"
                        );
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IOT_Kit_and_Sensors to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IOT_Kit_and_Sensors to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IOT_Kit_and_Sensors marked Completed`,
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
                  {renderIcon(data.IOT_Kit_and_Sensors)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IOTLab_Laptop}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "IOTLab_Laptop");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IOTLab_Laptop to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IOTLab_Laptop to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IOTLab_Laptop marked Completed`,
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
                  {renderIcon(data.IOTLab_Laptop)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.D3_Printer_EOS}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "D3_Printer_EOS");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s D3_Printer_EOS to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s D3_Printer_EOS to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s D3_Printer_EOS marked Completed`,
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
                  {renderIcon(data.D3_Printer_EOS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.D3_Printer_3DS}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "D3_Printer_3DS");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s D3_Printer_3DS to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s D3_Printer_3DS to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s D3_Printer_3DS marked Completed`,
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
                  {renderIcon(data.D3_Printer_3DS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Laser_Cutter}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Laser_Cutter");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Laser_Cutter to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Laser_Cutter to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Laser_Cutter marked Completed`,
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
                  {renderIcon(data.Laser_Cutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.Product_Design_DS}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "Product_Design_DS");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s Product_Design_DS to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s Product_Design_DS to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s Product_Design_DS marked Completed`,
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
                  {renderIcon(data.Product_Design_DS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.POD_CARVELCO}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "POD_CARVELCO");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s POD_CARVELCO to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s POD_CARVELCO to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s POD_CARVELCO marked Completed`,
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
                  {renderIcon(data.POD_CARVELCO)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.PVA_ANSYS}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "PVA_ANSYS");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s PVA_ANSYS to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s PVA_ANSYS to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s PVA_ANSYS marked Completed`,
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
                  {renderIcon(data.PVA_ANSYS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.MASTERCAM}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "MASTERCAM");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s MASTERCAM to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s MASTERCAM to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s MASTERCAM marked Completed`,
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
                  {renderIcon(data.MASTERCAM)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.PVA_FEAST}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "PVA_FEAST");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s PVA_FEAST to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s PVA_FEAST to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s PVA_FEAST marked Completed`,
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
                  {renderIcon(data.PVA_FEAST)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  <Dropdown
                    text=" "
                    options={options}
                    value={data.IGETIT}
                    onChange={(e, { value }) => {
                      if (window.confirm("Are you sure you want to Update?")) {
                        handleChange(data.customId, value, "IGETIT");
                        switch (value) {
                          case -1:
                            NotificationManager.info(
                              `Updated ${data.ITI_Name}'s IGETIT to Not yet started`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 0:
                            NotificationManager.warning(
                              `Updated ${data.ITI_Name}'s IGETIT to work in Progress`,
                              "",
                              6000,
                              {}
                            );
                            break;
                          case 1:
                            NotificationManager.success(
                              `${data.ITI_Name}'s IGETIT marked Completed`,
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
                  {renderIcon(data.IGETIT)}
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
