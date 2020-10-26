import React, { Component } from 'react';

class Combobox_Tai_Xe_Item extends Component {
    render() {
        return (
            <option value={this.props.value.val().Auto_ID}>{this.props.value.val().Ten_Tai_Xe}</option>
        );
    }
}

export default Combobox_Tai_Xe_Item;