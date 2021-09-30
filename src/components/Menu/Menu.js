import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductFakeData from '../../fakedata/ProductFakaData';
import MenuItem from '../MenuItem/MenuItem';

const Menu = () => {

  const [menus, setMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Lunch');

  //console.log(menus);

  useEffect(() => {
    const data = ProductFakeData.filter(item => item.category === selectedCategory);
    //console.log(data);
    setMenus(data);
  } , [selectedCategory]);

  const handleMenu = (category) => {
    setSelectedCategory(category);
  }

  return (
    <Container className="menu">
      <Row>
        <Col lg={6} className="m-auto text-center">
          <div className="menu-button">
            <button 
            onClick={() => handleMenu('Breakfast')}
            className={selectedCategory === 'Breakfast' ? 'active-category' : 'nonactive-category'}>Breakfast</button>
            <button 
            onClick={() => handleMenu('Lunch')} 
            className={selectedCategory === 'Lunch' ? 'active-category' : 'nonactive-category'}
            >Lunch</button>
            <button 
            onClick={() => handleMenu('Dinner')} 
            className={selectedCategory === 'Dinner' ? 'active-category' : 'nonactive-category'}
            >Dinner</button>
          </div>
        </Col>
      </Row>
      <Row>
        {
          menus.map(item => (
            <Col lg={4}>
              <MenuItem menu={item} key={item.id}></MenuItem>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Menu;