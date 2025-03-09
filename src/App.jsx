import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutUs from "./components/Aboutus";
import Achievements from "./components/Achievements";
import Capabilities from "./components/Capabilities";
import BannerSec from "./components/BannerSection";
import Stories from "./components/Stories";
import Brands from './components/Brands';
import Footer from "./components/Footer";
import AboutUs from "./components/Aboutus";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <StatsSection/>
        <AboutUs/>
        <Achievements/>
        <BannerSec/>
        <Stories/>
        <Brands/>
        <Footer/>
        {/* <Capabilities/> */}
        {/* <Routes>
        </Routes> */}
      </Router>
    </>
  )
}

export default App
