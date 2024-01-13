import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const end_term_results = () => {
  const herobanner = [
    { id:1, 
      title: "End Term Results", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "",
      link: [
        { 
          title: "SEMESTER I", 
          titlesub:"All Subject Result",
          pdf: "/pdf/Semester-I.pdf" 
        },
        { 
          title: "SEMESTER III", 
          titlesub:"All Subject Result",
          pdf: "/pdf/Semester-III.pdf" 
        },
        { 
          title: "Semester V", 
          titlesub:"All Subject Result",
          pdf: "/pdf/Semester-V.pdf" 
        },
        { 
          title: "Semester VII", 
          titlesub:"All Subject Result",
          pdf: "/pdf/Semester-VII.pdf" 
        },
        { 
          title: "SEMESTER IX", 
          titlesub:"All Subject Result",
          pdf: "/pdf/Semester-IX.pdf" 
        }
      ]
    },
    {
      id: 2,
      name: "LLM End Term Result",
      link: [
        { 
          title: "Semester I", 
          titlesub:"All Subject Result",
          pdf: "/pdf/PG-Semester-I.pdf" 
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
    
     
    {batchs.map((batch) => (
  <div key={batch.id}>
     <h4>{batch.name}</h4>
    <div className="cards mb_30">
      {batch.link.map((linkItem) => (
        <div className="card card4" key={linkItem.id}>
          <h5>{linkItem.title}</h5>
          <p>{linkItem.titlesub}</p>
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

export default end_term_results