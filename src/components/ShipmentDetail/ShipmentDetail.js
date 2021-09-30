import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderSummery from '../OrderSummery/OrderSummery';
import ShipmentForm from '../ShipmentForm/ShipmentForm ';

const ShipmentDetail = () => {
  return (
    <Container className="Shipment">
      <Row>
        <Col lg={9} className="m-auto">
          <Row>
            <Col lg={7}>
              <ShipmentForm></ShipmentForm>
            </Col>
            <Col lg={5}>
              <OrderSummery></OrderSummery>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ShipmentDetail;