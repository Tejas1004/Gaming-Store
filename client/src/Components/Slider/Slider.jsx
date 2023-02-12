import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const data =[
  "https://www.desktopbackground.org/download/800x600/2010/04/20/4899_gaming-hd-wallpapers_1920x1080_h.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf86W9Zwd3cNqbeiuI3O8oLm4TvMDgP3_mApXxkwzt7u_b4kG8wQEeHCLwi8SE4Nj1vdY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlGMcFoII5_FK5YzDaiypxNSevs2KfqdG7WhWM8-B&s"
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;


// const data =[
//   "https://www.desktopbackground.org/download/800x600/2010/04/20/4899_gaming-hd-wallpapers_1920x1080_h.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf86W9Zwd3cNqbeiuI3O8oLm4TvMDgP3_mApXxkwzt7u_b4kG8wQEeHCLwi8SE4Nj1vdY&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtlGMcFoII5_FK5YzDaiypxNSevs2KfqdG7WhWM8-B&s"
//   ]