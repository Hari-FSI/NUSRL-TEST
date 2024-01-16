import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const sports = () => {
  const herobanner = [
    { id:1, 
      title: "Sports", 
      image: "/images/inner-banner.webp"
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
  <div className="pdfs_as_list">
    
    <div className="list_of_pdfs">
    <div>
    <p className="text-center mb_15">
        <img height="359" src="/images/sport.jpg" width="612" />
        </p>
        <p><strong>VIRUDHAKA 2013, organized by NLIU, Bhopal</strong></p>
<ol>
<li>&nbsp; Anmol Deepak won gold in the high jump.</li>
<li>&nbsp; Abhishek Singh Negi won silver in 200 meters.</li>
<li>&nbsp; Sudhanshu Prakash won gold in a 110-meter hurdle and silver in 100 meters.</li>
</ol>
<p>&nbsp;</p>
<p><strong>KARVAAN 2014, organized by KIIT Law School</strong></p>
<ol>
<li>&nbsp; winner in football</li>
<li>&nbsp; runners up in cricket</li>
<li>&nbsp; runners up in basketball</li>
<li>&nbsp; runners up in volleyball</li>
</ol>
<p>&nbsp;</p>
<p><strong>COLOSSUS 2015, organized by HNLU, Raipur</strong></p>
<ol>
<li>&nbsp; winners in street cricket</li>
<li>&nbsp; winner in badminton girls</li>
<li>&nbsp; runners up in throw ball</li>
<li>&nbsp; runners up in basketball girls</li>
<li>&nbsp; runners up in street football girls</li>
</ol>
<p>&nbsp;</p>
<p><strong>Winner in football match conducted by RIMS, Ranchi on the eve of Independence Day.</strong></p>
<p><br /> <strong>RUSH 2015, organized by IIM, Ranchi</strong></p>
<ol>
<li>&nbsp; winner in football in RUSh 2015</li>
<li>&nbsp; runners up in volleyball in RUSH 2015</li>
<li>&nbsp; winner in girls 100 meters, 200 meters, and 4*100 meter relay</li>
<li>&nbsp; runners up in badminton girls</li>
</ol>
<p>&nbsp;</p>
<p><strong>COLOSSUS 2016, organized by HNLU, Raipur</strong></p>
<ol>
<li>&nbsp; winner in street cricket</li>
<li>&nbsp; winner in Throwball</li>
<li>&nbsp; Sudhanshu Prakash won bronze in 100 meters and bronze in 800 meter</li>
<li>&nbsp; Anubhav Yadav won bronze in 400 meter</li>
<li>Anjali beck won silver in 100 meters and bronze in 400 meter</li>
<li>Puja Jakhar won silver in the long jump<br /> &nbsp;</li>
</ol>
<p>&nbsp;</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default sports