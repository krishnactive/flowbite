import React from "react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import VideoSection from "./VideoSection"

function App(){
  return(
    <div className="bg-gray-900" >
        <Navbar/>
        <HeroSection/>
        <VideoSection/>
    </div>
  )
}
export default App;