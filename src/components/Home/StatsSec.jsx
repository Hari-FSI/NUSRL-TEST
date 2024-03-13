import React,{ useState, useEffect} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Image from "next/image";
const StatsSec = () => {
    const[counterOn, setCounterOn] = useState(false);  
  return (
<>  
<ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >  
 <section className="container numbers">
  
  <article className="wow animate__flipInX" data-wow-duration="2s">    
  <div className="text_block">
      <h4>{counterOn && <CountUp start={0} end={63} duration={2} delay={0} />}+</h4>
      <h6>Acres of area in the center of the city </h6>
    </div>
  </article>
  <article className="border wow animate__flipInX" data-wow-duration="2s">    
    <div className="text_block">
      <h4>{counterOn && <CountUp start={0} end={13} duration={2} delay={0} />}+</h4>
      <h6>Years of experience</h6>
    </div>
  </article>
  <article className="border wow animate__flipInX" data-wow-duration="2s">    
    <div className="text_block">
      <h4>{counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}+</h4>
      <h6>Students passed out</h6>
    </div>
  </article>
  <article className="wow animate__flipInX" data-wow-duration="2s">    
    <div className="text_block">
      <h4>{counterOn && <CountUp start={0} end={11} duration={2} delay={0} />}+</h4>
      <h6>Programmes to study</h6>
    </div>
  </article>
 


</section>
</ScrollTrigger>
</>

  )
}

export default StatsSec