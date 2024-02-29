import React from "react";
import { ethers , JsonRpcProvider } from "ethers";



let contract = "0xf6161F8ECb67EC44E299f2E593b9475537719DA7";
let contractAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_decimal","type":"uint256"},{"internalType":"uint256","name":"_totalSupply","type":"uint256"},{"internalType":"uint256","name":"_maxSupply","type":"uint256"},{"internalType":"address","name":"factory","type":"address"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"bytes","name":"options","type":"bytes"},{"internalType":"bytes","name":"burnDetails","type":"bytes"},{"internalType":"bytes","name":"feeDetails","type":"bytes"}],"name":"generateToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"generatedTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tracker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
let provider = new ethers.providers.Web3Provider(window.ethereum);
let tx;
export const generateToken = async (_name, _symbol, _decimal, _totalSupply, _maxTotalSupply, _owner,  _optionsBytes, _burnDetailsBytes, _TaxDetailsBytes) => {
       
       
       let tokenContract = new ethers.Contract(contract, contractAbi, provider);
       let signer = provider.getSigner()

       try {
              let greeterContractWithSigner = tokenContract.connect(signer)
              tx = greeterContractWithSigner.generateToken(_name, _symbol, _decimal, _totalSupply, _maxTotalSupply, "0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc", "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3", _owner, _optionsBytes, _burnDetailsBytes, _TaxDetailsBytes);
       }catch(e) {
              console.log(e);
       }

       console.log(tx);

}