import React, { Component } from 'react';
import Canh_Bao_Dang_Kiem from './Canh_Bao_Dang_Kiem';
import Doanh_Thu_Theo_Thang from './Doanh_Thu_Theo_Thang';

class Screen_Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="row mt-3 container-fluid">
                    <Doanh_Thu_Theo_Thang></Doanh_Thu_Theo_Thang>
                    <Canh_Bao_Dang_Kiem></Canh_Bao_Dang_Kiem>
                </div>
                <div className="row mt-3 col table-responsive border-0">
                    <table className="table table-striped col table-hover table-bordered" width="100%">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Số Xe</th>
                                <th>Ngày Đăng Kiểm</th>
                                <th>Số Tiền Xăng Dầu(ngày)</th>
                                <th>Số Tiền Xăng Dầu(tháng)</th>
                                <th>Ghi Chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>63N-1034</td>
                                <td>22/2/2222</td>
                                <td>100.000.000đ</td>
                                <td>1.000.000.000đ</td>
                                <td />
                            </tr>
                            <tr>
                                <td>63N-1034</td>
                                <td>22/2/2222</td>
                                <td>100.000.000đ</td>
                                <td>1.000.000.000đ</td>
                                <td />
                            </tr>
                            <tr>
                                <td>63N-1034</td>
                                <td>22/2/2222</td>
                                <td>100.000.000đ</td>
                                <td>1.000.000.000đ</td>
                                <td />
                            </tr>
                            <tr>
                                <td>63N-1034</td>
                                <td>22/2/2222</td>
                                <td>100.000.000đ</td>
                                <td>1.000.000.000đ</td>
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Screen_Dashboard;