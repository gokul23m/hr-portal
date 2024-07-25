import React from "react"
import './About.css';
import Footer from "./Footer";

const About = (props) => {
  return (
    <div className="responsive-container-block bigContainer">
          <div className="responsive-container-block Container">
              <div className="responsive-container-block leftSide">
        <p className="text-blk heading">
        Vision And Mission
        </p>
        <h4 >Our Vission</h4>
        <p className="text-blk subHeading">
          To make transactions simple and secure for everyone.
        </p><br/>
        <h4 >Our Mission</h4>
        <p className="text-blk subHeading">
          To be the go to partner for all digital transactional needs & innovations.
        </p>
      </div>
      <div className="responsive-container-block rightSide">
        <img className="number1img" src="https://www.mindgate.solutions/wp-content/uploads/2022/10/3-important-payments.jpg"/>
        <img className="number2img" src="https://www.mindgate.solutions/wp-content/uploads/2022/06/MEA-Mindgate-Post-2022-400x250.png"/>
        <img className="number3img" src="https://www.mindgate.solutions/wp-content/uploads/2021/11/n-PAAS-new.jpg"/>
        <img className="number5img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"/>
        <iframe allowfullscreen="allowfullscreen" className="number4vid" poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png" src="https://www.youtube.com/embed/svg%3E?">
        </iframe>
        <img className="number7img" src="https://www.mindgate.solutions/wp-content/uploads/2021/04/recon-d.jpg"/>
        <img className="number6img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"/>
      </div>
    </div>
  </div>
  
  )
};

export default About;
