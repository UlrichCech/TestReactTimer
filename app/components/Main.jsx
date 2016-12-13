var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation />
                <div>
                    <div className="main-component-frame">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
