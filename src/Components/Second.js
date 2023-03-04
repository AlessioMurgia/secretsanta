import React from "react";
import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

function Second() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            boxShadow: "inset 0 -120px 100px 90px rgba(0,0,0,0.5)",
        }}>
            <TopBar/>
            <BottomBar/>
        </div>
    )
}

export default Second;