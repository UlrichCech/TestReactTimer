var React = require('react');
var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

require('style!css!sass!ApplicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
