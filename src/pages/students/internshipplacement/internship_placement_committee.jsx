import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const internship_placement_committee = () => {
  const herobanner = [
    { id:1, 
      title: "Internship & Placement Committee", 
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
  <div className="pdfs_as_list text-justify">
    <div className="list_of_pdfs">
    
    <div><p>The University endeavors to develop strong inter-linkages with the industry, law firms, advocates, and regulatory bodies by organizing a six–week internship program for the students at the end of every semester. Internship Programmes are organized to acquaint students with the dynamics of the operation of law in these organizations. The Courses are designed in accordance with the above–stated vision so that the legal scholars and legal engineers that are produced are of great relevance to the contemporary needs of the society. Accordingly, the evaluation system has been evolved which consists of Moot Court Exercise (to hone their advocacy skills), continuous assessment, Research project to provide a strong and enduring knowledge base.</p>

<p>Keeping in mind the widening horizons, the University with the help of the Internship and Placement Committee ensures for arranging proper internship programs&nbsp;for the students. At the beginning of every semester, Internship applications are circulated that are needed to be duly filled and hence submitted before the Public Relations Officer. The Internship Committee, in this regard works towards its best for managing their responsibilities. The Committee mandates for the maintenance of an “Internship Diary” by each and every student of the University to keep a check on the Student and the Employer relationship. The Committee has two wings one dealing with the internships at general and the other wing which deals with the recruitment of the relevant batch i.e. Recruitment Coordination Committee (RCC).</p>

<h6 className="mt_15"> For Recruitment opportunities kindly (click here) or contact us at below mentioned contact details.</h6>

<p>Important Contacts</p>

<p>Mr. Shubham Srivastava</p>

<p>Mob : +91-8580322068</p>

<p>E-mail: recruitment@nusrlranchi.ac.in</p>

<p>&nbsp;</p>
</div>


    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default internship_placement_committee

