import logo from "../Assets/logo.svg"
import { Link } from "react-router-dom";
import React  from 'react';


export let connect = false;

async function connectWallet() {

    if(connect === true) {
        alert("already connected!")
    }else {
        if(window.ethereum) {
            
                try{
                    let accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    })
                    let cncwallet = document.querySelector('.cncwallet');
                    console.log(cncwallet)
                    cncwallet.innerHTML = accounts[0].substring(0,6) +"......"+ accounts[0].substring(accounts[0].length - 6, accounts[0].length);
                    connect = true;
                }catch(error) {
                    alert("error connecting...")
                }

        }else {
            alert('first install metaMask!')
        }
    }   
    
}

const Navbar = () => {
    return (
        <nav className="flex w-full fixed justify-center z-50 pt-8 bg-transparent">
            <div className=" flex w-11/12 m-4 items-center justify-between z-10 border-2 border-[#464646] rounded-2xl bg-black bg-opacity-15 backdrop-blur-md h-[70px]">
                <div className="navbar-start pl-3 flex items-center">
                    <img src={logo} alt="full logo" className="hidden w-12 md:flex" />
                    <h1 className="text-white font-semibold font-font-2 text-2xl">
                        BGMINTER
                    </h1>
                    <div className="flex lg:pl-6 flex-row font-font-1 font-semibold text-white text-xs md:text-sm lg:text-base gap-6">
                        <Link to='/' className="text-xl">
                            Home
                        </Link>
                        <Link to='/createtoken' className="text-xl">
                            Create Token
                        </Link>
                        <Link to='/mytoken' className="text-xl">
                            My Tokens
                        </Link>
                        <Link to='/audit' className="text-xl">
                            Audit Partners
                        </Link>
                        <Link to='/guide' className="text-xl">
                            Guide
                        </Link>
                    </div>
                </div>
                
                <div className="relative inline-flex items-center pr-4 group">
                        <div
                            className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                        </div>
                        <button
                            className="cncwallet relative inline-flex items-center justify-center p-1 w-full text-sm text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                            onClick={connectWallet}
                            >Connect Wallet
                        </button>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;