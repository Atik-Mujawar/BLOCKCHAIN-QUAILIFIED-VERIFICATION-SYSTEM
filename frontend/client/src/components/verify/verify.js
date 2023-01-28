import React from "react";
import "./verify.css";
import { useState } from "react";


const Verify = () => {
    const [message, setMessage] = useState('');
    const handleChange = (event) => {
    setMessage(event.target.value);
  };
    const [updated,setUpdated] = useState(message);
    const [isDisplay, setIsDisplay] = useState(true);
    
    const handleClick = () => {
        // 👇 "message" stores input field value
        setUpdated(message);
        setIsDisplay(current => !current);
      };

    
    return(
      <>
        <div className="c">
        <div className="verify">
            <h1>VERIFY</h1>
            <input type="text" name="message"
            onChange={handleChange}
            value={message}
            placeholder="Enter the Certificate's Private Key you need to verify"></input>
                     
            <div className="button" onClick={handleClick}>VERIFY</div>
            
        </div>
          
        </div>
        <div className="view" style={{display: isDisplay ? 'none' : 'block'}}>
            <iframe id="display" src={updated} title="view" ></iframe>
        </div>
      </>
    )
}

export default Verify
/*<h2>{message}</h2>
  <div className="button" onClick={handleClick}><a className="verify-link" href={updated} target="_blank" rel="noreferrer">VERIFY</a></div>
  <a className="button" onClick={handleClick} href="" target="_blank" rel="noreferrer">VERIFY</a> */