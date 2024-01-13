import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from 'next/image'
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
import jsonData from '../../../pages/api/keypersonnel.json';
const Vice_Chancellor = () => {
    const herobanner = [
        { id:1, 
          title: "Vice Chancellor", 
          image: "/images/inner-banner.webp"
        }
      ];

    const vicechancellor = jsonData.vicechancellor[0];
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
    <h3>{vicechancellor.title}</h3>
    <h4>{vicechancellor.name}</h4>
    <p>{vicechancellor.designation}</p>
  </div>
  <div className="img_block">
  
    <div className="image">
      <Image 
      src={vicechancellor.image}
      alt={vicechancellor.title}
      width={240}
      height={360}
      />
    </div>
  
  </div>
  <hr/>
</section> 
<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default Vice_Chancellor