import React from 'react'

import UserModal from '../../server/user'
// import Alert from '../../components/alert'

const userModal = new UserModal()

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmit()
    }
  }
  onSubmit() {
    const {username, password} = this.state
    const checkRes = userModal.checkLoginInfo({username, password})
    if (checkRes.code === 0) {
      userModal.login({username, password}).then(res => {
        userModal.setStorage('user', res)
        this.props.history.push('/')
      })
    }
    this.setState({
      error: checkRes.msg
    })
  }

  handleInput(e) {
    const key = e.target.name,
          value = e.target.value
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <div>
        <div className='col-md-4 offset-4 mt-5'>
          <div className='card'>
            <div className='card-header'>登录</div>
            <div className='card-body'>
              <div className='form'>
                <small className='text-danger'>{this.state.error}</small>
                <input 
                  className='form-control mb-2' 
                  placeholder='用户名' 
                  type='username'
                  name='username'
                  onChange={e => this.handleInput(e)}
                  onKeyUp={e => this.handleKeyUp(e)}
                />
                <input 
                  className='form-control mb-2' 
                  placeholder='密码' 
                  type='password'
                  name='password' 
                  onChange={e => this.handleInput(e)}
                  onKeyUp={e => this.handleKeyUp(e)}
                />
                <button className='btn btn-primary btn-block' onClick={() => this.onSubmit()}>登录</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Alert onRef={this.onRef} content={'你好'}/> */}
      </div>
    )
  }
}

export default Login