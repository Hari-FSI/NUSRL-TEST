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
    <div>
<footer>
<div className="container-fluid">
<div className="footer-t">
  <div className="row">
    <aside className="col-md-3 col-sm-12 pull-right">
    <div className="in-block">
      <address>
      <div className="navbar-header">  
      <div className='div-table'>
      <aside className='image-cell'>
      <Image
      className='logo'
      src="/images/logo.png"
      alt="logo"
       width={70}
       height={65} 
       />
      </aside>
      <aside className='txt-cell'>
      <h1>NUSRL, Ranchi</h1>
      <p>National University of Study and Research in Law</p>
      </aside>
      <Link className="link" href="/"></Link>
      </div>
      </div>
      <div className="clearfix"></div>
        <p><FontAwesomeIcon icon={faMapMarker} /> Nagri, PO : Bukru, PS : Kanke Kanke Pithoria Road, Kanke Ranchi, Jharkhand – 834006</p>
        
      </address>
      <ul className='social'>
<li><strong>Follow Us</strong> : &nbsp;<Link href='#' className="link" > <FontAwesomeIcon icon={faFacebook} /></Link></li>
</ul> 
    </div>  
    </aside>

    <aside className="col-md-3 col-sm-6">
    <div className="in-block">
      <ul className="ullist">
      <li><Link className="link" href="/">Internship &amp; Placement Committee</Link></li>
      <li><Link className="link" href="/">Recruitment Brochure</Link></li>
      <li><Link className="link" href="/">Right to Information (RTI)</Link></li>
      <li><Link className="link" href="/">Anti Ragging Cell</Link></li>
      <li><Link className="link" href="/">Internal Complaints Committee (ICC)</Link></li>
      </ul>
    </div>  
    </aside>

    <aside className="col-md-3 col-sm-6">
    <div className="in-block">
    <ul className="ullist gov_links">
    <li><Link className="link" href="/">Common Law Admission Test</Link></li>
    <li><Link className="link" href="/">Competition Commission of India</Link></li>
    <li><Link className="link" href="/">Indian Law Institute</Link></li>
    <li><Link className="link" href="/">Bombay High Court Judges’ Library</Link></li>
    <li><Link className="link" href="/">Centre for Law &amp; Policy Research</Link></li>
    </ul>
    </div>  
    </aside>

    <aside className="col-md-3 col-sm-6">
    <div className="in-block">
    <ul className="ullist gov_links">
    <li><Link className="link" href="/">Supreme Court Of India</Link></li>
    <li><Link className="link" href="/">Securities and Exchange Board of India</Link></li>
    <li><Link className="link" href="/">Ministry of Corporate Affairs</Link></li>
    <li><Link className="link" href="/">Law Commission of India</Link></li>
    <li><Link className="link" href="/">Planning Commission</Link></li>
   </ul>
    </div>  
    </aside>
<div className="clearfix"></div>

    <aside className="col-md-12 col-sm-12 middlelinks text-center">
    <ul className="inline">

    <li><Link className="link" href="/">Schemes</Link></li>
    <li><Link className="link" href="/">Act</Link></li>
    <li><Link className="link" href="/">Accessibility Statement</Link></li>
    <li><Link className="link" href="/">Tenders</Link></li>
    <li><Link className="link" href="/">Website Policies</Link></li>
    <li><Link className="link" href="/">Terms &amp; Conditions</Link></li>
    <li><Link className="link" href="/">FAQ</Link></li>
    <li><Link className="link" href="/">Feedback</Link></li>
    <li><Link className="link" href="/">Help</Link></li>
    <li><Link className="link" href="/">EVENT CALENDAR</Link></li>
    <li><Link className="link" href="/">Disclaimer</Link></li>
    <li><Link className="link" href="/">Sitemap</Link></li>
    <li><Link className="link" href="/">Contact Us</Link></li>
  </ul>
        </aside>


<aside className="col-md-12 copy-ryt">
<div className="in-block">
  <p>Copyright © 2023. NUSRL, Ranchi, National University of Study and Research in Law. All rights reserved.</p>
  <p>‘This Website belongs to Department NUSRL, Ranchi National University of Study and Research in Law Government of India’ (for a Central Government Department).</p>
  <p>For any query regarding this website Please Contact the "Web Information Manager: registrar@nusrlranchi.ac.in"</p>
</div>
</aside>

<aside className="col-md-12 copy-ryt">
<div className="in-block">
      <p>
      <span>HANDCRAFTED WITH <span className="heart">&#10084;</span> BY 
      <a href="https://www.flyingstars.co/" target="_blank">
      <Image 
      src="/images/fsi-logo.png" 
      className='fsilogo' 
      alt="logo"
      width={20}
      height={30} 
      />
      FLYING STARS 
      </a>
      </span>
      </p>
</div>
</aside>

  </div>
</div>
</div>
</footer>



<div id='success-pop' className='modal fade pop-up-sec success-pop' role='dialog'>
  <div className='modal-dialog' role='document'>
    <div className='modal-content'>
      <div className='modal-body'>
        <button type='button' className='close' data-dismiss='modal'>&times;</button>
        <div className='clearfix'></div>
         <div className='succfail-box succ'>
            <h2 className='pop-headng text-center'>Success !</h2>
           
            <p>Thank you for sharing your feedback. <br/> <span> Our team will get back to you at the earliest </span></p>
            </div>   
      </div>
    </div>
</div>
</div>	

    </div>
  )
}

export default FooterMain