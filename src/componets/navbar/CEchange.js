import React from 'react';
import Global from "../../pic/global.svg";

const CEchange = () => {
    return (
        <div className="lang">
            <a href="##">
                <img src={Global} alt="lang" className="langChange"/>
            </a>
            <p id="langChange" className="toggleColor toggleTextNameC">中文</p>
    </div>
    )
};

export default CEchange
