import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const diploma__syllabus = () => {
  const herobanner = [
    { id:1, 
      title: "Certificate & Diploma Courses", 
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
      <p><Link href="/programmes/diploma_admissions">Diploma Admission</Link></p>
      <p ><Link href="/programmes/diploma_course_description">Diploma Course Description</Link></p>
      <p className="active"><Link href="/programmes/diploma__syllabus">Diploma Syllabus</Link></p>
      <p><Link href="/programmes/diploma_Fee_Statement">Diploma Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4 className="mb_15">Diploma Syllabus</h4>
    <p className="mt_30">Content not Available.</p>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default diploma__syllabus