import React from "react";
import { useNavigate } from 'react-router-dom';

import gift from "../images/gift.svg";

function TopBar() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate('/');
    };

    return (
        <div className="h-1/10 min-h-45 w-full bg-topBarColor opacity-80 flex shadow-topbarShadow fixed z-50 top-0 left-0 right-0">
            <div className="ml-1/20 flex items-center cursor-pointer"
                 onClick={handleClick}>
                <img src={gift} alt="Logo" />
                <p className="ml-2.5 text-3xl text-white">
                    Secret Santa
                </p>
            </div>
        </div>
    );
}

export default TopBar;