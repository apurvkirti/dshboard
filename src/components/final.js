import "../App.css";
import IndChart from "./indchart";
import Chart from "./chart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import NotesList from "./getnotice";

// import Civil from "./civil/getCivilTech";
export default function Final() {
   
    const [date, setDate] = useState(new Date());

    let navigate = useNavigate();
    const handleClick = () => {
      navigate('/notice')
    };

  return (
    <>
    <Container className="cont">
        <Row>
            <Col className="topbox">
            <div className="col1">TATA BIHAR ITI UPGRADATION PROJECT</div>
            <div className="col2">
                <div className="date">{date.toLocaleDateString()}</div>
                <div>
                    <Button className="fbutton">Download PDF</Button>
                </div>
            </div>
            </Col>
            
        </Row>

    <Row>
      <Col><Chart/></Col>
    </Row>
    <Row>
       
      <Col xs={3}>
      <div className="addnote" ><Button className ="btnclass " onClick={handleClick}>Add a Note</Button></div>
         <div> <NotesList/></div></Col>
      {/* <Col xs={2}></Col> */}
      <Col><IndChart/></Col>
    </Row>
    <Row>
        <Col><Button className="buttons"  variant="primary" >KATIHAR</Button></Col> 
        <Col><Button className="buttons" variant="primary">MOTIHARI</Button></Col>
        <Col><Button className="buttons" variant="primary">MUZZAFARNAGAR</Button></Col>
        <Col><Button className="buttons" variant="primary">MUNGER</Button></Col>
        <Col><Button className="buttons" variant="primary">NALANDA</Button></Col>
        <Col><Button className="buttons" variant="primary">PATNA</Button></Col>
        <Col><Button className="buttons" variant="primary">ROHTAS</Button></Col>
        <Col><Button className="buttons" variant="primary">SUPAUL</Button></Col>
    </Row>
    
  </Container>
  
  
   
  
  </>
  );
}
