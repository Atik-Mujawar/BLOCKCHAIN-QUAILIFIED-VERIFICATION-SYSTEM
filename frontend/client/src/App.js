import './App.css';
import Apps from './components/FileUpload/file';
import Register from './components/registers/register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Verify from './components/verify/verify';
import Navbar from './components/homepage/navbar';
import Mainpage from './components/mainpage/mainpage';
import Mailer from './components/FileUpload/uploadfile';


function App() {

  return (
    <>
    
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/verify" element={<Verify/>}/>
        <Route exact path="/mainpage" element={<Mainpage/>}/>
        <Route exact path="/uploadfile" element={<Mailer/>}/>
        <Route exact path="/file" element={<Apps/>}/>
        <Route exact path="/files" element={<files/>}/>

        
      </Routes>
      </BrowserRouter>

	
    </div>
    </>
    
  );
}

export default App;
/*
import { Web3Storage } from "web3.storage";
import { useState } from "react";

const apiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhGMGU1NjYwODYxRWIzNzNFQzlENkMyREJCOGQwMTA0RjU0N2U5RkUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzI3MjMwOTc0MzcsIm5hbWUiOiJjZXJ0aWZpY2F0ZSJ9.DHNdISM4q7ER4kOuiF9xd5ssqkJlpBes80_8qJIBEwA";

const client = new Web3Storage({ token: apiToken });

export default function App() {
  const [file, setFile] = useState("");
  const handleUpload = async () => {
    console.log(document.getElementById("input").files[0]);
    var fileInput = document.getElementById("input");

    const rootCid = await client.put(fileInput.files, {
      name: "cat pics",
      maxRetries: 3
    });

    console.log(rootCid);

    const res = await client.get(rootCid);
    const files = await res.files();
    console.log(files);
    const url = URL.createObjectURL(files[0]);
    console.log(url);
    setFile(url);
  };
  return (
    <div className="App">
      <h2>Decentralized file storage system</h2>
      <h1>Hello CodeSandbox</h1>
      <img alt="hi" src={file} />

      <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="input" name="file" multiple />
      </div>
      <div>
        <button onClick={handleUpload}>Submit</button>
      </div>
    </div>
  );
}
*/

