import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const mid_term_project_result = () => {
  const herobanner = [
    { id:1, 
      title: "Mid Term Repeat Results", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "",
      link: [
        { 
          title: "SEMESTER II", 
          titlesub:"All Subjects Result  ",
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "SEMESTER IV", 
          titlesub:"All Subject Result",
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "SEMESTER VI", 
          titlesub:"All Subjects Result  ",
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "SEMESTER VIII", 
          titlesub:"All Subject Result",
          pdf: "javascript:void(0)",
          target:"_self" 
        },
        { 
          title: "SEMESTER X", 
          titlesub:"All Subject Result",
          pdf: "javascript:void(0)",
          target:"_self" 
        }
      ]
    },
    {
      id: 2,
      name: "LL.M.  PROJECT RESULT",
      link: [
        { 
          title: "SEMESTER  II", 
          titlesub:"All Subject Result",
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

export default mid_term_project_result