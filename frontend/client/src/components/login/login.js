import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'; 
import React from "react";
import { loadBlockchainData, loadWeb3 } from "../../Web3helpers";

 
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
 
  const [accounts, setAccounts] = React.useState(null);
  const [auth, setAuth] = React.useState(null);
 
  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();
 
    setAccounts(accounts);
    setAuth(auth);
  };
 
  const login = async () => {
    if (!email || !password) {
      alert("please fill all details");
 
      return;
    }
 
    try {
      const res = await auth.methods.usersList(email).call();
 
      if (res.password === password) {
        localStorage.setItem("email", email);
        localStorage.setItem("account", accounts);
        navigate("/file");
      } else {
        alert("wrong user credentials or please signup");
      }
    } catch (error) {
      alert(error.message);
    }
  };
 
  React.useEffect(() => {
    loadWeb3();
  }, []);
 
  React.useEffect(() => {
    loadAccounts();
  }, []);
     
      
    return(
        <>
        <div className="screen" >  
            <div className="login">
                <div></div>
                <h1>LOGIN</h1>

                <div className="field">
                <input 
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                {/*<p>{formErrors.userid}</p>*/}

                <div className="field">
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                {/*<p>{formErrors.password}</p>*/}

                {/*<input type="text" placeholder="Enter your Private Key"></input>*/}

                <button className="log-button"  onClick={login}>{" "}LOGIN</button>
                
            </div>
        </div> 
    </>
    )
    
}

export default Login