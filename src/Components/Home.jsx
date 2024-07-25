import React from "react"
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = (props) => {
  return (
    <div>
        <Navbar/>
       <About/>
       <Footer/>
    </div>
  )
};

export default Home;
