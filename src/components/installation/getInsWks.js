import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";
const fId = 3002; // 3 for installation and 2 for wks 


export default function MyComponent(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = (props.clust)?props.clust:"PATNA";
  const [data, setData] = useState([]);
  useEffect(() => {
    // const apiUrl = `http://localhost:3000/api/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
    const headers = {
      Authorization:
        `Bearer ${jwt}`,
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName,jwt]);

  // rendering Icon
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

  return (
    <div className="ttop">
      <div>
          <h2 className="formheader3">TTL Installation status</h2>
          <div className="legend">Yet to start: <Icon color= "grey" name="check circle" size="large" />  Work in progress: <Icon color="yellow" name="check circle" size="large" />  Completed: <Icon color="green" name="check circle" size="large" /></div>

      </div>

 
    <Table className="ti" celled structured collapsing color="orange" striped>
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

          <Table.HeaderCell textAlign="center" colSpan="15">
            Workshop
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
        {data.map((data) => {
          return (
            <Table.Row>
              <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
              <Table.Cell collapsing>{data.Cluster}</Table.Cell>
              <Table.Cell collapsing>{data.District}</Table.Cell>

              {/* cells */}

              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.Ind_Paint_Booth)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.Car_Lift)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.IPC_AVEVA)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.VR_welding_Painting)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.Auto_MRO_Cut_Sections)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.TIGOR_EV)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.TATA_Ace)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.EV_Kit)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.Industrial_Robotics)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.VFD)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.Plumbing_Kit)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.CNC_Tsugami)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.VMC_HAAS)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.HAAS_Tools_Meters)}
              </Table.Cell>
              <Table.Cell className="ttt" textAlign="center" selectable>
                {renderIcon(data.HAAS_Simulators)}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
    </div>
  );
}