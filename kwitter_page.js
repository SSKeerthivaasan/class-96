//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCORDAPofDVCp0h5XwcqvftCLh5fn8vTds",
    authDomain: "kwitter-a2fdc.firebaseapp.com",
    databaseURL: "https://kwitter-a2fdc-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2fdc",
    storageBucket: "kwitter-a2fdc.appspot.com",
    messagingSenderId: "233159844604",
    appId: "1:233159844604:web:d32b998f2554b10755ad79"
  };

  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref("roon_name").push({
              name:user_name,message:msg,like:0
        });
        document.getElementById("msg").value="";
          
  }
