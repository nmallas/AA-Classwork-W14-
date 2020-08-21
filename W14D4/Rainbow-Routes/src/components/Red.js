import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Yellow from "./Yellow"
import Orange from "./Orange"

const Red = () => (
    <div>
        <h2 className="red">Red</h2>
        <NavLink exact to="/red">Red only</NavLink>
        <NavLink to='/red/orange'>Add orange</NavLink>
        <NavLink to="/red/yellow">Add yellow</NavLink>
        <Route path="/red/orange" component={Orange}/>
        <Route path="/red/yellow" component={Yellow}/>
    </div>
);

export default Red;
