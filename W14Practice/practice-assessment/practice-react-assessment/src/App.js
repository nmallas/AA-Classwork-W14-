import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import StaffPage from './StaffPage';

function App(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <HomePage data={props.data.company}/>}/>
        <Route path="/about" render={() => <AboutPage data={props.data.company}/>}/>
        <Route path="/staff" render={() => <StaffPage data={props.data.company.staff} />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
