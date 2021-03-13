import React from 'react';
import logoimg from '../assets/imgs/logo-img.svg';

const Header = () => {
    return (
        <header className="flex mt-2 px-3">
            <div className="logo">
                <img src={logoimg} alt="logo" className="w-20 md:w-28 h-auto animate-bounce"/>
            </div>
            <div className="flex-grow ml-3 mr-8 ">
                <h1 className="text-xl text-green-300 font-medium pb-2 mt-6 border-b border-green-300 cursor-pointer tracking-extratight">Foodies Delight</h1>
            </div>
        </header>
    )
}

export default Header;