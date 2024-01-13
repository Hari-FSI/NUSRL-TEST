import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const ug_subject_list = () => {
  const herobanner = [
    { id:1, 
      title: "Subject List", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "BATCH 2018-23",
      link: [
        { 
          title: "Compulsory Subjects I - VI", 
          pdf: "/pdf/2018-23-Compulsory-Subjects1-6-Sem.pdf" 
        },
        { 
          title: "Compulsory Subjects VII - X", 
          pdf: "/pdf/2018-23-Compulsory-Subjects7-10Sem.pdf" 
        },
        { 
          title: "Elective Subjects", 
          pdf: "/pdf/List-of-Electives.pdf" 
        }
      
      ]
    },
  
    {
      id: 2,
      name: "BATCH 2019-24",
      link: [
        { 
          title: "Compulsory Subjects I - VI", 
          pdf: "/pdf/2018-23-Compulsory-Subjects1-6-Sem.pdf" 
        },
        { 
          title: "Compulsory Subjects VII - X", 
          pdf: "/pdf/2018-23-Compulsory-Subjects7-10Sem.pdf" 
        },
        { 
          title: "Elective Subjects", 
          pdf: "/pdf/List-of-Electives.pdf" 
        }
      ]
    }
  ]

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
      <p ><Link href="/programmes/ug_admission">Under Graduate</Link></p>
      <p><Link href="/programmes/ug_course_description">Course Description</Link></p>
      <p><Link href="/programmes/ug_syllabus">Syllabus</Link></p>
      <p className="active"><Link href="/programmes/ug_subject_list">Subject List</Link></p>
      <p><Link href="/pdf/UG-Fee-Statement-2023.pdf" target='_blank'>Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs " >
    
     
    {batchs.map((batch) => (
  <div key={batch.id}>
     <h5>{batch.name}</h5>
    <div className="cards mb_30">
      {batch.link.map((linkItem) => (
        <div className="card programee-card" key={linkItem.id}>
          <h5>{linkItem.title}</h5>
          <div>
            <Link className="btn-blue-brd" href={linkItem.pdf} target="_blank">
              <span className="material-symbols-outlined">visibility</span>
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
))}
     
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default ug_subject_list