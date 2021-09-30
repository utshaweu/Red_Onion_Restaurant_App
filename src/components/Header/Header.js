import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header  = () => {

  const {carts, login} = useContext(UserContext);
  const [cart, setCart] = carts;
  const [loggedInUser, setLoggedInUser] = login;

  return (
    <div>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to='/cart'>
                 <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingCart}/><p className="mr3">{cart.length}</p></Nav.Link>
              </Link>
              {
                loggedInUser.email ? (
                  <Nav.Link href="#" onClick={() => setLoggedInUser({})} className="mr">Sign Out</Nav.Link>
                ): (
                  <Link to='/login'>
                    <Nav.Link href="/login" className="mr">Log in</Nav.Link>
                  </Link>
                )
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;