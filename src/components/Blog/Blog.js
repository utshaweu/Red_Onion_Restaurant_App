import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BlogFakeData from '../../fakedata/BlogFakeData';
import BlogItem from '../BlogItem/BlogItem';

const Blog = () => {

  const [blogs, setBlogs] = useState(BlogFakeData);
  //console.log(blogs);

  return (
    <Container className="blog">
      <Row>
        <Col lg={6}>
          <div className="blog-heading">
            <h2>Why you choose us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim impedit quidem, maiores ullam ducimus consectetur!</p>
          </div>
        </Col>
      </Row>
      <Row>
        {
          blogs.map(item => (
            <Col lg={4}>
              <BlogItem blog={item} key={item.id}></BlogItem>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Blog;