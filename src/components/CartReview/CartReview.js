import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CartReview = (props) => {
  const {category, title, img, price, quantity, id } = props.cart;

  return (
    <Row className="cart-review text-center" style={{color: '#fff', fontWeight: '700'}}>
      <Col lg={2}>
        <img src={img} alt="" className="w-100"/>
      </Col>
      <Col lg={2}>
        <h6>{category}</h6>
      </Col>
      <Col lg={2}>
        <p>{title}</p>
      </Col>
      <Col lg={2}>
        <span>{quantity}</span>
      </Col>
      <Col lg={2}>
        <span>${price}</span>
      </Col>
      <Col lg={2}>
        <FontAwesomeIcon onClick={() => props.removeProduct(id)} icon={faTrashAlt} />
      </Col>
    </Row>
  );
};

export default CartReview;