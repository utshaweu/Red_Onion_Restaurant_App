import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <Container fluid={true} className="banner">
      <Row>
        <Col lg={5} md={8} sm={12} className="m-auto">
          <div className="banner-content text-center">
            <h1 style={{fontWeight: 'bold'}}>Best food waiting for your belly</h1>
            <Form>
              <Row>
                <Col lg={10} md={8} sm={8} xs={7} className="p-0">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="search" placeholder="Search food items" />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={4} xs={5} className="p-0">
                <Button variant="primary" type="submit">
                  Search
                </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;