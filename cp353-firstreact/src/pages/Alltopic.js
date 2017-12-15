import React, { Component } from 'react'
import myImage from '../Pic/5.jpg';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import myImage1 from '../Pic/topic1.png';

const sectionStyle = {
    width: "100%",
    height: "830px",
    backgroundImage: "url(" + myImage + ")" ,
    

  };
  


  class  Alltopic extends React.Component {
    render() {
        return (
     <div style={sectionStyle}>
         <Header/>
        <img class="ui Small  image" src={myImage1} /> 




    </div>
        )
    }
}
export default Alltopic