import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const pg_course_description = () => {
  const herobanner = [
    { id:1, 
      title: "Center of post graduate studies", 
      image: "/images/inner-banner.webp"
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
      <p><Link href="/programmes/pg_admission">PG Admission</Link></p>
      <p className="active"><Link href="/programmes/pg_course_description">PG Course Description</Link></p>
      <p><Link href="/programmes/pg_llm_syllabus">L.L.M. Syllabus</Link></p>
      <p><Link href="/pdf/PG-Fee-Statement-2023.pdf" target='_blank'>PG Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4>PG Course Description</h4>
    <p className="mt_30">Content not Available.</p>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default pg_course_description