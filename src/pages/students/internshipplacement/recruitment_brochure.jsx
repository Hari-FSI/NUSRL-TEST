import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const recruitment_brochure = () => {
  const herobanner = [
    { id:1, 
      title: "Recruitment Brochure", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    { id:1, 
      title: "NUSRL Recruitment Brochure of Batch-2018 ",
      link: "/pdf/Placement-Brochure_opt.pdf"
    },
    { id:2, 
      title: "Recruitment Brochure of Batch-2016 ", 
      link: "/pdf/RECRUITMENT-BROCHURE-2016.pdf"
    },
    { id:3, 
      title: "Recruitment Brochure of Batch-2017", 
      link: "/pdf/NUSRL-Recruitment-Brochure-of-Batch-2017.pdf"
    }
  ];


  return (
    <>
      <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`,
          height: '300px',
        }}
      >
     <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container mt_60 mb_60">
    <h5 className="mb_15">Archive</h5>
      <div className="cards">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <h5>{card.title}</h5>
          <div>
          <Link className="btn-blue-brd" href={card.link} target="_blank">
          <span className="material-symbols-outlined">visibility</span>
            View
          </Link>
          </div>
        </div>
      ))}
      </div>
    </section>
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default recruitment_brochure