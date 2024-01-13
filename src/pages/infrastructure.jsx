import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const infrastructure = () => {
  const herobanner = [
    { id:1, 
      title: "Infrastructure", 
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
    
    <div className="list_of_pdfs " >
    
     
    <ul><li>N.U.S.R.L. provides the best infrastructure to its students. The campus has the latest state-of-the-art facilities that help the students learn all the fundamentals in a comfortable and composed manner. A finely crafted Wi-Fi enabled campus allows students to always stay connected, which is appropriate for studies. The professional environment encourages mindsets to evolve. The advanced multimedia senate, with air-conditioned rooms, enhances the quality of academic delivery.</li>
	<li>At the University Hostels, we aim to provide a warm, homely atmosphere. For the majority of students, going to the College will mean living away from the home for the very first time. Setting in quickly and making new friends are important first steps of College life.&nbsp; The bustling and eventful life here ensures that there is enough to keep the students engaged. In addition, the holistic and comfortable ambiance here contributes significantly to superior academic performance.</li>
	<li>The aesthetically designed Mess serves a nourishing buffet to the students and faculty. Both quality and quantity are at the utmost priority. The mess is a neat and tidy place to have the best meals. The tender for availing the mess services at the University is provisioned to be renewed every year however the same Caterers can continue to provide their services in case the University renews their licence for another year. Such renewing of the licence depends of the student’s choice of opting to the same caterers.</li>
	<li>&nbsp;24 x 7 Security: Keeping in view the safety of students, the campus is been monitored round the clock by professional security personnels.</li>
	<li>&nbsp;Wi-Fi Facility is available throughout the University Campus including the Hostels, the Library and the Administrative Block. The students are provided with a unique login name and password to make access to the internet. The University at present allots 100 Kbps speed per student.</li>
	<li>Facility of Sports has been kept into mind. Here at N.U.S.R.L., we provide excellent leisurely activities. The Students can involve themselves playing outdoor sports like Cricket, Football, Badminton and Volley-Ball. Various Indoor sports are also facilitated by the University towards the benefit of the students. Carom, Chess, Table Tennis, etc have been made available.</li>
	<li>Medical Facilities are also ensured on behalf of the student welfare. Services of Rajendra Institute of Medical Sciences (RIMS) and Abdul Razaque Ansari Memorial Weavers Trust Hospital (an Apollo Hospital franchisee) at any time can be availed and the University provides for an ambulance facility. Orchid Medical Centre, Nagarmal Modi Seva Sadan and Guru Nanak Hospital are other renowned health care centers. All the above mentioned hospitals are at considerable distance from the University and do not take much time to reach.</li>
	<li>The Hi-tech Computer Browsing Centre at the University helps students to gain quick insights into quick possibilities. They have access to computer lab facilities in a safe and supervised environment.&nbsp; The staff at the IT lab is available for resolving nominal technical issues that one may face in his/her laptop and hence provides the students with professional guidance.</li>
	<li>The NUSRL Library is a major presence on the campus. Its collections cover the full range of academic disciplines offered. It offers an excellent collection of legal volumes, periodicals, journals, magazines, databases, audio-video tapes, CD and DVDs, research reports and other digital resources. The rich collection has been carefully selected from a number of National and International resources. Students have access to all books related to legal studies and can demand books for further understanding and reference.</li>
</ul>
     
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default infrastructure