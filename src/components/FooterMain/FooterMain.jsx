import React,{Suspense, useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faLinkedinsquare, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Link from 'next/link';
const FooterMain = () => {
  const [value, setValue] = useState()  
  return (
<>
<footer className="container_fluid">
  <div className="container">
    <div className="center_logo">
      <Link href="/" className="logo_section">
        <Image
        className='logo_img'
        src="/images/logo.png"
        alt="logo"
        width={70}
        height={65} 
        />
        <div className="logo_text">
          <h5>NUSRL, Ranchi</h5>
          <p>National University of Study and Research in Law</p>
          <p className="small">Nagri, PO : Bukru, PS : Kanke Kanke Pithoria Road, Kanke Ranchi, Jharkhand – 834006</p>
        </div>
      </Link>
    </div>
	
	<div className="socialmedia-sec">
  <div className="socialmedia">
    <h3 className="socialTitle">Social media handles:</h3>
    <ul className="socialList">
       <li>
        <Link target="_blank" href="https://www.instagram.com/nusrlranchiofficial/?igshid=NzZlODBkYWE4Ng%3D%3D">
       <Image
        src="/images/icons/social-insta.png"
        alt="instagram"
        width={30}
        height={30} 
        />
       </Link>
       </li>

        <li>
        <Link target="_blank"  href="https://www.facebook.com/profile.php?id=61551087953358&mibextid=ZbWKwL ">
        <Image
        src="/images/icons/social-fb.png"
        alt="facebook"
        width={30}
        height={30} 
        />
        </Link>
        </li>

        <li>
        <Link target="_blank"  href="https://www.linkedin.com/company/national-university-of-study-and-research-in-law-ranchi-official/">
        <Image
        src="/images/icons/social-linkedin.png"
        alt="linkedin"
        width={30}
        height={30} 
        />
        </Link>
        </li>

        <li>
        <Link target="_blank"  href="https://twitter.com/nusrlranchi?t=7sNRpob5sw7N353OhLWa2g&s=09">
        <Image
        src="/images/icons/social-tw.png"
        alt="twitter"
        width={30}
        height={30} 
        />
        </Link>
        </li>

        <li>
        <Link target="_blank"  href="https://www.youtube.com/@NUSRLRanchi2010">
        <Image
        src="/images/icons/social-yt.png"
        alt="youtube"
        width={30}
        height={30} 
        />
        </Link>
        </li>

        <li><Link target="_blank"  href="https://www.kooapp.com/profile/nusrl_ranchi ">
        <Image
        src="/images/icons/social-koo.png"
        alt="kooapp"
        width={30}
        height={30} 
        />
        </Link>
        </li>
    </ul>
  </div>
</div>

    <div className="important_links">
      <div className="col_1">
        <h3 className="mb_15">About</h3>
        <ul className="ullist">
		     <li><Link className="link" href="/students/internship_placement_committee">Internship & Placement Committee</Link></li>
         <li><Link className="link" href="/students/recruitment_brochure">Recruitment Brochure</Link></li>
          <li><Link className="link" href="/about/rti">Right to Information (RTI)</Link></li>
          <li><Link className="link" href="/students/statutorycommittees/anti_ragging_cell">Anti Ragging Cell</Link></li>
          <li><Link className="link" href="/students/statutorycommittees/internal_complaints_committee_icc">Internal Complaints Committee (ICC)</Link></li>
        </ul>
      </div>
      <div className="col_2">
        <h3 className="mb_15">Useful Links </h3>
		<ul className="ullist gov_links">
		<li><Link href="https://www.cci.gov.in/" target="_blank">Competition Commission of India</Link></li>
	<li><Link href="https://ili.ac.in/" target="_blank">Indian Law Institute</Link></li>
	<li><Link href="https://bombayhighcourt.nic.in/libweb/judlibindex.html" target="_blank">Bombay High Court Judges’ Library</Link></li>
	<li><Link href="https://cadindia.clpr.org.in/" target="_blank">Centre for Law &amp; Policy Research</Link></li>
		</ul>
      </div>
      <div className="col_3">
        <h3 className="mb_15">Government</h3>
        <ul className="ullist gov_links">
        <li><Link href="https://www.sebi.gov.in/" target="_blank">Securities and Exchange Board of India</Link></li>
	<li><Link href="https://www.mca.gov.in/" target="_blank">Ministry of Corporate Affairs</Link></li>
	<li><Link href="https://lawcommissionofindia.nic.in/" target="_blank">Law Commission of India</Link></li>
	<li><Link href="https://planningcommission.gov.in/" target="_blank">Planning Commission</Link></li>
        </ul>
      </div>
    </div>
    <hr/>
    <div className="secondary_links">
      <li><Link className="link" href="/schemes">Schemes</Link></li>
      <li><Link className="link" href="/act">Act</Link></li>
      <li><Link className="link" href="/accessibility_statement">Accessibility Statement</Link></li>
      <li><Link className="link" href="/tenders/tenders">Tenders</Link></li>
      <li><Link className="link" href="/policies/copyright_policy">Website Policies</Link></li>
      <li><Link className="link" href="/terms_conditions">Terms &amp; Conditions</Link></li>
      <li><Link className="link" href="/faq">FAQ</Link></li>
      <li><Link className="link" href="/feedback">Feedback</Link></li>
      <li><Link className="link" href="/help">Help</Link></li>
      <li><Link className="link" href="https://calendar.online/33293f7c86bf9ebbcd54" target="_blank">EVENT CALENDAR</Link></li>
      <li><Link className="link" href="/disclaimer">Disclaimer</Link></li>
      <li><Link className="link" href="/sitemap">Sitemap</Link></li>
      <li><Link className="link" href="/contact">Contact Us</Link></li>
    </div>
    <hr/>
    <div className="copyright">
      Copyright © 2023. NUSRL, Ranchi, National University of Study and Research in Law. All rights reserved.
      ‘This Website belongs to Department NUSRL, Ranchi National University of Study and Research in Law Government of India’ (for a Central Government Department).
      For any query regarding this website Please Contact the "Web Information Manager: registrar@nusrlranchi.ac.in"
    </div>
    <hr/>
    <div className="flyingstars">
      <span>HANDCRAFTED WITH <span className="heart">❤</span> BY
        <Link href="https://www.flyingstars.co/" target="_blank">
        <Image 
        src="/images/fsi-logo.png" 
        className='fsilogo' 
        alt="FSI Logo"
        width={20}
        height={30} 
        />
        FLYING STARS
        </Link>
        </span>
       
    </div>
  </div>
</footer>
</>

    
  )
}

export default FooterMain