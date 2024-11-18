import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import { MdDriveFolderUpload } from "react-icons/md";

function UserProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* User Profile Section */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center',fontSize:"40px" }}>Profile Update !</h2>
      </div>

      {/* Example Component Functionality */}
      <div style={{ textAlign: 'center' }}>
        <MdDriveFolderUpload
          style={{ fontSize: "40px", cursor: 'pointer', color: '#007bff' }}
          onClick={() => setOpen(!open)}
        />
        <div style={{ minHeight: '150px', marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card
                body
                style={{
                  width: '400px',
                  padding: '20px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'white',
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0HLvxwVk3zXXn02tGM3_8nInGuBZ7wFi2J0BL4giP3kDQcG6AlCiIcId5v-uEN40tkk&usqp=CAU"
                    alt="User Avatar"
                    style={{
                      
                      width: '100px',
                      height: '100px',
                      marginBottom: '10px',
                    }}
                  />
                </div>
                <Form style={{ backgroundColor: 'black', padding: '15px', borderRadius: '10px' }}>
                  <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '1px solid white',
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGitHubLink">
                    <Form.Control
                      type="text"
                      placeholder="GitHub link"
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '1px solid white',
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formLinkedInLink">
                    <Form.Control
                      type="text"
                      placeholder="LinkedIn link"
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: '1px solid white',
                      }}
                    />
                  </Form.Group>
                  <div style={{ textAlign: 'center' }}>
                    <Button variant="dark" type="submit">
                      Update
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>
          </Collapse>

        </div>
      </div>
    </div>
  );
}

export default UserProfile;
