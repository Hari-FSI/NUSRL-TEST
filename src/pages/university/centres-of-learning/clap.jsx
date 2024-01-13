import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const clap = () => {

    const herobanner = [
        { id:1, 
          title: "Clap", 
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
  <h4 className="mb_15">ABOUT Clap</h4>
<p><a href="/pdf/natak.pdf" target="_blank">CLAP Organized Nukkad Natak on 5th March, 2019</a></p>

<h4 className="mb_15">Contact Person</h4>
<p>Dr. K. Syamala, Associate Professor</p>

<p>Mr. Kaushik Bagchi, Assistant Professor</p>

<p>Ms. Lahama Majumder, Teaching Assistant</p>

<p>Email: clap@nusrlranchi.ac.in</p>
  </div>
  <div className="img_block">
  
    <div className="image">
      <Image 
      src="/images/clap.jpg"
      alt="Chrss"
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

export default clap