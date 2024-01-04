import React,{ useState, useEffect} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Image from "next/image";
const StatsSec = () => {
    const cloudinaryImageLoader = ({ src }) => {
        return `https://res.cloudinary.com/dfp2t4ccy/image/upload/v1689971100/${src}`;
    };
    const[counterOn, setCounterOn] = useState(false);  
  return (

    <section className="counter-one">
    <div className="counter-one-wrap">
   
        <div className="container">
      
            <div className="counter-one__bottom">
<div className="">
<div className="col-xl-12">
<ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
  <ul className="col-xl-12 counter-one__list list-unstyled">
    <li className="counter-one__single wow fadeInUp" data-wow-delay="100ms">
      <div className="counter-one__icon">
       <Image className="icon" 
       src="/images/icons/count-icon-1.gif" 
       alt="Picture of the author"
        width={80}
        height={80} 
       />
      </div>
      <div className="counter-one__content">
        <h3 className="count-text">
        {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />} 
        </h3>
        <p className="counter-one__text">Acres </p>
      </div>
    </li>
    <li className="counter-one__single wow fadeInUp" data-wow-delay="200ms">
      <div className="counter-one__icon">
      <Image className="icon" 
      src="/images/icons/count-icon-2.gif" 
      alt="Picture of the author"
        width={80}
        height={80} 
       />
      </div>
      <div className="counter-one__content">
        <h3 className="count-text">
        {counterOn && <CountUp start={0} end={6} duration={2} delay={0} />} +
        </h3>
        <p className="counter-one__text">Years</p>
      </div>
    </li>
    <li className="counter-one__single wow fadeInUp" data-wow-delay="300ms">
      <div className="counter-one__icon">
      <Image className="icon" 
      src="/images/icons/count-icon-3.gif" 
      alt="Picture of the author"
        width={80}
        height={80} 
       />
      </div>
      <div className="counter-one__content">
        <h3 className="count-text">
        {counterOn && <CountUp start={0} end={400} duration={2} delay={0} />} +
        </h3>
        <p className="counter-one__text">Students</p>
      </div>
    </li>

    <li className="counter-one__single wow fadeInUp" data-wow-delay="300ms">
      <div className="counter-one__icon">
      <Image className="icon" 
      src="/images/icons/count-icon-4.gif" 
      alt="Picture of the author"
        width={80}
        height={80} 
       />
      </div>
      <div className="counter-one__content">
        <h3 className="count-text">
        {counterOn && <CountUp start={0} end={11} duration={2} delay={0} />} +
        </h3>
        <p className="counter-one__text">Programmes</p>
      </div>
    </li>
  </ul>

 
  </ScrollTrigger>
</div>
</div>
</div>
        </div>
    </div>
</section>

  )
}

export default StatsSec