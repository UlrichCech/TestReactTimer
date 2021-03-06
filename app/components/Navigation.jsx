var React = require('react');
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var Navbar = require("react-bootstrap/lib/Navbar");
var Nav = require("react-bootstrap/lib/Nav");
var NavItem = require("react-bootstrap/lib/NavItem");
var NavbarHeader = require("react-bootstrap/lib/NavbarHeader");

var Navigation = React.createClass({
    render: function () {
        return (
            <Navbar fixedTop collapseOnSelect className="navibar">
                <Navbar.Header>
                    <Navbar.Brand>
                        React Timer App
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Link to="/">Timer</Link>
                        <Link to="/countdown">Countdown</Link>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Link href="https://github.com/UlrichCech/" target="_blank">Ulrich Cech</Navbar.Link>
                        {/*<NavItem eventKey={1} href="https://github.com/UlrichCech/" target="_blank">Ulrich Cech</NavItem>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            // <div>
            //     {/*<div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">*/}
            //         {/*<button className="menu-icon" type="button" data-toggle />*/}
            //         {/*<div className="title-bar-title">Menu</div>*/}
            //     {/*</div>*/}
            //     <div id="main-menu" className="top-bar">
            //         <div className="top-bar-left">
            //             <ul className="menu">
            //                 <li className="menu-text">
            //                     React Timer App
            //                 </li>
            //                 <li>
            //                     <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            //                 </li>
            //                 <li>
            //                     <Link to="/countdown" activeClassName="active-link">Countdown</Link>
            //                 </li>
            //             </ul>
            //         </div>
            //         <div className="top-bar-right">
            //             <ul className="menu">
            //                 <li className="menu-text">
            //                     <div>
            //                         Created by <a href="https://github.com/UlrichCech/" target="_blank">Ulrich Cech</a>
            //                     </div>
            //                 </li>
            //             </ul>
            //         </div>
            //     </div>
            // </div>
        );
    }
});

module.exports = Navigation;