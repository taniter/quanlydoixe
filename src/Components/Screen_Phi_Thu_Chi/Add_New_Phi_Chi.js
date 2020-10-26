import React, { Component } from 'react';
import Chi_Tiet_Chi_Phi_Item from './Chi_Tiet_Chi_Phi_Item';
import Combobox_Chi_Phi from './Combobox_Chi_Phi';
import Combobox_Tai_Xe from './Combobox_Tai_Xe';
import Combobox_Xe from './Combobox_Xe';

class Add_New_Phi_Chi extends Component {

    tai_xe_select = (data) => {
        this.setState({
            Tai_Xe_ID: data
        })
    }
    xe_select = (data) => {
        this.setState({
            Xe_ID: data
        })
    }
    ngay_select = (data) => {
        this.setState({
            Ngay_Chi: data.target.value
        })
    }
    chi_phi_select = (data) => {
        this.setState({
            Chi_Phi_ID: data
        })
    }
    so_tien_input = (ev) => {
        this.setState({
            So_Tien: ev.target.value
        })
    }

    ghi_chu = (ev) => {
        this.setState({
            Ghi_Chu: ev.target.value
        })
    }

    onClickAddPhiChi = () => {
        this.props.addNewPhiChi(this.state)
    }
    onAddChiTietClick = () => {
        this.props.onAddChiTietPhiChi(this.state);
    }
    tinh_tien = () => {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })
        const tt = [];
        if (this.props.danh_sach_chi_tiet_phi_chi_key) {
            this.props.danh_sach_chi_tiet_phi_chi_key.map((value, key) => {
                tt.push(new Number(value.val().So_Tien));
            })
            this.tt = formatter.format(tt.reduce((partial_sum, a) => partial_sum + a, 0));
        }
    }

    render_table_chi_tiet = () => {
        if (this.props.danh_sach_chi_tiet_phi_chi_key) {
            this.tinh_tien();
            return (
                this.props.danh_sach_chi_tiet_phi_chi_key.map((value, key) => {
                    return (
                        <Chi_Tiet_Chi_Phi_Item
                            onChiTietPhiChiDelete={this.props.onChiTietPhiChiDelete}
                            value={value} key={key}>
                        </Chi_Tiet_Chi_Phi_Item>
                    )
                })
            )
        }
    }

    render() {
        const item = null;
        return (
            <div>
                <div className="modal" id="addnewphichi">
                    <div className="modal-dialog w-75">
                        <div className="modal-content">
                            <div className={this.props.isAddChiPhi ? '' : 'd-none'}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Thêm Chi Phí Chi Mới</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group flex-row d-flex">
                                        <Combobox_Tai_Xe
                                            tai_xe_select={this.tai_xe_select}
                                            danh_sach_tai_xe={this.props.danh_sach_tai_xe}
                                        ></Combobox_Tai_Xe>
                                        <Combobox_Xe
                                            xe_select={this.xe_select}
                                            danh_sach_xe_value={this.props.danh_sach_xe_value}
                                        ></Combobox_Xe>
                                        <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Ngày Chi:</h4>
                                            <form className="col p-0">
                                                <input onChange={this.ngay_select} type="date"></input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="Reset" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="Reset" onClick={this.onClickAddPhiChi} className="btn btn-success">Thêm</button>
                                </div>
                            </div>
                            <div className={!this.props.isAddChiPhi ? 'd-flex flex-column' : 'd-none'}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Thêm Chi Tiết Phí Chi Mới</h4>
                                </div>

                                <div className="form-group flex-row d-flex">
                                    <Combobox_Chi_Phi
                                        chi_phi_select={this.chi_phi_select}
                                        danh_sach_chi_phi={this.props.danh_sach_chi_phi}
                                    ></Combobox_Chi_Phi>
                                    <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Số Tiền:</h4>
                                        <form className="col">
                                            <input onChange={this.so_tien_input} type="number"></input>
                                        </form>
                                    </div>
                                    <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Ghi Chú:</h4>
                                        <form className="col p-0">
                                            <input onChange={this.ghi_chu} type="text"></input>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="Reset" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    <button type="Reset" onClick={this.onAddChiTietClick} className="btn btn-success">Thêm</button>
                                </div>
                            </div>
                            <div className={!this.props.isAddChiPhi ? '' : 'd-none'}>
                                <table width="100%" className="table table-hover table-bordered table-striped table-inverse">
                                    <thead className="thead-inverse">
                                        <tr>
                                            <th>Tên Chi Phí</th>
                                            <th>Số Tiền</th>
                                            <th>Ghi Chú</th>
                                            <th>Thao Tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.render_table_chi_tiet()}
                                    </tbody>
                                </table>
                                <div className="d-flex p-3 justify-content-end"><h4>Tổng Tiền: </h4>
                                    <h4 className="ml-3 text-danger">{this.tt}</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add_New_Phi_Chi;