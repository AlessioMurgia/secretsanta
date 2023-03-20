import React from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

function EndPage() {
    return (
        <div className="relative h-screen w-screen bg-allbgImage bg-no-repeat bg-center bg-fixed bg-cover shadow-bgShadow flex flex-col justify-center items-center">
            <TopBar/>
            <div className="absolute h-1/5 p-200px bg-bgCard bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center">
                <div className="text-center mt-1/6 font-serif font-bold text-black text-3xl">
                    The emails has been sent!<br/> Now check your emails <br/> & <br/>MERRY CHRISTMAS
                </div>
            </div>
            <BottomBar/>
        </div>
    )
}

export default EndPage;