import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const scholarship = () => {
  const herobanner = [
    { id:1, 
      title: "Scholarship", 
      image: "/images/inner-banner.webp"
    }
  ];

  const scholarships= [
  
    {
      id: 1,
      link: [
        { 
          title: "Guideline ", 
          pdf: "/pdf/GUIDELINES-FOR-SCHOLARSHIP.pdf",
          target:"_self" 
        },
        { 
          title: "Application Form", 
          pdf: "/pdf/Application-Form.pdf",
          target:"_self" 
        },
        { 
          title: "tt", 
          pdf: "/pdf/National-Universityof-Study-Research-in-LawRanchi20230217.pdf",
          target:"_self" 
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
    
    <div className="list_of_pdfs " >
    
     
    {scholarships.map((scholarship) => (
  <div key={scholarship.id}>
     <h4>{scholarship.name}</h4>
    <div className="cards mb_30">
      {scholarship.link.map((linkItem) => (
        <div className="card card4" key={linkItem.id}>
          <h5>{linkItem.title}</h5>
          <div>
            <Link className="btn-blue-brd" href={linkItem.pdf} target={linkItem.target}>
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

export default scholarship