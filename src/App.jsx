import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import About from "./components/Aboutus";
import Achievements from "./components/Achievements";
import Capabilities from "./components/Capabilities";
import BannerSec from "./components/BannerSection";
import Stories from "./components/Stories";
import Brands from './components/Brands';
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <StatsSection/>
        <About/>
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
