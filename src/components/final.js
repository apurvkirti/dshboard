import "../App.css";
import IndChart from "./indchart";
import Chart from "./chart";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import UpdateList from "./updatebox";
import { AiFillFilePdf } from "react-icons/ai";

import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

import CivilTech from "./civil/getCivilTech";
import UpdateCivilTech from "./civil/updateCivilTech";
import UpdateCivilWks from "./civil/updateCivilWks";
import CivilWks from "./civil/getCivilWks";

import DeliveryTech from "./delivery/getDelTech";
import UpdateDeliveryTech from "./delivery/updateDelTech";
import UpdateDeliveryWks from "./delivery/updateDelWks";
import DeliveryWks from "./delivery/getDelWks";

import InsTech from "./installation/getInsTech";
import UpdateInsTech from "./installation/updateInsTech";
import UpdateInsWks from "./installation/updateInsWks";
import InsWks from "./installation/getInsWks";
import Courses from "./course";
import UpdCourses from "./updatecourses"
import Img from "./imgs";

import Clus from "./clusterChart";
import { FiLogOut } from 'react-icons/fi';






export default function Final() {
  const username = localStorage.getItem("username");

  // eslint-disable-next-line
  const [date, setDate] = useState(new Date());
  function formatDate(date) {
    const formattedDate = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const dateParts = formattedDate.split(",");
    const finalday = dateParts[0].trim().split(" ");

    return ` ${finalday[1].trim()} ${finalday[0].trim()}, ${dateParts[1].trim()}`;
  }
  let navigate = useNavigate();

  const handleUpdatesClick = () => {
     window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/');
  };
  //eslint-disable-next-line
  const [selectedOption, setSelectedOption] = useState(null);
  const civilRef = useRef(null);
  const deliveryRef = useRef(null);
  const installationRef = useRef(null);
  const coursesRef = useRef(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  
 
  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
    if (option === "Civil") {
      window.scrollTo({ top: civilRef.current.offsetTop, behavior: "smooth" });
    } else if (option === "Delivery") {
      window.scrollTo({
        top: deliveryRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (option === "Installation") {
      window.scrollTo({
        top: installationRef.current.offsetTop,
        behavior: "smooth",
      });
    }
    else if (option === "Courses") {
      window.scrollTo({
        top: coursesRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  //  for carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // for user_selective view


  function RenderCourse({ selectedTitle }) {
    if (username === "master_admin" ) {
      return (
        <>
          <UpdCourses clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <Courses clust={selectedTitle} />
        </>
      );
    }
  }

  function RenderCivilTech({ selectedTitle }) {
    if (username === "user1" || username === "master_admin" ) {
      return (
        <>
          <UpdateCivilTech clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <CivilTech clust={selectedTitle} />
        </>
      );
    }
  }

  function RenderCivilWks({ selectedTitle }) {
    if (username === "user1" || username === "master_admin") {
      return (
        <>
          <UpdateCivilWks clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <CivilWks clust={selectedTitle} />
        </>
      );
    }
  }
  function RenderDelTech({ selectedTitle }) {
    if (username === "user2" || username === "master_admin") {
      return (
        <>
          <UpdateDeliveryTech clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <DeliveryTech clust={selectedTitle} />
        </>
      );
    }
  }
  function RenderDelWks({ selectedTitle }) {
    if (username === "user2" || username === "master_admin" ) {
      return (
        <>
          <UpdateDeliveryWks clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <DeliveryWks clust={selectedTitle} />
        </>
      );
    }
  }
  function RenderInsTech({ selectedTitle }) {
    if ( username === "user3" || username === "master_admin") {
      return (
        <>
          <UpdateInsTech clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <InsTech clust={selectedTitle} />
        </>
      );
    }
  }
  function RenderInsWks({ selectedTitle }) {
    if (username === "user3" || username === "master_admin") {
      return (
        <>
          <UpdateInsWks clust={selectedTitle} />
        </>
      );
    } else {
      return (
        <>
          <InsWks clust={selectedTitle} />
        </>
      );
    }
  }


  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  //screenshot:
  
  const targetRef = useRef(null);
  // eslint-disable-next-line
  const [screenshot, setScreenshot] = useState(null);

  const handlescreenClick = () => {
    navigate("/pdf");
  };
    

  const myDivRef1 = useRef(null);

  useEffect(() => {
    const myDiv = myDivRef1.current;
    myDiv.scrollLeft = myDiv.scrollWidth;
  }, []);
  
  const [isButtonClicked1, setIsButtonClicked1] = useState(false);
  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);
  const [isButtonClicked5, setIsButtonClicked5] = useState(false);
  const [isButtonClicked6, setIsButtonClicked6] = useState(true);
  const [isButtonClicked7, setIsButtonClicked7] = useState(false);
  const [isButtonClicked8, setIsButtonClicked8] = useState(false);
  const handleButtonClick = (title) => {
    if(title === "KATIHAR"){
      setIsButtonClicked1(true);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    } else if(title === "MOTIHARI"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(true);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    }
    else if(title === "MUZAFFARPUR"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(true);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    }
    if(title === "Munger"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(true);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    }
    if(title === "NALANDA"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(true);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    }
    if(title === "PATNA"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(true);
      setIsButtonClicked7(false);
      setIsButtonClicked8(false);  
    }
    if(title === "ROHTAS"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(true);
      setIsButtonClicked8(false);  
    }
    if(title === "SUPAUL"){
      setIsButtonClicked1(false);
      setIsButtonClicked2(false);
      setIsButtonClicked3(false);
      setIsButtonClicked4(false);
      setIsButtonClicked5(false);
      setIsButtonClicked6(false);
      setIsButtonClicked7(false);
      setIsButtonClicked8(true);  
    }
  
    setSelectedTitle(title);
  };
  return (
    <>
      <Container fluid className="cont" ref={targetRef}>
        <Row className="abcd">
          <Col className="topbox">
            <div className="leftlogo"></div>
            <div className="hindi">श्रम संसाधन विभाग, बिहार</div>
            <div className="col1"> EDUCATION AND SKILL DEVELOPMENT</div>
            <div className="rightlogo"></div>
            <div className="col2">
              <div className="date">{formatDate(date)}</div>
              <div>
                <Button className="fbutton" onClick={handlescreenClick}>
                  Download PDF <AiFillFilePdf  />
                </Button>
              </div>
            </div>
            <div className="col3">
            <Button className="buttonlogout" onClick={handleLogout}>Logout <FiLogOut/></Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Chart />
          </Col>
        </Row>
        <Row>
          {/* <Col xs={3}>
            <div className="addnote">
              <Button className="btnclass " onClick={handleClick}>
                Add a Note <AiFillEdit />
              </Button>
            </div>
            <div>
              {" "}
              <NotesList />
            </div>
          </Col> */}
          <Col xs={3}>
            <div className="addnote">
              <Button className="btnclass " onClick={handleUpdatesClick} >
                RECENT UPDATES 
              </Button>
            </div>
            <div>
              <UpdateList />
            </div>
          </Col>
          
          {/* <Col xs={2}></Col> */}
          <Col>
            <IndChart />
          </Col>
        </Row>
        <Row>
          <Col className="ims"><Img/></Col>
        </Row>
         <Row className="buttonsallrow">
          <Col className="colclust">
            <DropdownButton
             className={`${isButtonClicked1 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="KATIHAR"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("KATIHAR");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("KATIHAR");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("KATIHAR");
                }}
              >
                Installation
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("KATIHAR");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
             className={`${isButtonClicked2 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="MOTIHARI"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("MOTIHARI");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("MOTIHARI");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("MOTIHARI");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("MOTIHARI");
                }}
              >
                Courses
              </Dropdown.Item>
              
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className={`${isButtonClicked3 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="MUZAFFARPUR"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("MUZAFFARPUR");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("MUZAFFARPUR");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("MUZAFFARPUR");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("MUZAFFARPUR");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
           className={`${isButtonClicked4 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="MUNGER"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("Munger");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("Munger");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("Munger");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("Munger");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className={`${isButtonClicked5 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="NALANDA"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("NALANDA");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("NALANDA");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("NALANDA");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("NALANDA");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
             className={`${isButtonClicked6 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="PATNA"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("PATNA");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("PATNA");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("PATNA");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("PATNA");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
             className={`${isButtonClicked7 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="ROHTAS"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("ROHTAS");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("ROHTAS");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("ROHTAS");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("ROHTAS");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
             className={`${isButtonClicked8 ? "clicked" : ""}`}
              id="dropdown-basic-button"
              title="SUPAUL"
            >
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Civil");
                  handleButtonClick("SUPAUL");
                }}
              >
                Civil
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Delivery");
                  handleButtonClick("SUPAUL");
                }}
              >
                Delivery
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Installation");
                  handleButtonClick("SUPAUL");
                }}
              >
                Installation
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  handleDropdownSelect("Courses");
                  handleButtonClick("SUPAUL");
                }}
              >
                Courses
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
     
        
        <Row className="clusterwise-chart-container">
          <div className="twocharts" ref={myDivRef1}>
          <Col className="bcc">
            <Clus fid={1001} />
          </Col>
          <Col className="bcc">
            <Clus fid={1002} />
          </Col>
          </div>
          

          <div className="twocharts" ref={myDivRef1}>  
          <Col className="bcc">
            <Clus fid={2001} />
          </Col>
          <Col className="bcc">
            <Clus fid={2002} />
          </Col>
          </div>
        
          <div className="twocharts" ref={myDivRef1}>
          <Col className="bcc">
            <Clus fid={3001} />
          </Col>
          <Col className="bcc">
            <Clus fid={3002} />
          </Col>
          </div>
          
        </Row>

        <Row className="downf" id="firsttable" ref={civilRef}>
   
        <Carousel slide={false}
            activeIndex={index}
            onSelect={handleSelect}
            interval={1000000000}
            indicators={false}
          
          >
            <Carousel.Item>
            <RenderCivilTech className="tabs" selectedTitle={selectedTitle} />
            </Carousel.Item>
            <Carousel.Item>
            <RenderCivilWks className="tabs" selectedTitle={selectedTitle} />
            </Carousel.Item>
          </Carousel>
    
     
         
           
        </Row>
        <Row className="downs" ref={deliveryRef}>
          <Carousel slide={false}
            activeIndex={index}
            onSelect={handleSelect}
            interval={1000000000}
            indicators={false}
           
          >
            <Carousel.Item>
            <RenderDelTech selectedTitle={selectedTitle} />
            </Carousel.Item>
            <Carousel.Item>
            <RenderDelWks selectedTitle={selectedTitle} />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="downt" ref={installationRef}>
          <Carousel slide={false}
            activeIndex={index}
            onSelect={handleSelect}
            interval={1000000000}
            indicators={false}
          >
            <Carousel.Item>
            <RenderInsTech selectedTitle={selectedTitle} />
            </Carousel.Item>
            <Carousel.Item>
            <RenderInsWks selectedTitle={selectedTitle} />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="downt" ref={coursesRef}>
          <Carousel slide={false}
            activeIndex={index}
            onSelect={handleSelect}
            interval={1000000000}
            indicators={false}
            controls={false}
          >
            <Carousel.Item>
            <RenderCourse selectedTitle={selectedTitle} />
            </Carousel.Item>
           
          </Carousel>
        </Row>
      </Container>
    </>
  );
}
