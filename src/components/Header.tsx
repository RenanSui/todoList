import React from 'react';

const Header = () => {
    return (
        <>
            <span className="absolute top-0 left-0 -z-50 h-56 w-full bg-bloom bg-[length:130%] bg-center bg-no-repeat transition-all duration-500 sm:h-[456px]" />
            <header className="text-white transition-all duration-500 sm:m-auto sm:mt-44 sm:max-w-[640px] ">
                <h1 className="ml-6 mt-6 font-lato text-4xl font-semibold tracking-widest sm:ml-4 sm:text-6xl">
                    TODO
                </h1>
            </header>
        </>
    );
};

export default Header;
