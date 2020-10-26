import React, { Component } from 'react';
import Add_New_Phi_Chi from './Add_New_Phi_Chi';
import Combobox_Tai_Xe from './Combobox_Tai_Xe';
import Ngay_Chi_Tien from './Ngay_Chi_Tien';
import Phi_Chi_Item from './Phi_Chi_Item';

class Screen_Phi_Chi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddChiPhi: true
        }
    }

    componentWillMount() {
        if (this.props.danh_sach_phi_chi) {
            this.setState({
                danh_sach_phi_chi: this.props.danh_sach_phi_chi
            })
        }
    }

    phi_chi_item_click = (data) => {
        this.setState({
            isAddChiPhi: false
        })
        this.props.phi_chi_item_click(data);
    }
    render_item = () => {
        if (this.state.danh_sach_phi_chi) {
            return (
                this.state.danh_sach_phi_chi.map((value, key) => {
                    return (
                        <Phi_Chi_Item
                            onDeletePhiChi={this.onDeletePhiChi}
                            phi_chi_item_click={this.phi_chi_item_click}
                            value={value} key={key}></Phi_Chi_Item>
                    )
                })
            )
        }
    }
    onAddPhiChi = (data) => {
        this.setState({
            isAddChiPhi: false
        })
        this.props.addNewPhiChi(data);
    }
    addNewClick = () => {
        this.setState({
            isAddChiPhi: true
        })
    }
    onDeletePhiChi = (data) => {
        this.props.onDeletePhiChi(data);
    }
    onDeleteConfirm = () => {
        this.props.onDeletePhiChiConfirm();
    }
    tai_xe_select = (data) => {
        //Filter Khi Chọn Tài Xế Trong Phí Chi
        const temp = [];
        this.props.danh_sach_phi_chi.forEach((item) => {
            if (item.val().Tai_Xe_ID === data)
                temp.push(item);
        })
        this.setState({
            danh_sach_phi_chi: temp
        })
    }
    onSearchClick = (data) => {
        if (data && data.ngay_bat_dau && data.ngay_ket_thuc) {
            const temp = [];
            this.props.danh_sach_phi_chi.forEach((item) => {
                if (item.val().Ngay_Chi >= data.ngay_bat_dau && item.val().Ngay_Chi <= data.ngay_ket_thuc)
                    temp.push(item);
            })
            this.setState({
                danh_sach_phi_chi: temp
            })
        }
        if (data && data.ngay_bat_dau && !data.ngay_ket_thuc) {
            const temp = [];
            this.props.danh_sach_phi_chi.forEach((item) => {
                if (item.val().Ngay_Chi === data.ngay_bat_dau)
                    temp.push(item);
            })
            this.setState({
                danh_sach_phi_chi: temp
            })
        }
        if (data && !data.ngay_bat_dau && data.ngay_ket_thuc) {
            const temp = [];
            this.props.danh_sach_phi_chi.forEach((item) => {
                if (item.val().Ngay_Chi === data.ngay_bat_dau)
                    temp.push(item);
            })
            this.setState({
                danh_sach_phi_chi: temp
            })
        }
    }

    render() {
        return (
            <div className="danh-muc-chi-phi">
                <div className="row ml-3 p-3">
                    <div onClick={this.addNewClick} className="btn col-xl-1 col-md-1 btn-success" data-toggle="modal" data-target="#addnewphichi" >Thêm Mới</div>
                    <Add_New_Phi_Chi
                        addNewPhiChi={this.onAddPhiChi}
                        isAddChiPhi={this.state.isAddChiPhi}
                        danh_sach_tai_xe={this.props.danh_sach_tai_xe}
                        danh_sach_xe_value={this.props.danh_sach_xe_value}
                        danh_sach_chi_phi={this.props.danh_sach_chi_phi}
                        onAddChiTietPhiChi={this.props.onAddChiTietPhiChi}
                        danh_sach_chi_tiet_phi_chi_key={this.props.danh_sach_chi_tiet_phi_chi_key}
                        onChiTietPhiChiDelete={this.props.onChiTietPhiChiDelete}
                    ></Add_New_Phi_Chi>
                    <div className="modal" id="deletePhiChi">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Xác Nhận Xóa</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                <div className="modal-body">
                                    <h3>Bạn chắc chán muốn xóa? </h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" onClick={this.onDeleteConfirm} className="btn btn-danger" data-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="col-xl-7 col-md-7 col-lg-7"></h3>
                    <Combobox_Tai_Xe
                        tai_xe_select={this.tai_xe_select}
                        danh_sach_tai_xe={this.props.danh_sach_tai_xe}
                    ></Combobox_Tai_Xe>
                    <Ngay_Chi_Tien
                        onSearchClick={this.onSearchClick}
                    ></Ngay_Chi_Tien>
                </div>
                <div className="row ml-3">
                    <table width="100%" className="table table-striped table-sm table-hover table-bordered  table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Số Xe</th>
                                <th>Tài Xế</th>
                                <th>Ngày Chi</th>
                                <th>Người Chi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.render_item()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Screen_Phi_Chi;