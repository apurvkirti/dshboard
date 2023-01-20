import React from "react";
import { Icon, Table, Button } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Read() {

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63c94eb3904f040a965b22d7.mockapi.io/fakenew`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    let { id, ITIName, Cluster, val1, val2, val3 } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("ITIName", ITIName);
    localStorage.setItem("Cluster", Cluster);
    localStorage.setItem("val1", val1);
    localStorage.setItem("val2", val2);
    localStorage.setItem("val3", val3);
    
    // console.log(data);
  };

  function renderIcon(val) {
    let color;
    if (val === "0") {
      color = "green";
    } else if (val === "1") {
      color = "yellow";
    } else if (val === "2") {
      color = "blue";
    }
    return <Icon color={color} name="check circle outline" size="large" />
  }

  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan="2">ITI Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Cluster</Table.HeaderCell>
          
          <Table.HeaderCell textAlign="center" colSpan="13">
            Workshop
          </Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Basic Infra</Table.HeaderCell>
          <Table.HeaderCell>Flooring</Table.HeaderCell>
          <Table.HeaderCell>Internal Painting</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row>
              <Table.Cell>{data.ITIName}</Table.Cell>
              <Table.Cell>{data.Cluster}</Table.Cell>

              <Table.Cell textAlign="center">
               
              {renderIcon(data.val1)}
              </Table.Cell>
              <Table.Cell textAlign="center">
               {renderIcon(data.val2)}
              </Table.Cell>
              <Table.Cell textAlign="center">
              {renderIcon(data.val3)}
              </Table.Cell>
              <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
