import React, { useEffect } from "react";
import FistSlider from "../components/FistSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Productscategories from "../components/Productscategories";
import ShowCaseSlider from "../components/ShowCaseSlider";

const Home = () => {
  useEffect(() => {
    document.title = "Sone Ki Khan Jaipur";
  }, []);
  return (
    <>
      <Header />
      <FistSlider />
      <Productscategories />
      <ShowCaseSlider />
      <Footer />
    </>
  );
};

export default Home;
