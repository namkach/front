import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <div><center>
        <Menu  pointgin inverted secondary color="orange" >
        <Menu.Item center icon='paw'name='FindMyOwners' />
        </Menu>
</center>
      </div>
    )
  }
}