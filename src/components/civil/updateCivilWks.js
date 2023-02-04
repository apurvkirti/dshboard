import React from "react";
import { Icon, Table, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";


const form_Id = 1002; //1 for civil 2 for workshop
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NTA3MzcxNH0.l6NvZuYIt-P43B53uN1P_zAwmOWCgiB0uJhoyoU7-c4";


export default function UpdateForm(props) {
  let ClustName = (props.clust)?props.clust:"PATNA";
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
        `http://localhost:3000/api/getCluster/?form_Id=${form_Id}&cluster=${ClustName}`,
        { headers }
      )
      .then((response) => {
        setAPIData(response.data);
        //  console.log(`here is the form data initially ${formData.Basic_Infra}`);
        // setIsLoading(false);
      });
  }, [ClustName]);
  const setData = (data) => {
    let {
      customId,
      ITI_Name,
      Cluster,
      Basic_Infra,
      Flooring,
      Internal_Painting,
      Windows,
      Shutter,
      Aluminium_Partition,
      AC,
      MCB,
      Networking,
      LT_Pannel,
      Electric_Supply,
      UPS,
      DG_Set,
      External_Painting,
      Cleaning,
      Floor_Painting,
    } = data;
    localStorage.setItem("ID", customId);
    localStorage.setItem("ITI_Name", ITI_Name);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("Basic_Infra", Basic_Infra);
    localStorage.setItem("Flooring", Flooring);
    localStorage.setItem("Internal_Painting", Internal_Painting);
    localStorage.setItem("Windows", Windows);
    localStorage.setItem("Shutter", Shutter);
    localStorage.setItem("Aluminium_Partition", Aluminium_Partition);
    localStorage.setItem("AC", AC);
    localStorage.setItem("MCB", MCB);
    localStorage.setItem("Networking", Networking);
    localStorage.setItem("LT_Pannel", LT_Pannel);
    localStorage.setItem("Electric_Supply", Electric_Supply);
    localStorage.setItem("UPS", UPS);
    localStorage.setItem("DG_Set", DG_Set);
    localStorage.setItem("External_Painting", External_Painting);
    localStorage.setItem("Cleaning", Cleaning);
    localStorage.setItem("Floor_Painting", Floor_Painting);

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
    
   
    <h2 className="formheader">BSBCCL CIVIL STATUS</h2>
    <Table className="tc" celled structured collapsing >
      <Table.Header color="orange">
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

          <Table.HeaderCell textAlign="center" colSpan="16">
            WORKSHOP
          </Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell className="th">Basic Infra</Table.HeaderCell>
          <Table.HeaderCell className="th">Flooring</Table.HeaderCell>
          <Table.HeaderCell className="th">Internal Painting</Table.HeaderCell>
          <Table.HeaderCell className="th">Windows</Table.HeaderCell>
          <Table.HeaderCell className="th">Shutter</Table.HeaderCell>
          <Table.HeaderCell className="th">
            Aluminium Partition
          </Table.HeaderCell>
          <Table.HeaderCell className="th">AC</Table.HeaderCell>
          <Table.HeaderCell className="th">MCB</Table.HeaderCell>
          <Table.HeaderCell className="th">Networking</Table.HeaderCell>
          <Table.HeaderCell className="th">LT Panel</Table.HeaderCell>
          <Table.HeaderCell className="th">Electric Supply</Table.HeaderCell>
          <Table.HeaderCell className="th">UPS</Table.HeaderCell>
          <Table.HeaderCell className="th">DG Set</Table.HeaderCell>
          <Table.HeaderCell className="th">External Painting</Table.HeaderCell>
          <Table.HeaderCell className="th">Cleaning</Table.HeaderCell>
          <Table.HeaderCell className="th">Floor Painting</Table.HeaderCell>

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
                  value={data.Basic_Infra}
                  onChange={(e, { value }) => {
                    handleChange(data.customId, value, "Basic_Infra");
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
                {renderIcon(data.Basic_Infra)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Flooring}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Flooring");
                      switch (value) {
                        case -1:
                          NotificationManager.success(
                            `Updated ${data.ITI_Name}'s Flooring to Not yet started`,
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
                {renderIcon(data.Flooring)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Internal_Painting}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Internal_Painting");
                    }
                  }}
                />
                {renderIcon(data.Internal_Painting)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Windows}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Windows");
                    }
                  }}
                />
                {renderIcon(data.Windows)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Shutter}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Shutter");
                    }
                  }}
                />
                {renderIcon(data.Shutter)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Aluminium_Partition}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Aluminium_Partition");
                    }
                  }}
                />
                {renderIcon(data.Aluminium_Partition)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.AC}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "AC");
                    }
                  }}
                />
                {renderIcon(data.AC)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.MCB}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "MCB");
                    }
                  }}
                />
                {renderIcon(data.MCB)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Networking}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Networking");
                    }
                  }}
                />
                {renderIcon(data.Networking)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.LT_Pannel}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "LT_Pannel");
                    }
                  }}
                />
                {renderIcon(data.LT_Pannel)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Electric_Supply}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Electric_Supply");
                    }
                  }}
                />
                {renderIcon(data.Electric_Supply)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.UPS}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "UPS");
                    }
                  }}
                />
                {renderIcon(data.UPS)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.DG_Set}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "DG_Set");
                    }
                  }}
                />
                {renderIcon(data.DG_Set)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.External_Painting}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "External_Painting");
                    }
                  }}
                />
                {renderIcon(data.External_Painting)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Cleaning}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Cleaning");
                    }
                  }}
                />
                {renderIcon(data.Cleaning)}
              </Table.Cell>
              <Table.Cell textAlign="center" selectable>
                <Dropdown
                  options={options}
                  value={data.Floor_Painting}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.customId, value, "Floor_Painting");
                    }
                  }}
                />
                {renderIcon(data.Floor_Painting)}
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
