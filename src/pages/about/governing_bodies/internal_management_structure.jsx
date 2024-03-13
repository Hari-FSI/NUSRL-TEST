import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })

  
  const DynamicaboutMenu = dynamic(() => import('../../../components/HeaderMain/aboutMenu'), {
    suspense: true,
}) 
const internal_management_structure = () => {

    const herobanner = [
        { id:1, 
          title: "Internal Management Structure", 
          image: "/images/inner-banner.webp"
        }
      ];

  return (
    <>
    <section
    className="hero inner-banner"
    style={{
    backgroundImage: `url(${herobanner[0].image})`,
    }}
    >
    <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicaboutMenu /></Suspense>
    </div>
    <div className="col-md-9  pt_30">
<div className="text_para mt_30">
  <div className="text_para_section">
  <h4 className="text-center mt_30 mb_30">Content not available</h4>
  </div>
</div>
</div>
</div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default internal_management_structure
