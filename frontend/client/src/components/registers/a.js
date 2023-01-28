import {  init_web3 } from "./utils.js"

window.onload = async function () {
      var x = await init_web3()
      console.log("hp")
      document.getElementById("btnnew").addEventListener("click", function () {
        var username = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var udept = document.getElementById("college_num").value;
        var utype = document.getElementById("college_name").value;
        var repass = document.getElementById("secert_key").value;
        //var qr = qrcode(4, 'L');
          window.accounts = ["0x1638EF0Fee9cED0645F5B7c5B6eD9608C30643bF"]

          // if(password.trim() != repass.trim()){
          //   document.getElementById("msg").textContent="PASSWORD NOT MATCHING !!!!!!";
          // }

          if(email.length == 0 || password.length ==0 || college_num.length ==0 || college_name.length ==0 || secert_key.length ==0 ){
            document.getElementById("msg").textContent="ENTER ALL FIELDS PLEASE !!!!!!";
          }

          else{
            window.pm.methods.createParticipant(uniqueid,username,password,udept,utype).send({ from: window.accounts[0] , gas: 500000 }, function (error, result) {
          if (error) {
              console.log(error)
              console.log("false")
          } else {
            window.pm.methods.getParticipantId().call({ from: window.accounts[0] }, function (error, result) {
          if (error) {
              console.log(error)
              console.log("false")
          } else {

            document.getElementById("user_id").textContent=result-1;
            console.log(result)
            console.log("true")
            // qr.addData('Hi!');
            // qr.make();
            // document.getElementById('placeHolder').innerHTML = qr.createImgTag();
            

            

          }
        })
          }
        })
          }


      })
}