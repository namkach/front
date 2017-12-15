// import React from 'react'

// import Popup from './pages/popup'




// export default class Popup extends React.Component {

//     render() {
//         return (


//             <h2>hello</h2>

//             <div>
//                 <button class="ui icon left labeled button" role="button">
//                     <i aria-hidden="true" class="plus icon"></i>Show</button>
//             </div>
        
//     );
//     }

// }




import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon } from 'semantic-ui-react'

export default class DimmerExamplePage extends Component {
  state = {}

  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
        <div>
      <div>
        <Button
          content='Show'
          icon='plus'
          labelPosition='left'
          onClick={this.handleOpen}
        />

        <Dimmer
          active={active}
          onClickOutside={this.handleClose}
          page
        >
          <Header as='h2' icon inverted>
            <Icon name='heart' />
            Dimmed Message!
            <Header.Subheader>Dimmer sub-header</Header.Subheader>
          </Header>
        </Dimmer>

        </div>
        <div>
        <h2>hello</h2>

           <div>
                <button class="ui icon left labeled button" role="button">
                     <i aria-hidden="true" class="plus icon"></i>Show</button>
            </div>


      </div>

</div>



    )
  }
}