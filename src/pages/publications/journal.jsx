import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const journal = () => {
  const herobanner = [
    { id:1, 
      title: "Journal", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    
      { id: 1, 
        title: "Volume I", 
        image:"/images/p-vol1.webp",
        link: "https://online.pubhtml5.com/iisdo/gycs/",
        target:"_blank"
      },
      { id: 2, 
        title: "Volume II", 
        image:"/images/p-vol2.webp",
        link: "https://online.pubhtml5.com/iisdo/aaze/#p=1",
        target:"_blank"
      },
      ,
      { id: 3, 
        title: "Volume III", 
        image:"/images/p-vol3.webp",
        link: "javascript:void(0)",
        target:"_self"
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

export default journal