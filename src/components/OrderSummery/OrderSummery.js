import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {UserContext} from '../../App';

const OrderSummery = () => {

  const [placeOrder, setPlaceOrder] = useState(false);

  const history = useHistory();

  const {carts, form} = useContext(UserContext);
  const [cart, setCart] = carts;
  const [shipmentForm, setShipmentForm] = form;
  const {deliverToDoor, roadNo, flat, businessName, deliveryInstructor} = shipmentForm;

  // let fullFillUpFrom = false;
  // fullFillUpFrom = deliverToDoor && roadNo && flat & businessName && deliveryInstructor; 

  // console.log(fullFillUpFrom);

  useEffect(() => {
    if(deliverToDoor && roadNo && flat && businessName && deliveryInstructor){
      setPlaceOrder(true);
    }
  }, [shipmentForm]);

  const handlePlaceOrder = () => {
    history.push('/contact');
  }


  let totalPrice = 0;
  for(let i = 0; i < cart.length; i++) {
    let product = cart[i];
    totalPrice = totalPrice + product.price * product.quantity;
  }

  let tax = totalPrice/ 15;
  let deliveryFee = 10;

  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
  }

  return (
    <div className="order-summery">
      <h6>From <strong>Gulsan Plaza Restaura GPR</strong></h6>
      <p>Arriving in 20-30 min</p>
      <span>107 Road No 8</span>
      <div className="place-order">
        <Row>
          <Col lg={7}>
            <h6>Subtotal . {cart.length} item</h6>
          </Col>
          <Col lg={5}>
            <p>${formatNumber(totalPrice)}</p>
          </Col>
          <Col lg={7}>
            <h6>Tax</h6>
          </Col>
          <Col lg={5}>
            <p>${formatNumber(tax)}</p>
          </Col>
          <Col lg={7}>
            <h6>Delivery Fee</h6>
          </Col>
          <Col lg={5}>
            <p>${formatNumber(deliveryFee)}</p>
          </Col>
          <Col lg={7}>
            <h6>Total</h6>
          </Col>
          <Col lg={5}>
            <p style={{marginBottom: '0'}}>${formatNumber(totalPrice + tax + deliveryFee)}</p>
          </Col>
        </Row>
      </div>
      <Button
        onClick={handlePlaceOrder}
        disabled={placeOrder ? false : true}
        variant="danger"
       >Place Order</Button>{' '}
    </div>
  );
};

export default OrderSummery;