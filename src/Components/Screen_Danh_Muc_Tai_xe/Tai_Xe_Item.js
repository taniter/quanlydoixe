import React, { Component } from 'react';

class Tai_Xe_Item extends Component {
    onEditClick = () => {
        this.props.onEditTaiXeClick(this.props.value);
    }
    deleteTaiXe = () => {
        this.props.deleteTaiXe(this.props.value);
    }
    render() {
        const item = this.props.value.val();
        return (
            <tr>
                <td>{item.So_Dien_Thoai}</td>
                <td>{item.Ten_Tai_Xe}</td>
                <td>{item.Dia_Chi}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={this.onEditClick} data-toggle="modal" data-target="#addNewTaiXe" className="btn btn-warning mr-2">Sửa</div>
                        <div onClick={this.deleteTaiXe} className="btn btn-danger" data-toggle="modal" data-target="#deleteXe">Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Tai_Xe_Item;