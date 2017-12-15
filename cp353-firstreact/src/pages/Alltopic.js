import React from 'react';
import { publishPost, getAlltopic } from '../api'
import { Link } from 'react-router-dom';
import Header from '../HeaderFooter/Header';
import Footer from '../HeaderFooter/Footer';
import { Grid} from 'semantic-ui-react'
import myImage from '../Pic/n.jpg';
import myImage1 from '../Pic/welcome1.png';

const sectionStyle = {
    width: "100%",
    height: "1100",
    backgroundImage: "url(" + myImage + ")"
};

class Alltopic extends React.Component {

    state = {
        title: '',
        content: '',
        author: '',
        room: '',
        allPosts: []
    }

    onTextChange = event => {
        const name = event.target.name
        const value = event.target.value

        this.setState({ [name]: value })
    }

    go = event => {
        this.props.history.replace('/home')
    }

    getPosts = () => {
        getAlltopic()
            .then(data => this.setState({ allPosts: data }))
            .catch(err => console.error('Something went wrong.'))
    }

    signout = (event) => {
        localStorage.clear()
        this.props.history.replace('/')
        console.log(this.props);
        window.location.reload()
    }

    componentDidMount() {
        this.getPosts()
    }

    onSubmit = event => {
        console.log(this)
        event.preventDefault() // no refresh
        const name = event.target.name
        localStorage.setItem('topic', name)   //keep username to localstroage    
        console.log(name)
        this.props.history.replace('/topic/id/')
    }

    render() {
        const posts = this.state.allPosts
        return (
            <div>
                <Header />
                <div style={sectionStyle}>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={2}>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <div >
                                <center>
                                    <h2 className="ui center aligned icon header">
                                        <i aria-hidden="true" class="orange paw icon"></i></h2>
                                    <img class="ui large  image" src={myImage1} /><h1 style={{fontSize: 30}}> {localStorage.getItem('username')}</h1><br/></center>
                                <table class="ui yellow celled selectable attached table">
                                    <thead class="">
                                        <tr class="">
                                            <th class="" color='yellow'>Author</th>
                                            <th class="">Title</th>
                                            <th class="">Content</th>
                                            <th class="">Room</th>
                                            <th class="">Time</th>
                                            <th class="">Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody class="">
                                        {posts.length >= 0 ?
                                            posts.map(post =>
                                                <tr class="">
                                                    <td class="" >
                                                        {post.author}
                                                    </td>
                                                    <td class="">
                                                        {post.title}
                                                    </td>
                                                    <td class="">
                                                        {post.content}
                                                    </td>
                                                    <td class="">
                                                        {post.room}
                                                    </td>
                                                    <td class="">
                                                        {post.time}
                                                    </td>
                                                    <td class="">
                                                        <input type="submit" value="comment" className="btn btn-danger" name={post._id} onClick={this.onSubmit} />
                                                    </td>
                                                </tr>
                                            )
                                            : null
                                        }
                                    </tbody>
                                </table><br/><br/>
                            </div>
                        </Grid.Column> <Grid.Column width={2}> </Grid.Column> </Grid.Row> </Grid>
                        </div>
                <Footer />
            </div>
        )
    }
}

export default Alltopic