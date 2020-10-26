import React, { Component } from 'react';

class Ngay_Chi_Tien extends Component {

    onChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;

        this.setState({
            [name]: value
        })
    }
    onSearchClick = () => {
        this.props.onSearchClick(this.state);
    }

    render() {
        const date = new Date();
        const day = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
        return (
            <div className="mt-3 d-flex">
                <h4>Ngày Chi Tiền: </h4>
                <input onChange={this.onChange} className="ml-3" name="ngay_bat_dau" type="date" />
                <input onChange={this.onChange} className="ml-3" name="ngay_ket_thuc" type="date" />
                <div onClick={this.onSearchClick} className="btn ml-3 btn-primary">Tìm Kiếm</div>
            </div>
        );
    }
}

export default Ngay_Chi_Tien;