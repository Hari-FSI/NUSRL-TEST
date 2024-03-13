import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import jsonData from '../api/tenders.json';
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
  const DynamicnotifyMenu = dynamic(() => import('../../components/HeaderMain/notifyMenu'), {
    suspense: true,
})    
const tenders = () => {

    const herobanner = [
        { id:1, 
          title: "Tenders", 
          image: "/images/inner-banner.webp"
        }
      ];
  const tenders = jsonData.tenders || [];
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

    <section className="container page-sec txt-justfy">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicnotifyMenu /></Suspense>
    </div>
    <div className="col-md-9  mt_30">

       <ul className="ul-listing-block">
       {tenders.map((tender) => (
        <li key={tender.id} className="list-block">
          <div className="in-block">
              {tender.notices.map((notice) => (    
              <h4 key={notice.title}>
              <Link href={notice.pdf} target={notice.target} rel="noopener noreferrer">
              {notice.title}
              </Link>
              </h4>
              ))}
              <h5 className="mt_15">Documents</h5>
              <ul className="list-documents">
              {tender.documents.map((document) => (    
              <li key={document.title}>
              <Link href={document.pdf} target={document.target} rel="noopener noreferrer">
              {document.title}
              </Link>
              </li>
              ))}
              </ul>
              <p className="date">
                <strong>Last Date of Submission</strong> : 
                <span class="material-symbols-outlined">calendar_month</span> 
                <span>{tender.date}</span> 
              </p>

          </div>
        </li>
        ))}
       </ul>   

    </div>
    </div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default tenders

