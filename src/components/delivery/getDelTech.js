import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";
const fId = 2001; // 2 for delivery and 1 for tech
// const ClustName = "PATNA";

export default function MyComponent(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = props.clust ? props.clust : "PATNA";
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName, jwt]);

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
        <h2 className="formheader1">TTL Delivery Status</h2>

        <div className="legend">
          Yet to start: <Icon color="grey" name="check circle" size="large" />{" "}
          Work in progress:{" "}
          <Icon color="yellow" name="check circle" size="large" /> Completed:{" "}
          <Icon color="green" name="check circle" size="large" />
        </div>
      </div>

      <Table className="td" celled structured collapsing color="orange" striped>
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

            <Table.HeaderCell textAlign="center" colSpan="17">
              Technology Lab
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
            <Table.HeaderCell className="th">3D Printer EOS</Table.HeaderCell>
            <Table.HeaderCell className="th">3D Printer 3DS</Table.HeaderCell>
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
          {data.map((data) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>{data.ITI_Name}</Table.Cell>
                <Table.Cell collapsing>{data.Cluster}</Table.Cell>
                <Table.Cell collapsing>{data.District}</Table.Cell>

                {/* cells */}

                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Furniture)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Server_Rack)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Dell_Workstations)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Dell_Server)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.VSAT)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.VSAT_Studio)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IOT_Kit_and_Sensors)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IOTLab_Laptop)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.D3_Printer_EOS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.D3_Printer_3DS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Laser_Cutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Product_Design_DS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.POD_CARVELCO)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.PVA_ANSYS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.PVA_FEAST)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.MASTERCAM)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IGETIT)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
