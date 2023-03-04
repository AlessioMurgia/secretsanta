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
            alignItems:"center",
            boxShadow: "0 5px 5px rgba(0, 0, 0, 0.5)",

        }}>
            <div style={{
                color: "white",
                marginLeft:"5%",
                display: "flex",
                alignItems:"center",
            }}>
                <img src={gift} alt="Logo" />
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