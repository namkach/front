import React, { Component } from 'react'
import { Input, Menu, Segment, Icon, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  signout = event => {
    localStorage.clear();
    console.log(this.props);
  }

  render() {
    const { activeItem } = this.state
    
    return (
      <Menu pointgin inverted secondary color="orange">
        {!localStorage.getItem('username') ? (<Menu.Menu>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to='/login' />
          <Menu.Item name='register' active={activeItem === 'register'} onClick={this.handleItemClick} as={Link} to='/register' />
        </Menu.Menu>
        ) : (<Menu.Menu>
          <Dropdown text='User' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item icon='paw' name='user' active={activeItem === 'user'} onClick={this.handleItemClick} as={Link} to='/profile'>Profile</Dropdown.Item>
              <Dropdown.Item name='editprofile' active={activeItem === 'editprofile'} onClick={this.handleItemClick} as={Link} to='/editprofile' >Edit Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item name='logout' active={activeItem === 'logout'} onClick={this.signout} as={Link} to='/'>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
          )}
        <Menu.Item icon='home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to='/' />
        {!localStorage.getItem('username') ? (<Menu.Menu>
          <Menu.Item name='alltopic' active={activeItem === 'alltopic'} onClick={this.handleItemClick} as={Link} to='/alltopic'>Find My Owner</Menu.Item>
        </Menu.Menu>
        ) : (<Menu.Menu>
          <Dropdown text='Find My Owner' pointing className='link item'>
            <Dropdown.Menu>
            <Dropdown.Item icon='paw' name='alltopic' active={activeItem === 'alltopic'} onClick={this.handleItemClick} as={Link} to='/alltopic'>All Topic</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item name='newtopic' active={activeItem === 'newtopic'} onClick={this.handleItemClick} as={Link} to='/newtopic' >New Topic</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
          )}
        <Menu.Item icon='inbox' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} as={Link} to='/contact' />
        <Menu.Item icon='paw' name='about us' active={activeItem === 'about us'} onClick={this.handleItemClick} as={Link} to='/about' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}