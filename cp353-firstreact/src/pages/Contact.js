import React, { Component } from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import myImage from '../Pic/n.jpg';
import myImage1 from '../Pic/Contact.png'
import myImage2 from '../Pic/out.png'
import myImage3 from '../Pic/nae.png'
import myImage4 from '../Pic/nam.png'
import myImage5 from '../Pic/yuan.png'
import myImage6 from '../Pic/nat.png'
const sectionStyle = {
    width: "100%",
    height: "1410",
    backgroundImage: "url(" + myImage + ")"
};
class Contact extends Component {

    render() {
        return (
            <div style={sectionStyle}>
                <div>
                    <Header />
                    <div style={{ padding: '100px 100px 40px 100px' }}>
                        <div class="accordion ui inverted">
                            <div class="ui segment" >
                                <div>
                                    <div class="ui relaxed divided list">
                                        <div class="item">
                                            <div class="ui basic segment">
                                                <div>
                                                    <center><img class="ui small  image" src={myImage1} /></center>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <form className='ui form' style={{ fontSize: 20 }} >
                                                {/* <header class="ui center aligned header" style={{ fontSize: 30 }}>Contact Details</header> */}
                                                <div><br />
                                                    <i class="paw icon"></i>
                                                    Srinakharinwirot University&nbsp;&nbsp;&nbsp;19th Building 18th Floor, Faculty of Science <br />
                                                </div>
                                                <br />
                                                <br />
                                                <div><i class="paw icon"></i>
                                                    <abbr title="Phone">T</abbr>: 091-786-1515</div><br />
                                                <div><i class="paw icon"></i>
                                                    <abbr title="Email">E</abbr>: <a href="mailto:name@example.com">findmyowner@hotmail.com</a><br /><br />
                                                </div>
                                                <div><i class="paw icon"></i>
                                                    <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 4:00 PM</div><br />
                                                <ul class="list-unstyled list-inline list-social-icons">
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '100px 100px 100px 100px' }}>
                        <div class="ui segment" >
                            <div>
                                <div class="ui relaxed divided list">
                                    <div class="item">
                                        <div class="ui basic segment">
                                            <div>
                                                <img class="ui small  image" src={myImage1} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <form className='ui form' style={{ fontSize: 20 }} >
                                            <div class="ui four cards">
                                                <div class="ui  link card ">
                                                    <div class="ui inverted segment orange ">
                                                        <center>
                                                            <div style={{ fontSize: 30 }}>Chanapat<br/><br/>Pradyawong<br/>

                                                            </div><br></br><br></br>
                                                            <img class="ui small  image" src={myImage3} />
                                                            <p>Faculty of Science,Computer Science</p>
                                                            <p>Nickname : Nae</p>
                                                            <p>ID : 58102010189</p>
                                                            <p>Tel : 083-060-2294</p>
                                                            <p>Email : chanapat991@gmail.com</p>
                                                        </center>
                                                    </div>
                                                </div>

                                                <div class="ui link card ">
                                                    <div class="ui inverted segment orange ">
                                                        <center>
                                                            <div style={{ fontSize: 30 }}>Sunita<br/><br/>Kachornvitaya<br/><br/>

                                                            </div>
                                                            <img class="ui small  image" src={myImage4} />
                                                            <p>Faculty of Science,Computer Science</p>
                                                            <p>Nickname : Nam</p>
                                                            <p>ID : 58102010214</p>
                                                            <p>Tel : 083-034-2700</p>
                                                            <p>Email : nam1805@hotmail.com</p>
                                                        </center>
                                                    </div>
                                                </div>

                                                <div class="ui  link card ">
                                                    <div class="ui inverted segment orange ">
                                                        <center>
                                                            <div style={{ fontSize: 30 }}>Kanjann<br/><br/>Donpraite<br/>

                                                            </div>
                                                            <img class="ui small  image" src={myImage5} />
                                                            <p>Faculty of Science,Computer Science</p>
                                                            <p>Nickname : Yuan</p>
                                                            <p>ID : 58102010801</p>
                                                            <p>Tel : 082-720-0488</p>
                                                            <p>Email : daisy-yuan@hotmail.com</p>
                                                        </center>
                                                    </div>
                                                </div>

                                                <div class="ui  link card ">
                                                    <div class="ui inverted segment orange ">
                                                        <center>
                                                            <div style={{ fontSize: 30 }}>Nattawit<br/><br/>Chotchoey<br/><br/>

                                                            </div>
                                                            <img class="ui small  image" src={myImage6} /><br></br>
                                                            <p>Faculty of Science,Computer Science</p>
                                                            <p>Nickname : Nat</p>
                                                            <p>ID : 58102010805</p>
                                                            <p>Tel : 093-618-0260</p>
                                                            <p>Email : natwit_cc@hotmail.com</p>
                                                        </center>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact