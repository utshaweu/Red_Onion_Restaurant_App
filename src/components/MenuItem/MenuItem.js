import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const {img, title, details, price, id} = props.menu;
  
  return (
    <Link to={`/product/${id}`}>
      <div className="menu-item">
        <img src={img} alt="" />
        <h6>{title}</h6>
        <p>{details}</p>
        <span>${price}</span>
      </div>
    </Link>
  );
};

export default MenuItem;