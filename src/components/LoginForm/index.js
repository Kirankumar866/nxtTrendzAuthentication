// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {nameEntered: '', passwrdEntered: 'k'}

  onChangeUsername = event => {
    this.setState({nameEntered: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwrdEntered: event.target.value})
  }

  renderPasswordField = () => {
    const {passwrdEntered} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={passwrdEntered}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUserNameField = () => {
    const {nameEntered} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={nameEntered}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  onSuccessfulSubmission = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {nameEntered, passwrdEntered} = this.state
    const userDetails = {nameEntered, passwrdEntered}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessfulSubmission()
    }
    console.log(response)
  }

  render() {
    return (
      <div className="loginpage-container">
        <img
          className="loginImage"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            className="nxtLogo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="userName-container">{this.renderUserNameField()}</div>
          <div className="password-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
