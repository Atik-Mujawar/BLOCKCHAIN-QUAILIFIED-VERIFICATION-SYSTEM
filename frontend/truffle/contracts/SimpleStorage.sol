// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// pragma solidity 0.4.24;

contract SimpleStorage {
  string ipfsHash;

  function set(string memory x) public {
    ipfsHash = x;
  }

  function get() public view returns (string memory) {
    return ipfsHash;
  } 
}