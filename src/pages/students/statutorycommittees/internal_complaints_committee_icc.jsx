import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const internal_complaints_committee_icc = () => {
  const herobanner = [
    { id:1, 
      title: "Internal Complaints Committee (ICC)", 
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
        <p>For the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 <a href="/pdf/The-Sexual-Harassment-of-Women-at-Workplace-Prevention-Prohibition-and-Redressal-Act-2013.pdf" target="_blank">CLICK HERE</a> (<strong>Size: </strong> 4.3 MB,<strong> Format: </strong> PDF,<strong> Language: </strong> Hindi)</p>

<p>For the University Grant Commission (Prevention, prohibition and Redressal of sexual harassment of women employees and students in higher education institutions) Regulations, 2015 <a href="/pdf/7203627_UGC_regulations-harassment.pdf" target="_blank">CLICK HERE</a> (<strong>Size: </strong> 11.8 MB,<strong> Format: </strong> PDF,<strong> Language: </strong> Hindi)</p>

<p>&nbsp;</p>

<ol><li>&nbsp; &nbsp; Dr. K. Syamala, (Associate Professor), Presiding Officer</li>
	<li>&nbsp; &nbsp; Ms. Raabia Abuzer Shams, (Assistant Professor), Member</li>
	<li>&nbsp; &nbsp; Mr. Anubhav Kumar, (Assistant Professor), Member</li>
	<li>&nbsp; &nbsp; Mr. Alok Ranjan, (Non-teaching), Member</li>
	<li>&nbsp; &nbsp; Mrs. Neeta Sen, (Non-teaching), Member</li>
	<li>&nbsp; &nbsp; Dr. Rashmi, Director, Santosh College of Teachers Training Education, External Member<br/>
	&nbsp;</li>
</ol></div>


    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default internal_complaints_committee_icc