import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, Table, Popup } from "semantic-ui-react";
import Button from "react-bootstrap/Button";

// import { useNavigate } from "react-router-dom";

export default function Course(props) {
  const jwt = localStorage.getItem("jwt");
  let ClustName = props.clust ? props.clust : "PATNA";

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:3000/course/byCluster?Cluster=${ClustName}`;
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

  function renderIcon(val) {
    let color;
    if (val === 0) {
      color = "grey";
    } else if (val === 1) {
      color = "blue";
    }
    return <Icon color={color} name="check circle" size="small" />;
  }

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e, key, collegeId) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/course/updateDate?collegeId=${collegeId}`,
        {
          key,
          startDate,
          endDate,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate;
  }
  const job = [
    "Innovation_Design_Thinking",
    "Jr_Product_Designer",
    "Jr_Prod_Designer_Developer",
    "Auto_Electrical_Design_Technician",
    "Product_Verifier_Analyst",
    "Auto_Teardown_Benchmarking",
    "Advanced_Automobile",
    "Auto_Repair_Maintainance",
    "Auto_Electrical_Maintainance",
    "Battery_EV_Technician",
    "IOT_Application_Technician",
    "CAM_Prog_CNC_Lathe",
    "CAM_Programmer_CNC_Milling",
    "CNC_Milling_Machine_Technician",
    "CNC_Lathe_Machine",
    "Advance_CNC_Machining",
    "Additive_Manufacturing_Process",
    "Welding_Technician",
    "Advanced_Painting_Technician",
    "Process_Control_Automation",
    "Robot_Operator_Programmer_Material",
    "Robot_Operator_Programmer_Arc",
    "Advanced_Plumbing_Technician",
  ];

  

  return (
    <>
      <div className="coursecontainer">
        <div>
          <h2 className="formheader4">Courses</h2>
          <div className="legend">
            Yet to start: <Icon color="grey" name="check circle" size="small" />{" "}
            Started:
            <Icon color="blue" name="check circle" size="small" />
          </div>
        </div>
        <Table className="coursestable" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">ITI NAME</Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Innovation_Design_Thinking
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Jr_Product_Designer
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Jr_Prod_Designer_Developer
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Auto_Electrical_Design_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Product_Verifier_Analyst
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Auto_Teardown_Benchmarking
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Advanced_Automobile
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Auto_Repair_Maintainance
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Auto_Electrical_Maintainance
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Battery_EV_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                IOT_Application_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                CAM_Prog_CNC_Lathe
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                CAM_Programmer_CNC_Milling
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                CNC_Milling_Machine_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                CNC_Lathe_Machine
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Advance_CNC_Machining
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Additive_Manufacturing_Process
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Welding_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Advanced_Painting_Technician
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Process_Control_Automation
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Robot_Operator_Programmer_Material
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Robot_Operator_Programmer_Arc
              </Table.HeaderCell>
              <Table.HeaderCell className="th2">
                Advanced_Plumbing_Technician
              </Table.HeaderCell>
         
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell collapsing className="itiname">
                    {data.ITI_Name}
                  </Table.Cell>

                  {job.map((jobTitle) => (
                    <Table.Cell key={jobTitle} textAlign="center" selectable>
                      {data[jobTitle].changeStatus === 1 ? (
                        <Popup
                          hoverable
                          trigger={
                            <div>{renderIcon(data[jobTitle].changeStatus)}</div>
                          }
                          content={
                            <div style={{ width: "15vw", height: "10vh" }}>
                              <p>
                                Start Date:{" "}
                                {formatDate(data[jobTitle].startDate)}
                              </p>
                              <p>
                                End Date: {formatDate(data[jobTitle].endDate)}
                              </p>
                            </div>
                          }
                        />
                      ) : (
                        <Popup
                          trigger={
                            <div>{renderIcon(data[jobTitle].changeStatus)}</div>
                          }
                          content={
                            <div style={{ width: "22vw", height: "25vh" }}>
                              <form
                                className="noticeform"
                                onSubmit={(e) =>
                                  handleSubmit(e, jobTitle, data.customId)
                                }
                              >
                                <div className="titlearea">
                                  Start date:
                                  <input
                                    className="inputtitle"
                                    type="date"
                                    value={startDate}
                                    onChange={(e) =>
                                      setStartDate(e.target.value)
                                    }
                                    required
                                  />
                                </div>

                                <div className="titlearea">
                                  End Date:
                                  <input
                                    className="inputtitle"
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="buttonnotice">
                                  <Button
                                    className="addnotice"
                                    type="submit"
                                    variant="primary"
                                  >
                                    Click to Add
                                  </Button>
                                </div>
                              </form>
                            </div>
                          }
                          on="click"
                        />
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
