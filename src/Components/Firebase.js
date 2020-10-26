import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAUOg41uncWQbf2on6mJuJ3raJHa4M_5e4",
    authDomain: "doixe-3baa3.firebaseapp.com",
    databaseURL: "https://doixe-3baa3.firebaseio.com",
    projectId: "doixe-3baa3",
    storageBucket: "doixe-3baa3.appspot.com",
    messagingSenderId: "958961291553",
    appId: "1:958961291553:web:931654d3abf8ba5df1ae60",
    measurementId: "G-2D1ZTRZ7X0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const DM_Chi_Phi = firebase.database().ref('DM_Chi_Phi');
export const DM_TC_Phi_Chi = firebase.database().ref('DM_TC_Phi_Chi');
export const DM_TC_Phi_Chi_Chi_Tiet = firebase.database().ref('DM_TC_Phi_Chi_Chi_Tiet');
export const DM_TC_Phi_Thu = firebase.database().ref('DM_TC_Phi_Thu');
export const DM_TC_Phi_Thu_Chi_Tiet = firebase.database().ref('DM_TC_Phi_Thu_Chi_Tiet');
export const DM_Tai_Xe = firebase.database().ref('DM_Tai_Xe');
export const DM_Xe = firebase.database().ref('DM_Xe');
