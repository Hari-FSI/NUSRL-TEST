import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import jsonData from '../../pages/api/latestnews.json';

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

  // Access the JSON data
  const allnews = jsonData.news;

  // Show only the latest 2 items
  const latestnews = allnews.slice(-2).reverse();

  // Show only the latest 2 items
  const allnewsreverse = allnews.slice().reverse();
  
  return (
   
    <OwlCarousel className="latest-news-carousel main-banner owl-carousel owl-theme" {...newsCarousel}>
        {allnews.map((news) => (
        <div className="item" key={news.id}>
         <img src="/images/new.gif" className={`newtaq ${news.newtaq}`} />
          <p>{news.title}</p>
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> <span>06-11-2023</span></p>
          <p>
            <Link href={news.link} target={news.target}>
              Read More <span className="material-symbols-outlined"> chevron_right </span>
            </Link>
          </p>
        </div>
      ))}
    </OwlCarousel>
  )
}

export default LatestNews