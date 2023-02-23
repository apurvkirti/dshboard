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

      <Table className="td" celled collapsing striped>
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
              TECHNOLOGY LAB ( DELIVERY )
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
                  {renderIcon(data.Workstations_and_Monitors)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Server)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Distance_Learning_Classroom)}
                </Table.Cell>
          
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IOT_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IOT_Desktops)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.D3_Printer_Tech1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.D3_Printer_Tech2)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tech_Tools_Product_Design1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tech_Tools_Product_Design2)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tech_Tools_Product_Verification1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tech_Tools_Product_Verification2)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tech_Tools_Advance_Manufacturing1)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.E_Learning_Platform)}
                </Table.Cell>
            
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
