import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const campus_life = () => {
  const herobanner = [
    { id:1, 
      title: "Campus Life", 
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
    
    <div className="list_of_pdfs">
    <p className="mb_30">NUSRL Ranchi has a thriving campus of 67 acres, situated right beside the Jhumar River. The University being a fully residential campus has a lot of colors in every walk of life. It provides the perfect blend of academics, extracurricular, co-curricular and sports for an overall development of its student’s personality and character. The students have the opportunity to organize and participate in a wide range of academic activities such as seminars, moot-court competitions, debate and quiz competitions. Besides, academics the University provides the students with a chance to participate in welfare schemes like blood donation and legal aid camps in order to inculcate the social values and responsibility which is integral to ones development as a true lawyer. The students showcase immense enthusiasm in organizing cultural events celebrating a plethora of festivals and social causes. The students also engage in a diverse range of activities ranging from different sports tournaments, both at Intra and inter-level, to poetry gatherings.</p>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default campus_life