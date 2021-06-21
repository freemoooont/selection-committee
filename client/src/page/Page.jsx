import React from 'react';
import {FullPageWrapper} from "../hoc/fullPageWrapper";
import HeaderPage from "../Components/HeaderPage"
import {useSelector} from "react-redux";

function Page({stateHandler}){
    React.useEffect(()=>{
        stateHandler();
    }, [])

    const items = useSelector(({program})=> program.items);
    console.log(items);
    return(
        <>
            <div className="App">
                <FullPageWrapper>
                    <HeaderPage
                        instituteName={items.instituteShortName}
                        programName={items.programFullName}
                    />
                </FullPageWrapper>
            </div>
        </>
    )
}

export default Page;