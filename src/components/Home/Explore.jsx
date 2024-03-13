import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import ScrollTrigger from 'react-scroll-trigger';
const Explore = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  const handleExitViewport = () => {
    setIsVisible(false);
  };

  return (

    <>
      <section className='container_fluid blue_bg' id="explore-sec">
  <div className="container explore">
    <div className="text_block wow animate__fadeInUp" data-wow-duration="2s">
      <h3 className='mb_15'>Explore the NUSRL</h3>
      <p>Discover NUSRL — a dynamic blend of academic excellence and vibrant campus life, offering modern education in a rich cultural setting. From state-of-the-art classrooms to collaborative study spaces, engage in legal discourse and shape your legal journey amid a diverse and stimulating atmosphere.</p>
    </div>
    <ScrollTrigger onEnter={handleEnterViewport} onExit={handleExitViewport}>
    <div className={isVisible ? 'icon_block activeshine' : 'icon_block'}>
      <article className="hovershine">
        <div className='in-block'>
       <Image 
        src="/images/icons/icon-academic.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Academics</p>
        <Link href="/programmes"></Link>
        </div>
      </article>
      <article className="hovershine">
      <div className='in-block'>
      <Image 
        src="/images/icons/icon-infrastructure.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Infrastructure</p>
        <Link href="/infrastructure"></Link>
        </div>
      </article>
      <article className="hovershine">
      <div className='in-block'>
      <Image 
        src="/images/icons/icon-award.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Endowments/ Awards</p>
        <Link href="/students/endowmentsawards"></Link>
        </div>
      </article>
      <article className="hovershine">
      <div className='in-block'>
      <Image 
        src="/images/icons/icon-placement.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Placement</p>
        <Link href="/students/internship_placement"></Link>
        </div>
      </article>
      <article className="hovershine">
      <div className='in-block'>
      <Image 
        src="/images/icons/icon-center.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Centres of Learning </p>
        <Link href="/centres_of_learning"></Link>
        </div>
      </article>
      <article className="hovershine">
      <div className='in-block'>
      <Image 
        src="/images/icons/icon-program.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Tenders</p>
        <Link href="/tenders/tenders"></Link>
        </div>
      </article>
    </div>
    </ScrollTrigger>
  </div>
  </section>
    </>
   
  )
}

export default Explore