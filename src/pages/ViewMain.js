import React,{ useState,useEffect,useCallback } from 'react';
import FoodSearch from '../componets/foodSearch/FoodSearch';
import FoodPic from '../componets/foodSearch/Foodpic';
import axios from 'axios';
import jsSHA from 'jssha';

const ViewMain = () => {
    const [data,setData] = useState(null);
    const [input,setInput] = useState('30');
    const [currentsearch,setCurrentsearch] = useState("");
    const initalURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=30&%24format=JSON`;
    const searchURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=contains(%20Description%2C'${currentsearch}')&%24top=30&%24format=JSON`;

//初始進入

    const search = useCallback(async (url) => {
      setInput("30");
      try {
        const response = await axios
        ({
           method: "get",
           url: url,
           headers: getAuthorizationHeader(),
         })
      //   console.log(response.data);
        let parseData = await response.data;
        console.log(parseData);
        setData(response.data);
      }
      catch (error) {
        console.error(error);
      };
    },[]) 

       //加載進入
      const handleClick = async ()=> {
         let newURL;
         if(currentsearch === ""){
           newURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24top=30&%24skip=${input}&%format=JSON`
         }else{
           newURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24filter=contains(%20Description%2C'${currentsearch}')&%24top=30&%24skip=${input}&%24format=JSON`
         }
         try {
           const response = await axios
           ({
              method: "get",
              url: newURL,
              headers: getAuthorizationHeader(),
            })
         //   console.log(response.data);
         let parseData = await response.data;
         setData(data.concat(parseData))
         let inputInt = parseInt(input,10)
         setInput(inputInt + 30);
           }catch (error) {
           console.error(error);
         }
       }    
    
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
      };


      //  useEffect
    useEffect(() =>{
        search(initalURL);
    },[search,initalURL]);
    
    useEffect(() => {
      if(currentsearch === ""){
          search(initalURL);
      }else{
          search(searchURL);
      }      
  },[currentsearch,initalURL,search,searchURL]);
 

    return (
        <div className='travalmainpage'>
            <FoodSearch search={()=>{
                setCurrentsearch(currentsearch)}} 
                setCurrentsearch={setCurrentsearch}/>
            <div className="pictures">
               {data && data.map(d => {
                   return <FoodPic key={d.RestaurantID} data ={d} />
               }
               )}
            </div>
            <div className='morePicture'>
                <button onClick={handleClick}>Load More</button>
            </div>
        </div>
    )
};

export default ViewMain
