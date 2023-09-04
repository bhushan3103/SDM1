import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../index.css';
import { useNavigate } from 'react-router-dom';


const TrainNavbar = () => {

  const navigate = useNavigate();

    const logout = () => {
        
        localStorage.removeItem('train_name')
        localStorage.removeItem('train_email')
        localStorage.removeItem('train_contact')
        localStorage.removeItem('train_address')
        localStorage.removeItem('train_password')
        localStorage.removeItem('train_role')
        navigate('/login')
        
    }

    return (
<>

<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'#FCD20C'}}>
<div className="d-block d-sm-none " > </div> 
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div className="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="me-auto">
 
    
    <LinkContainer to="/trainer/trainprofile">
    <Nav.Link className="nav-links"><h6>Profile</h6></Nav.Link>
    </LinkContainer>
    
      <LinkContainer to="/trainer/dietplan">
    <Nav.Link className="nav-links"><h6>Diet-Plan</h6></Nav.Link>
    </LinkContainer>
      
    <LinkContainer to="/trainer/workoutplan">
    <Nav.Link className="nav-links"><h6>Workout-Plan</h6></Nav.Link>
    </LinkContainer>

    <LinkContainer to="/login" onClick={logout}>
    <Nav.Link className="nav-links"><h6>Logout</h6></Nav.Link>
    </LinkContainer>
    
    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default TrainNavbar
