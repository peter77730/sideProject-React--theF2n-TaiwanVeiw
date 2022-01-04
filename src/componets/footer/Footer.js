import React from 'react'
import WhiteTaiwan from "../../pic/whiteTaiwan.svg"
import Facebook from "../../pic/facebook.svg"
import Instagram from "../../pic/Instagram.svg"
import Line from "../../pic/line.svg"
import Copyright from "../../pic/copyright.svg"

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="leftLogo">
                    <img src={WhiteTaiwan} alt="logo" />
                    <ul>
                        <li className="TaiwanE">Taiwan</li>
                        <li className="TaiwanC">島遊</li>
                    </ul>
                </div>
                <div className="aboutAll">
                    <div className="left">
                        <ul>
                            <li>關於 Taiwan 島遊</li>
                            <li><a href="##">我們是誰</a></li>
                            <li><a href="##">加入我們</a></li>
                            <li><a href="##">聯繫我們</a></li>
                        </ul>
                    </div>
                    <div className="center">
                        <ul>
                            <li>服務條款</li>
                            <li><a href="##">隱私權政策</a></li>
                            <li><a href="##">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>追蹤我們</li>
                            <li><a href="##"><img src={Facebook} alt="Facebook"/>Facebook</a></li>
                            <li><a href="##"><img src={Instagram} alt="Instagram"/>Instagram</a></li>
                            <li><a href="##"><img src={Line} alt="Line"/>Line</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <img src={Copyright} alt="copyright"/>
                <p>Design by Zoe Kang</p>
            </div>
        </div>

    )
};

export default Footer
