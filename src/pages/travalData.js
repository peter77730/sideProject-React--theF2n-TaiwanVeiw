import React,{ useState,useEffect,useCallback } from 'react'
import axios from 'axios';
import jsSHA from 'jssha';

const TravalData = (props) => {
    const [data, setData] = useState(null);
    console.log(data);

    const search = useCallback( async () =>{
      try {
        const response = await axios
        ({
           method: "get",
           url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24filter=contains(%20ScenicSpotID%2C'1111')&%24top=30&%24format=JSON`,
           headers: getAuthorizationHeader(),
         })
        let parseData = await response.data;
        console.log(parseData);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    },[]);

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
    },[search,props])

    return (
        <div>
            
        </div>
    )
};

export default TravalData
