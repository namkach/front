import React from 'react'
import localStorage from 'localStorage'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { newTopic} from '../api'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'
import myImage from '../Pic/home.jpg';
import myImage1 from '../Pic/newtopic.png';
import myImage2 from '../Pic/topic.png';
import myImage3 from '../Pic/Detail.png';

const sectionStyle = {
  width: "100%",
  height: "1000",
  backgroundImage: "url(" + myImage + ")" ,
  

};

class NewTopic extends React.Component {
  state = {
    title: '',
    content: '',
    author: localStorage.getItem('username'),
    room:'ccccccc'
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }



/*********************comment********************** */
 /* submitPost = event => {
    event.preventDefault() 
    commentTopic(this.state.title,this.state.content,this.state.author)
    .then(data => {
      console.log(data);
   if (data.status === 200) {
    this.props.history.replace('/topic') 
     }
    })
  }*/

/*********************comment********************** */


/*********************topic********************** */
submitPost = event => {
  event.preventDefault() 
  newTopic(this.state.title,this.state.content,this.state.author,this.state.room)
  .then(data => {
    console.log(data);
 if (data.status === 200) {
  this.props.history.replace('/alltopic') 
   }
  })
}

/*********************topic********************** */


  render() {
    return (
      <div>
      <div style={sectionStyle} > <Header />
      <Grid columns={3}>
      <Grid.Row>
      
              <Grid.Column  width={5}>
              </Grid.Column>
      
              <Grid.Column  width={6}>
              <br/><br/>
      <center><img class="ui big  image" src={myImage1} /></center><br/><br/>
        <form class='ui form' onSubmit={this.submitPost}>
          <div className='field'>
          <br/>
                    <img class="ui Mini image" src={myImage2} />
            <input type='text' name='title' value={this.state.title} placeholder='Title' onChange={this.onTextChange}  />
          </div>
          <div>
    
  </div>
          
          
          <div className='field'>  <br/>
                    <img class="ui Mini image" src={myImage3} />
            <textarea
              name='content'
              placeholder='Write your post...'
              value={this.state.content}
              onChange={this.onTextChange} /><br/><br/><br/>
            <center><button className='ui primary button' style={{ margin: '16px 0' }}>Submit</button></center>
          </div>
        </form>
        
{/* 
        <input type="radio" name="room" value={this.state.room} onClick={this.onTextChange} />
        <button className="ui button">Sign out</button> */}
     </Grid.Column> <Grid.Column width={5}> </Grid.Column> </Grid.Row> </Grid><br/> 
      </div>
      
      <Footer />
      </div>
    )
  }
}

export default NewTopic