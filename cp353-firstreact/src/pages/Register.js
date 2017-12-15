import React from 'react'
import { register } from './../api'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import localStorage from 'localStorage'
import { Grid } from 'semantic-ui-react'
import myImage1 from '../Pic/re.png';
import myImage2 from '../Pic/Password.png';
import myImage from '../Pic/home1.jpg';
import myImage3 from '../Pic/Username.png';
import myImage4 from '../Pic/email.png';
import myImage5 from '../Pic/Profile Picture.png';
import myImage6 from '../Pic/firstname.png';
import myImage7 from '../Pic/last-name.png';

const sectionStyle = {
  width: "100%",
  height: "900",
  backgroundImage: "url(" + myImage + ")"
};

class Register extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: ""
  }

  onTextChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    register(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.email)
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          this.props.history.replace('/login')
        }
      })
  }

  render() {
    return (
      <div >
        <Header />
        <div style={sectionStyle}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={5}>
              </Grid.Column>
              <Grid.Column width={6}>
                <div style={{ padding: '50px 50px 50px 50px' }} >
                  <div class="accordion ui inverted">
                    <div class="ui relaxed divided list">
                      <div class="item">
                        <div class="ui basic segment">
                          <center><img class="ui small  image" src={myImage1} /></center>
                        </div>
                      </div>
                      <div class="item">
                        <form onSubmit={this.onSubmit} className='ui form' style={{ fontSize: 20 }}  >

                          <br />
                          <img class="ui small  image" src={myImage6} /><br/>
                          <input
                            type="text"
                            name="firstname"
                            placeholder="firstname"
                            value={this.state.firstname}
                            onChange={this.onTextChange} />

                          <br/><br/>
                          <img class="ui small  image" src={myImage7} /><br/>
                          <input
                            type="text"
                            name="lastname"
                            placeholder="lastname"
                            value={this.state.lastname}
                            onChange={this.onTextChange} />


                          <br/><br/>
                          <img class="ui small  image" src={myImage3} /><br/>
                          <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.onTextChange} />

                          <br/><br/>
                          <img class="ui small  image" src={myImage2} /><br/>
                          <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.Password}
                            onChange={this.onTextChange} />

                          <br/><br/>
                          <img class="ui small  image" src={myImage4} /><br/>
                          <input
                            type='email'
                            name='email'
                            placeholder='find@myowner.com'
                            value={this.state.email}
                            onChange={this.onTextChange} />
                          <br/><br/>
                          <header class="ui center aligned violet header" style={{ fontSize: 50 }}>
                            <button class="ui huge orange button" type='submit'>Register</button>
                          </header>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Register