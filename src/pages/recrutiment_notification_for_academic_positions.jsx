import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const recrutiment_notification_for_academic_positions = () => {
  const herobanner = [
    { id:1, 
      title: "RECRUTIMENT NOTIFICATION FOR ACADEMIC POSITIONS", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    { id: 3, 
      title: "Paper Advertisement", 
      link: "/pdf/Faculty-Recruitment-2023-paper.pdf"
    },
    { id: 2, 
      title: "Recruitment Notification", 
      link: "/pdf/Notification-website-e.pdf"
    },
    { id: 1, 
      title: "Application Form", 
      link: "/pdf/Application-form-for-faculties-2023.pdf"
    },
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

export default recrutiment_notification_for_academic_positions