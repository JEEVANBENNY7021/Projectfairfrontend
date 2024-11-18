import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#333' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://facebook.com'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://twitter.com'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://google.com'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://instagram.com'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://linkedin.com'
            role='button'
          >
            <MDBIcon fab icon='linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="light"
            color='link'
            floating
            size="lg"
            className='text-white d-flex align-items-center justify-content-center'
            style={{ margin: '0 12px' }}
            href='https://github.com'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        © 2024 Copyright: 
        <a className='text-white' href='https://yourwebsite.com' style={{ textDecoration: 'none', marginLeft: '5px' }}>
          projectfair.com
        </a>
      </div>
    </MDBFooter>
  );
}
