import Footer from "../components/Footer";
import Header from "../components/Header";
import Homefour from "../components/Homefour";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Three from "../components/Three";
import Silderimages from "../components/Silderimages";



const Home = () => {
    return (
        <>
      <Header/>
      <Slider/>
      {/* <Silderimages/> */}
      <Products/>
      <Homefour/>
      <Three/>
      <Footer/>
      </>
    );
  };
  
  export default Home;
  