import React,{ useState, useEffect, useRef } from "react";
import jsonData from '../../pages/api/hero.json';
const Bannersection = () => { 

  const videoData = jsonData.video[0];

  return (
  <section className="hero">
  <div className="hero_text">
  <h1 className="mb_30">{videoData.title1} {videoData.title2}</h1>
  <h6>{videoData.subtitle}</h6>
  </div>
  <video playsInline="playsinline" autoPlay="autoplay" className="video-bg" id="banner-vid" muted="muted" loop="loop" data-keepplaying="">
  <source src={videoData.videourl} type="video/webm" />
  </video> 
  </section>
    )
  }

export default Bannersection