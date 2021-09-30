import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Col, Row, Button } from 'react-bootstrap';
import deliveryBoy from '../../Assets/images/Group 1151.png';
import helmet from '../../Assets/images/Group 1152.png';

const ContactReview = () => {

  const {login} = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = login;

  //console.log(loggedInUser);

  return (
    <div className="contact-review">
      <img src={deliveryBoy} alt="" style={{width: '100px'}}/>
      <div className="location">
        <Row>
          <Col lg={1}>
            <span style={{color: '#F91944'}}>&#9679;</span>
          </Col>
          <Col lg={11}>
            <h6>Your Location</h6>
            <p>107 Rd No 8</p>
          </Col>
          <Col lg={1}>
            <span style={{color: '#F91944'}}>&#9679;</span>
          </Col>
          <Col lg={11}>
            <h6>Shop Address</h6>
            <p style={{marginBottom: '0'}}>Gulshan Plaza Restaura GPR</p>
          </Col>
        </Row>
      </div>
      <h5>09:30</h5>
      <span>Estimated delivery time</span>
      <div className="location">
        <Row>
          <Col lg={3}>
          <img src={helmet} alt="" style={{width: '100%'}}/>
          </Col>
          <Col lg={9}>
            <h6>{loggedInUser.displayName}</h6>
            <p>Your Raider</p>
          </Col>
        </Row>
      </div>
      <Button variant="warning">Contact</Button>{' '}
    </div>
  );
};

export default ContactReview;