import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";
const fId = 2002; // 2 for delivery and 2 for wks

export default function MyComponent(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = props.clust ? props.clust : "PATNA";
  const [data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_URL_PROD
      : process.env.REACT_APP_API_URL_DEV;
  useEffect(() => {
    // const apiUrl = `${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
    const headers = {
      Authorization: `Bearer ${jwt}`,
    };
    axios
      .get(`${apiUrl}/college/getCluster/?form_Id=${fId}&cluster=${ClustName}`, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ClustName, jwt, apiUrl]);

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
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              {" "}
              ITI Name
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              {" "}
              Cluster
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" rowSpan="3" textAlign="center">
              District
            </Table.HeaderCell>
            <Table.HeaderCell
              id="workshop-heading"
              textAlign="center"
              colSpan="16"
            >
              WORKSHOP ( DELIVERY )
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell id="base-workshop" className="th">
              Laser Cutter
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              PaintBooth
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Car Lift
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Industrial Process Control Unit
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              VR Welding & Painting
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Auto MRO Cut Sections
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Battery Electrical Vehicle
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              IO Engine Vehicle
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              EV Kit
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Industrial Robotics Setup
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              VFD Machine
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Plumbing Kit
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              CNC Machine
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              VMC Machine
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Tools & Meters
            </Table.HeaderCell>
            <Table.HeaderCell id="base-workshop" className="th">
              Advance Machining Simulators
            </Table.HeaderCell>
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
                  {renderIcon(data.Laser_Cutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.PaintBooth)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Car_Lift)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Industrial_Process_Control_Unit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.VR_Welding_and_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Auto_MRO_Cut_Sections)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Battery_Electrical_Vehicle)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.IO_Engine_Vehicle)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.EV_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Industrial_Robotics_Setup)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.VFD_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Plumbing_Kit)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.CNC_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.VMC_Machine)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Tools_and_Meters)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Advance_Machining_Simulators)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
