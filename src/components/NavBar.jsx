import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
 

  return (
    <Navbar bg="light" expand="lg">
    <Container className="d-flex justify-content-between">
      <Navbar.Brand href="#"><img style={{width:"80px"}} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg&ga=GA1.1.40340200.1723416132&semt=ais_hybrid" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex align-items-center">
  <Nav.Link href="#" className="nav-link-mid">HOME</Nav.Link>
  <Nav.Link href="#" className="nav-link-mid">SHOP</Nav.Link>
  <Nav.Link href="#" className="nav-link-mid">PAGES</Nav.Link>
  <Nav.Link href="#" className="nav-link-mid">BLOG</Nav.Link>
  <Nav.Link href="#" className="nav-link-mid">LOOKBOOK</Nav.Link>
</Nav>

        <Nav className="ms-auto d-flex align-items-center">
  <Nav.Link href="#" className="nav__logo" >
    <span><i class="ri-shield-user-line"></i></span>
  </Nav.Link>
  <Nav.Link href="#" className="nav__logo" >
    <span><i class="fa-regular fa-heart"></i></span>
  </Nav.Link>
  <Nav.Link href="#" className="nav__logo">
  <div className="icon-badge-container">
    <span><i className="ri-shopping-bag-2-line"></i></span>
    <span className="badge">3</span>
  </div>
</Nav.Link>

</Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  );
};

export default NavbarComponent;
