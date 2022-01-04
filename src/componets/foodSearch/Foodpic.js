import React from 'react';
import Nopig from '../../pic/nopic.jpg';
import { Link } from 'react-router-dom'

const Foodpic = ({ data, setId }) => {
    // console.log(data);
    const {RestaurantName,Address,RestaurantID} = data;
    if(data?.Picture?.PictureUrl1 === undefined){
       data.Picture.PictureUrl1 = Nopig;
    };
    const handleClick = (e)=>{
        console.log(e.target.id);
        setId(e.target.id);
    }
    return (
        <div className='picture'>
            <h3>{RestaurantName}</h3>
            <div className='imageContainer'>
                <img src={data.Picture.PictureUrl1} alt={RestaurantName} />
            </div>
            <p>{Address}</p>
            <p>詳細資訊
                <Link to="/foodData" id={RestaurantID} target="_self" onClick={handleClick}>Click Here</Link>
            </p>
        </div>
    )
}

export default Foodpic