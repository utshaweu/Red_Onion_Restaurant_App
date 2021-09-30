import React, { useContext } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import CartReview from '../CartReview/CartReview';

const Cart = () => {

  const {carts} = useContext(UserContext);
  const [cart, setCart] = carts;
  //console.log(cart);
  const history = useHistory();

  const removeProduct = (productId) => {
    const newCart = cart.filter(pd => pd.id !== productId);
    setCart(newCart);
  }

  const handleProceedCheckout = () => {
    history.push('/shipment');
  }

  return (
    <Container className="mr4">
      <Row>
        {
          cart.map(item => (
            <Col lg={9} className="m-auto">
              <CartReview 
              cart={item} 
              removeProduct = {removeProduct}
              key={item.id}></CartReview>
            </Col>
          ))
        }
      </Row>
      <Row>
        <Col lg={8} className="m-auto text-center">
          <Button 
            onClick={handleProceedCheckout}
            disabled={ cart.length > 0 ? false  : true}
            variant="danger"
            >Proceed Checkout</Button> {' '}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;