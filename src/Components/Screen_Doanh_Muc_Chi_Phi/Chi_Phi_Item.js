import React, { Component } from 'react';

class Chi_Phi_Item extends Component {
    onEditClick = () => {
        this.props.onEditClick(this.props.value);
    }
    onDeleteClick = () => {
        this.props.deleteChiPhi(this.props.value);
    }
    render() {
        const item = this.props.value.val();
        return (
            <tr>
                <td>{item.Ten_Chi_Phi}</td>
                <td>{item.Loai_Hinh}</td>
                <td>{item.Ghi_Chu}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={this.onEditClick} data-toggle="modal" data-target="#addnewchiphi" className="btn btn-warning mr-2">Sửa</div>
                        <div onClick={this.onDeleteClick} className="btn btn-danger" data-toggle="modal" data-target="#deleteXe">Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Chi_Phi_Item;