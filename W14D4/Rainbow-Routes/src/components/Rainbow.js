import React from "react";
import {Route, Link, NavLink} from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Green from './Green';
import Violet from './Violet';

const Rainbow = () => {
    return (
        <div>
            <h1> Rainbow Router!</h1>
            <div id="rainbow">
            <Route path='/red' component={Red} />
            <Route path='/green' component={Green} />
            <Route path='/blue' component={Blue} />
            <Route path='/violet' component={Violet} />
              <div>
                <NavLink activeClassName="parent-active" to="/blue">Blue</NavLink>
                <NavLink activeClassName="parent-active" to="/red">Red</NavLink>
                <NavLink activeClassName="parent-active" to="/green">Green</NavLink>
                <NavLink activeClassName="parent-active" to="/violet">Violet</NavLink>
              </div>
            </div>
        </div>
    )
}

export default Rainbow;
