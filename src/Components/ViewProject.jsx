import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';

function ViewProject() {
  return (
    <div
      style={{
        width: '80%',
        margin:"30px",
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: '10px',
      }}
    >
      {/* Project Name */}
      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
        React App 1
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '15px' }}>
        {/* External Link */}
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            cursor: 'pointer',
            padding: '0',
          }}
          title="View Project"
        >
          <FaExternalLinkAlt size={18} />
        </button>

        {/* GitHub Link */}
        <button
          style={{
            background: 'none',
            border: 'none',
            color: '#000',
            cursor: 'pointer',
            padding: '0',
          }}
          title="View GitHub"
        >
          <FaGithub size={18} />
        </button>

        {/* Delete */}
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'red',
            cursor: 'pointer',
            padding: '0',
          }}
          title="Delete Project"
        >
          <FaTrashAlt size={18} />
        </button>

        {/* Edit */}
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'green',
            cursor: 'pointer',
            padding: '0',
          }}
          title="Edit Project"
        >
          <FaEdit size={18} />
        </button>
      </div>
    </div>
  );
}

export default ViewProject;
