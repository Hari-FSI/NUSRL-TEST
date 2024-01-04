import React,{ useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Bannersection = () => { 

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.play();
    }
  }, []);

  return (
<section className="banner-sec">
<video playsInline="playsinline" autoPlay="autoplay" className="tagline-video video-bg" id="banner-vid" muted="muted" loop="loop" data-keepplaying="">
<source src="/video/nluo-v1.webm" type="video/webm" />
</video> 

<div className="no-header-tint">
<div className="inner">
<div className="w50 box-block">
<h2>Grow your skills, <br/>define your future</h2>
<p>Presenting Academy, the tech school of the future. We teach you the right skills to be prepared fortomorrow.</p>
</div>
</div>
</div>

</section>  
  )
}

export default Bannersection