import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../pages/api/events.json';
const Latestevents = () => {
  const events = jsonData.events.slice(0, 3);

  const eventslarge = jsonData.eventslarge[0];
  return (
    <>
    <section className="events container">

    <div className="head wow animate__slideInUp" data-wow-duration="2s"><h3>Latest Events</h3><div className="line"><hr/></div>
  <Link href="/announcements">
  <span className="material-symbols-outlined more_arrow-filled">trending_flat</span>
 </Link>
  </div>

  <div className="events_section">
    <div className="large_events wow animate__slideInUp" data-wow-duration="2s" key={eventslarge.id}>
        <Link href={eventslarge.link} target={eventslarge.target}>
        <Image 
        src={eventslarge.image}
        alt={eventslarge.title}
        width={555}
        height={262}
        />
        </Link>

        <div className="text_block">
    <h6 className="title"><Link href={eventslarge.link} target={eventslarge.target}>{eventslarge.title}</Link></h6>
    <div className="date"><span className="material-symbols-outlined">calendar_month</span> <span>{eventslarge.date}</span></div>
    <p>{eventslarge.disc}</p>
    </div>

     
    </div>
    <div className="small_events">

    {events.map((event) => (

    <div className="small_eve wow animate__slideInUp" data-wow-duration="2s">
    <Link href={event.link} target={event.target}>
    <Image 
    src={event.image}
    alt={event.title}
    width={555}
    height={262}
    />
    </Link>
    <div className="text_block">
    <h6 className="title"><Link href={event.link} target={event.target}>{event.title}</Link></h6>
    <div className="date"><span className="material-symbols-outlined">calendar_month</span> <span>{event.date}</span></div>
    <p>{event.disc}</p>
    </div>
    </div>
    ))}
    </div>
  </div>
</section>
    </>
  )
}

export default Latestevents