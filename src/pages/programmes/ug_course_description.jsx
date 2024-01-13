import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const ug_course_description = () => {
  const herobanner = [
    { id:1, 
      title: "Course Description", 
      image: "/images/inner-banner.webp"
    }
  ];

  const cardData = [
    
      { id: 1, 
        title: "Course Description", 
        "info": [
            "National University of Study and Research in Law, Ranchi has a focused approach on managing contemporary legal issues in the fast-evolving global environment. The University offers unique five year integrated undergraduate educational programmes of B.A. LL.B.(Hons.), the main objective of which is to provide extensive knowledge base to the students of law.",
            "In the B.A. (LL.B.) programme, offered by the University, apart from the core law subjects, a student is also given the opportunity to learn the humanities subjects as well which includes subjects such as Philosophy, Sociology, Economics, History and English.",
            "Apart from this, compulsory Court Room Exercise from the very 1st semester of the Fiver Year course forms a vital part in the curriculum of the University as it helps the students to hone their mooting skills and learn court room etiquette.",
            "Class room discussions form a major part of the learning process and the teachers in the University believe in following the Socratic method of teaching which is dependent upon dialogue between the teacher and the students.",
            "Currently the University offers honors specialization in five areas, namely Constitutional Law, Criminal Law, Corporate Law, Intellectual Property Rights and International Public Law and is going to increase the number of specializations offered by it in the B.A.(LL.B.) programme, in the coming years."
        ],
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
    <div className="list_of_pdf_titles">
      <h5>Links</h5>
      <p><Link href="/programmes/ug_admission">Under Graduate</Link></p>
      <p className="active"><Link href="/programmes/ug_course_description">Course Description</Link></p>
      <p><Link href="/programmes/ug_syllabus">Syllabus</Link></p>
      <p><Link href="/programmes/ug_subject_list">Subject List</Link></p>
      <p><Link href="/pdf/UG-Fee-Statement-2023.pdf" target='_blank'>Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h5>{herobanner[0].title}</h5>
    {cardData.map((card, index) => (
  <div key={card.id}>
    {card.info.map((paragraph, paragraphIndex) => (
      <p key={paragraphIndex} className="mt_15" dangerouslySetInnerHTML={{ __html: paragraph }} />
    ))}
  </div>
))}
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default ug_course_description