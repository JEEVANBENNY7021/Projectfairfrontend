import React, { useState } from 'react';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1  style={{textAlign:"center",fontSize:"40px"}}>All Projects</h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <div style={{ flex: 1, paddingTop: '40px' }}>
          <input
            type="search"
            id="search-input"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button
          type="button"
          style={{
            marginTop:"40px",
            padding: '15px 15px',
            backgroundColor: 'white', // Changed to a primary blue color
            border: 'none',
            color: 'black', // Changed to white text
            borderRadius: '4px',
            marginLeft: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center' // Centers the icon in the button
          }}
        >
          <i className="fas fa-search" style={{ fontSize: '16px',fontWeight:"50px" }}></i>
        </button>
      </div>

     
    </div>
  );
}

export default Projects;
