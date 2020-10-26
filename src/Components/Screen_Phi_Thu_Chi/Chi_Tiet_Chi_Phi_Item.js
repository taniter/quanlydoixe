import React, { Component } from 'react';

class Chi_Tiet_Chi_Phi_Item extends Component {

    onDeleteClick = () => {
        this.props.onChiTietPhiChiDelete(this.props.value);
    }
    render() {
        const value = this.props.value;
        return (
            <tr>
                <td>{value.val().Chi_Phi_ID}</td>
                <td>{value.val().So_Tien}</td>
                <td>{value.val().Ghi_Chu}</td>
                <td><div onClick={this.onDeleteClick} className="btn btn-outline-warning">Xóa</div></td>
            </tr>
        );
    }
}

export default Chi_Tiet_Chi_Phi_Item;