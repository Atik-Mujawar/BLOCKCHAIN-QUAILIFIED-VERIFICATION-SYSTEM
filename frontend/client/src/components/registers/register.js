import "./register.css";
import { useState, useEffect } from "react";
import * as React from "react";
import { loadBlockchainData, loadWeb3 } from "../../Web3helpers";
import { useNavigate } from "react-router-dom";


function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [college_name, setCollege_name] = React.useState("");
  const [college_num, setCollege_num] = React.useState("");
  const [secret_key, setSecert_key] = React.useState("");
 
  const navigate = useNavigate();
 
  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);
 
  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();
 
    setAccounts(accounts);
    setAuth(auth);
  };
 
  const signUp = async () => {
    if (!username || !email || !password) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    try {
      await auth.methods
        .createUser(username, email, password,college_name,college_num,secret_key)
        .send({ from: accounts });
 
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
  React.useEffect(() => {
    loadWeb3();
  }, []);
 
  React.useEffect(() => {
    loadAccounts();
  }, []);
   



  return(
    
    <div className="reg-screen">
    <div className="register">
       
        <h1>REGISTER</h1>
        <div className="ui divider"></div>
        <div className="ui form">
      
          <div className="field">
            
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            
            <input
              type="text"
              name="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
          
          <div className="field">
            
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            
            <div className="field">
            
            <input
              type="text"
              name="college_name"
              placeholder="COLLEGE NAME"
              value={college_name}
              onChange={(e) => setCollege_name(e.target.value)}
            />
            </div>
            

            <div className="field">
            
            <input
              type="number"
              name="college_num"
              placeholder="COLLEGE NUMBER"
              value={college_num}
              onChange={(e) => setCollege_num(e.target.value)}
            />
            
            </div>
          
            {/*<div className="field">
            <input
              type="text"
              name="college_link"
              placeholder="COLLEGE LINK"
             id="college_link"
            />
            </div>
             <p></p>*/}

          <div className="field">
            
            <input
              type="text"
              name="secret_key"
              placeholder="SECRET KEY"
              value={secret_key}
              onChange={(e) => setSecert_key(e.target.value)}
            />
           

          </div>

          <button className="reg-button" onClick={signUp}>{" "}REGISTER</button>
          </div>

      </div>
      </div>
)}

export default Register


            {/*<div className="field">
            
            <select name="STATE" required>
              <option></option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            </div>
            
  <p>{formErrors.state}</p>*/}