import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const newsCarousel = {
  items: 1,
    margin:0,
    autoplay: true,
    autoplayTimeout:6000,
    autoplayHoverPause: true,
    smartSpeed:3000,
    //animateOut: 'fadeOut',
    //animateIn: 'fadeIn',
    loop: true,
    video: true,
    lazyLoad: true,
    nav: true,
    dots:false,
    responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items:
           1,
      },
      1000: {
          items: 1,

      }
  },
};

const LatestNews = () => {
  return (
    <section className="latestnews-owl-sec">
    <h2>Latest NEWS</h2>   
    <OwlCarousel className="main-banner owl-carousel owl-theme" {...newsCarousel}>
<div className="item">
<p>Tender Notice -financial bid of Security Service Tender 2023</p>
<p><Link href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></Link></p> 
</div>

<div className="item">
<p>Tender Notice -financial bid of Security Service Tender 2023</p>
<p><Link href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></Link></p> 
</div>

    </OwlCarousel>
    </section>  
  )
}

export default LatestNews