  import React, { Component } from 'react';
  import Header from '../HeaderFooter/Header';
  import Footer from '../HeaderFooter/Footer';
  
  import myImage from '../Pic/5.jpg';
  import myImage1 from '../Pic/b1.png';
  import myImage2 from '../Pic/5.jpg';
  import myImage3 from '../Pic/about_us.jpg';
  import myImage4 from '../Pic/dog.jpg';
  import myImage5 from '../Pic/Find My Owner.jpg'; 
  import myImage6 from '../Pic/dog1.jpg';
  import myImage7 from '../Pic/help.png';
  import myImage8 from '../Pic/dog2.jpg';

  const sectionStyle = {
    width: "100%",
    height: "1290px",
    backgroundImage: "url(" + myImage + ")"
  };

  class Index extends Component {
  
    render() {
      return (
        <div style={sectionStyle}>
          <div>
            <Header />
         
        <img class="ui massive centered rounded image" src={myImage1} /><br></br><br></br><br></br>
       
        <div class="ui three cards">
        <div class="ui  link card ">
        <div class="ui inverted segment orange ">

          <center>
        <img class="ui medium rounded image" src={myImage3} />
          <div class=" meta "  >_______________________________________________________</div>
          <br/><div class="description " style={{ fontSize: 18 }}>วัตถุประสงค์ของโครงการ</div><br/>
          <img class="ui medium rounded image" src={myImage4} /><br></br>
          <button class="ui yellow inverted button" role="button" >ENTER</button>
          </center>
        </div>
      </div>
      
      <div class="ui  link card ">
        <div class="ui inverted segment orange ">
          <center>
        <img class="ui medium rounded image" src={myImage7} />
          <div class=" meta "  >_______________________________________________________</div>
          <br/><div class="description " style={{ fontSize: 18 }}>ถาม-ตอบปัญหา แนะนำเว็บบอร์ด </div><br/>
          <img class="ui medium rounded image" src={myImage8} /><br></br>
          <button class="ui yellow inverted button" role="button">ENTER</button>
          </center>
        </div>
      </div>
      
      <div class="ui  link card ">
        <div class="ui inverted segment orange ">
          <center>
        <img class="ui medium rounded image" src={myImage5} />
          <div class=" meta "  >_______________________________________________________</div>
          <br/><div class="description " style={{ fontSize: 18 }} >ต้องการรับอุปการะหรือหาบ้านให้สัตว์เลี้ยง</div><br/>
          <img class="ui medium rounded image" src={myImage6} /><br></br>
          <button class="ui yellow inverted button" role="button">ENTER</button>
          </center>
        </div>
      </div>
      </div>
      </div> 
      <br/>
      <Footer/>
      </div> 
      )
    }
  }
  
  export default Index