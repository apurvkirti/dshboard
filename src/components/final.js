import "../App.css";
import IndChart from "./indchart";
import Chart from "./chart";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import NotesList from "./getnotice";
import { AiFillEdit, AiFillFilePdf } from "react-icons/ai";
import html2canvas from "html2canvas";
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
  const handleClick = () => {
    navigate("/notice");
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
  const [selectedTitle, setSelectedTitle] = useState("");
  const handleButtonClick = (title) => {
    setSelectedTitle(title);
  };
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
  };

  //  for carousel
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // for user_selective view

  function RenderCivilTech({ selectedTitle }) {
    if (username === "user1") {
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
    if (username === "user1") {
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
    if (username === "user2") {
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
    if (username === "user2" ) {
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
    if ( username === "user3") {
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
    if (username === "user3") {
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
    html2canvas(targetRef.current).then(canvas => {
      const dataURL = canvas.toDataURL();
      setScreenshot(dataURL);
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = dataURL;
      link.click();
    });
  };
    

  

  return (
    <>
      <Container fluid className="cont" ref={targetRef}>
        <Row className="abcd">
          <Col className="topbox">
            <div className="leftlogo"></div>
            <div className="hindi">श्रम संसाधन विभाग, बिहार</div>
            <div className="col1">
            TATA EDUCATION AND SKILL DEVELOPMENT</div>
            <div className="rightlogo"></div>
            <div className="col2">
              <div className="date">{formatDate(date)}</div>
              <div>
                <Button className="fbutton" onClick={handlescreenClick}>
                  Download PDF <AiFillFilePdf  />
                </Button>
              </div>
            </div>
            <div>
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
          <Col xs={3}>
            <div className="addnote">
              <Button className="btnclass " onClick={handleClick}>
                Add a Note <AiFillEdit />
              </Button>
            </div>
            <div>
              {" "}
              <NotesList />
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
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="muzz"
             
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col className="colclust">
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton
              className="fixer"
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
            </DropdownButton>
          </Col>
        </Row>
     
        
        <Row className="wolf">
          <Col className="bcc">
            <Clus fid={1001} />
          </Col>
          <Col className="bcc">
            <Clus fid={1002} />
          </Col>
          <Col className="bcc">
            <Clus fid={2001} />
          </Col>
          <Col className="bcc">
            <Clus fid={2002} />
          </Col>
          <Col className="bcc">
            <Clus fid={3001} />
          </Col>
          <Col className="bcc">
            <Clus fid={3002} />
          </Col>
        </Row>

        <Row className="downf" ref={civilRef}>
          <Carousel slide={false}
            activeIndex={index}
            onSelect={handleSelect}
            interval={1000000000}
            indicators={false}
          >
            <Carousel.Item>
              <RenderCivilTech selectedTitle={selectedTitle} />
            </Carousel.Item>
            <Carousel.Item>
            <RenderCivilWks selectedTitle={selectedTitle} />
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
      </Container>
    </>
  );
}
