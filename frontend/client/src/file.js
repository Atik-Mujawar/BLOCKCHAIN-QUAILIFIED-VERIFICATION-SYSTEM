import { Web3Storage } from "web3.storage";
import { useState } from "react";
import React from "react";

/*import { loadBlockchainData, loadWeb3 } from "./Web3helpers"*/

import emailjs from 'emailjs-com'





const apiToken =
  "YOUR TOKEN"

const client = new Web3Storage({ token: apiToken });
  

export default function Apps(props) {

  const [file, setFile] = useState("");
  const email = localStorage.getItem("email");
    const account = localStorage.getItem("account");
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
    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm(
          "service_le4lrd5",
          "template_ugb9k9u",
          e.target,
          "aVd8spLfEWWnzVmBu"    
      ).then(res=>{
          console.log(res);
      }).catch(err=> console.log(err));
    }
  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");
    
    const rootCid = await client.put(fileInput.files, {
      name: "certificate",
      maxRetries: 3
    });

    console.log(rootCid);

    var n = document.getElementById("input")
    var filename=n.files[0].name
    const x="https://ipfs.io/ipfs/"+rootCid+"/"+filename
    
    document.getElementById("cid").innerHTML=y
    
    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
    
  };


    
  return (
    <div className="App">
      
      <img alt="hi" src={file} />

      <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="input" name="file" multiple />
      </div>


 <form className="uploadfile" onSubmit={sendEmail}>
    <div className="ui divider"></div>
    <div className="ui form">
    <div className="field"></div>

    <div className="field">
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter the certificate holder's email id"
                />
                </div>

                <div className="field">
                    <input
                        type="text"
                        name="message"
                        value="cid"
                        id="cid"
                    />
                </div>
                </div>
            </form>


      <div id="root">
        <button onclick={()=>{ handleUpload(); sendEmail() }}>Submit</button>
        <p id="cid"></p>
        
      </div>
      
    </div>

  );
}

