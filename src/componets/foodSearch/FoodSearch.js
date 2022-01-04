import React from 'react'

const FoodSearch = ({setCurrentsearch}) => {
    const handleChange = (e) => {
        // console.log(e.target.value);
        setCurrentsearch(e.target.value);
    };

    return (
        <div className="search">
            <input type="text" onChange={handleChange} placeholder="食在好想吃？" className="whereGo" />
            <a href="##">
                <i className="fas fa-search fa-2x toggleTextNameC"></i>
            </a>
       </div>
    )
}

export default FoodSearch
