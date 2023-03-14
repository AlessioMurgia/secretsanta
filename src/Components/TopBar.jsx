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
        <div style={{
            height: "10%",
            minHeight:"45px",
            width: "100%",
            backgroundColor: "#3897B5",
            opacity: "0.8",
            display: "flex",
            boxShadow: "0 5px 5px rgba(0, 0, 0, 0.5)",
            position:"fixed",
            zIndex:"100",
            top:"0",
            left:"0",
            right:"0",

        }}>
            <div onClick={handleClick} style={{
                marginLeft:"5%",
                display: "flex",
                alignItems:"center",
                cursor: "pointer",
            }}>
                <img src={gift} alt="Logo" />
                <p style={{
                    marginLeft:"10px",
                    fontSize:"30px",
                    color: "white",
                }}>
                    Secret Santa
                </p>
            </div>
        </div>
    );
}

export default TopBar;