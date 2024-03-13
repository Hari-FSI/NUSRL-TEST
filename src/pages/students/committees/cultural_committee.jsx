import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const cultural_committee = () => {
  const herobanner = [
    { id:1, 
      title: "Cultural Committee", 
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
    
    <div className="list_of_pdfs text-justify">
    <div>
    <p className="text-center">
        <img height="359" src="/images/cultural.jpg" width="612" />
        </p>
        <br/>
<p><span><span >Being home to a diversified population NUSRL, Ranchi celebrates the colors and essence of the culture they bring in. The Cultural Committee plays as a media to these expressions and encourages the influx of ideas that amaze. Law in itself is a part of the society, as an embodiment of the norms, and thus the approach has always been to understand the society and its norms through the stories it has. The celebration of the local phenomena and the global perspective of the same intrigue us the most, as in the process of evolution; we search for a revolution, a revolution of ideas that bring a change for the better.

</span></span></p>
<br/>
<h4 className="mb_15">Contact Person:</h4><span><span >
</span></span><span><span >Dr. Sangita Laha, Associate Professor, NUSRL, Ranchi </span></span><br/>
<span ><span ><span>Mr. Anubhav Kumar, Assistant Professor, NUSRL, Ranchi</span></span></span><br/>
<span ><span ><span>Ms. Sreemoyee Sarkar, Teaching Assistant, NUSRL, Ranchi</span></span></span><br/>

</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default cultural_committee