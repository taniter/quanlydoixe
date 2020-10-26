import React, { Component } from 'react';

class Xe_Item extends Component {
    onEditClick = () => {
        this.props.onEditClick(this.props.value);
    }
    onDeleteClick = () => {
        this.props.deleteXe(this.props.value);
    }
    render() {
        const item = this.props.value.val();
        return (
            <tr>
                <td>{item.Bien_So}</td>
                <td>{item.Nhan_Hieu}</td>
                <td>{item.Trang_Thai}</td>
                <td>{item.Ngay_Dang_Kiem}</td>
                <td>{item.Han_Dang_Kiem}</td>
                <td>{item.So_Lit_Xang_Dau_Cho_100_Km}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={this.onEditClick} data-toggle="modal" data-target="#addnewXe" className="btn btn-warning mr-2">Sửa</div>
                        <div onClick={this.onDeleteClick} className="btn btn-danger" data-toggle="modal" data-target="#deleteXe">Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Xe_Item;