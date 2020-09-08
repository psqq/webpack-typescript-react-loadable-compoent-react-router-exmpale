import * as React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from './Loading';

const Home = Loadable({loader: () => import('./Home'), loading: Loading,});
const Users = Loadable({loader: () => import('./Users'), loading: Loading,});
const About = Loadable({loader: () => import('./About'), loading: Loading,});

const App: React.FC = function () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default function () {
    return (
        <Router>
            <App/>
        </Router>
    );
}
