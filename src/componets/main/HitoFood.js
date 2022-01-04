import React,{useState,useEffect,useCallback} from 'react'
import axios from 'axios';
import jsSHA from 'jssha';
import Nopig from '../../pic/nopic.jpg';
const HitoFood = () => {
    const [data,setData] = useState(null)
    const [city, setCity] = useState('Taipei');
    const [input,setInput] = useState(0);
    const [actInput,setActInput] = useState(0);
    const [act,setAct] = useState("");
    const URL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?%24top=6&%24skip=${input}&%24format=JSON`;
    const largeURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?%24filter=Class1%20eq%20'${act}'%20or%20Class2%20eq%20'${act}'%20or%20Class3%20eq%20'${act}'&%24top=30&%24skip=${actInput}&%24format=JSON`;
                     
    

    //初始進入

    const search = async (url) => {
        try {
          const response = await axios
          ({
             method: "get",
             url: url,
             headers: getAuthorizationHeader(),
           })
        //   console.log(response.data);
          let parseData = await response.data;
          if(url === largeURL){
            setActInput(actInput + 30);
          }
          console.log(parseData);
          setData(response.data);
        }
        catch (error) {
          console.error(error);
        };
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
            console.log('第一');
            search(URL);
        },[]);

    useEffect(() =>{
        console.log('第二');
        if(act === ""){
            search(URL);
        }else{
            search(largeURL);
        }
    },[city,act,input]);

  

    const handleChange = (e) =>{
        // console.log(e.target.value);
        setCity(e.target.value);
        setInput(0)
        setActInput(0)
        // search();
    }

    const handleAct = (e) =>{
        console.log(e.target.value);
        setAct(e.target.value);
        setActInput(0)
        setInput(0)
    }

    const handleMore = (e) =>{
        // console.log(e);
        const inputIn = parseInt(input,10)
        setInput(inputIn + 6);
        const actInputIn = parseInt(actInput,10)
        setActInput(actInputIn + 30)
    }


    return (
    <div className="container">
        <div className='travalTitle'>
            <div className="travalSelect">
                <div className="travalSelectLeft">
                    <h1>熱門景點</h1>
                </div>
                <div className="travalSelectRightt">
                    <select onChange={handleChange} name="地區" id="areaSelect">
                        <option value="">地區選擇</option>
                        <option value="Taipei">台北市</option>
                        <option value="NewTaipei">新北市</option>
                        <option value="Taoyuan">桃園市</option>
                        <option value="Taichung">台中市</option>
                        <option value="Tainan">台南市</option>
                        <option value="Kaohsiung">高雄市</option>
                        <option value="Keelung">基隆市</option>
                        <option value="Hsinchu">新竹市</option>
                        <option value="HsinchuCounty">新竹縣</option>
                        <option value="MiaoliCounty">苗栗縣</option>
                        <option value="ChanghuaCounty">彰化縣</option>
                        <option value="NantouCounty">南投縣</option>
                        <option value="YunlinCounty">雲林縣</option>
                        <option value="ChiayiCounty">嘉義縣</option>
                        <option value="Chiayi">嘉義市</option>
                        <option value="PingtungCounty">屏東縣</option>
                        <option value="YilanCounty">宜蘭縣</option>
                        <option value="HualienCounty">花蓮縣</option>
                        <option value="TaitungCounty">台東縣</option>
                        <option value="KinmenCounty">金門縣</option>
                        <option value="PenghuCounty">澎湖縣</option>
                        <option value="LienchiangCounty">連江縣</option>
                    </select>
                    <select name="活動" onChange={handleAct}>
                        <option value="">全部</option>
                        <option value="自然風景類">自然風景</option>
                        <option value="生態類">生態</option>
                        <option value="遊憩類">遊憩</option>
                        <option value="泡湯類">泡湯活動</option>
                        <option value="體育健身類">體育健身</option>
                        <option value="都會公園類">都會公園</option>
                        <option value="國家風景區類">國家風景區</option>
                        <option value="藝術類">藝術</option>
                        <option value="文化類">文化</option>
                        <option value="廟宇類">廟宇</option>
                    </select>
                </div>                
            </div>
            <div className="travalSelectMain">
                <div className="travalSelectMainLeft">
    
                </div>
                <div className="travalSelectMainRight">
                {data && data.map((e) => {
                    // console.log(e.Picture.PictureUrl1);
                    let Picture = e?.Picture?.PictureUrl1
                    // console.log(Picture);
                    if(Picture === undefined){
                        Picture = Nopig;
                     }
                   return <div key={e.ScenicSpotID} className="topViewIn2">
                   <a href="##"><img src={Picture} alt=""/></a>
                   <h3 className="toggleColor">{e.ScenicSpotName}</h3>
                   <h4>{e.City}</h4>
                   </div>
               }
               )}
                </div>
                <div className="travalBtn d-none">
                    <button onClick={handleMore} href="/food">更多景點</button>
                </div>
            </div>  
        </div>
    </div>      
    )
}

export default HitoFood
