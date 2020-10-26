import React, { Component } from 'react';

class Combobox_Chi_Phi extends Component {

    render_item = () => {
        if (this.props.danh_sach_chi_phi) {
            return (
                this.props.danh_sach_chi_phi.map((value, key) => {
                    return (
                        <option key={key} value={value.val().Auto_ID}>{value.val().Ten_Chi_Phi}</option>
                    )
                })
            )
        }
    }
    comboboxSelect = (ev) => {
        if (ev.target.value !== 'null')
            this.props.chi_phi_select(ev.target.value);
    }
    render() {
        return (
            <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Chi Phí:</h4>
                <form className="col">
                    <select onChange={this.comboboxSelect} name="cars" className="custom-select">
                        <option value="null">Chọn Chi Phí...</option>
                        {this.render_item()}
                    </select>
                </form>
            </div>
        );
    }
}

export default Combobox_Chi_Phi;