import React from "react";
import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InputBar from "./InputBar";

function Page() {
    return (
            <div style={{
                // Set the background image
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // Set the height and width of the page
                height: "100vh",
                width: "100vw"
            }}>
                <TopBar/>
                <InputBar/>
                <BottomBar/>
            </div>

    )
}

export default Page;