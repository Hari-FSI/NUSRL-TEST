import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const knowmoreBlock = () => {
  return (
<section className="contactblock-sec">
<div className="container">
<div className="uon-intro-wayfinding uon-intro-wayfinding-light-grey">
<div className="uon-intro-wayfinding-content">
<div className="heading-sec">
     <h2>WANT TO KNOW MORE?</h2>
    </div>
<p>Please get in touch to find out how we can help you.</p>
</div>
<a className="uon-intro-wayfinding-tile uon-intro-wayfinding-tile-blue " href="#">
<div className="uon-intro-wayfinding-tile-inner">
<Image src='/images/icons/icon-11.gif' alt="Picture of the author"
       width={90}
        height={90} 
        /> 
<h3>Visit NUSRL</h3>
<p>Take a campus tour.</p>
<span className="btn-white-brd">Learn more</span>    
</div>
</a>    
<a className="uon-intro-wayfinding-tile uon-intro-wayfinding-tile-dark-grey " href="#">
<div className="uon-intro-wayfinding-tile-inner">
<Image src='/images/icons/icon-12.gif' alt="Picture of the author"
       width={90}
        height={90} 
        />
<h3>Contact Us</h3>
<p>Get in touch with us</p>
<span className="btn-white-brd">Learn more</span>      
</div>
</a>	
</div>
</div>
</section>
  )
}

export default knowmoreBlock
