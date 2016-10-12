var React = require('react');

// style
require('./Filter.css');

var Filter = React.createClass({
    render() {
        return (
            <div className="filter">
                <ul>
                    <li><a href="#">TODAY</a></li>
                    <li><a href="#">YESTERDAY</a></li>
                    <li><a href="#">1 DAY</a></li>
                    <li><a href="#">3 DAYS</a></li>
                    <li><a href="#">WEEK</a></li>
                    <li><a href="#">MONTH</a></li>
                    <li><a href="#">3 MONTHS</a></li>
                    <li><a href="#">HALF-YEAR</a></li>
                    <li><a href="#">YEAR</a></li>
                    <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i> SELECT DATE</a></li>
                </ul>
                <div className="clearfix"></div>
            </div>
        );
    }
});

module.exports = Filter;