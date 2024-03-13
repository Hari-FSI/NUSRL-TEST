import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../pages/api/announcements.json';
const Announcements = () => {
  const announcements = jsonData.announcements.slice(0, 6);

  return (
    <>
    <section className="announcements container">
  <div className="head wow animate__slideInUp" data-wow-duration="2s"><h3>Announcements</h3><div className="line"><hr/></div>
  <Link href="/announcements">
  <span className="material-symbols-outlined more_arrow-filled">trending_flat</span>
 </Link>
  </div>
  
  <div className="cards">
  {announcements.map((announcement) => (
  <div className="timelineWork wow animate__slideInUp" data-wow-duration="2s" key={announcement.id} >
     <p className="date"><span className="material-symbols-outlined">calendar_month</span> {announcement.date}  <img src="/images/new.gif" className={`newtaq ${announcement.newtaq}`} /></p>
    <p className="noti">
   
      {announcement.title}</p>
    
    <Link className="link-block" target={announcement.target} href={announcement.link}></Link>
  </div>
      ))}
 
  </div>
</section>
    </>
  )
}

export default Announcements