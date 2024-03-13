import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import dynamic from "next/dynamic";
import { Suspense } from "react";
import jsonData from '../../pages/api/announcements.json';

const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const DynamicnotifyMenu = dynamic(() => import('../../components/HeaderMain/notifyMenu'), {
  suspense: true,
}) 

const Announcements = () => {
  const announcements = jsonData.announcements;
  const herobanner = [
    { id:1, 
      title: "Announcements", 
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
<section className="container announcements list-all">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicnotifyMenu /></Suspense>
    </div>
    <div className="col-md-9">

    <div className="cards">
  {announcements.map((announcement) => (
  <div className="timelineWork" key={announcement.id}>
    <p className="date"><span className="material-symbols-outlined">calendar_month</span> {announcement.date}</p>
    <p className="noti">{announcement.title}</p>
    <Link className="link-block" target={announcement.target} href={announcement.link}></Link>
  </div>
      ))}
 
  </div>  

    </div>
    </div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default Announcements