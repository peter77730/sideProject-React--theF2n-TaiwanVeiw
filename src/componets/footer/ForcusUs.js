import React from 'react'

const ForcusUs = () => {
    return (
    <div className="joinMe">
        <h2>訂閱我們，獲得最在地的旅遊資訊！</h2>
        <p>每周六一封，不隨意打擾，且隨時可以取消</p>
        <div className="mailInput">
            <input type="email" placeholder="輸入你的 Email"/>
            <button id="subscription">訂閱</button>
        </div>
    </div>
    )
};

export default ForcusUs
