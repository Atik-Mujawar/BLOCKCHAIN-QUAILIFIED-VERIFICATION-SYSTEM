import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


const Mainpage = () => {
    const email = localStorage.getItem("email");
    const account = localStorage.getItem("account");
 

    

    return(
        <div className="c">
            <div>
                <h3>Your account: {account} </h3>
                <h3>Your email: {email} </h3>
                <button
                    onClick={() => {
                    localStorage.removeItem("email");
                    localStorage.removeItem("account");
                    window.location.reload();
                    }}
                    >
                    {" "}Log out

                </button>
                
                
            </div>
        </div>
    )
}

export default Mainpage