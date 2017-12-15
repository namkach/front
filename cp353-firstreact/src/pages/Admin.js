import React, { Component } from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import myImage from '../Pic/5.jpg';
import myImage1 from '../Pic/cat.png';
import myImage2 from '../Pic/newUSER.png';
import myImage3 from '../Pic/newtopic1.png';
import myImage4 from '../Pic/names.png';
import myImage5 from '../Pic/post.png';
import myImage6 from '../Pic/welcome.png';
import { Button, Grid, Label, Responsive, Segment } from 'semantic-ui-react'

const sectionStyle = {
    width: "100%",
    height: "870px",
    backgroundImage: "url(" + myImage + ")"
};

class Admin extends React.Component {
    render() {
        return (
            <div>
                <div style={sectionStyle}>
                    <Header />
                    <br />
                    <center>
                        <img class="ui small  image" src={myImage1} /> <br />
                        <img class="ui big  image" src={myImage6} />  <br /> <br /> <br />
                        < div class="ui two column grid">
                            <div class="column">

                                <img class="ui small  image" src={myImage2} /> <br /><br />
                                <img class="ui medium  image" src={myImage5} /><br /><br />
                                <Button size='big' color='yellow'> ENTER</Button>

                            </div>
                            <div class="column">

                                <img class="ui small  image" src={myImage3} /> <br /><br />
                                <img class="ui medium  image" src={myImage4} /><br /><br />
                                <Button size='big' color='yellow'> ENTER</Button>

                            </div>
                        </div>


                    </center>
                </div>
                <Footer />
            </div>



        )
    }
}

export default Admin;