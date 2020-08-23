import React from 'react';
import {Route, Switch, NavLink} from "react-router-dom";
import Home from './components/Home';
import LogInForm from './components/session/LogInForm';
import Profile from './components/Profile';
import {ProtectedRoute, AuthRoute} from "./Routes";
import RegistrationFormWithContext from './components/session/RegistrationForm';

function App(props) {
  return (
    <>
      <nav>
        <NavLink exact to="/" > Home </NavLink>
        <NavLink to="/register" > Register </NavLink>
        <NavLink to="/login" > Login </NavLink>
      </nav>
      <Switch>
        <AuthRoute path="/register" currentUserId={props.currentUserId} component={RegistrationFormWithContext} />
        <AuthRoute path="/login" currentUserId={props.currentUserId} component={LogInForm} />
        <ProtectedRoute path="/users/:userId" currentUserId={props.currentUserId} component={Profile} />
        <ProtectedRoute exact path="/" currentUserId={props.currentUserId} component={Home} />
        {/* <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LogInForm} />
        <Route path="/users/:userId" component={Profile} />
        <Route path="/" component={Home} /> */}
      </Switch>
    </>
  );
}

export default App;
