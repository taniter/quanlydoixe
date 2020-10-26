import React, { Component } from 'react';

class Add_New_Tai_Xe extends Component {
    onChange = (ev) => {
        const id = ev.target.id;
        const val = ev.target.value;
        this.setState({
            [id]: val
        })
    }

    onAddClick = () => {
        if (this.props.isAddNew) {
            this.props.addNewTaiXe(this.state);
        }
        if (!this.props.isAddNew) {
            this.props.editTaiXe(this.state);
        }
    }

    render() {
        const item = this.props.curDataEdit ? this.props.curDataEdit.val() : null;
        return (
            <div>
                <div className="modal" id="addNewTaiXe">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.isAddNew ? "Thêm Tài Xế Mới" : "Sửa Thông Tin Tài Xế"}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group flex-column d-flex">
                                    <span>Số Điện Thoại</span>
                                    <input type="number" onChange={this.onChange} placeholder={item ? item.So_Dien_Thoai : 'Nhập số điên thoại tài xế'} className="form-control mb-1" id="So_Dien_Thoai" />
                                    <span>Họ Tên</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Ten_Tai_Xe : 'Nhập tên taif xế'} className="form-control mb-1" id="Ten_Tai_Xe" />
                                    <span>Địa Chỉ</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Dia_Chi : 'Nhập địa chỉ tài xế'} className="form-control mb-1" id="Dia_Chi" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="Reset" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="Reset" onClick={this.onAddClick} className="btn btn-success" data-dismiss="modal">{this.props.isAddNew ? "Thêm" : "Cập Nhật"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add_New_Tai_Xe;