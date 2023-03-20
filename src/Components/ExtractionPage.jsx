import React from "react";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";
import InfoForm from "./InfoForm";

function ExtractionPage() {

    return (
            <div className="relative h-screen w-screen bg-allbgImage bg-center bg-no-repeat bg-fixed bg-cover shadow-bgShadow">
                <TopBar/>
                    <div className="flex justify-around absolute top-12 bottom-12 left-0 overflow-auto right-0 p-12 bg-bgScroll bg-no-repeat bg-center bg-850px">
                        <InfoForm/>
                    </div>
                    <BottomBar/>
            </div>
    )
}

export default ExtractionPage;