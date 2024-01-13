import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const rti = () => {

    const herobanner = [
        { id:1, 
          title: "RTI", 
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

    <section className="container">
<div className="text_para mt_30">
  <div className="text_para_section">
  <h4 className="mb_15">Contact</h4>

  <h4 className="mb_15">Public Information Officer</h4>

<p><strong>Mr. Alok Ranjan</strong><br/>
National University of Study and Research in Law, Ranchi<br/>
At: Nagri, PO: Bukru, PS: Kanke, Pithoria Road<br/>
Kanke, Ranchi (Jharkhand)<br/>
Pin – 834006</p>

<p>Mobile: 8580322071<br/>
Email:<span>&nbsp;</span>establishment@nusrlranchi.ac.in</p>

<h4 className="mb_15 mt_15" >Appellate Authority</h4>

<p>Registrar<br/>
At: Nagri, PO:&nbsp;Bukru, PS: Kanke, Pithoria Road<br/>
Kanke, Ranchi (Jharkhand)<br/>
Pin – 834006</p>
  </div>
</div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default rti