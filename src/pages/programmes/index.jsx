import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicAcademicprogrammes = dynamic(() => import('../../components/Home/Academicprogrammes'), {
    suspense: true,
  })


const programmes = () => {

    const herobanner = [
        { id:1, 
          title: "Programmes", 
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
<Suspense fallback={<div>Loading...</div>}><DynamicAcademicprogrammes/></Suspense>
    </>
  )
}

export default programmes