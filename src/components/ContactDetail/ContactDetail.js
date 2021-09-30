import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactReview from '../ContactReview/ContactReview';
import Map from '../Map/Map';

const ContactDetail = () => {
  return (
    <Container className="contact-detail">
      <Row>
        <Col lg={10} className="m-auto">
          <Row>
            <Col lg={7}>
              <Map></Map>
            </Col>
            <Col lg={5}>
              <ContactReview></ContactReview>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetail;