import React from 'react'
import ReactDOM from 'react-dom'

class Alert extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  render() {
    const {content} = this.state
    return (
      <div className='modal'>
        <div className='modal-dialog'>
          <div className='modal-body'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
  show() {
    console.log('show')
  }
}

const div = document.createElement('div')

document.body.appendChild(div)


const Box = ReactDOM.render(
  <Alert/>,
  div
)

export default Box