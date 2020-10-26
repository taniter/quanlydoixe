import React, { Component } from 'react';
import Add_New_Chi_Phi from './Add_New_Chi_Phi';
import Chi_Phi_Item from './Chi_Phi_Item';

class Screen_doanh_muc_Chi_Phi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curDataEdit: null,
            isAddNew: true
        }
    }
    onEditClick = (data) => {
        this.setState({
            curDataEdit: data,
            isAddNew: false
        })
        this.props.editChiPhiConfirm(data);
    }
    onDeleteClick = (data) => {
        this.setState({
            deleteKey: data
        })
    }
    deleteChiPhi = () => {
        this.props.deleteChiPhi(this.state.deleteKey);
    }

    render_item = () => {
        if (this.props.danh_sach_chi_phi) {
            return (
                this.props.danh_sach_chi_phi.map((value, key) => {
                    return (
                        <Chi_Phi_Item
                            onEditClick={this.onEditClick}
                            deleteChiPhi={this.onDeleteClick}
                            value={value} key={key}></Chi_Phi_Item>
                    )
                })
            )
        }
    }
    render() {
        return (
            <div className="danh-muc-chi-phi">
                <div className="row ml-3 p-3">
                    <div className="btn btn-success"
                        onClick={() => { this.setState({ isAddNew: true, curDataEdit: null }) }}
                        data-toggle="modal"
                        data-target="#addnewchiphi" >Thêm Mới</div>
                    <Add_New_Chi_Phi
                        addNewChiPhi={this.props.addNewChiPhi}
                        isAddNew={this.state.isAddNew}
                        curDataEdit={this.state.curDataEdit}
                        editChiPhi={this.props.editChiPhi}
                    ></Add_New_Chi_Phi>
                    <div className="modal" id="deleteXe">
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
                                    <button type="button" onClick={this.deleteChiPhi} className="btn btn-danger" data-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ml-3">
                    <table width="100%" className="table table-hover table-bordered  table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Tên Chi Phí</th>
                                <th>Loại Hình</th>
                                <th>Ghi Chú</th>
                                <th>Thao Tác</th>
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

export default Screen_doanh_muc_Chi_Phi;