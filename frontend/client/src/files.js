import {Table, Grid, Button, Form } from 'react-bootstrap';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';

import storehash from './storehash';

import { Web3Storage } from "web3.storage";
import { useState } from "react";

const apiToken =
  "";

const client = new Web3Storages({ token: apiToken });

class files extends Component {
 
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };
   
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };

    convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };

    onClick = async () => {

    try{
        this.setState({blockNumber:"waiting.."});
        this.setState({gasUsed:"waiting..."});

        // get Transaction Receipt in console on click
        // See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
        await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
          console.log(err,txReceipt);
          this.setState({txReceipt});
        }); //await for getTransactionReceipt

        await this.setState({blockNumber: this.state.txReceipt.blockNumber});
        await this.setState({gasUsed: this.state.txReceipt.gasUsed});    
      } //try
    catch(error){
        console.log(error);
      } //catch
  } //onClick

    onSubmit = async (event) => {
      event.preventDefault();

      //bring in user's metamask account address
      const accounts = await web3.eth.getAccounts();
     
      console.log('Sending from Metamask account: ' + accounts[0]);

      //obtain contract address from storehash.js
      const ethAddress= await storehash.options.address;
      this.setState({ethAddress});

      //save document to IPFS,return its hash#, and set hash# to state
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
       //storehash 
       const [file, setFile] = useState("");
       const handleUpload = async () => {
         console.log(document.getElementById("input").files[0]);
         var fileInput = document.getElementById("input");
         
         const rootCid = await client.put(fileInput.files, {
           name: "certificate",
           maxRetries: 3
         });
     
         console.log(rootCid);
         
         const res = await client.get(rootCid);
         const files = await res.files();
         console.log(files);
         const url = URL.createObjectURL(files[0]);
         console.log(url);
         setFile(url);
       }; //await ipfs.add 
    }; //onSubmit 
  
    render() {
      
      return (
        <div className="App">
          <img alt="hi" src={file} />

        <div>
        <label for="file">Choose file to upload</label>
        <input type="file" id="input" name="file" multiple />
        </div>
        <div>
        <button onClick={handleUpload}>Submit</button>
        </div>
          
          <hr />

        <Grid>
          

          <hr/>
            <Button onClick = {this.onClick}> Get Transaction Receipt </Button>

              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Tx Receipt Category</th>
                    <th>Values</th>
                  </tr>
                </thead>
               
                <tbody>
                  <tr>
                    <td>IPFS Hash # stored on Eth Contract</td>
                    <td>{this.state.ipfsHash}</td>
                  </tr>
                  <tr>
                    <td>Ethereum Contract Address</td>
                    <td>{this.state.ethAddress}</td>
                  </tr>

                  <tr>
                    <td>Tx Hash # </td>
                    <td>{this.state.transactionHash}</td>
                  </tr>

                  <tr>
                    <td>Block Number # </td>
                    <td>{this.state.blockNumber}</td>
                  </tr>

                  <tr>
                    <td>Gas Used</td>
                    <td>{this.state.gasUsed}</td>
                  </tr>                
                </tbody>
            </Table>
        </Grid>
     </div>
      );
    } //render
}

export default files;