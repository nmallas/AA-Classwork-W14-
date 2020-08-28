import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "./store/authentication"


function LogoutButton(props) {
    console.log(props);
    if (props.loggedOut) {
      return <Redirect to="/login" />;
    }
    return (
      <div id="logout-button-holder">
        <button onClick={props.logout}>Logout</button>
      </div>
    );
}

const mapStateToProps = (state) => ({
  loggedOut: !state.authentication.id
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
