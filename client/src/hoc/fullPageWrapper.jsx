import React from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

export const FullPageWrapper = (props) => {

    const anchors = ["firstPage", "secondPage", "thirdPage"];
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
            onLeave={(origin, destination, direction) => {
                console.log("onLeave event", {origin, destination, direction});
            }}
            render={({state, fullpageApi}) => {
                console.log("render prop change", state, fullpageApi);

                return (
                    <div>
                        {props.children}
                    </div>
                );
            }}
        />
    )
};