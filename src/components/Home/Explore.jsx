import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const Explore = () => {
  return (

    <>
    <section className="container_fluid blue_bg">
  <div className="container explore">
    <div className="text_block">
      <h3>Explore the NUSRL</h3>
      <p>Discover NUSRL — a dynamic blend of academic excellence and vibrant campus life, offering modern education in a rich cultural setting. From state-of-the-art classrooms to collaborative study spaces, engage in legal discourse and shape your legal journey amid a diverse and stimulating atmosphere.</p>
    </div>
    <div className="icon_block">
      <article className="hovershine">
       <Image 
        src="/images/icons/icon-academic.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Academics</p>
        <Link href="/programmes"></Link>
      </article>
      <article className="whitebox hovershine">
      <Image 
        src="/images/icons/icon-infrastructure.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Infrastructure</p>
        <Link href="/infrastructure"></Link>
      </article>
      <article className="whitebox hovershine">
      <Image 
        src="/images/icons/icon-award.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Endowments/ Awards</p>
        <Link href="/students/endowmentsawards"></Link>
      </article>
      <article className="hovershine">
      <Image 
        src="/images/icons/icon-placement.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Placement</p>
        <Link href="/students/internship_placement"></Link>
      </article>
      <article className="hovershine">
      <Image 
        src="/images/icons/icon-center.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Centres of Learning </p>
        <Link href="/centres_of_learning"></Link>
      </article>
      <article className="whitebox hovershine">
      <Image 
        src="/images/icons/icon-program.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <p>Tenders</p>
        <Link href="/tenders/tenders"></Link>
      </article>
    </div>
  </div>
</section>
    </>
   
  )
}

export default Explore