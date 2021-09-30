import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo2 from '../../Assets/images/logo.png';

const Footer = () => {
  return (
    <Container fluid={true} className="footer">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="footer-logo">
              <img src={logo2} alt="" />
            </div>
          </Col>
          <Col lg={3}>
            <div className="useful-link">
              <ul>
                <li><a href="/">About online food</a></li>
                <li><a href="/">Read our blog</a></li>
                <li><a href="/">Sign up to deliver</a></li>
                <li><a href="/">Add your restaurant</a></li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <div className="useful-link">
              <ul>
                <li><a href="/">Get help</a></li>
                <li><a href="/">Read FAQs</a></li>
                <li><a href="/">View all cities</a></li>
                <li><a href="/">Restaurants near me</a></li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="mr2">
          <Col lg={8}>
            <div className="copyright">
              <span>Copyright © 2021 Online Food</span>
            </div>
          </Col>
          <Col lg={4}>
            <div className="footer-bottom-link">
              <a href="/">Privacy Policy.</a>
              <a href="/">Terms of Use</a>
              <a href="/">Pricing</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;