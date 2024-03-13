import React,{ useState, useEffect} from "react";
import { TweenLite } from 'gsap';
import Link from "next/link";
import Image from 'next/image'

const Aboutsection = () => {

  useEffect(() => {
    const images = document.querySelectorAll('.parallax-img');
    const windowHeight = window.innerHeight;
  
    const handleScroll = () => {
      const windowScrollTop = window.scrollY;
  
      if (windowScrollTop === 0) {
        TweenLite.to(images, 1.2, {
          yPercent: 0,
          ease: 'power1.easeIn',
          overwrite: 0
        });
      } else {
        images.forEach(image => {
          const elementOffsetTop = image.offsetTop;
          const elementHeight = image.offsetHeight;
          const velocity = parseFloat(image.dataset.velocity || 2);
  
          if (windowScrollTop + windowHeight > elementOffsetTop && windowScrollTop < elementOffsetTop + elementHeight) {
            TweenLite.to(image, 1.2, {
              yPercent: (windowScrollTop + windowHeight - elementOffsetTop) / windowHeight * velocity,
              ease: 'power1.easeIn',
              overwrite: 0
            });
          }
        });
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
    <section className="about container">
    <div className="img_block">
    <Image 
    className="abt1-img parallax-img"
    src="/images/about-1.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    data-velocity="-10"
    />
    <Image 
    className="abt1-img parallax-img"
    src="/images/about-2.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    data-velocity="-20"
    />
    </div>
    <div className="text_block justify wow animate__fadeIn" data-wow-duration="3s">
    <h3>About NUSRL</h3>
    <h6>National University of Study and Research in Law, Ranchi (NUSRL) was established by Act No. 4 of Jharkhand State Assembly in 2010.</h6>
    <p className="text-justify">The University has subsequently been recognized by University Grants Commission (UGC) in September 2011 u/s 22, u/s 12B in the year 2018 of the UGC Act of 1956 and Bar Council of India (BCI). The University started functioning in September 2010. At present, the University has more than 600 students on rolls in the undergraduate course. The University has been included as member of the CLAT w.e.f. CLAT 2012.</p>
    <p><Link href="/about/vision">Read More <span className="material-symbols-outlined btn-symbols-arrow"> chevron_right </span></Link></p>
    </div>
    </section>  
    </>
  )
}

export default Aboutsection