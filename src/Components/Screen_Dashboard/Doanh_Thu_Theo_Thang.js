import React, { Component } from 'react';

class Doanh_Thu_Theo_Thang extends Component {
    render() {
        return (
            <div className="col-xl-6 col-md-6 mb-3 col-lg-6 Doanh_Thu_Theo_Thang">
                <div className="card d-flex flex-row text-black">
                    <div className="col-xl-1 col-md-1 col-lg-1">
                        <i className="fa  fa-home p-3 pb-4 text-white ml-3 bg-success" />
                        <i className="fa fa-calendar p-3 ml-4"><span className="ml-2">1/1/2020</span></i>
                    </div>
                    <div className="col col col">
                    </div>
                    <div className="col-xl-4 col-md-4 col-lg-4">
                        <span>Doanh Thu Theo Tháng</span>
                        <h4 className="text-danger">1.500.000.000đ</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Doanh_Thu_Theo_Thang;