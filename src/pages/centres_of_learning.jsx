import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const centres_of_learning = () => {
  const herobanner = [
    { id:1, 
      title: "Centres Of Learning", 
      image: "/images/inner-banner.webp"
    }
  ];

  const centersData = [
    { id:1, 
      title: "CARE-AP",
      image: "/images/careap.jpg",
      info: "Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP) was founded on 22nd April 2016, making CARE-AP the very first Animal Law Centre of the nation and a pioneer in working for the cause of Animals. The centre was created with an objective to work on protection of nature. The centre focuses on various environmental issues including wildlife conservation, biodiversity preservation, sustainable development, water conservation, deforestation, and also takes up local environmental issues related.",
      link: "/university/centres-of-learning/care_ap"
    },
    { id:2, 
      title: "CHRSS", 
      image: "/images/chrss-logo.png",
      info: "Centre for Human Rights and Subaltern Studies (CHRSS) was created with an objective to work on protection of human rights. The centre focuses on various human rights issues. The idea of human rights maintains that there are certain rights universal, inherent and inalienable in nature. Universality believes that these rights are given to all. Inalienability ensures that it can never be compromised except by the procedure established by law. These rights are also of inherent nature and are the backbone of any human rights treaty. The aim of Centre is to commit for achieving the goals of Social Justice enshrined in our Preamble and to achieve this goal, the members of the committee promises to engage in discourse, seminar, Legal Aid so as to ensure that we contribute even some percent back to the society.",
      link: "/university/centres-of-learning/chrss"
    },
    { id:3, 
      title: "CLAP", 
      image: "/images/clap.jpg",
      info: "CLAP Organized Nukkad Natak on 5th March, 2019",
      link: "/university/centres-of-learning/clap"
    },
    { id:4, 
      title: "CSRCR",
      image: "/images/ccr-logo.png",
      info: "Center for Child Rights: A distinguished 'Center of Learning' under the aegis of National University of Study and Research in Law, Ranchi in collaboration with UNICEF.",
      link: "/university/centres-of-learning/csrcr"
    },
    { id:5, 
      title: "CSRIPR", 
      image: "/images/csripr-logo.png",
      info: "Innovation and creativity are the premise of today’s world. The information age created abundant options in the fields of access and communication of information.  The technology age created ample chances for creation of impossibility into possibility.",
      link: "/university/centres-of-learning/csripr"
    },
    { id:6, 
      title: "Center for Criminal Law", 
      image: "/images/ccl-logo.jpg",
      info: "Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP) was founded on 22nd April 2016, making CARE-AP the very first Animal Law Centre of the nation and a pioneer in working for the cause of Animals.",
      link: "/university/centres-of-learning/center_for_criminal_law_nusrl_ranchi"
    }
  ];
  

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
    <div className="centers_list">
    
    <div className="center_cards">
      {centersData.map((card) => (
        <div className="card" key={card.id}>
          <div className="row">
          <aside className="col-md-3 img-sec">
            <div className="image height-auto">
            <Image 
            src={card.image} // Remove quotes around card.image
            alt={card.title} // Remove quotes around card.title
            width={240}
            height={360}
            />
          </div>
          </aside>

          <aside className="col-md-9 content-sec">
          <h5>{card.title}</h5>
          <div className="info">
            <p>{card.info}</p>
          </div>
          <div className="text-right">
          <Link className="btn-blue-brd" href={card.link} target="_blank">
            Read More  <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          </div>
          </aside>  
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

export default centres_of_learning