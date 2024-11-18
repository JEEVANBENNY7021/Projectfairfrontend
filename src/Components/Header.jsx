import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { FaUser } from 'react-icons/fa';
import logo from '../assets/logo1.jpg';

function ContainerOutsideExample() {
  return (
    <div style={{ width: '100%', height: '100px', backgroundColor: '#f8f9fa' }}>
      <Navbar expand="lg" style={{ padding: '0 20px', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Navbar.Brand href="#" style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
            <Image 
              src={logo}
              alt="Logo" 
              width="160"  // Increased width
              height="80" // Increased height
              style={{ marginRight: 'px' }}
            />
            PROJECT FAIR
          </Navbar.Brand>
          <Nav style={{ marginLeft: 'auto' }}>
            <Nav.Link href="/login" style={{ display: 'flex', alignItems: 'center', color: '#333', fontSize: '1rem', textDecoration: 'none' }}>
              <FaUser size={28} />
              <span style={{ marginLeft: '8px',fontSize:"20px" }}>LOGIN</span>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default ContainerOutsideExample;
