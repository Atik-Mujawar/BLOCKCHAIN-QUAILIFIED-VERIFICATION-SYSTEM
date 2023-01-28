import Web3 from "web3/dist/web3.min.js";

    
export const init_web3 =   async ()=> {
        var  Weeb3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
      
          //Load accounts
          window.accounts = ["0x1638EF0Fee9cED0645F5B7c5B6eD9608C30643bF"];
          console.log("Loaded accounts");
      
          // The interface definition for your smart contract (the ABI)
          window.pm = new Weeb3.eth.Contract([
            [
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "user_email",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_password",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_num",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_link",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "secret_key",
                            "type": "string"
                        }
                    ],
                    "name": "addUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "user_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "suspendUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "user_college_num",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "new_user_password",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "secret_key",
                            "type": "string"
                        }
                    ],
                    "name": "updatePassword",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "user_email",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_num",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_college_link",
                            "type": "string"
                        }
                    ],
                    "name": "updateUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "user_id",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "user_account_status",
                            "type": "string"
                        }
                    ],
                    "name": "verifyUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "a_name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "a_pass",
                            "type": "string"
                        }
                    ],
                    "name": "adminLogin",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "getNumOfUsers",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "user_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getPassportNoById",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "user_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getUnverifiedUser",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "user_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getUser",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "user_college_num",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "user_password",
                            "type": "string"
                        }
                    ],
                    "name": "login",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ]
        ])
      
           window.pm.options.address = '0x1638EF0Fee9cED0645F5B7c5B6eD9608C30643bF'
      
      }