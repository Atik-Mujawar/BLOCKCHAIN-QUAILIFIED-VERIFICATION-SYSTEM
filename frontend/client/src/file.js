import { Web3Storage } from "web3.storage";
import { useState } from "react";
import React from "react";

/*import { loadBlockchainData, loadWeb3 } from "./Web3helpers"*/


const apiToken =
  "YOUR TOKEN"

const client = new Web3Storage({ token: apiToken });
  

export default function Apps(props) {

  const [file, setFile] = useState("");
  
  
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
    
    document.getElementById("cid").innerHTML=x
    
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
      <div id="root">
        <button onClick={handleUpload}>Submit</button>
        <p id="cid"></p>
        
      </div>
      
    </div>

  );
}

