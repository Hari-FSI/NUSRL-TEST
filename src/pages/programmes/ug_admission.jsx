import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const ug_admission = () => {
  const herobanner = [
    { id:1, 
      title: "Under Graduate Programmes", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    
      { id: 1, 
        title: "Message from Hon'ble Vice Chancellor to newly admitted students of 2020-2021", 
        link: "/pdf/New-Batch.pdf"
      },
      { id: 2, 
        title: "Notification for new Batch 2020-2021 - B.A.LL.B (Hons.) / LL.M.", 
        link: "/pdf/Notification-for-new-students.pdf"
      },
      ,
      { id: 3, 
        title: "Admission Committee", 
        link: "/pdf/ADMISSION-COMMITTEE.pdf"
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
  <div className="pdfs_as_list">
    <div className="list_of_pdf_titles">
      <p className="active"><Link href="/programmes/ug_admission">Under Graduate</Link></p>
      <p><Link href="/programmes/ug_course_description">Course Description</Link></p>
      <p><Link href="/programmes/ug_syllabus">Syllabus</Link></p>
      <p><Link href="/programmes/ug_subject_list">Subject List</Link></p>
      <p><Link href="/pdf/UG-Fee-Statement-2023.pdf" target='_blank'>Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4>Under Graduate</h4>
      <div className="cards">
      {cardData.map((card) => (
        <div className="card programee-card" key={card.id}>
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
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default ug_admission