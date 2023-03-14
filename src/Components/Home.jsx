import React from "react";

import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InputBar from "./InputBar";

function Home() {
    return (
        <div style={{
                position: 'relative',
                height: '100vh',
                width: "100vw",
                background: `url(${backgroundImage}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                boxShadow: "inset 0 -120px 100px 90px rgba(0,0,0,0.5)",
             }}>
            <TopBar/>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                position: 'absolute',
                top: '10px',
                bottom: "10%",
                left: 0,
                right: 0,
                overflow: 'auto',
                padding: '10%',
            }}>
                <InputBar/>
            </div>
            <BottomBar/>
        </div>
    )
}

export default Home;