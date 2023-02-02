import "../App.css";
import IndChart from "./indchart";
import Chart from "./chart";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import NotesList from "./getnotice";

// import Civil from "./civil/getCivilTech";
export default function Final() {
   
    // const newCompRef = useRef(null);

    // const handleClick = () => {
    //   newCompRef.current.scrollIntoView({ behavior: 'smooth' });
    // };
  
    // useEffect(() => {
    //   newCompRef.current.scrollIntoView({ behavior: 'smooth' });
    // }, []);
    let navigate = useNavigate();
    const handleClick = () => {
      navigate('/notice')
    };

  return (
    <>
    
    <Container className="cont">
    <Row>
      <Col><Chart/></Col>
    </Row>
    <Row>
       <div ><Button variant="secondary" size="sm" onClick={handleClick}>Add a Note</Button></div>
       <div> <NotesList/></div>
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
