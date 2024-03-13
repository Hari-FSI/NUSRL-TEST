import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const DynamicaboutMenu = dynamic(() => import('../../components/HeaderMain/aboutMenu'), {
  suspense: true,
}) 
const nusrl_act_2010 = () => {
  const herobanner = [
    { id:1, 
      title: "NUSRL Act 2010", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    
      { id: 2, 
        title: "NUSRL Act 2010 – Hindi", 
        link: "/pdf/Act-Copy-Hindi.pdf"
      },
      { id: 1, 
        title: "NUSRL Act 2010 – English", 
        link: "/pdf/Act-Copy-English.pdf"
      },
  ];


  return (
    <>
    <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`,
        }}
      >
     <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicaboutMenu /></Suspense>
    </div>
    <div className="col-md-9  pt_30">
    {/*<h5>{herobanner[0].title}</h5>*/}
      <div className="cards">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <h5>{card.title}</h5>
          <div>
          <a className="btn-blue-brd" href={card.link} download> 
          <span className="material-symbols-outlined">download</span>
           Download
          </a>
          <Link className="btn-blue-brd" href={card.link} target="_blank">
          <span className="material-symbols-outlined">visibility</span>
            View
          </Link>
          </div>
        </div>
      ))}
      </div>
      </div>
        </div>
    </section>
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default nusrl_act_2010