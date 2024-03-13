import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Image from 'next/image'
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
  const DynamicaboutMenu = dynamic(() => import('../../../components/HeaderMain/aboutMenu'), {
    suspense: true,
  }) 

import jsonData from '../../../pages/api/keypersonnel.json';
const Vice_Chancellor = () => {
    const herobanner = [
        { id:1, 
          title: "Vice Chancellor", 
          image: "/images/inner-banner.webp"
        }
      ];

    const vicechancellor = jsonData.vicechancellor[0];
  return (
    <>
    <section className="message-banner">
    <Image 
      src="/images/faculty/vc-banner.png"
      alt={vicechancellor.title}
      width={240}
      height={420}
      />  
    <div className="hero_text">   
    <div className="container">
    <h4>{vicechancellor.name}</h4>
    <h6 className="mt_15">{vicechancellor.title}</h6>
    </div>
    </div>
    </section>
    <section className="breadcrumb">
       <div className="container"> 
      <div className="row">  
      <div className="col-md-8 col-sm-8 col-xs-8">
      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">About</Link></li>
      <li><Link href="/">Keypersonnel</Link></li>
      <li>{herobanner[0].title}</li>
      </ul>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-4 text-right">
      <a href="/"> <img className="scial-icon" alt="linkedin" loading="lazy" src="/images/icons/social-linkedin.png" /></a>
      </div>
      </div>
      </div>
      </section>
   

      <section className="container page-sec mt_30 txt-justfy">
    <div className="row">
    <div className="col-md-10 col-md-offset-1 mt_30">
    
    <p>NUSRL has been established by an Act of the State Legislature prompted by the vision of the constitutional forefathers that the law,
      legal system and legal institutions have an overarching role for human, social, political and economic development of the nation.
      Law is one of the social processes having the maximum filtering capacity of societal processes is sinew for healthier growth of
      democracy and constitutional rule of law. India in the 21st century and beyond having a rich heritage of legal culture, thoughts and
      traditions needs to tread the path where the law has to act as catalyst in achieving the goals enshrined in the Constitution as well
      as see India amid one in the galaxy of developed nation.</p>
  
      <p>For achieving these goals enshrined in the Constitution and law being an
      instrument in achieving these goals needs a new perspective for its understanding, dissemination and structural innovations.
      Therefore, for the last two decades a new awakening of the thrust has been given to the study of law and its constitution by
      establishing National Law Universities. NUSRL obviously has been crafted to develop new and progressive orientation towards the legal studies,
      its institutions and its relationship with other sciences.</p>

      <p>Encapsulated in its objectives, the NUSRL is established to develop a holistic perspective of
      legal education in all its ramifications particularly advocacy, judicial and legal institutional services,
      legislation, law reforms and all the research in these areas .The social and political milieu at present
      requires an interdisciplinary approach for law and its knowledge and obviously in globalized world comparative
      analysis of the law and legal institutions cannot be avoided.</p>
   
    <p>The present era and education system needed for it require a new set of responses, innovations and specializations,
      which are to be multidisciplinary in context, acquiring knowledge from across the spectrum of all other sciences,
      which to the great extent is the bedrock of modern legal education. NUSRL shall aspire to groom its students,
      researchers and intellectuals as techno-legal craftsmen where the central focus of inquiry shall stand to be outbound.
      NUSRL in this pursuit therefore, to not only develop subjects which are mandatory in pursuance of the Bar Council of
      India’s (BCI) uniform standards but would also develop technological linkages with the technological institutions specially BIT,
      Mesra in whatever filed the law and technology intercept. </p>
      
      <p>The University would develop knowledge and learning currently in the fields of Law and Biotechnology,
      Law and IPR, Law and Genetic Engineering, Law and Genome, Law and Information technology, Law and Medicine, Law and Economics and all such other interrelationships,
      which may be figured out in future years to come. The University would like to develop research centers for various policy related
      research especially in the fields of science and technology, economic planning and development, industrial relations and human
      resource management, banking, finance, insurance, taxation, corporate finance, capital markets, human rights,
      mines and minerals, environment, criminal law studies, agriculture, media and law.</p>

    </div>
    </div>
</section>


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default Vice_Chancellor