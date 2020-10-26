import React, { Component } from 'react';
import Header from './Header';
import Screen_Danh_Muc_Tai_Xe from './Screen_Danh_Muc_Tai_xe/Screen_Danh_Muc_Tai_Xe';
import Screen_Doanh_Muc_Xe from './Screen_Danh_Muc_Xe/Screen_Doanh_Muc_Xe';
import Screen_Dashboard from './Screen_Dashboard/Screen_Dashboard';
import Screen_doanh_muc_Chi_Phi from './Screen_Doanh_Muc_Chi_Phi/Screen_doanh_muc_Chi_Phi';
import Screen_Phi_Chi from './Screen_Phi_Thu_Chi/Screen_Phi_Chi';
import Screen_Phi_Thu from './Screen_Phi_Thu_Chi/Screen_Phi_Thu';
import TabControls from './TabControls';

class DashBoard extends Component {

    render_Item = () => {
        if (this.props.screen === 'dashboard')
            return (
                <Screen_Dashboard></Screen_Dashboard>
            )
        if (this.props.screen === 'danh_muc_xe')
            return (
                <Screen_Doanh_Muc_Xe
                    addNewXe={this.props.addNewXe}
                    deleteXe={this.props.deleteXe}
                    onDeleteConfirm={this.props.onDeleteConfirm}
                    danh_sach_xe={this.props.danh_sach_xe}
                    danh_sach_xe_value={this.props.danh_sach_xe_value}
                    editXe={this.props.editXe}
                    editXeConfirm={this.props.editXeConfirm}
                ></Screen_Doanh_Muc_Xe>
            )
        if (this.props.screen === 'danh_muc_tai_xe')
            return (
                <Screen_Danh_Muc_Tai_Xe
                    danh_sach_tai_xe={this.props.danh_sach_tai_xe}
                    addNewTaiXe={this.props.addNewTaiXe}
                    editTaiXeConfirm={this.props.editTaiXeConfirm}
                    editTaiXe={this.props.editTaiXe}
                    deleteTaiXe={this.props.deleteTaiXe}
                ></Screen_Danh_Muc_Tai_Xe>
            )
        if (this.props.screen === 'danh_muc_chi_phi')
            return (
                <Screen_doanh_muc_Chi_Phi
                    danh_sach_chi_phi={this.props.danh_sach_chi_phi}
                    editChiPhiConfirm={this.props.editChiPhiConfirm}
                    editChiPhi={this.props.editChiPhi}
                    addNewChiPhi={this.props.addNewChiPhi}
                    deleteChiPhi={this.props.deleteChiPhi}
                ></Screen_doanh_muc_Chi_Phi>
            )
        if (this.props.screen === 'phi_thu')
            return (
                <Screen_Phi_Thu></Screen_Phi_Thu>
            )
        if (this.props.screen === 'phi_chi')
            return (
                <Screen_Phi_Chi
                    danh_sach_tai_xe={this.props.danh_sach_tai_xe}
                    danh_sach_xe_value={this.props.danh_sach_xe_value}
                    danh_sach_phi_chi={this.props.danh_sach_phi_chi}
                    addNewPhiChi={this.props.addNewPhiChi}
                    danh_sach_chi_phi={this.props.danh_sach_chi_phi}
                    onAddChiTietPhiChi={this.props.onAddChiTietPhiChi}
                    danh_sach_chi_tiet_phi_chi_key={this.props.danh_sach_chi_tiet_phi_chi_key}
                    phi_chi_item_click={this.props.phi_chi_item_click}
                    onChiTietPhiChiDelete={this.props.onChiTietPhiChiDelete}
                    onDeletePhiChi={this.props.onDeletePhiChi}
                    onDeletePhiChiConfirm={this.props.onDeletePhiChiConfirm}
                    tai_xe_select={this.props.tai_xe_select}
                    onSearchClick={this.props.onSearchClick}
                ></Screen_Phi_Chi>
            )
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header></Header>
                    <TabControls onTabControlsClick={this.props.onTabControlsClick}></TabControls>
                    {this.render_Item()}
                </div>
            </div>
        );
    }
}

export default DashBoard;