import { Button, Nav, Navbar } from "react-bootstrap";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

import { ReactComponent as PortfolioLogo } from "../assets/Image/logo.svg";
import ResumeModal from "./ResumeModal";

function Navigation() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <>
      <Navbar variant="dark" expand="lg" fixed="top" className="nvabar-custon" style={{paddingLeft:"2%", paddingRight:"2%"}}>
        <a href="/" className="navbar_logo_container" style={{textDecoration:"none"}}>
          <PortfolioLogo className="navbar_logo" />
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
            <Nav.Link href="https://github.com/pranjaljain0">
              <FaGithub color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/pranjaljain0/">
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
