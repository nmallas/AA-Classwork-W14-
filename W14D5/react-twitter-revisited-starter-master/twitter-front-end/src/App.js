import React from 'react';
import {Route, Switch, NavLink} from "react-router-dom";
import RegistrationForm from './components/session/RegistrationForm';
import Home from './components/Home';
import LogInForm from './components/session/LogInForm';
import Profile from './components/Profile';
import {ProtectedRoute, AuthRoute} from "./Routes";

function App() {
  return (
    <>
      <nav>
        <NavLink exact to="/" > Home </NavLink>
        <NavLink to="/register" > Register </NavLink>
        <NavLink to="/login" > Login </NavLink>
      </nav>
      <Switch>
        <AuthRoute path="/register" component={RegistrationForm} />
        <AuthRoute path="/login" component={LogInForm} />
        <ProtectedRoute path="/users/:userId" component={Profile} />
        <ProtectedRoute exact path="/" component={Home} />
        {/* <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LogInForm} />
        <Route path="/users/:userId" component={Profile} />
        <Route path="/" component={Home} /> */}
      </Switch>
    </>
  );
}

export default App;
