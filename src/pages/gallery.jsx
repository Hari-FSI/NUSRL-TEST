import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'


const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const gallery = () => {
  const herobanner = [
    { id:1, 
      title: "Gallery", 
      image: "/images/inner-banner.webp"
    }
  ];

  const gallerys= [
  
    {
      id: 1,
      title: "Swachhata Hi Seva Compaign",
      link: [
        { 
          title:"",
          image:"/images/gallery/g1-1.webp",
          linktaq:"g1"
        },
        { 
            title:"",
            image:"/images/gallery/g1-2.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-3.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-4.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-5.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-6.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-7.webp",
            linktaq:"g1"
          },
          { 
            title:"",
            image:"/images/gallery/g1-8.webp",
            linktaq:"g1"
          }
      ]
    },
    {
        id: 2,
        title: "15-08-2017 Photos",
        link: [
          { 
            title:"",
            image:"/images/gallery/g2-1.webp",
            linktaq:"g2"
          },
          { 
              title:"",
              image:"/images/gallery/g2-2.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-3.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-4.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-5.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-6.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-7.webp",
              linktaq:"g2"
            },
            { 
              title:"",
              image:"/images/gallery/g2-8.webp",
              linktaq:"g2"
            }
        ]
      },
    
    
   
    
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
    
    {gallerys.map((gallery) => (
  <div key={gallery.id}>
    <h4>{gallery.title}</h4>
    <div className="cards mb_30">
      {gallery.link.map((linkItem, index) => (
        <div className="card gcard" key={index}>
          <div>
            <a href={linkItem.image} data-fancybox={linkItem.linktaq}>
              <Image
                src={linkItem.image}
                alt={linkItem.title}
                width={240}
                height={360}
              />
            </a>
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


export default gallery