import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const recruitment_co_ordination_commitee = () => {
  const herobanner = [
    { id:1, 
      title: "Recruitment Co-Ordination Commitee", 
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
    
    <div>
<p>The Recruitment and Placement Committee (RPC) is the official body at NUSRL that overlooks and coordinates the recruitment of the graduating batch of students in the University. The RPC comprising of final year students works under the supervision of Faculty Convenors to develop a robust platform for the interaction of prospective recruiters and the interested students. For efficient functioning, the RPC consists of three teams- Placement Coordination Team (PCT), Industrial Relations Team (IRT), and Alumni Relations Team (ART). The teams work in concert to assist the recruitment process and organize webinars, interactive talks and skill development workshops in collaboration with key industry experts.</p>

<p >The following committee members can be contacted by any prospective employer:</p>

<p ><b>Lokesh Mewara</b> : +91-9479865242</p>

<p ><b>Piyush.</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : +91-6200822079</p>

<p >&nbsp;</p>

<p >The Faculty Convenor can be contacted in case of any dispute arising in the course of recruitment process: </p>

<p ><b>Shubham Shrivastava</b></p>

<p >Faculty Convenor, Recruitment and Placement Committee, NUSRL, Ranchi. </p>

<p >Contact:. 8580322068</p>

<p >E-mail: recruitment@nusrlranchi.ac.in</p>

<p>&nbsp;</p>

<h4 className="mb_15">Other faculty members:</h4>

<p><b>Ms. Satyabrata Mishra</b></p>

<p>Contact: 7873287171</p>

<p><b>Mr. Shantanu Braj Choubey</b></p>

<p>Contact: 9430285036</p>

<p>&nbsp;</p>

<p ><a href="https://www.linkedin.com/in/recruitment-and-placement-cell-nusrl-7126701b9">CLICK HERE</a> for Profile</p>
</div>


    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default recruitment_co_ordination_commitee