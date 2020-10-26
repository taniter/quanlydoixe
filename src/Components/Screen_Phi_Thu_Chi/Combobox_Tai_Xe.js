import React, { Component } from 'react';
import Combobox_Tai_Xe_Item from './Combobox_Tai_Xe_Item';

class Combobox_Tai_Xe extends Component {
    render_Tai_Xe = () => {
        if (this.props.danh_sach_tai_xe) {
            return (
                this.props.danh_sach_tai_xe.map((value, key) => {
                    return (
                        <Combobox_Tai_Xe_Item value={value} key={key}></Combobox_Tai_Xe_Item>
                    )
                })
            )
        }
    }

    comboboxSelect = (ev) => {
        if (ev.target.value !== 'null')
            this.props.tai_xe_select(ev.target.value);
    }

    render() {
        return (
            <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Tài Xế:</h4>
                <form className="col">
                    <select onChange={this.comboboxSelect} name="cars" className="custom-select">
                        <option value="null">Chọn Tài Xế...</option>
                        {this.render_Tai_Xe()}
                    </select>
                </form>
            </div>
        );
    }
}

export default Combobox_Tai_Xe;