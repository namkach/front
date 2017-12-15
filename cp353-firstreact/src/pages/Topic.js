import React from 'react';
import { findtopic, publishPost, getAllPosts, findcomment } from '../api'
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { Button, Grid, Divider, Segment } from 'semantic-ui-react'
import myImage from '../Pic/n.jpg';

const sectionStyle = {
  width: "100%",
  height: "1100",
  backgroundImage: "url(" + myImage + ")"
};

class Topic extends React.Component {

  state = {
    content: '',
    author: '',
    post: [],
    allPosts: []
  }

  getUser = () => {
    findtopic().then(post => this.setState({ post }))
      .catch(err => console.error('Something went wrong.'))



  }
  componentDidMount() { // when render finish call is func
    this.getUser()
    this.getPosts()

  }
  submitPost = event => {
    event.preventDefault()

    publishPost(this.state.post._id, this.state.content, localStorage.getItem('username'))
      .then(() => { this.getPosts() })

  }

  getPosts = () => {
    findcomment()
      .then(data => this.setState({ allPosts: data }))
      .catch(err => console.error('Something went wrong.'))
    console.log("ccdffddd")
  }

  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    const posts = this.state.allPosts
    return (
 
      <div>
        <div style={sectionStyle} >
        < Header />
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>

              <div>
                <div class="ui segment">
                  <div class="ui relaxed divided list">
                    <div class="item">
                      <div class="ui basic segment">
                        <li class="header" style={{ fontSize: 30, padding: '10px 10px 10px 50px' }}>Title :{this.state.post.title} </li>
                      </div>
                    </div>
                    <div class="item">
                      <form className='ui form' style={{fontSize: 20}}>
                        <li class="header" style={{ padding: '10px 10px 10px 50px' }}>{this.state.post.content} </li>
                      </form>

                    </div>
                    <div class="item">
                      <form className='ui form' >
                        <li class="header" style={{ padding: '10px 0px 0px 50px' }}>Author :{this.state.post.author} </li>
                      </form>

                    </div>
                  </div>
                </div>
              </div>



              <br></br>
              {posts.length >= 0 ?
                posts.map(post =>
                  <div class="ui segment">
                    <div class="ui relaxed divided list">


                      <div class="item" style={{ padding: '10px 10px 10px 50px'}}>
                        <form className='ui form' style={{fontSize: 20}}>
                          <br />{post.content}<br /><br />
                        </form>


                      </div>
                      <div class="item" style={{ padding: '10px 0px 0px 50px' }}>
                        <form className='ui form' >
                          <p>User : {post.author}</p>
                        </form>

                      </div>
                    </div>
                  </div>

                )
                : null
              }
              <form class='ui form' onSubmit={this.submitPost}>
                <div className='field'>
                </div>
                <div className='field'>
                  <textarea
                    name='content'
                    placeholder='Write your post...'
                    value={this.state.content}
                    onChange={this.onTextChange} />
                  <center><button className='ui primary button' style={{ margin: '16px 0' }}>Post</button></center>
                </div>
              </form>
            </Grid.Column> <Grid.Column width={3}> </Grid.Column> </Grid.Row> </Grid>
        <Footer />
      </div>
      </div>




    );
  }
}

export default Topic;