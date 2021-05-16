import { Button, Nav, Navbar } from "react-bootstrap";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import ProfilePicture from "../assets/Image/pp.jpg";
import ResumeModal from "./ResumeModal";

function Navigation() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      <Navbar variant="dark" expand="lg" fixed="top" className="nvabar-custon" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <a href="/" className="navbar_logo_container" style={{ textDecoration: "none" }}>
          <img src={ProfilePicture} className="navbar_logo" style={{
            borderRadius: "50%"
          }} />
          <span>Adittya Dey</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navbar-right">
            {/* <Nav.Link href="http://blog.pranjaljain.me">
              <Button className="moving-gradient">Blogs</Button>
            </Nav.Link> */}
            <Nav.Link>
              <Button
                variant="light"
                style={{
                  borderRadius: "4px 0 0 4px",
                  borderRight: "1px solid rgba(0,0,0,0.5)",
                }}
                onClick={() => {
                  setShowResumeModal(true);
                }}
              >
                Curriculum Vitae (CV)
              </Button>
              <Button
                variant="light"
                href="https://github.com/adiXcodr/adixcodr.github.io/raw/master/src/Downloadables/Resume.pdf"
                style={{
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <FaDownload fill="rgba(0,0,0,0.5)" />
              </Button>
            </Nav.Link>
            <Nav.Link href="https://github.com/adiXcodr" target="_blank">
              <FaGithub color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/adittyadey/" target="_blank">
              <FaLinkedin color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ResumeModal
        showResumeModal={showResumeModal}
        closeModal={() => {
          setShowResumeModal(!showResumeModal);
        }}
      />
    </>
  );
}

export default Navigation;
