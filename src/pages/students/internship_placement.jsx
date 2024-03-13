import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const internship_placement = () => {
  const herobanner = [
    { id:1, 
      title: "Internship Placement", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "",
      link: [
        { 
          title: "Internship Committee ", 
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "Placement Committee", 
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "Statistics", 
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "Recruitment Brochure  ", 
          pdf: "javascript:void(0)",
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
    
    <div className="list_of_pdfs " >
    
     
    {batchs.map((batch) => (
  <div key={batch.id}>
     <h4>{batch.name}</h4>
    <div className="cards mb_30">
      {batch.link.map((linkItem) => (
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

export default internship_placement