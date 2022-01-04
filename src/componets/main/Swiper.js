import React, {useState,useEffect } from "react";
import Nopig from '../../pic/nopic.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperData from "./SwiperData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import axios from 'axios';
import jsSHA from 'jssha';
// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';

const Swipers = () => {
  // install Swiper modules
SwiperCore.use([Pagination]);


  const [data, setData] = useState(null);
  console.log(data);

  const search = async () =>{
    try {
      const response = await axios
      ({
         method: "get",
         url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24top=10&%24format=JSON
         `,
         headers: getAuthorizationHeader(),
       })
      let parseData = await response.data;
      console.log(parseData);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

      //驗證
  function getAuthorizationHeader() {
      const AppID = "5f26e8783f97436e95dd2706ae3e476c"
      const AppKey = "KckLmAGtZVRJyvvMA7aQoFg4XP0"
      const GMTString = new Date().toGMTString()
      const ShaObj = new jsSHA('SHA-1', 'TEXT')
    
      ShaObj.setHMACKey(AppKey, 'TEXT')
      ShaObj.update('x-date: ' + GMTString)
    
      const HMAC = ShaObj.getHMAC('B64')
    
      let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
    
      return { Authorization: Authorization, 'X-Date': GMTString }
    }

            //  useEffect
  useEffect(() =>{
      search();
  },[])

  return (
    <>
    <Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
    {data && data.map(d => {
      let picture = d.Picture.PictureUrl1
      if(picture === undefined){
        picture = Nopig;
      }
                   return <SwiperSlide key={d.ActivityID} className="swiper-slide position-r">
                   <img src= {picture} />
                   <div className="position-a">
                     <h1 className="picName">{d.ActivityName}</h1>
                     <button className="picLink" type="button" href='##'>{d.Location}</button>
                   </div>
               </SwiperSlide>})}
    </Swiper>
    </>
  )
};

export default Swipers


            
               
            