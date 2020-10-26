import React, { Component } from 'react';
import Add_New_Tai_Xe from './Add_New_Tai_Xe';
import Tai_Xe_Item from './Tai_Xe_Item';

class Screen_Danh_Muc_Tai_Xe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddNew: true
        }
    }
    onEditTaiXeClick = (data) => {
        this.setState({
            curDataEdit: data,
            isAddNew: false
        })
        this.props.editTaiXeConfirm(data);
    }
    onDeleteClick = (data) => {
        this.setState({
            deleteCur: data
        })
    }
    onDeleteTaiXeClick = (flag) => {
        this.props.deleteTaiXe(this.state.deleteCur);
    }

    render_item = () => {
        if (this.props.danh_sach_tai_xe) {
            return (
                this.props.danh_sach_tai_xe.map((value, key) => {
                    return (
                        <Tai_Xe_Item
                            deleteTaiXe={this.onDeleteClick}
                            onEditTaiXeClick={this.onEditTaiXeClick}
                            value={value} key={key}></Tai_Xe_Item>
                    )
                })
            )
        }
    }
    render() {
        return (
            <div className="danh-muc-tai-xe">
                <div className="row ml-3 p-3">
                    <div onClick={() => { this.setState({ isAddNew: true, curDataEdit: null }) }} data-toggle="modal" data-target="#addNewTaiXe" className="btn btn-success">Thêm Mới</div>
                    <Add_New_Tai_Xe
                        isAddNew={this.state.isAddNew}
                        addNewTaiXe={this.props.addNewTaiXe}
                        curDataEdit={this.state.curDataEdit}
                        editTaiXe={this.props.editTaiXe}
                    ></Add_New_Tai_Xe>
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
                                    <button type="button" onClick={this.onDeleteTaiXeClick} className="btn btn-danger" data-dismiss="modal">Xóa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mr-3 body-content ml-3">
                    <table className="table table-striped table-sm table-hover table-bordered  table-inverse"
                        width="100%">
                        <thead className="thead-inverse text-center">
                            <tr>
                                <th>Số Điện Thoại</th>
                                <th>Họ Tên</th>
                                <th>Địa Chỉ</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.render_item()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Screen_Danh_Muc_Tai_Xe;