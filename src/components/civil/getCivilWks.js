import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";
const fId = 1002; //1 for civil 2 for workshop 


export default function MyComponent(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = (props.clust)?props.clust:"PATNA";
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `/api/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
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
      <h2 className="formheader">BSBCCL Civil Status</h2>
      <Table className="tc" celled structured collapsing color="orange" striped>
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

            <Table.HeaderCell textAlign="center" colSpan="16">
              Workshop
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell className="th">Basic Infra</Table.HeaderCell>
            <Table.HeaderCell className="th">Flooring</Table.HeaderCell>
            <Table.HeaderCell className="th">
              Internal Painting
            </Table.HeaderCell>
            <Table.HeaderCell className="th">Windows</Table.HeaderCell>
            <Table.HeaderCell className="th">Shutter</Table.HeaderCell>
            <Table.HeaderCell className="th">
              Aluminium Partition
            </Table.HeaderCell>
            <Table.HeaderCell className="th">AC</Table.HeaderCell>
            <Table.HeaderCell className="th">MCB</Table.HeaderCell>
            <Table.HeaderCell className="th">Networking</Table.HeaderCell>
            <Table.HeaderCell className="th">LT Pannel</Table.HeaderCell>
            <Table.HeaderCell className="th">Electric Supply</Table.HeaderCell>
            <Table.HeaderCell className="th">UPS</Table.HeaderCell>
            <Table.HeaderCell className="th">DG Set</Table.HeaderCell>
            <Table.HeaderCell className="th">
              External Painting
            </Table.HeaderCell>
            <Table.HeaderCell className="th">Cleaning</Table.HeaderCell>
            <Table.HeaderCell className="th">Floor Painting</Table.HeaderCell>
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

                <Table.Cell  className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Basic_Infra)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Flooring)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Internal_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Windows)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Shutter)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Aluminium_Partition)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.AC)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.MCB)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Networking)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.LT_Pannel)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Electric_Supply)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.UPS)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.DG_Set)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.External_Painting)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Cleaning)}
                </Table.Cell>
                <Table.Cell className="ttt" textAlign="center" selectable>
                  {renderIcon(data.Floor_Painting)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
