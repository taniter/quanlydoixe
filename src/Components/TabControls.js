import React, { Component } from 'react';

class TabControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 'dashboard'
        }
    }

    onClick = (ev) => {
        this.props.onTabControlsClick(ev.target.id);
        this.setState({
            cur: ev.target.id
        })
    }
    render() {
        return (
            <nav className="nav row col nav-tabs d-flex flex-row nav-stacked">
                <a onClick={this.onClick} className={this.state.cur === 'dashboard' ? "nav-link active" : "nav-link"} href="#" id="dashboard">Dashboard</a>
                <a onClick={this.onClick} className={this.state.cur === 'danh_muc_xe' ? "nav-link active" : "nav-link"} href="#" id="danh_muc_xe">Danh Mục Xe</a>
                <a onClick={this.onClick} className={this.state.cur === 'danh_muc_tai_xe' ? "nav-link active" : "nav-link"} href="#" id="danh_muc_tai_xe">Danh Mục Tài Xế</a>
                <a onClick={this.onClick} className={this.state.cur === 'danh_muc_chi_phi' ? "nav-link active" : "nav-link"} href="#" id="danh_muc_chi_phi">Danh Mục Chi Phí</a>
                <a onClick={this.onClick} className={this.state.cur === 'phi_thu' ? "nav-link active" : "nav-link"} href="#" id="phi_thu">Phí Thu</a>
                <a onClick={this.onClick} className={this.state.cur === 'phi_chi' ? "nav-link active" : "nav-link"} href="#" id="phi_chi">Phí Chi</a>
            </nav>
        );
    }
}

export default TabControls;