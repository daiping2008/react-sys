import React from 'react'

class PageTitle extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default PageTitle