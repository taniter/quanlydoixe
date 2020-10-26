import React, { Component } from 'react';

class Combobox_Xe extends Component {

    render_item = () => {
        if (this.props.danh_sach_xe_value) {
            return (
                this.props.danh_sach_xe_value.map((value, key) => {
                    return (
                        <option key={key} value={value.val().Auto_ID}>{value.val().Auto_ID}</option>

                    )
                })
            )
        }
    }
    comboboxSelect = (ev) => {
        if (ev.target.value !== 'null') {
            this.props.xe_select(ev.target.value);
        }
    }
    render() {
        return (
            <div className="col-xl-4 d-flex col-md-4 col-lg-4"><h4>Chọn Xe:</h4>
                <form className="col">
                    <select onChange={this.comboboxSelect} name="cars" className="custom-select">
                        <option value="null">Chọn Xe...</option>
                        {this.render_item()}
                    </select>
                </form>
            </div>
        );
    }
}

export default Combobox_Xe;