import React from 'react';

function HeaderPage({programName, instituteName}){
    return(
        <div className="section">
            <h1>{programName}</h1>
            <h2>{instituteName}</h2>
        </div>
    )
}

export default HeaderPage;