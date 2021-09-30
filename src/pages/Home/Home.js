import React from 'react';
import Banner from '../../components/Banner/Banner';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Menu></Menu>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
};

export default Home;