import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../../pages/api/faculties.json';
import { Suspense } from "react";

const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const DynamicuniversityMenu = dynamic(() => import('../../../components/HeaderMain/universityMenu'), {
  suspense: true,
}) 

const faculties = () => {

    const herobanner = [
        { id:1, 
          title: "FACULTIES ", 
          image: "/images/inner-banner.webp"
        }
      ];


      // Access the JSON data
      const faculties = jsonData.faculties;

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
    <section className="breadcrumb">
       <div className="container"> 
      <div className="row">  
      <div className="col-md-12 col-sm-12 col-xs-12">
      <ul>
      <li><Link href="/">Home</Link></li>
      <li>{herobanner[0].title}</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicuniversityMenu /></Suspense>
    </div>
    <div className="col-md-9 faculties pt_30"> 
        {faculties.map((faculties) => (
        <div className="faculty" key={faculties.id}>
           <div className="faculty-in">
        <div className="img-blk">    
        <Image 
        src={faculties.image}
        alt={faculties.name}
        width={240}
        height={360}
        />
        </div>
        <div className="faculity_details">
        <h6>{faculties.name}</h6>
        <p className="designation-list">{faculties.designation}</p>
        </div>
        <Link href={`faculties/${faculties.id}`}></Link>
        </div>
        </div>
        ))}
   </div>
        </div>
    </section>
<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default faculties
