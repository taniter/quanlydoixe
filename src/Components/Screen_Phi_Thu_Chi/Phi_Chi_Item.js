import React, { Component } from 'react';

class Phi_Chi_Item extends Component {

    onClick = () => {
        this.props.phi_chi_item_click(this.props.value);
    }
    onDeleteClick = () => {
        this.props.onDeletePhiChi(this.props.value);
    }
    render() {
        const value = this.props.value;
        return (
            <tr  onClick={this.onClick}>
                <td data-toggle="modal" data-target="#addnewphichi">{value.val().Xe_ID}</td>
                <td data-toggle="modal" data-target="#addnewphichi">{value.val().Tai_Xe_ID}</td>
                <td data-toggle="modal" data-target="#addnewphichi">{value.val().Ngay_Chi}</td>
                <td data-toggle="modal" data-target="#addnewphichi">{value.val().Nguoi_Chi}</td>
                <td>
                    <div onClick={this.onDeleteClick} data-toggle="modal" data-target="#deletePhiChi" className="btn btn-outline-warning">Xóa</div>
                </td>
            </tr>
        );
    }
}

export default Phi_Chi_Item;