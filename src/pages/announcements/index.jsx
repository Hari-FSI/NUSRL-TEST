import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../pages/api/announcements.json';
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
    <section className="announcements container">  
  <div className="cards">
  {announcements.map((announcement) => (
  <div className="timelineWork" key={announcement.id}>
    <p className="date"><span className="material-symbols-outlined">calendar_month</span> {announcement.date}</p>
    <p className="noti">{announcement.title}</p>
    <Link className="link-block" target={announcement.target} href={announcement.link}></Link>
  </div>
      ))}
 
  </div>
</section>
    </>
  )
}

export default Announcements