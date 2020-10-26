import React, { Component } from 'react';

class Add_New_Xe extends Component {

    onChange = (ev) => {
        const id = ev.target.id;
        const val = ev.target.value;
        this.setState({
            [id]: val
        })
    }
    onAddClick = () => {
        if (this.state && this.state.Bien_So)
            this.props.addNewXe(this.state);
        if (this.state && !this.props.isAddNew) {
            this.props.editXe(this.state);
        }
    }
    render() {
        const item = this.props.curDataEdit;
        return (
            <div>
                <div className="modal" id="addnewXe">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.props.isAddNew ? "Thêm Xe Mới" : "Sửa Thông Tin Xe"}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group flex-column d-flex">
                                    <span>Biển Số</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Bien_So : 'Nhập biển số xe'} className="form-control mb-1" id="Bien_So" />
                                    <span>Hiệu Xe</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Nhan_Hieu : 'Nhập Nhãn Hiệu xe'} className="form-control mb-1" id="Nhan_Hieu" />
                                    <span>Ngày Đăng Kiểm</span>
                                    <input type="date" onChange={this.onChange} placeholder={item ? item.Ngay_Dang_Kiem : 'Ngày Đăng Kiểm'} className="form-control mb-1" id="Ngay_Dang_Kiem"/>
                                    <span>Hạn Đăng Kiểm</span>
                                    <input type="date" onChange={this.onChange} placeholder={item ? item.Han_Dang_Kiem : 'Hạn Đăng Kiểm'} className="form-control mb-1" id="Han_Dang_Kiem" />
                                    <span>Số Lít Xăng Cho 100Km</span>
                                    <input type="number" onChange={this.onChange} placeholder={item ? item.So_Lit_Xang_Dau_Cho_100_Km : 'Số Lít Xăng Dầu Cho 100 KM'} className="form-control mb-1" id="So_Lit_Xang_Dau_Cho_100_Km" />
                                    <span>Trạng Thái</span>
                                    <input type="text" onChange={this.onChange} placeholder={item ? item.Trang_Thai : 'Nhập Trạng Thái Xe'} className="form-control mb-1" id="Trang_Thai" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="reset" onClick={this.onAddClick} className="btn btn-success" data-dismiss="modal">{this.props.isAddNew ? "Thêm" : "Cập Nhật"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add_New_Xe;