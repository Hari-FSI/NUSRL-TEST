import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const attendance = () => {
  const herobanner = [
    { id:1, 
      title: "Attendance", 
      image: "/images/inner-banner.webp"
    }
  ];

  const batchs= [
  
    {
      id: 1,
      name: "SEMESTER I",
      link: [
        { 
          title1:"Section A",
          title: "Consolidated Report", 
          pdf: "/pdf/Backlog-Sem-II-Batch-2021-EconomicsII-Philosophy-II.pdf" 
        },
        { 
          title1:"Section A",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionA.pdf" 
        },
        { 
          title1:"Section B",
          title: "Consolidated Report", 
          pdf: "/pdf/Consolidated-I-SectionB.pdf" 
        },
        { 
          title1:"Section B",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionB.pdf" 
        }
      ]
    },
    {
      id: 2,
      name: "SEMESTER III",
      link: [
        { 
          title1:"Section A",
          title: "Consolidated Report", 
          pdf: "/pdf/Backlog-Sem-II-Batch-2021-EconomicsII-Philosophy-II.pdf" 
        },
        { 
          title1:"Section A",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionA.pdf" 
        },
        { 
          title1:"Section B",
          title: "Consolidated Report", 
          pdf: "/pdf/Consolidated-I-SectionB.pdf" 
        },
        { 
          title1:"Section B",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionB.pdf" 
        }
      ]
    },
    {
      id: 3,
      name: "SEMESTER V ",
      link: [
        { 
          title1:"Section A",
          title: "Consolidated Report", 
          pdf: "/pdf/Backlog-Sem-II-Batch-2021-EconomicsII-Philosophy-II.pdf" 
        },
        { 
          title1:"Section A",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionA.pdf" 
        },
        { 
          title1:"Section B",
          title: "Consolidated Report", 
          pdf: "/pdf/Consolidated-I-SectionB.pdf" 
        },
        { 
          title1:"Section B",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionB.pdf" 
        }
      ]
    },
    {
      id: 4,
      name: "SEMESTER VII ",
      link: [
        { 
          title1:"Section A",
          title: "Consolidated Report", 
          pdf: "/pdf/Backlog-Sem-II-Batch-2021-EconomicsII-Philosophy-II.pdf" 
        },
        { 
          title1:"Section A",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionA.pdf" 
        },
        { 
          title1:"Section B",
          title: "Consolidated Report", 
          pdf: "/pdf/Consolidated-I-SectionB.pdf" 
        },
        { 
          title1:"Section B",
          title: "Attendance Report Per Subject ", 
          pdf: "/pdf/I-SectionB.pdf" 
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
          <h5>{linkItem.title1}</h5>
          <p>{linkItem.title}</p>
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

export default attendance