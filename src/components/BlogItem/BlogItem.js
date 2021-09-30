import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const BlogItem = (props) => {
  const {img, title, icon, details} = props.blog;
  return (
    <div className="blog-item">
      <img src={img} alt="" />
      <div className="blog-content">
        <Row>
          <Col lg={2}>
            <div className="icon">
              {icon}
            </div>
          </Col>
          <Col lg={10}>
            <h4>{title}</h4>
            <p>{details}</p>
            <a href="/more">See more</a>
            <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: '#17E26F'}} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogItem;