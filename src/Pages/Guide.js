import GuideBg from "../Assets/CreateToken-bg.webp";
import React  from 'react';

const Guide = () => {
    const GuideStyle = {
        backgroundImage: `url(${GuideBg})`,
    };
    return (
        <section
            className="bg-cover bg-center font-font-1 mx-auto h-full"
            style={GuideStyle}
        >
            <div className="py-36 flex flex-col mx-6 text-xl lg:mx-20 justify-center">
                <h1 className="mb-8 mt-4 text-2xl text-white font-font-1 font-semibold md:text-3xl lg:text-4xl">How to create tokens?</h1>
                <div className="my-2">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">1. Navigate to the “Create Token” page</h1>
                </div>
                <div className="my-2">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">2. Enter the Token Parameters</h1>
                    <ul className="text-white list-disc mx-6 mt-4 text-lg">
                        <li>
                            Token Name
                        </li>
                        <li>
                            Token Symbol
                        </li>
                        <li>
                            Token Decimal
                        </li>
                        <li>
                            Total Supply
                        </li>
                        <li>Token Function</li>
                        <li>Owner Wallet</li>
                    </ul>
                </div>
                <div className="my-2 text-white">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">3. Token Function</h1>
                    <p className="mt-4">Currently, BGMINTER supports on-chain token creations with the following Token Function: "BURN", "MINT", "PAUSE", "BLACKLIST", "TRADING FEES"</p>
                    <p>All five token function are optional to the token creation process.</p>
                    <ul className="text-white list-disc mx-6 mt-4 text-lg">
                        <li>If the Burn feature is enabled, a percentage of tokens will be sent to the burn address for each on-chain transfer</li>
                        <li>If the Mint feature is enabled, then owner can able to mint new tokens till the max supply </li>
                        <li>If the Pause feature is enabled, then owner can pause trading</li>
                        <li>If the Blacklist feature is enabled, then deployer can blacklist any token holder address</li>
                        <li>If the Trading fees feature is enabled, a percentage of tokens will be sent to the creator's address for each on-chain transfer</li>
                    </ul>
                </div>
                <div className="my-2 text-white">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">4. Confirm Token Creation in Your Wallet</h1>
                    <p className="mt-4">Review your token parameters, and click “Create Token” → confirm in your wallet” → complete the token creation.</p>
                </div>
                <div className="my-2 text-white">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">5. Manage Your Token</h1>
                    <p className="mt-4">To view the info of your token, navigate to “My Token”.</p>
                </div>
                <div className="my-2 text-white">
                    <h1 className="text-xl text-white font-font-1 font-semibold md:text-2xl lg:text-3xl">6. Token Creation Service Fee</h1>
                    <p className="mt-4">Currently, BGMINTER charges a service fee for each token created on the platform.</p>
                </div>
            </div>
        </section>
    )
}

export default Guide;