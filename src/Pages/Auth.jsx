import React from 'react';
import { Link } from 'react-router-dom';

function Auth({ register }) {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ display: 'flex', padding: '20px' }}>
        {/* Left side: Image */}
        <div style={{ flex: 1, padding: '20px' }}>
          <img
            src="https://img.freepik.com/premium-vector/boy-using-cash-register-black-white-cartoon-illustration-vector_1142-66155.jpg"  // Add the correct image path here
            alt="Project Fair"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} // Inline styles for image
          />
        </div>

        {/* Right side: Login Form */}
        <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Project Fair</h1>
          <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
            {register ? "Sign Up" : "Sign In"}
          </h3>

          <form style={{ width: '100%' }}>
            {/* Conditional rendering of Username input for Sign Up */}
            {register && (
              <div style={{ marginBottom: '15px' }}>
                <input 
                  type='text' 
                  placeholder='Username' 
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} 
                  required
                />
              </div>
            )}

            {/* Email input */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>

            {/* Password input */}
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                required
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '15px',
              }}
            >
              {register ? "Sign Up" : "Sign In"}
            </button>

            {/* Conditional Forgot Password link */}
            {!register && (
              <div style={{ marginTop: '15px', textAlign: 'center' }}>
                <a href="#" style={{ color: '#6c757d', textDecoration: 'none' }}>
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Already registered or need to sign up link */}
            <div style={{ marginTop: '15px', textAlign: 'center' }}>
              {register ? (
                <span style={{ color: '#6c757d' }}>
                  Already have an account?{" "}
                  <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Sign In
                  </Link>
                </span>
              ) : (
                <span style={{ color: '#6c757d' }}>
                  Don't have an account?{" "}
                  <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>
                    Sign Up
                  </Link>
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
