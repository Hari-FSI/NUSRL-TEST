import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const swift = () => {
  const herobanner = [
    { id:1, 
      title: "Swift", 
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
    

    <div><p><strong>National University of Study &amp; Research in Law, Ranchi</strong></p>

<p>Name of the Faculty&nbsp; : <strong> Mrs. Satyabrata Mishra</strong></p>

<p>Name of the Team &nbsp; :&nbsp;<strong>&nbsp; Swift</strong></p>


</div>


    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default swift
