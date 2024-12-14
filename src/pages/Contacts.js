import React, { useEffect } from 'react';
import Contactsinpages from '../components/Contactsinpages'
import Header from '../components/Header'
import Footer from '../components/Footer'

import FistSlider from '../components/FistSlider'


function Contacts() {
  useEffect(() => {
      document.title =
        "Sone Ki Khan Jaipur";
    }, []);
  return (
    <>
    <Header/>
    <FistSlider/>
    <Contactsinpages/>
    <Footer/>
    </>
  )
}

export default Contacts