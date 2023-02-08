import { Web3Storage } from "web3.storage";
import { useState } from "react";
import React from "react";

/*import { loadBlockchainData, loadWeb3 } from "./Web3helpers"*/

import emailjs from 'emailjs-com'


const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVlMDlhNkYzY0M0NjIwY2Q2OUYyRTE1YjQ2MTY3ZTE4NjNiNEVlMjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzI4MjMxMjQyNTgsIm5hbWUiOiJkZW1vIn0.f3gB1itd-T4DrzjaOnZ-ROxnmffQ-Q76iIE4YB9cyCE"

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
    
<<<<<<< HEAD
    document.getElementById("cid").innerHTML=x
=======
    document.getElementById("demo").innerHTML=x
>>>>>>> ccd6adf83157fe0a3d7c088d2fb15be2ec40419a
    
    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
    
  };

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
                    <textarea
                        type="text"
                        name="mail"
                        id="demo"
                    />
                </div>
                </div>
                <button className="uploadfile-button" value="Send" >email</button>
            </form>


      <div id="root">
        <button onClick={handleUpload}>Submit</button>
        
        <p id="cid"></p>
        
      </div>
      
    </div>

  );
}

