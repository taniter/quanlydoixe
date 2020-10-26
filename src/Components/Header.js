import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row getNoty bg-warning">
                <div className="col-xl-10 col-md-10 col-lg-10" />
                <div className="col-xl-2 col-md-2 col-lg-2">
                    <i className="fa p-3 fa-bell" />
                    <i className="fa p-3 fa-user" />
                    <i className="fa p-3 fa-power-off" />
                </div>
            </div>
        );
    }
}

export default Header;