import React from 'react';
import HitoFood from '../componets/main/HitoFood';
import ForcusUs from "../componets/footer/ForcusUs";
import Swiper from '../componets/main/Swiper';

const Main = () => {
    return (
        <div className='travalmainpage'>
            <Swiper/>
            <HitoFood/>
            <ForcusUs/>
        </div>
    )
};

export default Main
