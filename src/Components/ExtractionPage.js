import React from "react";

import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InfoForm from "./InfoForm";

function ExtractionPage() {

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
                    top: '0px',
                    bottom: '0px',
                    left: 0,
                    right: 0,
                    overflow: 'auto',
                    padding: '50px',
                }}>
                    <InfoForm/>
                </div>
            <BottomBar/>
        </div>
    )
}

export default ExtractionPage;