import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const news_letter = () => {
  const herobanner = [
    { id:1, 
      title: "NEWS Letter", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    
      { id: 1, 
        title: "For more info", 
        image:"/images/news-letters.webp",
        link: "/pdf/1548758734138_NUSRL-NEWSLETTER-1.pdf",
        target:"_blank"
      }
      
  ];


  return (
    <>
    <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`
        }}
      >
     <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container mt_60 mb_60">
      <div className="cards">
      {cardData.map((card) => (
        <div className="card jcard" key={card.id}>
            <Image 
            src={card.image}
            alt={card.title}
            width={240}
            height={360}
            />
          <div>
            <div className="text-center mb-15">
          <h6 className="mt-15">{card.title}</h6>
          <Link className="btn-blue-brd mt-15 mb-15 text-center" href={card.link} target="{card.target}">
          <span className="material-symbols-outlined">visibility</span>
            View
          </Link>
          </div>
          </div>
        </div>
      ))}
      </div>
    </section>
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default news_letter