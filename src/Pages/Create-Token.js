import React from "react";
import { ethers, providers } from "ethers";
import CreateTokenBg from "../Assets/CreateToken-bg.webp";
import ChainsDropdown from "../Components/ChainsDropdown";
import Info from "../Assets/info.png";
import TokenFunction from "../Components/TokenFunction";
import { Link } from "react-router-dom";
import { connect } from "../Components/Navbar.js";
import {options} from "../Components/TokenFunction";
import { generateToken } from "./generateToken";
import { Net } from "web3";


const CreateToken = () => { 
  const CreateTokenStyle = {
    backgroundImage: `url(${CreateTokenBg})`,
  };

const soolakh = async () => {
  if(connect === false) {
    alert('first connect your wallet!');
  }else {
    let _name = document.querySelector('.Name').value;
    let _symbol = document.querySelector('.Symbol').value;
    let _decimal = document.querySelector('.Decimal').value;
    let _totalSupply = document.querySelector('.TotalSupply').value;
    let _maxTotalSupply = document.querySelector('.MaxTotalSupply').value;
    let _owner = document.querySelector('.ownerAddress').value;

    let inputs = [_name, _symbol, _decimal, _totalSupply, _maxTotalSupply, _owner];

    let _options = ethers.utils.defaultAbiCoder.encode(['bool',"bool","bool","bool","bool"], [options[0],options[1],options[2],options[3],options[4]]);
    let BurnDetails;
    let TaxDetails;
    
    console.log(_options)
    
    if(options[0] === true) {
      let _burnFee = document.querySelector('.burnFee').value;
      let _minBurnFee = document.querySelector('.minBurnFee').value;
      let _maxBurnFee = document.querySelector('.maxBurnFee').value;
      // inputs.push(_burnFee, _minBurnFee, _maxBurnFee);

      BurnDetails = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "uint256"], [_minBurnFee, _maxBurnFee, _burnFee]);
      console.log(BurnDetails)
      
    }else {
      BurnDetails = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "uint256"], [0, 0, 0]);
    }

    if(options[4] === true) {
      let _buyFee = document.querySelector('.buyTax').value;
      let _minBuyFee = document.querySelector('.minBuyTax').value;
      let _maxBuyFee = document.querySelector('.maxBuyTax').value;

      let _sellFee = document.querySelector('.sellTax').value;
      let _minSellFee = document.querySelector('.minSellTax').value;
      let _maxSellFee = document.querySelector('.maxSellTax').value;

      let _marketingWallet = document.querySelector('.marketingwallet').value;
      // inputs.push(_buyFee, _minBuyFee, _maxBuyFee, _sellFee, _minSellFee, _maxSellFee, _marketingWallet);

      TaxDetails = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "uint256", "uint256", "uint256", "uint256", "address"], [_buyFee, _minBuyFee, _maxBuyFee, _sellFee, _minSellFee, _maxSellFee, _marketingWallet]);
       console.log(TaxDetails)
    }else {
      TaxDetails = ethers.utils.defaultAbiCoder.encode(["uint256", "uint256", "uint256", "uint256", "uint256", "uint256", "address"], [0, 0, 0, 0, 0, 0, "0x000000000000000000000000000000000000dEaD"]);
      
    }
    
    // console.log("name: ", _name, ", symbol: ", _symbol, ", decimal: ", _decimal, "owner :", _owner);
    
    inputs.forEach(e=>{

    })
  let chainID;
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  const { chainId } = await provider.getNetwork();

  console.log(chainId)
  let chain = document.querySelector('.sool');
      console.log(chain);
      
      if (chain === null){
        alert("please select a chain !")
      }else if(chain.alt === "BNB Chain TestNet") {
        let networkChainId = 97
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }else {
          console.log("some")
          generateToken(_name, _symbol, _decimal, _totalSupply, _maxTotalSupply, _owner, _options, BurnDetails, TaxDetails);
        }
        
      }else if(chain.alt === "Arbitrum") {
        let networkChainId = 42161

        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Polygon") {
        let networkChainId = 137
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Opitmism") {
        let networkChainId = 10
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Obbnb") {
        let networkChainId = 204
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Aurora") {
        let networkChainId = 1313114
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Conflux eSpace") {
        let networkChainId = 1030
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Solana") {
        let networkChainId = 900
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Fantum") {
        let networkChainId = 250
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Avalanche") {
        let networkChainId = 43114
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Manta") {
        let networkChainId = 169
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Scroll") {
        let networkChainId = 534352
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "OKTC") {
        let networkChainId = 66
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Linea") {
        let networkChainId = 59144
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Bitgert") {
        let networkChainId = 32520
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "X1 Testnet") {
        let networkChainId = 195
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Mantle") {
        let networkChainId = 5000
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }else if(chain.alt === "Tron") {
        let networkChainId = 1000
        if(chainId !== networkChainId) {
          alert(`please add ${chain.alt} network to your metaMask!`);
        }
      }
  }

}

  return (
    <section
      className="bg-cover bg-center mx-auto h-full"
      style={CreateTokenStyle}
      id="home"
    >
      <div className="flex flex-col mx-12 py-48 justify-center items-center lg:flex-row">
        <div className="w-5/6">
          <div className="flex flex-col lg:flex-row mb-4 items-center justify-between">
            <h1 className="text-2xl text-white font-font-1 font-semibold md:text-3xl lg:text-4xl">
              Enter Token Details
            </h1>
            <ChainsDropdown />
          </div>
          <div className="flex flex-col gap-3 font-font-1">
            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Token Name</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    A custom name for the token
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="Name input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. BGM Token"
                />

                <span></span>
              </div>
            </div>
            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Token Symbol</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    A custom name for the symbol (usually 3-5 characters)
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="Symbol input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. BGM"
                />
                <span></span>
              </div>
            </div>
            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Token Decimal</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    The decimal precision for the token (usually 18)
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="Decimal input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. 18"
                />
                <span></span>
              </div>
            </div>
            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Total Supply</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    The maximum number of tokens avialable
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="TotalSupply input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. 210000000"
                />
                <span></span>
              </div>
            </div>

            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Max Total Supply</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    The maximum number of tokens avialable
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="MaxTotalSupply input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. 210000000"
                />
                <span></span>
              </div>
            </div>
            <div className="field">
              <label className="label text-lg text-white">
                Token Function (Optional for Deployer)
              </label>
              <div className="mt-1">
                <TokenFunction />
              </div>
            </div>
            <div className="field">
              <label className="label flex items-center text-lg text-white">
                <h1 className="mb-1">Onwer Address</h1>
                <div className="group flex items-center">
                  <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                  <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                    Enter Owner Wallet Address
                  </span>
                </div>
              </label>
              <div className="control">
                <input
                  className="ownerAddress input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                  type="text"
                  placeholder="i.g. 0x1ABC7154748D1CE5144478CDEB574AE244B4587"
                />
                <span></span>
              </div>
            </div>

            
            <h1 className="mt-4 text-white text-lg md:texl-xl lg:text-4xl font-bold">Service Fees: 0.5 BNB</h1>
            <div className="flex items-center justify-center">
              <div className="relative inline-flex mt-5 lg:w-1/3 items-center justify-center group">
                <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Link
                
                  className="soolakh relative inline-flex items-center justify-center p-1 lg:py-2 w-full lg:text-xl text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                  role="button"
                  onClick={soolakh}
                >
                  Create Token
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateToken;
