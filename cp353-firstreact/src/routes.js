import React from 'react'
import { Switch, Route } from 'react-router-dom'
import localStorage from 'localStorage'

import Header from './HeaderFooter/Header';
import Login from './pages/Login'
import Main from './pages/Main'
import About from './pages/About'
import Index from './pages/Index'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Newtopic from './pages/Newtopic'
import Alltopic from './pages/Alltopic'
import Editprofile from './pages/Editprofile'
import Topic from './pages/Topic'
import Admin from './pages/Admin'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/main" component={Main} />
    <Route exact path="/about" component={About} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/newtopic" component={Newtopic} />
    <Route exact path="/alltopic" component={Alltopic} />
    <Route exact path="/editprofile" component={Editprofile} />
    <Route exact path="/topic" component={Topic} />
    <Route exact path="/admin" component={Admin} />
    
{/* 
    {!localStorage.getItem('username') ? (
  <Redirect to="/login" />
) : (
  <Switch>
    <Route exact path='/item' component={Item} />
    <Route exact path='/upload' component={Additem} />
    <Route exact path='/post' component={Post} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/editprofile" component={EditProfile} />
  </Switch>
)}*/}
</Switch> 
)

export default Routes