import React from "react";
import { Icon, Table, Button, Dropdown } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {NotificationManager,NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


// import { useAlert } from 'react-alert';
// import 'C:\Users\Apurv\Desktop\Tata full\tatafronted\dshboard\src\App.css';

export default function Read() {
  const options = [
    { key: "option1", text: "", value: "-1" },
    { key: "option2", text: "", value: "0" },
    { key: "option3", text: "", value: "1" },
  ];

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63c94eb3904f040a965b22d7.mockapi.io/fakenew`)
      // .get(`http://localhost:3000/api/103`)
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
    if (val === "-1") {
      color = "black";
    } else if (val === "0") {
      color = "yellow";
    } else if (val === "1") {
      color = "green";
    }
    return <Icon color={color} name="check circle outline" size="large" />;
  }
  function handleChange(id, value, val) {
    // Update the cell in the table
    setAPIData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          item[val] = value;
        }
        return item;
      })
    );
    
    // Update the backend using axios
    axios
      .put(`https://63c94eb3904f040a965b22d7.mockapi.io/fakenew/${id}`, {
        [val]: value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan="2">ITI Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Cluster</Table.HeaderCell>

          <Table.HeaderCell textAlign="center" colSpan="3">
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
                <Dropdown
                   options={options}
                   value={data.val1}
                   onChange={(e, {value}) => {
                     handleChange(data.id, value, "val1");
                     switch(value) {
                       case '-1':
                         NotificationManager.success(`Updated ${data.ITIName}'s Basic Infra to Not yet started`, '', 6000, {
                         });
                         break;
                       case '0':
                         NotificationManager.success('Updated to work in Progress', '', 6000, {
                         });
                         break;
                       case '1':
                         NotificationManager.success('Updated to work completed', '', 6000, {
                         });
                         break;
                       default:
                         break;
                     }
                   }}
                 
                />
                {renderIcon(data.val1)}
                
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Dropdown
                  options={options}
                  value={data.val2}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.id, value, "val2");
                    }
                  }}
                />
                {renderIcon(data.val2)}
              </Table.Cell>
              <Table.Cell textAlign="center">
                <Dropdown
                  options={options}
                  value={data.val3}
                  onChange={(e, { value }) => {
                    if (
                      window.confirm(
                        "Are you sure you want to update the progress?"
                      )
                    ) {
                      handleChange(data.id, value, "val3");
                    }
                  }}
                />
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
      <NotificationContainer className="notification-container"/>
    </Table>
   
  );
}
