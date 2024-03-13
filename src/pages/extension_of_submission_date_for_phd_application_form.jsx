import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const extension_of_submission_date_for_phd_application_form = () => {
  const herobanner = [
    { id:1, 
      title: "Extension of submission date for ph.d. Application form", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    { id: 3, 
      title: "Date for submission of Ph.D. Application Form has been further extended till 10/09/2023 for Online submission and till 15/09/2023 for Offline/Hard copy submission."
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
      <div className="row">
      {cardData.map((card) => (
        <div className="col-md-12" key={card.id}>
          <h5>{card.title}</h5>
        </div>
      ))}
      </div>
    </section>
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default extension_of_submission_date_for_phd_application_form