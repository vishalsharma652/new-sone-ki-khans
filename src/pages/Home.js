import React, { useEffect } from 'react';
import BigSilder from "../components/BigSilder";
import FistSlider from "../components/FistSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homefour from "../components/Homefour";
import Products from "../components/Products";
import ShowCaseSlider from "../components/ShowCaseSlider";

import Three from "../components/Three";

const Home = () => {
  useEffect(() => {
    document.title =
      "Sone Ki Khan Jaipur";
  }, []);
  return (
    <>
      <Header />
      <FistSlider />

      {/* <BigSilder/> */}
      <Products />
      <Homefour />
      <ShowCaseSlider />
      <Three />
      <Footer />
    </>
  );
};

export default Home;
