(this.webpackJsonpquanly_doixe=this.webpackJsonpquanly_doixe||[]).push([[0],{18:function(e,a,t){e.exports=t(34)},23:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(17),c=t.n(i),r=(t(23),t(2)),o=t(3),s=t(5),d=t(4),m=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row getNoty bg-warning"},l.a.createElement("div",{className:"col-xl-10 col-md-10 col-lg-10"}),l.a.createElement("div",{className:"col-xl-2 col-md-2 col-lg-2"},l.a.createElement("i",{className:"fa p-3 fa-bell"}),l.a.createElement("i",{className:"fa p-3 fa-user"}),l.a.createElement("i",{className:"fa p-3 fa-power-off"})))}}]),t}(n.Component),h=t(12),u=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onChange=function(a){var t=a.target.id,n=a.target.value;e.setState(Object(h.a)({},t,n))},e.onAddClick=function(){e.props.isAddNew&&e.props.addNewTaiXe(e.state),e.props.isAddNew||e.props.editTaiXe(e.state)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.curDataEdit?this.props.curDataEdit.val():null;return l.a.createElement("div",null,l.a.createElement("div",{className:"modal",id:"addNewTaiXe"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},this.props.isAddNew?"Th\xeam T\xe0i X\u1ebf M\u1edbi":"S\u1eeda Th\xf4ng Tin T\xe0i X\u1ebf"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group flex-column d-flex"},l.a.createElement("span",null,"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i"),l.a.createElement("input",{type:"number",onChange:this.onChange,placeholder:e?e.So_Dien_Thoai:"Nh\u1eadp s\u1ed1 \u0111i\xean tho\u1ea1i t\xe0i x\u1ebf",className:"form-control mb-1",id:"So_Dien_Thoai"}),l.a.createElement("span",null,"H\u1ecd T\xean"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Ten_Tai_Xe:"Nh\u1eadp t\xean taif x\u1ebf",className:"form-control mb-1",id:"Ten_Tai_Xe"}),l.a.createElement("span",null,"\u0110\u1ecba Ch\u1ec9"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Dia_Chi:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 t\xe0i x\u1ebf",className:"form-control mb-1",id:"Dia_Chi"}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"Reset",className:"btn btn-danger","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"Reset",onClick:this.onAddClick,className:"btn btn-success","data-dismiss":"modal"},this.props.isAddNew?"Th\xeam":"C\u1eadp Nh\u1eadt"))))))}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onEditClick=function(){e.props.onEditTaiXeClick(e.props.value)},e.deleteTaiXe=function(){e.props.deleteTaiXe(e.props.value)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.value.val();return l.a.createElement("tr",null,l.a.createElement("td",null,e.So_Dien_Thoai),l.a.createElement("td",null,e.Ten_Tai_Xe),l.a.createElement("td",null,e.Dia_Chi),l.a.createElement("td",null,l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{onClick:this.onEditClick,"data-toggle":"modal","data-target":"#addNewTaiXe",className:"btn btn-warning mr-2"},"S\u1eeda"),l.a.createElement("div",{onClick:this.deleteTaiXe,className:"btn btn-danger","data-toggle":"modal","data-target":"#deleteXe"},"X\xf3a"))))}}]),t}(n.Component),_=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onEditTaiXeClick=function(e){n.setState({curDataEdit:e,isAddNew:!1}),n.props.editTaiXeConfirm(e)},n.onDeleteClick=function(e){n.setState({deleteCur:e})},n.onDeleteTaiXeClick=function(e){n.props.deleteTaiXe(n.state.deleteCur)},n.render_item=function(){if(n.props.danh_sach_tai_xe)return n.props.danh_sach_tai_xe.map((function(e,a){return l.a.createElement(p,{deleteTaiXe:n.onDeleteClick,onEditTaiXeClick:n.onEditTaiXeClick,value:e,key:a})}))},n.state={isAddNew:!0},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"danh-muc-tai-xe"},l.a.createElement("div",{className:"row ml-3 p-3"},l.a.createElement("div",{onClick:function(){e.setState({isAddNew:!0,curDataEdit:null})},"data-toggle":"modal","data-target":"#addNewTaiXe",className:"btn btn-success"},"Th\xeam M\u1edbi"),l.a.createElement(u,{isAddNew:this.state.isAddNew,addNewTaiXe:this.props.addNewTaiXe,curDataEdit:this.state.curDataEdit,editTaiXe:this.props.editTaiXe}),l.a.createElement("div",{className:"modal",id:"deleteXe"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"X\xe1c Nh\u1eadn X\xf3a"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h3",null,"B\u1ea1n ch\u1eafc ch\xe1n mu\u1ed1n x\xf3a? ")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",onClick:this.onDeleteTaiXeClick,className:"btn btn-danger","data-dismiss":"modal"},"X\xf3a")))))),l.a.createElement("div",{className:"row mr-3 body-content ml-3"},l.a.createElement("table",{className:"table table-striped table-sm table-hover table-bordered  table-inverse",width:"100%"},l.a.createElement("thead",{className:"thead-inverse text-center"},l.a.createElement("tr",null,l.a.createElement("th",null,"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i"),l.a.createElement("th",null,"H\u1ecd T\xean"),l.a.createElement("th",null,"\u0110\u1ecba Ch\u1ec9"),l.a.createElement("th",null,"Thao T\xe1c"))),l.a.createElement("tbody",{className:"text-center"},this.render_item()))))}}]),t}(n.Component),E=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onChange=function(a){var t=a.target.id,n=a.target.value;e.setState(Object(h.a)({},t,n))},e.onAddClick=function(){console.log(e.props.isAddNew),e.state&&e.state.Bien_So&&e.props.addNewXe(e.state),e.state&&!e.props.isAddNew&&e.props.editXe(e.state)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.curDataEdit;return l.a.createElement("div",null,l.a.createElement("div",{className:"modal",id:"addnewXe"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},this.props.isAddNew?"Th\xeam Xe M\u1edbi":"S\u1eeda Th\xf4ng Tin Xe"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group flex-column d-flex"},l.a.createElement("span",null,"Bi\u1ec3n S\u1ed1"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Bien_So:"Nh\u1eadp bi\u1ec3n s\u1ed1 xe",className:"form-control mb-1",id:"Bien_So"}),l.a.createElement("span",null,"Hi\u1ec7u Xe"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Nhan_Hieu:"Nh\u1eadp Nh\xe3n Hi\u1ec7u xe",className:"form-control mb-1",id:"Nhan_Hieu"}),l.a.createElement("span",null,"Ng\xe0y \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("input",{type:"date",onChange:this.onChange,placeholder:e?e.Ngay_Dang_Kiem:"Ng\xe0y \u0110\u0103ng Ki\u1ec3m",className:"form-control mb-1",id:"Ngay_Dang_Kiem"}),l.a.createElement("span",null,"H\u1ea1n \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("input",{type:"date",onChange:this.onChange,placeholder:e?e.Han_Dang_Kiem:"H\u1ea1n \u0110\u0103ng Ki\u1ec3m",className:"form-control mb-1",id:"Han_Dang_Kiem"}),l.a.createElement("span",null,"S\u1ed1 L\xedt X\u0103ng Cho 100Km"),l.a.createElement("input",{type:"number",onChange:this.onChange,placeholder:e?e.So_Lit_Xang_Dau_Cho_100_Km:"S\u1ed1 L\xedt X\u0103ng D\u1ea7u Cho 100 KM",className:"form-control mb-1",id:"So_Lit_Xang_Dau_Cho_100_Km"}),l.a.createElement("span",null,"Tr\u1ea1ng Th\xe1i"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Trang_Thai:"Nh\u1eadp Tr\u1ea1ng Th\xe1i Xe",className:"form-control mb-1",id:"Trang_Thai"}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"reset",className:"btn btn-danger","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"reset",onClick:this.onAddClick,className:"btn btn-success","data-dismiss":"modal"},this.props.isAddNew?"Th\xeam":"C\u1eadp Nh\u1eadt"))))))}}]),t}(n.Component),C=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onEditClick=function(){e.props.onEditClick(e.props.value)},e.onDeleteClick=function(){e.props.deleteXe(e.props.value)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.value.val();return l.a.createElement("tr",null,l.a.createElement("td",null,e.Bien_So),l.a.createElement("td",null,e.Nhan_Hieu),l.a.createElement("td",null,e.Trang_Thai),l.a.createElement("td",null,e.Ngay_Dang_Kiem),l.a.createElement("td",null,e.Han_Dang_Kiem),l.a.createElement("td",null,e.So_Lit_Xang_Dau_Cho_100_Km),l.a.createElement("td",null,l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{onClick:this.onEditClick,"data-toggle":"modal","data-target":"#addnewXe",className:"btn btn-warning mr-2"},"S\u1eeda"),l.a.createElement("div",{onClick:this.onDeleteClick,className:"btn btn-danger","data-toggle":"modal","data-target":"#deleteXe"},"X\xf3a"))))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onEditClick=function(e){n.setState({isAddNew:!1,curDataEdit:e.val()}),n.props.editXeConfirm(e)},n.onDeleteConfirm=function(){n.props.onDeleteConfirm(!0)},n.render_Item=function(){if(n.props.danh_sach_xe_value)return n.props.danh_sach_xe_value.map((function(e,a){return l.a.createElement(C,{onEditClick:n.onEditClick,deleteXe:n.props.deleteXe,value:e,key:a})}))},n.state={isAddNew:!0,curDataEdit:{}},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"danh-muc-xe"},l.a.createElement("div",{className:"row ml-3 p-3"},l.a.createElement("div",{onClick:function(){e.setState({isAddNew:!0,curDataEdit:null})},"data-toggle":"modal","data-target":"#addnewXe",className:"btn btn-success"},"Th\xeam M\u1edbi"),l.a.createElement(E,{addNewXe:this.props.addNewXe,editXe:this.props.editXe,curDataEdit:this.state.curDataEdit,isAddNew:this.state.isAddNew}),l.a.createElement("div",{className:"modal",id:"deleteXe"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"X\xe1c Nh\u1eadn X\xf3a"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h3",null,"B\u1ea1n ch\u1eafc ch\xe1n mu\u1ed1n x\xf3a? ")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",onClick:this.onDeleteConfirm,className:"btn btn-danger","data-dismiss":"modal"},"X\xf3a")))))),l.a.createElement("div",{className:"row mr-3 body-content ml-3"},l.a.createElement("table",{className:"table table-striped table-sm table-hover table-bordered  table-inverse",width:"100%"},l.a.createElement("thead",{className:"thead-inverse text-center"},l.a.createElement("tr",null,l.a.createElement("th",null,"Bi\u1ec3n S\u1ed1"),l.a.createElement("th",null,"Nh\xe3n Hi\u1ec7u"),l.a.createElement("th",null,"Trang Th\xe1i"),l.a.createElement("th",null,"Ng\xe0y \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("th",null,"H\u1ea1n \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("th",null,"S\u1ed1 l\xedt x\u0103ng d\u1ea7u/100km"),l.a.createElement("th",null,"Thao T\xe1c"))),l.a.createElement("tbody",{className:"text-center"},this.render_Item()))))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-xl-6 col-md-6 mb-3 col-lg-6 Doanh_Thu_Theo_Thang"},l.a.createElement("div",{className:"card d-flex flex-row text-black"},l.a.createElement("div",{className:"col-xl-1 col-md-1 col-lg-1"},l.a.createElement("i",{className:"fa fa-exclamation-circle p-3 pb-4 text-white ml-3 bg-danger"}),l.a.createElement("i",{className:"fa fa-calendar p-3 ml-4"},l.a.createElement("span",{className:"ml-2"},"1/1/2020"))),l.a.createElement("div",{className:"col col col"}),l.a.createElement("div",{className:"col-xl-4 col-md-4 col-lg-4"},l.a.createElement("span",null,"C\u1ea3nh B\xe1o \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("h4",{className:"text-danger"},"63N1-0134"))))}}]),t}(n.Component),v=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-xl-6 col-md-6 mb-3 col-lg-6 Doanh_Thu_Theo_Thang"},l.a.createElement("div",{className:"card d-flex flex-row text-black"},l.a.createElement("div",{className:"col-xl-1 col-md-1 col-lg-1"},l.a.createElement("i",{className:"fa  fa-home p-3 pb-4 text-white ml-3 bg-success"}),l.a.createElement("i",{className:"fa fa-calendar p-3 ml-4"},l.a.createElement("span",{className:"ml-2"},"1/1/2020"))),l.a.createElement("div",{className:"col col col"}),l.a.createElement("div",{className:"col-xl-4 col-md-4 col-lg-4"},l.a.createElement("span",null,"Doanh Thu Theo Th\xe1ng"),l.a.createElement("h4",{className:"text-danger"},"1.500.000.000\u0111"))))}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"row mt-3 container-fluid"},l.a.createElement(v,null),l.a.createElement(N,null)),l.a.createElement("div",{className:"row mt-3 col table-responsive border-0"},l.a.createElement("table",{className:"table table-striped col table-hover table-bordered",width:"100%"},l.a.createElement("thead",{className:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"S\u1ed1 Xe"),l.a.createElement("th",null,"Ng\xe0y \u0110\u0103ng Ki\u1ec3m"),l.a.createElement("th",null,"S\u1ed1 Ti\u1ec1n X\u0103ng D\u1ea7u(ng\xe0y)"),l.a.createElement("th",null,"S\u1ed1 Ti\u1ec1n X\u0103ng D\u1ea7u(th\xe1ng)"),l.a.createElement("th",null,"Ghi Ch\xfa"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"63N-1034"),l.a.createElement("td",null,"22/2/2222"),l.a.createElement("td",null,"100.000.000\u0111"),l.a.createElement("td",null,"1.000.000.000\u0111"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"63N-1034"),l.a.createElement("td",null,"22/2/2222"),l.a.createElement("td",null,"100.000.000\u0111"),l.a.createElement("td",null,"1.000.000.000\u0111"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"63N-1034"),l.a.createElement("td",null,"22/2/2222"),l.a.createElement("td",null,"100.000.000\u0111"),l.a.createElement("td",null,"1.000.000.000\u0111"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"63N-1034"),l.a.createElement("td",null,"22/2/2222"),l.a.createElement("td",null,"100.000.000\u0111"),l.a.createElement("td",null,"1.000.000.000\u0111"),l.a.createElement("td",null))))))}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onChange=function(a){var t=a.target.id,n=a.target.value;e.setState(Object(h.a)({},t,n))},e.onAddClick=function(){e.props.isAddNew&&e.props.addNewChiPhi(e.state),e.props.isAddNew||e.props.editChiPhi(e.state)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.curDataEdit?this.props.curDataEdit.val():null;return l.a.createElement("div",null,l.a.createElement("div",{className:"modal",id:"addnewchiphi"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},this.props.isAddNew?"Th\xeam Chi Ph\xed M\u1edbi":"S\u1eeda Th\xf4ng Tin Chi Ph\xed"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group flex-column d-flex"},l.a.createElement("span",null,"T\xean Chi Ph\xed"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Ten_Chi_Phi:"Nh\u1eadp t\xean chi ph\xed",className:"form-control mb-1",id:"Ten_Chi_Phi"}),l.a.createElement("span",null,"Lo\u1ea1i H\xecnh"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Loai_Hinh:"Nh\u1eadp lo\u1ea1i h\xecnh",className:"form-control mb-1",id:"Loai_Hinh"}),l.a.createElement("span",null,"Ghi Ch\xfa"),l.a.createElement("input",{type:"text",onChange:this.onChange,placeholder:e?e.Ghi_Chu:"Nh\u1eadp ghi ch\xfa",className:"form-control mb-1",id:"Ghi_Chu"}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"Reset",className:"btn btn-danger","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"Reset",onClick:this.onAddClick,className:"btn btn-success","data-dismiss":"modal"},this.props.isAddNew?"Th\xeam":"C\u1eadp Nh\u1eadt"))))))}}]),t}(n.Component),T=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).onEditClick=function(){e.props.onEditClick(e.props.value)},e.onDeleteClick=function(){e.props.deleteChiPhi(e.props.value)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.value.val();return l.a.createElement("tr",null,l.a.createElement("td",null,e.Ten_Chi_Phi),l.a.createElement("td",null,e.Loai_Hinh),l.a.createElement("td",null,e.Ghi_Chu),l.a.createElement("td",null,l.a.createElement("div",{className:"btn-group"},l.a.createElement("div",{onClick:this.onEditClick,"data-toggle":"modal","data-target":"#addnewchiphi",className:"btn btn-warning mr-2"},"S\u1eeda"),l.a.createElement("div",{onClick:this.onDeleteClick,className:"btn btn-danger","data-toggle":"modal","data-target":"#deleteXe"},"X\xf3a"))))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onEditClick=function(e){n.setState({curDataEdit:e,isAddNew:!1}),n.props.editChiPhiConfirm(e)},n.onDeleteClick=function(e){n.setState({deleteKey:e})},n.deleteChiPhi=function(){n.props.deleteChiPhi(n.state.deleteKey)},n.render_item=function(){if(n.props.danh_sach_chi_phi)return n.props.danh_sach_chi_phi.map((function(e,a){return l.a.createElement(T,{onEditClick:n.onEditClick,deleteChiPhi:n.onDeleteClick,value:e,key:a})}))},n.state={curDataEdit:null,isAddNew:!0},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"danh-muc-chi-phi"},l.a.createElement("div",{className:"row ml-3 p-3"},l.a.createElement("div",{className:"btn btn-success",onClick:function(){e.setState({isAddNew:!0,curDataEdit:null})},"data-toggle":"modal","data-target":"#addnewchiphi"},"Th\xeam M\u1edbi"),l.a.createElement(g,{addNewChiPhi:this.props.addNewChiPhi,isAddNew:this.state.isAddNew,curDataEdit:this.state.curDataEdit,editChiPhi:this.props.editChiPhi}),l.a.createElement("div",{className:"modal",id:"deleteXe"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},"X\xe1c Nh\u1eadn X\xf3a"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h3",null,"B\u1ea1n ch\u1eafc ch\xe1n mu\u1ed1n x\xf3a? ")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",onClick:this.deleteChiPhi,className:"btn btn-danger","data-dismiss":"modal"},"X\xf3a")))))),l.a.createElement("div",{className:"row ml-3"},l.a.createElement("table",{width:"100%",className:"table table-hover table-bordered  table-inverse"},l.a.createElement("thead",{className:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"T\xean Chi Ph\xed"),l.a.createElement("th",null,"Lo\u1ea1i H\xecnh"),l.a.createElement("th",null,"Ghi Ch\xfa"),l.a.createElement("th",null,"Thao T\xe1c"))),l.a.createElement("tbody",null,this.render_item()))))}}]),t}(n.Component),D=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"danh-muc-chi-phi"},l.a.createElement("div",{className:"row ml-3 p-3"},l.a.createElement("div",{className:"btn col-xl-1 col-md-1 btn-success"},"Th\xeam M\u1edbi"),l.a.createElement("h3",{className:"col-xl-7 col-md-7 col-lg-7"}),l.a.createElement("div",{className:"col-xl-4 d-flex col-md-4 col-lg-4"},l.a.createElement("h4",null,"T\xe0i X\u1ebf:"),l.a.createElement("form",{className:"col"},l.a.createElement("select",{name:"cars",class:"custom-select"},l.a.createElement("option",{selected:!0},"Custom Select Menu"),l.a.createElement("option",{value:"volvo"},"Volvo"),l.a.createElement("option",{value:"fiat"},"Fiat"),l.a.createElement("option",{value:"audi"},"Audi")))),l.a.createElement("div",{className:"mt-3 d-flex"},l.a.createElement("h4",null,"Ng\xe0y Chi Ti\u1ec1n: "),l.a.createElement("input",{className:"ml-3",type:"date"}),l.a.createElement("input",{className:"ml-3",type:"date"}),l.a.createElement("div",{className:"btn ml-3 btn-primary"},"T\xecm Ki\u1ebfm"))),l.a.createElement("div",{className:"row ml-3"},l.a.createElement("table",{width:"100%",className:"table table-striped table-sm table-hover table-bordered  table-inverse"},l.a.createElement("thead",{className:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"S\u1ed1 Xe"),l.a.createElement("th",null,"Chi Ph\xed"),l.a.createElement("th",null,"Ng\xe0y Thu"),l.a.createElement("th",null,"Ng\u01b0\u1eddi Thu"),l.a.createElement("th",null,"S\u1ed1 Ti\u1ec1n"),l.a.createElement("th",null,"Ghi Ch\xfa"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"}),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"}),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))))}}]),t}(n.Component),X=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"danh-muc-chi-phi"},l.a.createElement("div",{className:"row ml-3 p-3"},l.a.createElement("div",{className:"btn col-xl-1 col-md-1 btn-success"},"Th\xeam M\u1edbi"),l.a.createElement("h3",{className:"col-xl-7 col-md-7 col-lg-7"}),l.a.createElement("div",{className:"col-xl-4 d-flex col-md-4 col-lg-4"},l.a.createElement("h4",null,"T\xe0i X\u1ebf:"),l.a.createElement("form",{className:"col"},l.a.createElement("select",{name:"cars",class:"custom-select"},l.a.createElement("option",{selected:!0},"Custom Select Menu"),l.a.createElement("option",{value:"volvo"},"Volvo"),l.a.createElement("option",{value:"fiat"},"Fiat"),l.a.createElement("option",{value:"audi"},"Audi")))),l.a.createElement("div",{className:"mt-3 d-flex"},l.a.createElement("h4",null,"Ng\xe0y Thu Ti\u1ec1n: "),l.a.createElement("input",{className:"ml-3",type:"date"}),l.a.createElement("input",{className:"ml-3",type:"date"}),l.a.createElement("div",{className:"btn ml-3 btn-primary"},"T\xecm Ki\u1ebfm"))),l.a.createElement("div",{className:"row ml-3"},l.a.createElement("table",{className:"table table-striped  table-hover table-bordered  table-inverse",width:"100%"},l.a.createElement("thead",{className:"thead-inverse"},l.a.createElement("tr",null,l.a.createElement("th",null,"S\u1ed1 Xe"),l.a.createElement("th",null,"Chi Ph\xed"),l.a.createElement("th",null,"Ng\xe0y Thu"),l.a.createElement("th",null,"Ng\u01b0\u1eddi Thu"),l.a.createElement("th",null,"S\u1ed1 Ti\u1ec1n"),l.a.createElement("th",null,"Ghi Ch\xfa"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"}),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",{scope:"row"}),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null),l.a.createElement("td",null))))))}}]),t}(n.Component),k=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).onClick=function(e){n.props.onTabControlsClick(e.target.id),n.setState({cur:e.target.id})},n.state={cur:"dashboard"},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"nav row col nav-tabs d-flex flex-row nav-stacked"},l.a.createElement("a",{onClick:this.onClick,className:"dashboard"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"dashboard"},"Dashboard"),l.a.createElement("a",{onClick:this.onClick,className:"danh_muc_xe"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"danh_muc_xe"},"Danh M\u1ee5c Xe"),l.a.createElement("a",{onClick:this.onClick,className:"danh_muc_tai_xe"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"danh_muc_tai_xe"},"Danh M\u1ee5c T\xe0i X\u1ebf"),l.a.createElement("a",{onClick:this.onClick,className:"danh_muc_chi_phi"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"danh_muc_chi_phi"},"Danh M\u1ee5c Chi Ph\xed"),l.a.createElement("a",{onClick:this.onClick,className:"phi_thu"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"phi_thu"},"Ph\xed Thu"),l.a.createElement("a",{onClick:this.onClick,className:"phi_chi"===this.state.cur?"nav-link active":"nav-link",href:"#",id:"phi_chi"},"Ph\xed Chi"))}}]),t}(n.Component),w=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).render_Item=function(){return"dashboard"===e.props.screen?l.a.createElement(f,null):"danh_muc_xe"===e.props.screen?l.a.createElement(b,{addNewXe:e.props.addNewXe,deleteXe:e.props.deleteXe,onDeleteConfirm:e.props.onDeleteConfirm,danh_sach_xe:e.props.danh_sach_xe,danh_sach_xe_value:e.props.danh_sach_xe_value,editXe:e.props.editXe,editXeConfirm:e.props.editXeConfirm}):"danh_muc_tai_xe"===e.props.screen?l.a.createElement(_,{danh_sach_tai_xe:e.props.danh_sach_tai_xe,addNewTaiXe:e.props.addNewTaiXe,editTaiXeConfirm:e.props.editTaiXeConfirm,editTaiXe:e.props.editTaiXe,deleteTaiXe:e.props.deleteTaiXe}):"danh_muc_chi_phi"===e.props.screen?l.a.createElement(y,{danh_sach_chi_phi:e.props.danh_sach_chi_phi,editChiPhiConfirm:e.props.editChiPhiConfirm,editChiPhi:e.props.editChiPhi,addNewChiPhi:e.props.addNewChiPhi,deleteChiPhi:e.props.deleteChiPhi}):"phi_thu"===e.props.screen?l.a.createElement(X,null):"phi_chi"===e.props.screen?l.a.createElement(D,null):void 0},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m,null),l.a.createElement(k,{onTabControlsClick:this.props.onTabControlsClick}),this.render_Item()))}}]),t}(n.Component),x=t(9);x.initializeApp({apiKey:"AIzaSyAUOg41uncWQbf2on6mJuJ3raJHa4M_5e4",authDomain:"doixe-3baa3.firebaseapp.com",databaseURL:"https://doixe-3baa3.firebaseio.com",projectId:"doixe-3baa3",storageBucket:"doixe-3baa3.appspot.com",messagingSenderId:"958961291553",appId:"1:958961291553:web:931654d3abf8ba5df1ae60",measurementId:"G-2D1ZTRZ7X0"});var S=x.database().ref("DM_Chi_Phi"),j=(x.database().ref("DM_TC_Phi_Chi"),x.database().ref("DM_TC_Phi_Chi_Chi_Tiet"),x.database().ref("DM_TC_Phi_Thu"),x.database().ref("DM_TC_Phi_Thu_Chi_Tiet"),x.database().ref("DM_Tai_Xe")),O=x.database().ref("DM_Xe"),P=function(e){Object(s.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).loadData=function(){O.on("value",(function(e){var a=[];e.forEach((function(e,t){e.val().Deleted||a.push(e)})),n.setState({danh_sach_xe:e,danh_sach_xe_value:a})})),j.on("value",(function(e){var a=[];e.forEach((function(e,t){a.push(e)})),n.setState({danh_sach_tai_xe:a})})),S.on("value",(function(e){var a=[];e.forEach((function(e,t){a.push(e)})),n.setState({danh_sach_chi_phi:a})}))},n.tabControlsClick=function(e){n.setState({screen:e})},n.deleteXe=function(e){n.setState({deleteItemKey:e})},n.onDeleteConfirm=function(e){n.state.deleteItemKey&&e&&O.child(n.state.deleteItemKey.key).remove()},n.addNewXe=function(e){var a=new Date,t={Auto_ID:e.Bien_So,Bien_So:e.Bien_So,Han_Dang_Kiem:e.Han_Dang_Kiem,Ngay_Dang_Kiem:e.Ngay_Dang_Kiem,Nhan_Hieu:e.Nhan_Hieu,So_Lit_Xang_Dau_Cho_100_Km:e.So_Lit_Xang_Dau_Cho_100_Km,Trang_Thai:e.Trang_Thai,Created:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Create_By:n.state.user.name,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Last_Updated_By:n.state.user.name,Deleted:0};O.push(t)},n.editXe=function(e){var a=new Date,t=n.state.EditXeKey.val();O.child(n.state.EditXeKey.key).set({Auto_ID:e.Bien_So?e.Bien_So:t.Bien_So,Bien_So:e.Bien_So?e.Bien_So:t.Bien_So,Han_Dang_Kiem:e.Han_Dang_Kiem?e.Han_Dang_Kiem:t.Han_Dang_Kiem,Ngay_Dang_Kiem:e.Ngay_Dang_Kiem?e.Ngay_Dang_Kiem:t.Ngay_Dang_Kiem,Nhan_Hieu:e.Nhan_Hieu?e.Nhan_Hieu:t.Nhan_Hieu,So_Lit_Xang_Dau_Cho_100_Km:e.So_Lit_Xang_Dau_Cho_100_Km?e.So_Lit_Xang_Dau_Cho_100_Km:t.So_Lit_Xang_Dau_Cho_100_Km,Trang_Thai:e.Trang_Thai?e.Trang_Thai:t.Trang_Thai,Created:e.Created?e.Created:t.Created,Create_By:e.Create_By?e.Create_By:t.Create_By,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Last_Updated_By:n.state.user.name,Deleted:0})},n.editXeConfirm=function(e){n.setState({EditXeKey:e})},n.editTaiXe=function(e){var a=new Date,t=n.state.EditTaiXeKey.val();j.child(n.state.EditTaiXeKey.key).set({Auto_ID:e.So_Dien_Thoai?e.So_Dien_Thoai:t.Auto_ID,So_Dien_Thoai:e.So_Dien_Thoai?e.So_Dien_Thoai:t.So_Dien_Thoai,Ten_Tai_Xe:e.Ten_Tai_Xe?e.Ten_Tai_Xe:t.Ten_Tai_Xe,Dia_Chi:e.Dia_Chi?e.Dia_Chi:t.Dia_Chi,Created:e.Created?e.Created:t.Created,Created_By:e.Created_By?e.Created_By:t.Create_By,Last_Updated_By:n.state.user.name,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Deleted:0})},n.editTaiXeConfirm=function(e){n.setState({EditTaiXeKey:e})},n.addNewTaiXe=function(e){var a=new Date,t={Auto_ID:e.So_Dien_Thoai,So_Dien_Thoai:e.So_Dien_Thoai,Ten_Tai_Xe:e.Ten_Tai_Xe,Dia_Chi:e.Dia_Chi,Created:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Create_By:n.state.user.name,Last_Updated_By:n.state.user.name,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Deleted:0};j.push(t)},n.deleteTaiXe=function(e){j.child(e.key).remove()},n.editChiPhi=function(e){var a=new Date,t=n.state.EditChiPhiKey.val();S.child(n.state.EditChiPhiKey.key).set({Auto_ID:e.Ten_Chi_Phi?e.Ten_Chi_Phi:t.Ten_Chi_Phi,Ten_Chi_Phi:e.Ten_Chi_Phi?e.Ten_Chi_Phi:t.Ten_Chi_Phi,Loai_Hinh:e.Loai_Hinh?e.Loai_Hinh:t.Loai_Hinh,Ghi_Chu:e.Ghi_Chu?e.Ghi_Chu:t.Ghi_Chu,Created:t.Created,Created_By:t.Created_By,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Last_Updated_By:n.state.user.name,Deleted:0})},n.editChiPhiConfirm=function(e){n.setState({EditChiPhiKey:e})},n.addNewChiPhi=function(e){var a=new Date,t={Auto_ID:e.Ten_Chi_Phi,Ten_Chi_Phi:e.Ten_Chi_Phi,Loai_Hinh:e.Loai_Hinh,Ghi_Chu:e.Ghi_Chu?e.Ghi_Chu:"",Created:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Created_By:n.state.user.name,Last_Updated:a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear(),Last_Updated_By:n.state.user.name,Deleted:0};S.push(t)},n.deleteChiPhi=function(e){S.child(e.key).remove()},n.render_Dashboard=function(){return l.a.createElement(w,{screen:n.state.screen,onTabControlsClick:n.tabControlsClick,deleteXe:n.deleteXe,onDeleteConfirm:n.onDeleteConfirm,addNewXe:n.addNewXe,editXe:n.editXe,editXeConfirm:n.editXeConfirm,danh_sach_xe:n.state.danh_sach_xe,danh_sach_xe_value:n.state.danh_sach_xe_value,danh_sach_tai_xe:n.state.danh_sach_tai_xe,addNewTaiXe:n.addNewTaiXe,editTaiXeConfirm:n.editTaiXeConfirm,editTaiXe:n.editTaiXe,deleteTaiXe:n.deleteTaiXe,danh_sach_chi_phi:n.state.danh_sach_chi_phi,editChiPhiConfirm:n.editChiPhiConfirm,editChiPhi:n.editChiPhi,addNewChiPhi:n.addNewChiPhi,deleteChiPhi:n.deleteChiPhi})},n.state={screen:"dashboard",user:{name:"T\xe2n"}},n}return Object(o.a)(t,[{key:"componentWillMount",value:function(){this.loadData()}},{key:"render",value:function(){return l.a.createElement("div",null,this.render_Dashboard())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1e230cb9.chunk.js.map