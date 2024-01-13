import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const examinations_schedule = () => {
  const herobanner = [
    { id:1, 
      title: "Examinations Schedule", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    { id:1, 
      title: "Continuous Assessment Schedule",
      link: "javascrit:void(0)",
      target:"_self"
    },
    { id:2, 
      title: "Mid Term Examination Schedule",
      link: "/pdf/Mid-Term-Exam-Schedule-compressed.pdf",
      target:"_blank"
    },
    { id:3, 
      title: "End Term Schedule",
      link: "javascrit:void(0)",
      target:"_self"
    },
    { id:4, 
      title: "End Term Repeat/Improvement and Backlog Schedule ",
      link: "/pdf/Repeat-Improvement-Backlog-Examination-Schedule.pdf",
      target:"_blank"
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
          <Link className="btn-blue-brd" href={card.link}  target={linkItem.target}>
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
export default examinations_schedule