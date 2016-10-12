var React = require('react');

// components
var Table = require('./Table.jsx');
var Amount = require('./Amount.jsx');

// style
require('./Info.css');

var Info = React.createClass({
    render() {
        return (
            <div className="info">
                <h1 className="info-heading"><span className="info-heading__color">Publishers.</span> Payments</h1>
                <Amount title="Overall Balance" sum="22469" format="sum" />
                <Amount title="Must payment" sum="3480" format="sum" />
                <Amount title="Profit" sum="18989" format="sum" />
                <Amount title="ROI" sum="84" format="percent" />
                <Table />
                <div className="per-page">
                    <ul>
                        <li>Rows per page: <span>10</span></li>
                        <li>1-10 of 183</li>
                        <li>
                            <a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Info;