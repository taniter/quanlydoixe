import React, { Component } from 'react';

class Add_New_Chi_Phi extends Component {
    onChange = (ev) => {
        const id = ev.target.id;
        const val = ev.target.value;
        this.setState({
            [id]: val
        })
    }
    onAddClick = () => {
        if (this.props.isAddNew) {
            this.props.addNewChiPhi(this.state);
        }
        if (!this.props.isAddNew) {
            this.props.editChiPhi(this.state);
        }
    }
    render() {
        const item = this.props.curDataEdit ? this.props.curDataEdit.val() : null;
        return (
            <div>
                <div className="modal" id="addnewchiphi">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.isAddNew ? "Thêm Chi Phí Mới" : "Sửa Thông Tin Chi Phí"}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group flex-column d-flex">
                                    <span>Tên Chi Phí</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Ten_Chi_Phi : 'Nhập tên chi phí'} className="form-control mb-1" id="Ten_Chi_Phi" />
                                    <span>Loại Hình</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Loai_Hinh : 'Nhập loại hình'} className="form-control mb-1" id="Loai_Hinh" />
                                    <span>Ghi Chú</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Ghi_Chu : 'Nhập ghi chú'} className="form-control mb-1" id="Ghi_Chu" />
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

export default Add_New_Chi_Phi;