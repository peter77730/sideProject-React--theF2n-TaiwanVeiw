import React from 'react';
import Nopig from '../../pic/nopic.jpg';
import { Link } from 'react-router-dom'

const TravalPic = ({ data,setId }) => {
    const {ScenicSpotName,Address,ScenicSpotID} = data;
    if(data?.Picture?.PictureUrl1 === undefined){
       data.Picture.PictureUrl1 = Nopig;
    };

    const handleClick = (e)=>{
        console.log(e.target.id);
        setId(e.target.id);
    }
    return (
        <div className='picture'>
            <h3>{ScenicSpotName}</h3>
            <div className='imageContainer'>
                <img src={data.Picture.PictureUrl1} alt={ScenicSpotName} />
            </div>
            <p>{Address}</p>
            <p>詳細資訊
                <Link id={ScenicSpotID} to="/travalData" target="_self" onClick={handleClick}>Click Here</Link>
            </p>
        </div>
    )
};

export default TravalPic