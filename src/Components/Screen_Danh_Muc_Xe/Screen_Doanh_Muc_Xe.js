import React, { Component } from 'react';
import Add_New_Xe from './Add_New_Xe';
import Xe_Item from './Xe_Item';

class Screen_Doanh_Muc_Xe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddNew: true,
            curDataEdit: {}
        }
    }

    onEditClick = (value) => {
        this.setState({
            isAddNew: false,
            curDataEdit: value.val()
        })
        this.props.editXeConfirm(value);
    }
    onDeleteConfirm = () => {
        this.props.onDeleteConfirm(true);
    }

    render_Item = () => {
        if (this.props.danh_sach_xe_value) {
            return (
                this.props.danh_sach_xe_value.map((item, key) => {
                    return (
                        <Xe_Item onEditClick={this.onEditClick}
                            deleteXe={this.props.deleteXe}
                            value={item} key={key}></Xe_Item>
                    )
                })
            )
        }
    }
    render() {
        return (
            <div className="danh-muc-xe">
                <div className="row ml-3 p-3">
                    <div onClick={() => { this.setState({ isAddNew: true, curDataEdit: null }) }} data-toggle="modal" data-target="#addnewXe" className="btn btn-success">Thêm Mới</div>
                    <Add_New_Xe
                        addNewXe={this.props.addNewXe}
                        editXe={this.props.editXe}
                        curDataEdit={this.state.curDataEdit}
                        isAddNew={this.state.isAddNew}
                    ></Add_New_Xe>
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
                                    <button type="button" onClick={this.onDeleteConfirm} className="btn btn-danger" data-dismiss="modal">Xóa</button>
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
                                <th>Biển Số</th>
                                <th>Nhãn Hiệu</th>
                                <th>Trang Thái</th>
                                <th>Ngày Đăng Kiểm</th>
                                <th>Hạn Đăng Kiểm</th>
                                <th>Số lít xăng dầu/100km</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.render_Item()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Screen_Doanh_Muc_Xe;