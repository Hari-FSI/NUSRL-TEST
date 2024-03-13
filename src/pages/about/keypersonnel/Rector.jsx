import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from 'next/image'
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const DynamicaboutMenu = dynamic(() => import('../../../components/HeaderMain/aboutMenu'), {
  suspense: true,
}) 
import jsonData from '../../../pages/api/keypersonnel.json';
const Rector = () => {
    const herobanner = [
        { id:1, 
          title: "Rector", 
          image: "/images/inner-banner.webp"
        }
      ];

    const rector = jsonData.rector[0];
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
    <div className="col-md-9 un_messge  pt_30">
    <div className="text_block pt_15">
    <h4>{rector.name}</h4>
    <p><b>{rector.title}</b></p>
    <p>{rector.designation}</p>
  </div>
  <div className="img_block">
  
    <div className="image image_in ">
      <Image 
      src={rector.image}
      alt={rector.title}
      width={240}
      height={360}
      />
    </div>
  
  </div>
    </div>
    </div>
    </section> 


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default Rector