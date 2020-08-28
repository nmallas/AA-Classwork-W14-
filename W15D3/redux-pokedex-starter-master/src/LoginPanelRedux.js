import React from "react";
import { connect } from "react-redux";
import {login} from './store/authentication';
import { Redirect} from "react-router-dom";


class LoginPanelRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: 'demo@example.com',
          password: 'password',
        };
        this.updateEmail = this.updateValue('email');
        this.updatePassword = this.updateValue('password');
    }

    updateValue = name => e => {
        this.setState({ [name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password)

    }

    render() {
        if(this.props.currentUserId) {
            return <Redirect to="/" />
        }
        return (

            <main className="centered middled">
              <form onSubmit={this.handleSubmit}>
                <input type="text"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.updateEmail} />
                <input type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.updatePassword} />
                <button type="submit">Login</button>
              </form>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.authentication.id
      };
}

const mapDispatchToProps = (dispatch) => {

    return {
        login: (email, password) => dispatch(login(email, password)),
    };
}


let connectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps)



export default connectedLogin(LoginPanelRedux);
