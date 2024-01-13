import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const re_evaluation_result = () => {
  const herobanner = [
    { id:1, 
      title: "Re Evaluation Result", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "End Term Re-Evaluation Result",
      link: [
        { 
          title: "Semester II", 
          pdf: "/pdf/SemII.pdf" 
        },
        { 
          title: "Semester IV ", 
          pdf: "/pdf/SemIV.pdf" 
        },
        { 
          title: "Semester VI", 
          pdf: "/pdf/SemVI.pdf" 
        },
        { 
          title: "Semester VIII", 
          pdf: "/pdf/SemVIII.pdf" 
        },
        { 
          title: "Semester X", 
          pdf: "/pdf/SemX.pdf" 
        },
        { 
          title: "LLM Semester II", 
          pdf: "/pdf/LLM-SemII.pdf" 
        }
      ]
    },
    {
      id: 2,
      name: "Repeat Re-Evaluation Result",
      link: [
        { 
          title: "Semester II", 
          pdf: "/pdf/Re-evaluationSemII.pdf" 
        },
        { 
          title: "Semester IV ", 
          pdf: "/pdf/SemIV.pdf" 
        },
        { 
          title: "Semester VI", 
          pdf: "/pdf/SemVI.pdf" 
        },
        { 
          title: "Semester VIII", 
          pdf: "/pdf/SemVIII.pdf" 
        },
        { 
          title: "Semester X", 
          pdf: "/pdf/SemX.pdf" 
        },
        { 
          title: "LLM Semester II", 
          pdf: "/pdf/LLM-SemII.pdf" 
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

export default re_evaluation_result