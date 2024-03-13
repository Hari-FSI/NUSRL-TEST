import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicLatestNews = dynamic(() => import('./LatestNews'), {
    suspense: true,
  })


  export const getStaticProps = async () => {
    const res = await fetch('../pages/api/latestnews.json'); // Use an absolute or relative path to your API endpoint
    const data = await res.json();
  
    return {
      props: { lnews: data },
    };
  };

const Notificationsection = (lnews ) => {
  return (
   <>
   <section className="notification">
    <div className="block"></div>
    <div className="block wow animate__fadeInUp" data-wow-duration="3s">
      <h4>Visit NUSRL</h4>
      <p>Campus: modern classrooms, vibrant spaces.</p>
      <p><Link href="/visit_NUSRL">Read More <span className="material-symbols-outlined"> chevron_right </span></Link></p>
    </div>
    <div className="block wow animate__fadeInUp" data-wow-duration="3s">
      <h4>Infrastructure</h4>
      <p>Innovative infrastructure for inspired learning.</p>
      <p><Link href="/infrastructure">Read More <span className="material-symbols-outlined"> chevron_right </span></Link></p>
    </div>
    <div className="latestnews-owl-sec wow animate__fadeInUp" data-wow-duration="3s">
      <h4>Latest NEWS</h4>
      <Suspense fallback={<div>Loading...</div>}><DynamicLatestNews /></Suspense>
    </div>
  </section>
   </>
  )
}

export default Notificationsection