import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const audit_report = () => {
  const herobanner = [
    { id:1, 
      title: "Audit Report", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    { id:5, 
      title: "2010-11",
      link: "/pdf/2010-11_opt.pdf"
    },
    { id:4, 
      title: "2011-12", 
      link: "/pdf/20111-12-opt.pdf"
    },
    { id:3, 
      title: "2012-13", 
      link: "/pdf/2012-13-opt.pdf"
    },
    { id:2, 
      title: "2013-14",
      link: "/pdf/2013-14-opt.pdf"
    },
    { id:1, 
      title: "2014-15", 
      link: "javascript:void(0);"
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
    <h5>{herobanner[0].title}</h5>
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
    </section>
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default audit_report