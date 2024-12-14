import React, { useEffect } from 'react';
import FistSlider from "../components/FistSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Manproducts from "../components/Manproducts";
import Productscategories from "../components/Productscategories";

import Womanproducts from "../components/Womanproducts";



const Woman = () => {
   useEffect(() => {
        document.title =
          "Sone Ki Khan Jaipur";
      }, []);
    return (
        <>
      <Header/>
      <FistSlider/>
      <Womanproducts/>
      <Footer/>
      </>
    );
  };
  
  export default Woman;
  