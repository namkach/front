import React from 'react'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
// import { newTopic} from '../api'
import myImage from '../Pic/home.jpg';
import myImage1 from '../Pic/newtopic.png';
import myImage2 from '../Pic/topic.png';
import myImage3 from '../Pic/Detail.png';
import { Grid } from 'semantic-ui-react'

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + myImage + ")",
};

class Newtopic extends React.Component {

  state = {
    title: '',
    content: '',
    author: localStorage.getItem('username'),
    room: 'ccccccc'
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  // comment
  // submitPost = event => {
  //   event.preventDefault()
  //   newTopic(this.state.title, this.state.content, this.state.author, this.state.room)
  //     .then(data => {
  //       console.log(data);
  //       if (data.status === 200) {
  //         this.props.history.replace('/topic')
  //       }
  //     })
  // }

  /*********************/
  // onSubmit = event => {
  //   event.preventDefault()
  //   login(this.state.username, this.state.password)
  //     .then(data => {
  //       if (data.status === 200) {
  //         localStorage.setItem('username', this.state.username)       
  //         this.props.history.replace('/')
  //       }
  //     })
  // }

  render() {
    return (
      <div style={sectionStyle} > <Header />
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={5}>
            </Grid.Column>
            <Grid.Column width={6}>
              <div >
                <div>
                  <div style={{ padding: '50px 50px 50px 50px' }} >
                    <div class="accordion ui inverted">
                      <div class="ui relaxed divided list">
                        <div class="item">
                          <div class="ui basic segment">
                            <center><img class="ui big  image" src={myImage1} /></center>
                          </div>
                        </div>
                        <div class="item">
                          <form onSubmit={this.onSubmit} className='ui form' style={{ fontSize: 20 }}  >
                            <br />

                            <img class="ui Mini image" src={myImage2} />
                            <input type='text' name='title' value={this.state.title} placeholder='Title' onChange={this.onTextChange} />
                            <div className='field'>  <br />

                              <img class="ui Mini image" src={myImage3} /></div>

                            <textarea
                              name='content'
                              placeholder='Write your post...'
                              value={this.state.content}
                              onChange={this.onTextChange} />

                            <header class="ui center aligned violet header" style={{ fontSize: 50 }}>
                              <button class="ui huge blue button" type='submit'>submit</button>
                            </header>

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid><br /> <Footer />
      </div>
    )
  }
}
export default Newtopic