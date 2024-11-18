import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* Trigger Button */}
      <Button
        style={{
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        }}
        variant="light"
        onClick={handleShow}
      >
        Add Project
      </Button>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        style={{ backgroundColor: 'white', color: 'white' }}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderBottom: '1px solid white',
          }}
        >
          <Modal.Title>Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
          <Row>
            {/* Left-Side Image */}
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
              style={{ backgroundColor: 'black' }}
            >
              <label>
              <input type="file" style={{display:"none"}}/>
              
              <img
                src="https://cdn.pixabay.com/photo/2023/10/03/10/06/anonymous-8291092_1280.png"
                alt="Project"
                className="img-fluid"
                style={{
                  border: '',
                  borderRadius: '5px',
                  width: '90%', // Adjusted image width
                  maxHeight: '800px', // Reduced image height
                }}
              />
               <p style={{textAlign:"center"}}> "Only allowed the following file types .jpg,.jpeg,.png"</p></label>
              <div>
            
              </div>
            </Col>
            

            {/* Right-Side Form */}
            <Col
              md={6} // Reduced form width
              style={{ backgroundColor: 'black', padding: '10px' }}
            >
              <Form>
                {/* Title */}
                <Form.Group className="mb-2" controlId="projectTitle">
                  <Form.Label style={{ color: 'white', fontSize: '0.9rem' }}>
                    Title
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter project title"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: '1px solid white',
                      fontSize: '0.85rem', // Smaller font size
                      padding: '5px', // Reduced input height
                    }}
                  />
                </Form.Group>

                {/* Language */}
                <Form.Group className="mb-2" controlId="projectLanguage">
                  <Form.Label style={{ color: 'white', fontSize: '0.9rem' }}>
                    Language
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter programming language"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: '1px solid white',
                      fontSize: '0.85rem',
                      padding: '5px',
                    }}
                  />
                </Form.Group>

                {/* GitHub Link */}
                <Form.Group className="mb-2" controlId="projectGithub">
                  <Form.Label style={{ color: 'white', fontSize: '0.9rem' }}>
                    GitHub
                  </Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter GitHub URL"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: '1px solid white',
                      fontSize: '0.85rem',
                      padding: '5px',
                    }}
                  />
                </Form.Group>

                {/* Website Link */}
                <Form.Group className="mb-2" controlId="projectWebsite">
                  <Form.Label style={{ color: 'white', fontSize: '0.9rem' }}>
                    Website
                  </Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter Website URL"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: '1px solid white',
                      fontSize: '0.85rem',
                      padding: '5px',
                    }}
                  />
                </Form.Group>

                {/* Overview */}
                <Form.Group className="mb-2" controlId="projectOverview">
                  <Form.Label style={{ color: 'white', fontSize: '0.9rem' }}>
                    Overview
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2} // Reduced rows
                    placeholder="Enter project overview"
                    style={{
                      backgroundColor: 'black',
                      color: 'white',
                      border: '1px solid white',
                      fontSize: '0.85rem',
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'black', color: 'white' }}>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid white',
              fontSize: '0.85rem',
              padding: '5px 10px',
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => alert('Project Added')}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid white',
              fontSize: '0.85rem',
              padding: '5px 10px',
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProject;
