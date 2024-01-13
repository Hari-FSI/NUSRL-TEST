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
  <h3>Latest Events</h3>
  <hr/>

  <div className="events_section">
    <div className="large_events" key={eventslarge.id}>
        <Link href={eventslarge.link} target={eventslarge.target}>
        <Image 
        src={eventslarge.image}
        alt={eventslarge.title}
        width={555}
        height={262}
        />
        </Link>
      <div className="date"><i className="fa fa-calendar-check-o"></i><span> {eventslarge.date}</span></div>
      <h4 className="title"><Link href={eventslarge.link} target={eventslarge.target}>{eventslarge.title}</Link></h4>
      <p>{eventslarge.disc}</p>
    </div>
    <div className="small_events">

    {events.map((event) => (

    <div className="small_eve">
    <Link href={event.link} target={event.target}>
    <Image 
    src={event.image}
    alt={event.title}
    width={555}
    height={262}
    />
    </Link>
    <div className="text_block">
    <h6 className="title"><Link href={event.link} target={event.target}><b>{event.title}</b></Link></h6>
    <div className="date"><i className="fa fa-calendar-check-o"></i><span>{event.date}</span></div>
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