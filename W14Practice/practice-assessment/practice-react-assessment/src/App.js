import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <HomePage data={props.data.company}/>}/>
        <Route path="/about" render={() => <AboutPage data={props.data.company}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
