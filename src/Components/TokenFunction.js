import React, { useState } from 'react';
import Info from "../Assets/info.png"
import "./style.css"


export let options = [false, false, false, false, false];

const TokenFunction = () => {

    const [tokenFunctions, setTokenFunctions] = useState({
        Burn: { enabled: false, description: "A percentage of tokens will be sent to the burn address for each on-chain transfer automatically" },
        Mint: { enabled: false, description: "Owner can able to mint new tokens till the max supply" },
        "Can Pause": { enabled: false, description: "Owner can pause trading" },
        Blacklist: { enabled: false, description: "Deployer can blacklist any token holder address" },
        "Trading Tax": { enabled: false, description: "It is a percentage of tokens that will be sent to the address provided for each buy and sell." }
    });
    
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);
    const [showBurnInputs, setShowBurnInputs] = useState(false);
    

    const toggleTokenFunction = (func) => {
        setTokenFunctions(prevState => ({
            ...prevState,
            [func]: {
                ...prevState[func],
                enabled: !prevState[func].enabled
            }

        }
        ));
        if (func === "Trading Tax") {
            setShowAdditionalInputs(prevState => !prevState);
        }
        if (func === "Burn") {
            setShowBurnInputs(prevState => !prevState);
        }
        

        options.forEach(e=>{
            if(func === "Burn"){
                if(options[0] === true){
                    options[0] = false;
                }else {
                    options[0] = true;
                }
            }else if (func === "Mint"){
                if(options[1] === true){
                    options[1] = false;
                }else {
                    options[1] = true;
                }
            }else if (func === "Can Pause"){
                if(options[2] === true){
                    options[2] = false;
                }else {
                    options[2] = true;
                }
            }else if (func === "Blacklist"){
                if(options[3] === true){
                    options[3] = false;
                }else {
                    options[3] = true;
                }
            }else if (func === "Trading Tax"){
                if(options[4] === true){
                    options[4] = false;
                }else {
                    options[4] = true;
                }
            }
        })
        

        
    };

    return (
        <div>
            <div className="field">
                <div className="control">
                    <div className='flex lg:flex-row flex-col justify-between gap-3'>
                        {Object.keys(tokenFunctions).map(func => (
                            <div key={func} className='flex flex-col group'>
                                <button
                                    className={`px-4 py-2 flex flex-row items-center lg:w-48 justify-center rounded-md ${tokenFunctions[func].enabled ? 'bg-blue text-white' : 'bg-gray-500 text-gray-100'}`}
                                    onClick={() => toggleTokenFunction(func)}
                                >
                                    {func}
                                    <img src={Info} alt="info" className="ml-2 w-4 h-4" />
                                </button>
                                {tokenFunctions[func] && (
                                    <label className="description mt-2 p-1 leading-none border border-white bg-white rounded max-w-56">
                                        <span className='text-xs font-bold mb-1 text-blue'>{tokenFunctions[func].description}</span>
                                    </label>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {showBurnInputs && (
                <div className='p-2 mt-3 border border-white'>
                    <div className='flex flex-col justify-between lg:flex-row'>
                        <div className="field flex flex-col lg:flex-row lg:items-center gap-3 mt-2">
                            <label className="label group flex text-lg text-white">
                                <h1 className="mb-1">Min Burn Fee</h1>
                                <div className="flex items-center">
                                    <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                    <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                        <span className="text-xs font-bold mb-1 text-blue">
                                            Default Minimum Burn %, if there is no minimum, Enter 0%
                                        </span>
                                    </label>
                                </div>
                            </label>
                            <div className="control mb-1">
                                <input className="minBurnFee input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                <span></span>
                            </div>
                        </div>
                        <div className="field flex flex-col lg:flex-row lg:items-center gap-3 mt-2">
                            <label className="label group flex text-lg text-white">
                                <h1 className="mb-1">Max Burn Fee</h1>
                                <div className="flex items-center">
                                    <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                    <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                        <span className="text-xs font-bold mb-1 text-blue">
                                            Default Maximum Burn %
                                        </span>
                                    </label>
                                </div>
                            </label>
                            <div className="control mb-1">
                                <input className="maxBurnFee input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                <span></span>
                            </div>
                        </div>
                        <div className="field flex flex-col lg:flex-row lg:items-center gap-3 mt-2">
                            <label className="label group flex text-lg text-white">
                                <h1 className="mb-1">Current Burn Fee</h1>
                                <div className="flex items-center">
                                    <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                    <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                        <span className="text-xs font-bold mb-1 text-blue">
                                            Token will be created with this %, but can be modified within preset limit of minimum and maximum
                                        </span>
                                    </label>
                                </div>
                            </label>
                            <div className="control mb-1">
                                <input className="burnFee input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            )}
            {showAdditionalInputs && (
                <div className='p-2 mt-3 border border-white'>
                    <div>
                        <h1 className="text-lg mt-3 text-white">Buy Tax</h1>
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className="field flex gap-3 flex-col lg:flex-row lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Current Buy Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The current tax percentage that will be sent to the address provided when anyone buys the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="buyTax input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                            <div className="field flex gap-3 flex-col lg:flex-row lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Min Buy Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The min tax percentage that will be sent to the address provided when anyone buys the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="minBuyTax minBurnFee input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                            <div className="field flex gap-3 flex-col lg:flex-row lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Max Buy Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The max tax percentage that will be sent to the address provided when anyone buys the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="maxBuyTax input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg mt-2 text-white">Sell Tax</h1>
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className="field flex flex-col lg:flex-row gap-3 lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Current Sell Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The current tax percentage that will be sent to the address provided when anyone sells the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="sellTax input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                            <div className="field flex flex-col lg:flex-row gap-3 lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Min Sell Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The min tax percentage that will be sent to the address provided when anyone sells the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="minSellTax input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                            <div className="field flex flex-col lg:flex-row gap-3 lg:items-center">
                                <label className="label group flex text-lg text-white">
                                    <h1 className="mb-1">Max Sell Tax</h1>
                                    <div className="flex items-center">
                                        <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                        <label className="description2 mt-2 p-1 leading-none border border-white bg-white rounded max-w-xs">
                                            <span className="text-xs font-bold mb-1 text-blue">
                                                The max tax percentage that will be sent to the address provided when anyone sells the token
                                            </span>
                                        </label>
                                    </div>
                                </label>
                                <div className="control mb-1">
                                    <input className="maxSellTax input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white" type="text" placeholder="i.g. 10%" />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label flex items-center text-lg text-white">
                            <h1 className="mb-1">Tax Collection Address</h1>
                            <div className="group flex items-center">
                                <img src={Info} alt="info" className="mb-1 ml-2 w-4 h-4" />
                                <span className="hidden text-xs font-bold mb-1 text-blue group-hover:inline border border-white bg-white p-1 ml-2 rounded">
                                    Tokens collected from the buy and sell tax will be send to this address
                                </span>
                            </div>
                        </label>
                        <div className="control">
                            <input
                                className="marketingwallet input w-full border border-gray-500 rounded bg-slate-700 p-2 text-white"
                                type="text"
                                placeholder="i.g. 0x1ABC7154748D1CE5144478CDEB574AE244B4587"
                            />
                            <span></span>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    );
};



export default TokenFunction;
