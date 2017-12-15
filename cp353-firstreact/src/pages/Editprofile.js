import React from 'react';
import { editprofile,find } from '../api'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import myImage1 from '../Pic/EditProfile.png';
import myImage2 from '../Pic/Username.png';
import myImage3 from '../Pic/firstname.png';
import myImage4 from '../Pic/last-name.png';
import myImage5 from '../Pic/email.png';
import myImage from '../Pic/home.jpg';

const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + myImage + ")"
};
const user = localStorage.getItem('username');

class Editprofile extends React.Component {

    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: ""
    }

    onSubmit = event => {
        event.preventDefault() // no refresh
        editprofile(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.email)
          .then(data => {
            if (data.status === 200) {
              window.location.reload();
            } else {
              console.log('ey')
            }
          })
      }

    onTextChange = event => {
        console.log(event.target.value)
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    setUser = (user) => {
        console.log(user)
        this.setState({
            username: user.username,
            firstname: user.firstName,
            lastname: user.lastName,
            email: user.email
        })
    }

    getUser = () => {
        find().then(post => this.setUser(post))
            .catch(err => console.error('Something went wrong.'))
    }

    componentDidMount() { // when render finish call is func
    this.getUser();
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

                            <Grid.Column width={3}>
                            </Grid.Column>

                            <Grid.Column width={10}>

                                <div color='red' style={{ padding: '100px 150px 100px 150px' }}>
                                    <div class="ui relaxed divided list" >
                                        <div>
                                            <div class="ui relaxed divided list" >
                                                <div class="item">
                                                    <div class="ui basic segment">
                                                        <div>
                                                            <center><header> <img class="ui medium  image" src={myImage1} /><br /></header></center>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item" style={{ fontSize: 20 }}>
                                                    <form className='ui form' onSubmit={this.onSubmit} style={{ padding: '20px 150px 0px 150px' }} ><br />

                                                        <li class="header"><img class="ui tiny  image" src={myImage2} /><br />
                                                            <input
                                                                type='text'
                                                                name='username'
                                                                value={this.state.username}
                                                                onChange={this.onTextChange} />
                                                        </li><br />

                                                        <li class="header"><img class="ui tiny  image" src={myImage3} /><br />
                                                            <input
                                                                type="text"
                                                                name="firstname"
                                                                value={this.state.firstname}
                                                                onChange={this.onTextChange} />
                                                        </li><br />

                                                        <li class="header"><img class="ui tiny  image" src={myImage4} /><br />
                                                            <input
                                                                type="text"
                                                                name="lastname"
                                                                value={this.state.lastname}
                                                                onChange={this.onTextChange} />
                                                        </li><br />

                                                        <li class="header"><img class="ui tiny  image" src={myImage5} /><br />
                                                            <input
                                                                type='email'
                                                                name='email'
                                                                value={this.state.email}
                                                                onChange={this.onTextChange} />
                                                        </li><br />
                                                        <div> <center><br />
                                                        <a href="/profile"><button class="ui primary button" role="button" >Submit</button></a></center>
                                                        </div>
                                                    </form>
                                                    <a href="/profile"><button class="ui secondary button" role="button" >Cancel</button> </a><br /><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid></div><Footer />
            </div>
        );
    }
}
export default Editprofile;