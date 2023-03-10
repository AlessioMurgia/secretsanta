import React from "react";
import {useLocation} from 'react-router-dom';

import backgroundImage from "../images/background.png";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InputEmail from "./InputEmail";

function Second() {
    const location = useLocation();

    const components = Array(parseInt(location.state.id)).fill(null).map((_, i) => <InputEmail key={i} />);



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
                <div>
                    {components}
                    <button form="bigForm" type="submit">Submit</button>
                </div>

            <BottomBar/>
        </div>
    )
}

export default Second;