import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const moot_court = () => {
  const herobanner = [
    { id:1, 
      title: "Moot Court", 
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
    <div>
      <h4 className="mb_15">NUSRL MOOT COURT COMMITTEE</h4>

<p>Email address: <a href="mailto:nusrl.mcc@gmail.com">nusrl.mcc@gmail.com</a></p>

<p><strong>Chairperson</strong> : Mr. Koushik Bagchi<br/>
Contact No.- +91-9431788639</p>

<p><strong>Co-Chairperson</strong> : Mrs. Hiral Mehta<br/>
Contact No.- +91-8051176055</p>

<p>For more details <a class="gov_links" href="https://nusrlmooting.wordpress.com/" target="_blank">Click here</a></p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default moot_court