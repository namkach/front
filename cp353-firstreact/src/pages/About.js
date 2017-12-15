import React, { Component } from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import myImage from '../Pic/5.jpg';
import myImage1 from '../Pic/aboutus.png';
import myImage2 from '../Pic/2_2.png';
import myImage3 from '../Pic/เนื้อหา.png';
import myImage4 from '../Pic/1.jpg';
import myImage5 from '../Pic/3.jpg';
import myImage6 from '../Pic/2.jpg';
import myImage7 from '../Pic/4.jpg';

const sectionStyle = {
  width: "100%",
  height: "1100",
  backgroundImage: "url(" + myImage + ")"
};

class About extends React.Component {
  render() {
    return (
      <div style={sectionStyle}>
        <div>
          <Header />
          <center>
            <img class="ui medium rounded image" src={myImage1} /><br></br><br></br>
            <img class="ui massive rounded image" src={myImage2} /><br></br></center>
          <img class="ui big  image" src={myImage3} />
          <center><br/>
            <div class="ui medium rounded images">
              <img src={myImage4} class="ui image" />
              <img src={myImage5} class="ui image" />
              <img src={myImage6} class="ui image" />
              <img src={myImage7} class="ui image" />
            </div> <br/></center>
            <br/>
        </div>
        <Footer />
      </div>
    )
  }
}
export default About