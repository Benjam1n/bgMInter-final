import React, { useState } from "react";
import HeroVideo from "../Assets/hero-bg.mp4";
import { Link } from "react-router-dom";
import Telegram from "../Assets/telegram.png"
import Twitter from "../Assets/twitter.png"

const Hero = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const handleChatbotSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle the submission logic, such as sending the data to your backend or any other action you want.
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Query:", query);
        // Reset the form fields
        setName('');
        setEmail('');
        setQuery('');
        // Close the chatbot modal
        setShowChatbot(false);
    };
    return (
        <section
            className="mx-auto relative h-screen"
            id="home"
            aria-label="Hero Section"
        >
            {/* Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover z-0"
            >
                <source src={HeroVideo} type="video/mp4" />
            </video>

            {/* Content of the hero section */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between px-4 pt-40 lg:pt-96 lg:px-20">
                <div className="flex flex-col text-white">
                    <h1 className="leading-7 text-3xl text-center lg:text-left text-white font-font-1 font-semibold md:text-4xl lg:text-6xl">
                        BG Minter
                    </h1>
                    <h3 className="text-lg md:text-base lg:text-2xl text-center lg:text-left mt-2 font-semibold font-font-1">
                        One click token generation for any Blockchain
                    </h3>
                    <div className="flex gap-6 justify-center lg:justify-start">
                        <div className="relative inline-flex w-1/5 mt-5 group">
                            <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Link to="/"
                                className="relative inline-flex items-center justify-center py-1 lg:py-2 w-full text-sm lg:text-base text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                                role="button"><img src={Telegram} alt="telegram" className="w-10" />
                            </Link>
                        </div>
                        <div className="relative inline-flex w-1/5 mt-5 group">
                            <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Link to="/"
                                className="relative inline-flex items-center justify-center py-1 lg:py-2 w-full text-sm lg:text-base text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                                role="button"><img src={Twitter} alt="twitter" className="w-10" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-8 lg:mt-0 lg:w-2/5 lg:pr-14 leading-8">
                    <p className="text-lg text-white text-center lg:text-left font-semibold font-font-1">
                        A token generation platform designed to seamlessly create tokens across various blockchains, enabling users to launch their own digital assets with ease and flexibility.
                    </p>
                    <div className="flex justify-center">
                        <div className="relative inline-flex justify-center lg:w-full w-1/2 mt-5 group">
                            <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Link to="/createtoken"
                                className="relative inline-flex items-center justify-center py-1 lg:py-3 w-full text-base lg:text-xl text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                                role="button">Create Token Now
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-2 mb-6 lg:mb-0 justify-center lg:justify-end">
                        <div className="relative inline-flex w-1/3 mt-5 group">
                            <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-blue via-puple to-blue rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <button
                                onClick={() => setShowChatbot(true)}
                                className="relative inline-flex items-center justify-center py-1 lg:py-3 w-full text-sm lg:text-base text-white transition-all duration-200 bg-blue font-font-1 rounded-full outline outline-1 outline-offset-8 outline-white focus:outline-none focus:ring-4 focus:ring-offset-8 focus:ring-blue-900 shadow-[0_0_2px_#587aff,inset_0_0_2px_#587aff,0_0_5px_#587aff,0_0_15px_#587aff,0_0_30px_#587aff]"
                            >
                                <span className="flex gap-2 chat-icon">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                                            fill="white"
                                        />
                                    </svg>Support
                                </span>
                            </button>
                            {/* Chatbot Modal */}
                            {showChatbot && (
                                <div className={`fixed inset-0 flex items-end justify-end mx-5 lg:mr-5 bg-black bg-opacity-50 z-50 transition-transform duration-1000 transform ${showChatbot ? 'translate-y-0' : 'translate-y-full'}`}>
                                    <div className="bg-white rounded-t-lg border border-gray-100 w-96">
                                        <div className="flex items-center justify-between rounded-t-lg bg-blue p-4">
                                            <h3 className="text-xl font-bold text-white">Chat Support</h3>
                                            <button
                                                onClick={() => setShowChatbot(false)}
                                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <form onSubmit={handleChatbotSubmit} className="p-4">
                                            <div className="mb-5">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="query" className="block text-sm font-medium text-gray-700">Query</label>
                                                <textarea
                                                    id="query"
                                                    rows="3"
                                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    required
                                                ></textarea>
                                            </div>
                                            <button type="submit" className="bg-blue w-full text-white py-2 px-4 rounded-full hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue-dark">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
