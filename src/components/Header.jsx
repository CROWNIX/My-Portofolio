import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
            <Navbar />
        </header>
    );
};

export default Header;
