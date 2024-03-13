import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const nusrl_ranchi_wins_the_7th_wipro_earthian_award = () => {
  const herobanner = [
    { id:1, 
      title: "NUSRL Ranchi wins the 7th wipro earthian award", 
      image: "/images/inner-banner.webp"
    }
  ];


  return (
    <>
    <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`
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
    <p className="text-center mb_15">
        <img height="359" src="/images/sports.png" width="612" />
        </p>
       
<p>The National Law varsity of Jharkhand (NUSRL) won 7th Wipro Earthian award, students of&nbsp; 4th semester of NUSRL namely Sakshi Jamuar and Mohit participated in the prestigious Wipro Earthian Awards-2017, they were awarded a cash prize of 1.5 Lacs and a winning trophy by&nbsp;&nbsp;Azim Premji, Chairman of tech and consulting giant company Wipro Ltd,&nbsp;in a&nbsp;&nbsp;special day-long event at the company’s Sarjapur campus,&nbsp;Bangaluru&nbsp;on Saturday, the 3rd of February 2018.&nbsp;There were 1,200 submissions for this award from across the country. From these, an independent jury recognized eleven school and eight college teams as winning entries.&nbsp;Teams from colleges submitted their entries on the themes of water, waste and mobility in the urban sustainability reporting format. Participating students were asked to frame an essay from the viewpoint of a journalist in context of urban sustainability&nbsp;(water, waste management and urban mobility). Students of NUSRL choose&nbsp;the topic of water crisis prevailing in the city Ranchi, and highlighted the alarming conditions. For this they conducted extensive research in the city and nearby areas of the town including major dams and rivers of Ranchi, particularly the Harmu river which is in dismal state. They also highlighted the law related to water and its conservation, and how the present crisis can be restrain through legal intervention.The winning team will also be involved in a long-term, continuous, collaborative engagement with Wipro, and its expert sustainability partners to enable a deeper understanding of issues pertaining to sustainability.&nbsp;&nbsp;Dr. Rabindra Pathak of NUSRL played an important role as a guide faculty for this project.</p>

<p>The winning college teams are CEPT University, Pune, Indian Institute of Management (IIM-Kozhikode), Kerala, National University of Study and Research in Law, Ranchi, Jharkhand, SASTRA University, Thanjavur, Tamil Nadu.&nbsp;The Vice-chancellor in charge of NUSRL Shree Gautam Kumar Chaudhary congratulated the winners.</p>
</div>
    </div>
    </div>
    </section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default nusrl_ranchi_wins_the_7th_wipro_earthian_award