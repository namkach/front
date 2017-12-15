import React from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import localStorage from 'localStorage'
import {Grid} from 'semantic-ui-react'
import { login } from '../api';
import myImage from '../Pic/home.jpg';
import myImage1 from '../Pic/login.png';
import myImage2 from '../Pic/Password.png';
import myImage3 from '../Pic/Username.png';
import myImage4 from '../Pic/loginwith.png';
const sectionStyle = {
  width: "100%",
  height:"1000",
  backgroundImage: "url(" + myImage + ")"
};

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onTextChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

onSubmit = event => {
    event.preventDefault()
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          localStorage.setItem('username', this.state.username)       
          this.props.history.replace('/')
        }
      })
  }

  render() {
    return (
<div>
      <Header/>
      <div style={sectionStyle}><Grid columns={3}>
      
      <Grid.Row>

        <Grid.Column  width={5}>
        </Grid.Column>

        <Grid.Column  width={6}>
      
      <div style={{ padding: '50px 50px 50px 50px' }} >
        <div class="accordion ui inverted">
          <div class="ui relaxed divided list">
            <div class="item">
              <div class="ui basic segment">
              <center><img class="ui small  image" src={myImage1} /></center>
              </div>
            </div>
            <div class="item">
              <form className='ui form' style={{ fontSize: 20 }} onSubmit={this.onSubmit} >
                <p>  </p>
                <img class="ui small  image" src={myImage3} /><br/>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.onTextChange} />

                <p>  </p>
                <img class="ui small  image" src={myImage2} /><br/>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.Password}
                  onChange={this.onTextChange} />
                <p>  </p>

                <header class="ui center aligned violet header" style={{ fontSize: 50 }}>
                <button class="ui huge blue button" type='submit'>Log in</button>
              </header>

              </form> <br/> <br/><center><img class="ui medium  image" src={myImage4} /> <br/> <br/> <br/>
                      <div class="ui doubling three column grid">

                      <div class="column">
                          <button class="ui facebook circular icon  massive button" role="button">
                          <i aria-hidden="true" class="facebook icon"></i></button>
                      </div>
                            
                      <div class="column">
                          <button class="ui twitter circular icon  massive button" role="button">
                          <i aria-hidden="true" class="twitter icon"></i></button>
                      </div >

                      <div class="column">
                         <button class="ui linkedin circular icon   massive button" role="button">
                        <i aria-hidden="true" class="instagram icon"></i></button>
                       </div >
                       
                        </div></center>
              </div>
            </div>
          </div>
        </div>
      
      </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid><Footer/>
      </div>
      </div>
      
    )
  }
}

export default Login