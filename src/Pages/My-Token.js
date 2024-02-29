import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import MyTokenBg from "../Assets/CreateToken-bg.webp";

const MyToken = ({ token }) => {
    const { address, tokenSymbol, totalSupply, tokenName, createdBy, holders, balance, tokenFunction } = token;


    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
    };

    const openInNewTab = () => {
        window.open(`https://example.com/address/${address}`, '_blank');
    };

    return (
        <div className="isolate aspect-video w-96 rounded-xl bg-purple/30 shadow-lg ring-1 ring-black/5">
            <div className="isolate w-96 p-4 rounded-t-xl bg-purple/40 shadow-lg ring-1 ring-black/5">
                <div className='flex gap-3'>
                    <h1 className='text-white font-bold'>{address.substring(0, 6)}...{address.substring(address.length - 4)}</h1>

                    <button className="font-bold" onClick={copyToClipboard}><FontAwesomeIcon icon={faCopy} className='hover:text-gray-400' /></button>
                    <button className="font-bold" onClick={openInNewTab}><FontAwesomeIcon icon={faExternalLinkAlt} className='hover:text-gray-400' /></button>

                </div>
                <div className='flex flex-col justify-between lg:flex-row'>
                    <div className='flex my-2 flex-col'>
                        <h1 className='text-2xl font-bold'>
                            {tokenSymbol}
                        </h1>
                        <h1 className='text-xl'>
                            Token Symbol
                        </h1>
                    </div>
                    <div className='flex my-2 flex-col'>
                        <h1 className='text-2xl font-bold'>
                            {totalSupply}
                        </h1>
                        <h1 className='text-xl'>
                            Total Supply
                        </h1>
                    </div>
                </div>
            </div>
            <div className='p-4 flex flex-col'>
                <div className='my-1'>
                    <h1 className='text-xl font-bold'>Token Name</h1>
                    <h1 className='border border-gray-500 rounded bg-slate-700 p-2 text-white font-semibold'>{tokenName}</h1>
                </div>
                <div className='my-1'>
                    <h1 className='text-xl font-bold'>Created by</h1>
                    <div className='flex justify-between border border-gray-500 rounded bg-slate-700 p-2 text-white font-semibold'>
                        <h1>{createdBy.substring(0, 6)}...{createdBy.substring(createdBy.length - 4)}</h1>
                        <button className="font-bold" onClick={copyToClipboard}><FontAwesomeIcon icon={faCopy} className='hover:text-gray-400' /></button>
                    </div>
                </div>
                <div className='my-1'>
                    <h1 className='text-xl font-bold'>Holders</h1>
                    <h1 className='border border-gray-500 rounded bg-slate-700 p-2 text-white font-semibold'>{holders}</h1>
                </div>
                <div className='my-1'>
                    <h1 className='text-xl font-bold'>Balance</h1>
                    <h1 className='border border-gray-500 rounded bg-slate-700 p-2 text-white font-semibold'>{balance}</h1>
                </div>
                <div className='my-1'>
                    <h1 className='text-xl font-bold'>Token Function</h1>
                    <h1 className='border border-gray-500 rounded bg-slate-700 p-2 text-white font-semibold'>{tokenFunction}</h1>
                </div>
            </div>
        </div>
    );
};

const MyTokenList = () => {
    const [tokens] = useState([
        {
            address: '0x00000000000000000000000000000000',
            tokenSymbol: "BGT",
            totalSupply: "100K",
            tokenName: 'BG Token',
            createdBy: '0x0000000000000000000000000000',
            holders: 'BG Token Holder',
            balance: '--',
            tokenFunction: 'No'
        },
        {
            address: '0x00000000000000000000000000000000',
            tokenSymbol: "BGT",
            totalSupply: "100K",
            tokenName: 'BG Token',
            createdBy: '0x0000000000000000000000000000',
            holders: 'BG Token Holder',
            balance: '--',
            tokenFunction: 'No'
        },
        {
            address: '0x00000000000000000000000000000000',
            tokenSymbol: "BGT",
            totalSupply: "100K",
            tokenName: 'BG Token',
            createdBy: '0x0000000000000000000000000000',
            holders: 'BG Token Holder',
            balance: '--',
            tokenFunction: 'No'
        },
        {
            address: '0x00000000000000000000000000000000',
            tokenSymbol: "BGT",
            totalSupply: "100K",
            tokenName: 'BG Token',
            createdBy: '0x0000000000000000000000000000',
            holders: 'BG Token Holder',
            balance: '--',
            tokenFunction: 'No'
        },
    ]);
    const MyTokenStyle = {
        backgroundImage: `url(${MyTokenBg})`,
    };
    return (

        <section
            className="bg-cover bg-center text-white font-font-1 mx-auto h-full"
            style={MyTokenStyle}
        >
            <div className="flex flex-col py-36 items-center justify-center h-full">
                <h1 className="text-4xl font-bold mb-12">My Token List</h1>
                <div className='flex flex-wrap px-20 gap-10 justify-between'>
                    {tokens.map((token, index) => (
                        <MyToken key={index} token={token} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyTokenList;
