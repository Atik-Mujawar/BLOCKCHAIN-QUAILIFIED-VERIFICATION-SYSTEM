import React from "react";
import "./homepage.css"
import { useNavigate} from 'react-router-dom';
import Button from "./Button"
import Verify from "../verify/verify";




const Homepage = () => {
   /* const navigate = useNavigate(); 
        function redirectRegister(){ 
            navigate('/register'); 
        }
        function redirectLogin(){ 
            navigate('/login'); 
        }
        function redirectVerify(){ 
            navigate('/verify'); 
        }*/
    return(
        
        /*<div className="homepage">
            <h1>Home Page</h1>
            <button onClick={redirectRegister}>REGISTER</button>
            <button onClick={redirectLogin}>LOGIN</button>
            <button onClick={redirectVerify}>VERIFY</button>
        </div>*/
        <>
        <div className="container">
        
        <div className="name">
        <h1 id="name1">BLOCKCHAIN QUALIFIED:</h1>
        <h1 id="name2" >VERIFICATION SYSTEM</h1>
        <p>Blockchain Is Changing the World, It is Secured and easy to use.</p>
        </div>
        
        <div className="verify-container">
            <Verify/>
        </div>
        </div>
        
        </>
    )
}

export default Homepage