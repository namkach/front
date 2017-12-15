import React from 'react';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { Link } from 'react-router-dom';
import { find } from '../api'
import { Grid, Button } from 'semantic-ui-react'
import myImage from '../Pic/Profile.png';
import myImage1 from '../Pic/Username.png';
import myImage2 from '../Pic/last-name.png';
import myImage3 from '../Pic/firstname.png';
import myImage4 from '../Pic/email.png';
import myImage5 from '../Pic/home1.jpg';
const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + myImage5 + ")"
  };
const user  = localStorage.getItem('username');
class Profile extends React.Component {
  constructor() {
    super();
    
    this.state = {
       post: []
  };
  }

  getUser = () => {
    find().then(post => this.setState({ post }))
      .catch(err => console.error('Something went wrong.'))

  }

  componentDidMount() { // when render finish call is func
    this.getUser()
    
  }


  render() {
    console.log(this.state.username)
    console.log(this.state)

    return (
      <div className="main">
       <Header />
      <div style={sectionStyle}>
        <Grid columns={3}>
      <Grid.Row>
      
              <Grid.Column  width={5}>
              </Grid.Column>
      
              <Grid.Column  width={6}>
        <div style={{ padding: '50px 50px 50px 50px' }}>
                    <div class="ui segment" >
                        <div>
                            <div class="ui relaxed divided list">
                                <div class="item">
                                    <div class="ui basic segment">
                                        <div>
                                            <center><header ><img class="ui small  image" src={myImage} /></header></center>
                                        </div>
                                    </div>
                                </div>
                                <div class="item" style={{ padding: '15px 0px 0px 30px' }}>
                                    <form className='ui form' style={{ fontSize: 18 }}><br />
                                        <li class="header"><img class="ui tiny  image" src={myImage1} /><br /> {this.state.post.username} </li><br /><br /><br />
                                        <li class="header"><img class="ui tiny  image" src={myImage3} /><br /> {this.state.post.firstName}</li><br /><br /><br />
                                        <li class="header" ><img class="ui tiny  image" src={myImage2} /><br /> {this.state.post.lastName}</li><br /><br /><br />
                                        <li class="header"><img class="ui tiny  image" src={myImage4} /><br /> {this.state.post.email}</li><br /><br />
                                       <center>< Button right basic color='pink'as={Link} to='/editprofile'>EDIT PROFILE</Button></center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
        </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid>  </div><Footer/>
      </div>
    );
  }
}

export default Profile;