import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const board_for_regulation_of_sports = () => {
  const herobanner = [
    { id:1, 
      title: "Board for Regulation of Sports", 
      image: "/images/inner-banner.webp"
    }
  ];


  return (
    <>
    <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`,
          height: '300px',
        }}
      >
     <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container mt_60 mb_60">
  <div className="pdfs_as_list">
    
    <div className="list_of_pdfs">
    <div>
    <p className="text-center">
        <img height="359" src="/images/board-for-regulation-of-sports.png" width="612" />
        </p>
        <br/>
<p><span><span >The sports committee of the NUSRL, Ranchi is known as Board for Regulation of Sports (BROS). It works for inculcating sporting culture in the university by providing opportunity to the students to play in the different tournaments organized throughout the year. It also works for providing suitable infrastructure for the students to excel their talent in the field of sports.

</span></span></p>
<br/>
<p><span><span >The BROS has its own constitution and enjoys a quality representation from both teacher and students. The Faculty-Convenor is assisted by students from the committee consisting of Student-Convenor from 4th year, Student-Secretary from 3rd year, Student-Treasurer from 2nd year and members from all the batches.

</span></span></p>
<br/>
<p><span><span >BROS organizes many tournaments in different time of the year. The summer semester consists of Intra-University Indoor Games which includes sports like Carrom, Chess and Table Tennis. This semester also witness high quality Intra-University Volleyball Competition and Intra-University Football tournament followed up NUSRL Football Premiere League. While the winter semester consists of Intra-University Cricket Tournament followed by NUSRL Premiere League.

</span></span></p>
<br/>
<p><span><span >The university also takes part in the Inter-University sports fest once in a year, mostly in the winter semester. The contingent led by the BROS has done well in the recent past and we are keen to perform well in the upcoming tournaments.

</span></span></p>

<strong>Contact Person:</strong><br/><span><span >
</span></span><span><span >Dr. Gunjan, Assistant Professor, NUSRL, Ranchi</span></span><br/>
<span ><span ><span>Ms. Surbhi Singh, , Teaching Assistant, NUSRL, Ranchi</span></span></span><br/>

</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default board_for_regulation_of_sports