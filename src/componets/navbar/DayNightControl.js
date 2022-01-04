import React,{useState} from 'react'
import Moon from "../../pic/moon.svg"
import Sun from "../../pic/sun.svg"


const DayNightControl = () => {

    const [toggled, setToggled] = useState(true);
    const changedaynight =()=>{
        setToggled(!toggled);
    }

    return (
        <div className="dayControl">
            <img src={Sun} alt="sun" />
            <div className="control">
                <div className="circle">
                    <a onClick={changedaynight} href="##" className={toggled?"changeLight":"changeNightC"} />
                </div>
            </div>
            <img src={Moon} alt="moon" />
    </div>
    )
};

export default DayNightControl
