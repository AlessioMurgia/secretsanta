import React from "react";
import gift from "../images/gift.svg";

function TopBar() {
    return (
        <div style={{
            height: "10%",
            minHeight:"45px",
            backgroundColor: "#3897B5",
            color: "white",
            opacity: "0.8",
            display: "flex",
            alignItems:"center"
        }}>
            <div style={{
                color: "white",
                marginLeft:"5%",
                display: "flex",
                alignItems:"center",
            }}>
                <img src={gift} alt="React Logo" />
                <p style={{
                    marginLeft:"10px",
                    fontSize:"30px"
                }}>
                    Secret Santa
                </p>
            </div>
        </div>
    );
}

export default TopBar;