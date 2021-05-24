import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Document, Page, pdfjs } from 'react-pdf';
import Resume from "../Downloadables/Resume.pdf"

function ResumeModal({ showResumeModal, closeModal, resumeLink }) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("Document Loaded!");
    setNumPages(numPages);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  }, []);

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
        {/* <iframe
          title="Resume"
          src="https://github.com/adiXcodr/adixcodr.github.io/raw/master/src/Downloadables/Resume.pdf#toolbar=0"
          width="100%"
          height="700px"
          frameborder="0"
        ></iframe> */}
        <Document
          file={{
            url: resumeLink
          }}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.log("Could not load pdf", err)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </Modal.Body>
    </Modal>
  );
}

export default ResumeModal;
