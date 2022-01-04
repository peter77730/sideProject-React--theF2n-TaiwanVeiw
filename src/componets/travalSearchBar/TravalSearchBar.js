import React from 'react'

const TravalSearchBar = ({setCurrentsearch}) => {
    const handleChange = (e) => {
        // console.log(e.target.value);
        setCurrentsearch(e.target.value);
    }

    return (
        <div className="search">
            <input type="text" onChange={handleChange} placeholder="玩什麼好呢？" className="whereGo" />
            <a href="##">
                <i className="fas fa-search fa-2x toggleTextNameC"></i>
            </a>
       </div>
    )
};

export default TravalSearchBar
