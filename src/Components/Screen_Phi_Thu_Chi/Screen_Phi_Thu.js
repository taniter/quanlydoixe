import React, { Component } from 'react';

class Screen_Phi_Thu extends Component {
    render() {
        return (
            <div className="danh-muc-chi-phi">
                <div className="row ml-3 p-3">
                    <div className="btn col-xl-1 col-md-1 btn-success">Thêm Mới</div>
                    <h3 className="col-xl-7 col-md-7 col-lg-7"></h3>
                    <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Tài Xế:</h4>
                        <form className="col">
                            <select name="cars" class="custom-select">
                                <option selected>Custom Select Menu</option>
                                <option value="volvo">Volvo</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                        </form>
                    </div>
                    <div className="mt-3 d-flex">
                        <h4>Ngày Thu Tiền: </h4>
                        <input className="ml-3" type="date"/>
                        <input className="ml-3" type="date"/>
                        <div className="btn ml-3 btn-primary">Tìm Kiếm</div>
                    </div>
                </div>
                <div className="row ml-3">
                    <table className="table table-striped  table-hover table-bordered  table-inverse" width="100%">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Số Xe</th>
                                <th>Chi Phí</th>
                                <th>Ngày Thu</th>
                                <th>Người Thu</th>
                                <th>Số Tiền</th>
                                <th>Ghi Chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row" />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                            <tr>
                                <td scope="row" />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Screen_Phi_Thu;