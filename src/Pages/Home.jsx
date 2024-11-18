import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div style={{ marginTop: "40px", width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px', backgroundColor: 'black' }}>
      
      {/* First Section */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', maxWidth: '1200px', width: '100%', marginBottom: '40px', flexWrap: 'wrap' }}>
        {/* First Column with Image */}
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img 
            src="https://cdn.openart.ai/published/gGDUtAursLeYEhlkY5hE/o9MH1y8p_-6ZF_raw.jpg" 
            alt="Placeholder" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} 
          />
        </div>

        {/* Second Column with Heading, Paragraph, and Button */}
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '600', color: '#fff' }}>Project Fair</h2>
          <p style={{ fontSize: '20px', marginBottom: '20px', color: '#ccc' }}>
            One destination for all software development projects.
          </p>

          <Link to={'/login'}>
          <button style={{ padding: '12px 24px', fontSize: '18px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', transition: 'background-color 0.3s ease', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            Get Started 
          </button></Link>
        </div>
      </div>

      {/* Cards Heading */}
      <h3 style={{ fontSize: '46px', fontWeight: '600', color: '#fff', marginBottom: '30px',marginTop:"50px" }}>Explore Our Projects</h3>

      {/* Card Section */}
      <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        
        {/* Card 1 */}
        <Card 
          style={{ width: '24rem', height: '350px', marginBottom: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          onClick={() => handleCardClick({
            title: "Card Title 1",
            description: "A data management project involves designing and implementing systems for organizing, storing, and retrieving data efficiently and securely. The project focuses on ensuring data integrity, consistency, and accessibility, while adhering to best practices for data governance and privacy. Key components might include data cleaning, data transformation, and building a database or data warehouse that allows for efficient data querying and reporting.",
            imgSrc: "https://img.freepik.com/premium-vector/landing-page-data-management_74739-66.jpg?w=996",
            gitLink: "https://github.com",
            liveLink: "https://example.com"
          })}
        >
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/landing-page-data-management_74739-66.jpg?w=996" style={{ height: '60%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '22px', color: 'white',textAlign:"center",marginTop:"30px" }}>Card Title 1</Card.Title>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card 
          style={{ width: '24rem', height: '350px', marginBottom: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          onClick={() => handleCardClick({
            title: "Card Title 2",
            description:"Discover the beauty within at [Your Brand Name]! Our carefully curated selection of high-quality, cruelty-free cosmetics is designed to bring out your best. From vibrant makeup to luxurious skincare, each product combines innovation and nature to give you that radiant, flawless glow. Elevate your beauty routine with our products crafted to enhance every unique look and style. Start your journey to self-care and confidence today!",
            imgSrc: "https://www.shift4shop.com/2015/images/ecommerce-website-design-packages/logan.jpg",
            gitLink: "https://github.com",
            liveLink: "https://example.com"
          })}
        >
          <Card.Img variant="top" src="https://www.shift4shop.com/2015/images/ecommerce-website-design-packages/logan.jpg" style={{ height: '60%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '22px', color: 'white',textAlign:"center",marginTop:"30px" }}>Card Title 2</Card.Title>
          </Card.Body>
        </Card>

        {/* Card 3 */}
        <Card 
          style={{ width: '24rem', height: '350px', marginBottom: '20px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          onClick={() => handleCardClick({
            title: "Card Title 3",
            description: "Welcome to [Agency Name], a creative agency where ideas come to life. We blend strategy, design, and technology to craft unique digital experiences that connect brands with their audience. From branding and content creation to web design and social media, we’re here to elevate your brand with innovative, custom solutions. Let’s create something remarkable together!",
            imgSrc: "https://www.sliderrevolution.com/wp-content/uploads/2021/11/MegaOne-1.jpg",
            gitLink: "https://github.com",
            liveLink: "https://example.com"
          })}
        >
          <Card.Img variant="top" src="https://www.sliderrevolution.com/wp-content/uploads/2021/11/MegaOne-1.jpg" style={{ height: '60%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }} />
          <Card.Body>
            <Card.Title style={{ fontSize: '22px',color: 'white',textAlign:"center",marginTop:"30px" }}>Card Title 3</Card.Title>
          </Card.Body>
        </Card>

        
      </div>
      <Link to={'Projects'}>
          <button style={{ padding: '12px 24px', fontSize: '18px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', transition: 'background-color 0.3s ease', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            ALL PROJECTS
          </button></Link>

      {/* Modal Section */}
      {modalContent && (
        <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
              <img src={modalContent.imgSrc} alt={modalContent.title} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <p>{modalContent.description}</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href={modalContent.gitLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={40} color="white" />
                </a>
                <a href={modalContent.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaLink size={40} color="white" />
                </a>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Home;



