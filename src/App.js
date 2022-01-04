import React from "react";
import "./styles/all.css";
import Nav from "./componets/navbar/Nav";
import Footer from "./componets/footer/Footer";
import Main from "./pages/Main";
import TravalMain from "./pages/TravalMain";
import TravalData from "./pages/travalData";
import FoodData from "./pages/FoodData";
import ViewMain from "./pages/ViewMain";
import {Routes,Route} from 'react-router-dom';


const App =() => {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/traval" element={<TravalMain/>} />
          <Route path="/food" element={<ViewMain/>} />
          <Route path="/travalData" element={<TravalData/>}/>
          <Route path="/foodData" element={<FoodData />}/>
        </Routes>
        <Footer />
      </div>
    )
  };

export default App;