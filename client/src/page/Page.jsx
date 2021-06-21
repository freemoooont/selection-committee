import React from 'react';
import {FullPageWrapper} from "../hoc/fullPageWrapper";
import PageOne from "../Components/slidesDown/PageOne";

function Page({stateHandler}){
    React.useEffect(()=>{
        stateHandler();
    }, [])
    return(
        <>
            <div className="App">
                <FullPageWrapper>
                    <PageOne content={'Ну как ono lol?'}/>
                    <PageOne content={'Кайф имеешь?'}/>
                    <PageOne content={'и я не имею'}/>
                </FullPageWrapper>
            </div>
        </>
    )
}

export default Page;