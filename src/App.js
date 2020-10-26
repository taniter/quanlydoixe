import React, { Component } from 'react';
import DashBoard from './Components/DashBoard';
import { DM_Chi_Phi, DM_Tai_Xe, DM_TC_Phi_Chi, DM_TC_Phi_Chi_Chi_Tiet, DM_Xe } from './Components/Firebase';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'chi_phi',
      user: {
        name: 'Tân',
        curPhiChi: null
      }
    }
  }
  componentWillMount() {
    this.loadData();
  }

  loadData = () => {
    DM_Xe.on('value', (value) => {
      const temp = [];
      value.forEach((item, key) => {
        if (!item.val().Deleted) {
          temp.push(item);
        }
      })
      this.setState({
        danh_sach_xe: value,
        danh_sach_xe_value: temp
      })
    });
    DM_Tai_Xe.on('value', (value) => {
      const temp1 = [];
      value.forEach((item, key) => {
        temp1.push(item);
      })
      this.setState({
        danh_sach_tai_xe: temp1
      })
    })
    DM_Chi_Phi.on('value', (value) => {
      const temp2 = [];
      value.forEach((item, key) => {
        temp2.push(item);
      })
      this.setState({
        danh_sach_chi_phi: temp2
      })
    })
    DM_TC_Phi_Chi.on('value', (value) => {
      const temp3 = [];
      value.forEach((item, key) => {
        temp3.push(item);
      })
      console.log('1', temp3);
      this.setState({
        danh_sach_phi_chi: temp3
      })
    })
    DM_TC_Phi_Chi_Chi_Tiet.on('value', (value) => {
      const temp4 = [];
      value.forEach((item, key) => {
        temp4.push(item);
      })
      this.setState({
        danh_sach_chi_tiet_phi_chi: temp4
      })
    })
  }

  getChiTietPhiChi = () => {
    if (this.state.danh_sach_chi_tiet_phi_chi) {
      const temp = [];
      this.state.danh_sach_chi_tiet_phi_chi.forEach((item) => {
        if (item.val().Phi_Chi_ID === this.state.curPhiChi.Auto_ID && item.val().Ngay_Chi === this.state.curPhiChi.Ngay_Chi)
          temp.push(item);
      })
      this.setState({
        danh_sach_chi_tiet_phi_chi_key: temp
      })
    }
  }


  tabControlsClick = (data) => {
    this.setState({
      screen: data
    })
  }
  deleteXe = (key) => {
    this.setState({
      deleteItemKey: key
    })
  }
  onDeleteConfirm = (flag) => {
    if (this.state.deleteItemKey && flag) {
      DM_Xe.child(this.state.deleteItemKey.key).remove();
    }
  }

  addNewXe = (data) => {
    const date = new Date();
    const temp = {
      Auto_ID: data.Bien_So,
      Bien_So: data.Bien_So,
      Han_Dang_Kiem: data.Han_Dang_Kiem,
      Ngay_Dang_Kiem: data.Ngay_Dang_Kiem,
      Nhan_Hieu: data.Nhan_Hieu,
      So_Lit_Xang_Dau_Cho_100_Km: data.So_Lit_Xang_Dau_Cho_100_Km,
      Trang_Thai: data.Trang_Thai,
      Created: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Create_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Last_Updated_By: this.state.user.name,
      Deleted: 0
    }
    DM_Xe.push(temp);
  }

  editXe = (data) => {
    const date = new Date();
    const val = this.state.EditXeKey.val();
    DM_Xe.child(this.state.EditXeKey.key).set(
      {
        Auto_ID: data.Bien_So ? data.Bien_So : val.Bien_So,
        Bien_So: data.Bien_So ? data.Bien_So : val.Bien_So,
        Han_Dang_Kiem: data.Han_Dang_Kiem ? data.Han_Dang_Kiem : val.Han_Dang_Kiem,
        Ngay_Dang_Kiem: data.Ngay_Dang_Kiem ? data.Ngay_Dang_Kiem : val.Ngay_Dang_Kiem,
        Nhan_Hieu: data.Nhan_Hieu ? data.Nhan_Hieu : val.Nhan_Hieu,
        So_Lit_Xang_Dau_Cho_100_Km: data.So_Lit_Xang_Dau_Cho_100_Km ? data.So_Lit_Xang_Dau_Cho_100_Km : val.So_Lit_Xang_Dau_Cho_100_Km,
        Trang_Thai: data.Trang_Thai ? data.Trang_Thai : val.Trang_Thai,
        Created: data.Created ? data.Created : val.Created,
        Create_By: data.Create_By ? data.Create_By : val.Create_By,
        Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
        Last_Updated_By: this.state.user.name,
        Deleted: 0
      }
    )
  }
  editXeConfirm = (key) => {
    this.setState({
      EditXeKey: key
    })
  }

  editTaiXe = (data) => {
    const date = new Date();
    const val = this.state.EditTaiXeKey.val();
    DM_Tai_Xe.child(this.state.EditTaiXeKey.key).set({
      Auto_ID: data.So_Dien_Thoai ? data.So_Dien_Thoai : val.Auto_ID,
      So_Dien_Thoai: data.So_Dien_Thoai ? data.So_Dien_Thoai : val.So_Dien_Thoai,
      Ten_Tai_Xe: data.Ten_Tai_Xe ? data.Ten_Tai_Xe : val.Ten_Tai_Xe,
      Dia_Chi: data.Dia_Chi ? data.Dia_Chi : val.Dia_Chi,
      Created: data.Created ? data.Created : val.Created,
      Created_By: data.Created_By ? data.Created_By : val.Create_By,
      Last_Updated_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Deleted: 0
    })
  }
  editTaiXeConfirm = (key) => {
    this.setState({
      EditTaiXeKey: key
    })
  }

  addNewTaiXe = (data) => {
    const date = new Date();
    const temp = {
      Auto_ID: data.So_Dien_Thoai,
      So_Dien_Thoai: data.So_Dien_Thoai,
      Ten_Tai_Xe: data.Ten_Tai_Xe,
      Dia_Chi: data.Dia_Chi,
      Created: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Create_By: this.state.user.name,
      Last_Updated_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Deleted: 0
    }

    DM_Tai_Xe.push(temp);
  }

  deleteTaiXe = (data) => {
    DM_Tai_Xe.child(data.key).remove();
  }

  editChiPhi = (data) => {
    const date = new Date();
    const val = this.state.EditChiPhiKey.val();
    DM_Chi_Phi.child(this.state.EditChiPhiKey.key).set({
      Auto_ID: data.Ten_Chi_Phi ? data.Ten_Chi_Phi : val.Ten_Chi_Phi,
      Ten_Chi_Phi: data.Ten_Chi_Phi ? data.Ten_Chi_Phi : val.Ten_Chi_Phi,
      Loai_Hinh: data.Loai_Hinh ? data.Loai_Hinh : val.Loai_Hinh,
      Ghi_Chu: data.Ghi_Chu ? data.Ghi_Chu : val.Ghi_Chu,
      Created: val.Created,
      Created_By: val.Created_By,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Last_Updated_By: this.state.user.name,
      Deleted: 0
    })
  }
  editChiPhiConfirm = (key) => {
    this.setState({
      EditChiPhiKey: key
    })
  }

  addNewChiPhi = (data) => {
    const date = new Date();
    const temp = {
      Auto_ID: data.Ten_Chi_Phi,
      Ten_Chi_Phi: data.Ten_Chi_Phi,
      Loai_Hinh: data.Loai_Hinh,
      Ghi_Chu: data.Ghi_Chu ? data.Ghi_Chu : '',
      Created: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Created_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Last_Updated_By: this.state.user.name,
      Deleted: 0
    }
    DM_Chi_Phi.push(temp);
  }

  deleteChiPhi = (data) => {
    DM_Chi_Phi.child(data.key).remove();
  }


  addNewPhiChi = (data) => {
    const date = new Date();
    const temp = {
      Auto_ID: data.Tai_Xe_ID + data.Xe_ID,
      Tai_Xe_ID: data.Tai_Xe_ID,
      Xe_ID: data.Xe_ID,
      Ngay_Chi: data.Ngay_Chi,
      Nguoi_Chi: this.state.user.name,
      Created: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Create_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Last_Update_By: this.state.user.name
    }
    const flag = [];
    if (this.state.danh_sach_phi_chi.length) {
      this.state.danh_sach_phi_chi.forEach(item => {
        console.log('item', item.val());
        console.log('temp', temp);
        if (item.val().Auto_ID === temp.Auto_ID && item.val().Ngay_Chi === temp.Ngay_Chi) {
          flag.push(item.val());
        }
      });
      if (flag && flag.length === 0) {
        DM_TC_Phi_Chi.push(temp);
      }
    }
    else {
      DM_TC_Phi_Chi.push(temp);
    }

    console.log('3', this.state.danh_sach_phi_chi);
    this.setState({
      curPhiChi: temp
    }, () => {
      this.getChiTietPhiChi();
      this.loadData();
    });

  }

  onDeletePhiChiConfirm = () => {
    this.state.danh_sach_chi_tiet_phi_chi_key.forEach((item) => {
      DM_TC_Phi_Chi_Chi_Tiet.child(item.key).remove();
    })
    this.setState({
      curPhiChi: null
    })
    DM_TC_Phi_Chi.child(this.deletePhiChi.key).remove();
  }

  onDeletePhiChi = (data) => {
    this.deletePhiChi = data;
    this.setState({
      curPhiChi: data.val()
    }, () => {
      this.getChiTietPhiChi();
    })
  }

  onAddChiTietPhiChi = (data) => {
    const date = new Date();
    const Phi_Chi = this.state.curPhiChi;
    const temp = {
      Auto_ID: Phi_Chi.Auto_ID + data.Chi_Phi_ID,
      Chi_Phi_ID: data.Chi_Phi_ID,
      Ghi_Chu: data.Ghi_Chu ? data.Ghi_Chu : '',
      Xe_ID: Phi_Chi.Xe_ID,
      Ngay_Chi: Phi_Chi.Ngay_Chi,
      So_Tien: data.So_Tien,
      Phi_Chi_ID: Phi_Chi.Auto_ID,
      Created: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Create_By: this.state.user.name,
      Last_Updated: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
      Last_Update_By: this.state.user.name
    }

    DM_TC_Phi_Chi_Chi_Tiet.push(temp, () => {
      this.getChiTietPhiChi();
    });
  }
  phi_chi_item_click = (data) => {
    this.setState({
      curPhiChi: data.val()
    }, () => {
      this.getChiTietPhiChi();
    })
  }
  onChiTietPhiChiDelete = (data) => {
    DM_TC_Phi_Chi_Chi_Tiet.child(data.key).remove(() => {
      this.getChiTietPhiChi();
    });
  }


  render_Dashboard = () => {
    return (
      <DashBoard
        screen={this.state.screen}
        onTabControlsClick={this.tabControlsClick}
        deleteXe={this.deleteXe}
        onDeleteConfirm={this.onDeleteConfirm}
        addNewXe={this.addNewXe}
        editXe={this.editXe}
        editXeConfirm={this.editXeConfirm}
        danh_sach_xe={this.state.danh_sach_xe}
        danh_sach_xe_value={this.state.danh_sach_xe_value}
        danh_sach_tai_xe={this.state.danh_sach_tai_xe}
        addNewTaiXe={this.addNewTaiXe}
        editTaiXeConfirm={this.editTaiXeConfirm}
        editTaiXe={this.editTaiXe}
        deleteTaiXe={this.deleteTaiXe}
        danh_sach_chi_phi={this.state.danh_sach_chi_phi}
        editChiPhiConfirm={this.editChiPhiConfirm}
        editChiPhi={this.editChiPhi}
        addNewChiPhi={this.addNewChiPhi}
        deleteChiPhi={this.deleteChiPhi}
        danh_sach_phi_chi={this.state.danh_sach_phi_chi}
        addNewPhiChi={this.addNewPhiChi}
        onAddChiTietPhiChi={this.onAddChiTietPhiChi}
        danh_sach_chi_tiet_phi_chi_key={this.state.danh_sach_chi_tiet_phi_chi_key}
        phi_chi_item_click={this.phi_chi_item_click}
        onChiTietPhiChiDelete={this.onChiTietPhiChiDelete}
        onDeletePhiChi={this.onDeletePhiChi}
        onDeletePhiChiConfirm={this.onDeletePhiChiConfirm}
      ></DashBoard>
    )
  }

  render() {
    return (
      <div>
        {this.render_Dashboard()}
      </div >
    );
  }
}

export default App;