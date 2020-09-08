import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';

const App = Loadable({loader: () => import(/* webpackChunkName: "App" */ './App'), loading: Loading,});

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);
