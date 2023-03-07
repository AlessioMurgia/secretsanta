import React from "react";
import {useLocation} from 'react-router-dom';

import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

function Second() {
    const location = useLocation();


    const provaprova= (bello)=>{

        console.log("cane");
        if (bello<15) {
            return "BENE"
        }
        else {
            return "TOO MUCH"
        }

    }

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

            {provaprova(location.state.id)}

            <BottomBar/>
        </div>
    )
}

export default Second;