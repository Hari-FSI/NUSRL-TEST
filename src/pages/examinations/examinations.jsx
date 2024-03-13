import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const examinations = () => {
  const herobanner = [
    { id:1, 
      title: "Examination Backlog", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "SEMESTER II ",
      link: [
        { 
          title: "Section A & Section B", 
          pdf: "/pdf/Backlog-Sem-II-Batch-2021-EconomicsII-Philosophy-II.pdf" 
        }
      ]
    },
  
    {
      id: 2,
      name: "SEMESTER IV",
      link: [
        { 
          title: "Section A & Section B", 
          pdf: "/pdf/Backlog-Sem-IV-Family-Law-L-H-Socio-Loc-I.pdf" 
        }
      ]
    },
    {
      id: 3,
      name: "SEMESTER VI",
      link: [
        { 
          title: "Section A & Section B", 
          pdf: "/pdf/Backlog-Sem-VI-Batch-2019-P-I-L-Lab-IPR-CompanyLaw.pdf" 
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

export default examinations