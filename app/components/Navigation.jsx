var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;


var Navigation = React.createClass({
    render: function () {
        return (
            <div>
                {/*<div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">*/}
                    {/*<button className="menu-icon" type="button" data-toggle />*/}
                    {/*<div className="title-bar-title">Menu</div>*/}
                {/*</div>*/}
                <div id="main-menu" className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">
                                React Timer App
                            </li>
                            <li>
                                <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                            </li>
                            <li>
                                <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">
                                <div>
                                    Created by <a href="https://github.com/UlrichCech/" target="_blank">Ulrich Cech</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;