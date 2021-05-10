import React from "react";
import { Modal } from "react-bootstrap";

function ResumeModal({ showResumeModal, closeModal }) {
  return (
    <Modal
      size="lg"
      show={showResumeModal}
      onHide={closeModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title="Resume"
          src="https://github.com/adiXcodr/adixcodr.github.io/blob/master/src/Downloadables/Resume.pdf#toolbar=0"
          width="100%"
          height="700px"
          frameborder="0"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}

export default ResumeModal;
