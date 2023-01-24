import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table } from "semantic-ui-react";
const fId = 1001; // for selecting form among cl_tlab, cl_wkshp, dlv_tlab, dlv_wkshp, ins_tlab, int_wkshp
const ClustName = "PATNA";




export default function MyComponent() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/getCluster/?form_Id=${fId}&cluster=${ClustName}`;
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTY3NDQ1NjM2MX0.JIRtmiHXnrUnUUA53RgTE3p1HTNr-l0t1jbwqBistQ8",
    };
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  function renderIcon(val) {
    let color;
    if (val === "-1") {
      color = "black";
    } else if (val === "0") {
      color = "yellow";
    } else if (val === "1") {
      color = "green";
    }
    return <Icon color={color} name="check circle outline" size="large" />;
  }
  

  return (
    // <Container className="table-container">
      <Table celled structured collapsing color="orange" striped >
        <Table.Header color = "orange">
          <Table.Row>
            <Table.HeaderCell rowSpan="3" textAlign="center">ITI Name</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3" textAlign="center">Cluster</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3" textAlign="center">District</Table.HeaderCell>

            <Table.HeaderCell textAlign="center" colSpan="15">
              Workshop
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row rowSpan="10" colSpan="10">
            <Table.HeaderCell className="th" >Basic Infra</Table.HeaderCell>
            <Table.HeaderCell className="th" >Flooring</Table.HeaderCell>
            <Table.HeaderCell className="th" >False Ceiling</Table.HeaderCell>
            <Table.HeaderCell className="th" >Internal Painting</Table.HeaderCell>
            <Table.HeaderCell className="th" >Windows</Table.HeaderCell>
            <Table.HeaderCell className="th" >Doors</Table.HeaderCell>
            <Table.HeaderCell className="th" >Aluminium Partition</Table.HeaderCell>
            <Table.HeaderCell className="th" >AC</Table.HeaderCell>
            <Table.HeaderCell className="th" >MCB</Table.HeaderCell>
            <Table.HeaderCell className="th" >Networking</Table.HeaderCell>
            <Table.HeaderCell className="th" >LT Pannel</Table.HeaderCell>
            <Table.HeaderCell className="th" >Electric Supply</Table.HeaderCell>
            <Table.HeaderCell className="th" >UPS</Table.HeaderCell>
            <Table.HeaderCell className="th" >External Painting</Table.HeaderCell>
            <Table.HeaderCell className="th" >Cleaning</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((dataa) => {
            return (
              <Table.Row>
                <Table.Cell collapsing>{dataa.ITI_Name}</Table.Cell>
                <Table.Cell collapsing>{dataa.Cluster}</Table.Cell>
                <Table.Cell collapsing>{dataa.District}</Table.Cell>
 
                <Table.Cell textAlign="center"  selectable>




                  {renderIcon(dataa.Basic_Infra)}
                  </Table.Cell>





                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Flooring)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.False_Ceiling)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Internal_Painting)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Windows)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Doors)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Aluminium_Partition)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.AC)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.MCB)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Networking)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.LT_Pannel)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Electric_Supply)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.UPS)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.External_Painting)}</Table.Cell>
                <Table.Cell textAlign="center"  selectable>{renderIcon(dataa.Cleaning)}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    //  </Container>
  );
}
