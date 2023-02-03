import "../App.css";
import IndChart from "./indchart";
import Chart from "./chart";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import NotesList from "./getnotice";
import { AiFillEdit, AiFillFilePdf } from "react-icons/ai";

import { Button, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

import CivilTech from "./civil/getCivilTech";
import CivilWks from "./civil/getCivilWks";
import DeliveryTech from "./delivery/getDelTech";
import DeliveryWks from "./delivery/getDelWks";
import InsTech from "./installation/getInsTech";
import InsWks from "./installation/getInsWks";

import Clus from "./clusterChart";

export default function Final() {
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

  return (
    <>
      <Container className="cont">
        <Row>
          <Col className="topbox">
            <div className="col1">TATA BIHAR ITI UPGRADATION PROJECT</div>
            <div className="col2">
              <div className="date">{formatDate(date)}</div>
              <div>
                <Button className="fbutton">
                  Download PDF <AiFillFilePdf />
                </Button>
              </div>
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
          <Col className="ims">images</Col>
        </Row>
        <Row>
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="KATIHAR">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="MOTIHARI">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="MUZAFFARPUR">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="MUNGER">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="NALANDA">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="PATNA">
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
          <Col>
            <DropdownButton className="fixer" id="dropdown-basic-button" title="ROHTAS">
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
            <DropdownButton className="fixer" id="dropdown-basic-button" title="SUPAUL">
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
        <Row className="wolf" >
          <div className="bcc"><Clus fid={1001}/></div>
          <div className="bcc"><Clus fid={1002}/></div>
          <div className="bcc"><Clus fid={2001}/></div>
          <div className="bcc"><Clus fid={2002}/></div>
          <div className="bcc"><Clus fid={3001}/></div>
          <div className="bcc"><Clus fid={3002}/></div>
        </Row>
        <Row className="downf" ref={civilRef}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={60000}
          >
            <Carousel.Item>
              <CivilTech clust={selectedTitle} />
            </Carousel.Item>
            <Carousel.Item>
              <CivilWks clust={selectedTitle} />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row className="downs" ref={deliveryRef}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={60000}>
      <Carousel.Item>
      <DeliveryTech clust={selectedTitle} />
      </Carousel.Item>
      <Carousel.Item>
      <DeliveryWks clust={selectedTitle} />
      </Carousel.Item>
    </Carousel>
        </Row>
        <Row className="downt" ref={installationRef}>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={60000}>
      <Carousel.Item>
      <InsTech clust={selectedTitle} />
      </Carousel.Item>
      <Carousel.Item>
      <InsWks clust={selectedTitle} />
      </Carousel.Item>
    </Carousel>
        </Row>
      </Container>
    </>
  );
}
