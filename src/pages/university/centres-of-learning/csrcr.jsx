import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const chrss = () => {

    const herobanner = [
        { id:1, 
          title: "Center for Child Rights", 
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

    <section className="un_messge container">
  <div className="text_block">
 
  <h5><a href="https://ccrnusrlblog.wordpress.com/">CLICK HERE</a> for CCR Blog</h5>

<h5><a href="sites/default/files/Report on RTE webinar held on 24.01.2021.pdf">Report on RTE webinar held on 24/01/2021</a></h5>

<p><a href="sites/default/files/E-Brochure 13-14 Feb 2021 Two day certificate course on JJ Act 15.pdf">E Brochure</a> for the two days certificate&nbsp;course on JJ Act 2015</p>

<p>ONLINE APPLICATION FROM FOR COURSE REGISTRATION <a href="https://docs.google.com/forms/d/e/1FAIpQLSdH96h0pTIwxgDWQ8bjrXVskt2C0t4DUBQZf-DdzrCFXHg4Vg/viewform?usp=pp_url">CLICK HERE</a>&nbsp;</p>
  </div>
  <hr/>
</section> 

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default chrss