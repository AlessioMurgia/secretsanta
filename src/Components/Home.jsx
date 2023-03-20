import React from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InputBar from "./InputBar";

function Home() {
    return (
        <div className="relative h-screen w-screen bg-allbgImage bg-cover bg-no-repeat bg-fixed bg-center shadow-bgShadow">
            <TopBar/>
            <div className="flex justify-around absolute top-2.5 bottom-1/10 left-0 right-0 overflow-auto p-1/10">
                <InputBar/>
            </div>
            <BottomBar/>
        </div>
    )
}

export default Home;