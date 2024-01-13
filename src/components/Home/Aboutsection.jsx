import React,{ useState, useEffect} from "react";

import Link from "next/link";
import Image from 'next/image'

const Aboutsection = () => {
  return (
    <>
    <section className="about container">
    <div className="img_block">
    <Image 
    className="abt1-img"
    src="/images/about-1.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    />
    <Image 
    className="abt1-img"
    src="/images/about-2.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    />
    </div>
    <div className="text_block">
    <h3>About NUSRL</h3>
    <h6>National University of Study and Research in Law, Ranchi (NUSRL) was established by Act No. 4 of Jharkhand State Assembly in 2010.</h6>
    <p>The University has subsequently been recognized by University Grants Commission (UGC) in September 2011 u/s 22, u/s 12B in the year 2018 of the UGC Act of 1956 and Bar Council of India (BCI). The University started functioning in September 2010. At present, the University has more than 600 students on rolls in the undergraduate course. The University has been included as member of the CLAT w.e.f. CLAT 2012.</p>
    <p><Link href="/about/vision">Read More <span className="material-symbols-outlined btn-symbols-arrow"> chevron_right </span></Link></p>
    </div>
    </section>  
    </>
  )
}

export default Aboutsection