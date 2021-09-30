import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductFakeData from '../../fakedata/ProductFakaData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';

const MenuDetail = () => {
  const {id} = useParams();
  const [item, setItem] = useState({});

  //console.log(item);
  const {img, title, details, price} = item;

  const [count, setCount] = useState(0);

  const {carts} = useContext(UserContext);
  const [cart, setCart] = carts;
  //console.log(cart);


  useEffect(() => {
    const product = ProductFakeData.find(item => item.id === id);
    setItem(product);
  },[]);

  const handleDecrease = () => {
     if(count > 0){
      const  c = count - 1;
      setCount(c);
     }
  }

  const handleIncrease = () => {
     const c = count + 1;
     setCount(c);
  }

  const handleAddToCart = () => {

    let similarItem = cart.find(item => item.id === id);
    //console.log(similarItem);

    if(similarItem){
      const updatedCart = cart.filter(item => item.id !== id);
      similarItem.quantity = count;
      setCart([similarItem, ...updatedCart]);
    }
    else if (count === 0){
      alert('Please at lest 1 quantity added');
    }
    else if(count > 0){
      const data = {...item};
      data.quantity = count;
      //console.log(data);
      setCart([...cart, data]);
    }
  }

  return (
    <Container className="menu-detail">
      <Row>
        <Col lg={8} className="m-auto">
          <Row>
            <Col lg={6}>
              <h2>{title}</h2>
              <p>{details} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam obcaecati deserunt sapiente laboriosam maiores vitae!</p>
              <Row>
                <Col lg={3}>
                  <span>${price}</span>
                </Col>
                <Col lg={9}>
                  <div className="count">
                    <span onClick={handleDecrease}> - </span>
                    <span>{count}</span>
                    <span onClick={handleIncrease}> + </span>
                  </div>
                </Col>
              </Row>
              <div className="cart">
                <button onClick={handleAddToCart}><FontAwesomeIcon icon={faShoppingCart} style={{marginRight: '8px'}}/> Add</button>
              </div>
            </Col>
            <Col lg={6}>
              <img src={img} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuDetail;