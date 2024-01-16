import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const moot_court_committee = () => {
  const herobanner = [
    { id:1, 
      title: "Moot Court Committee", 
      image: "/images/inner-banner.webp"
    }
  ];


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
    
    <div className="list_of_pdfs">
    <div>
    <p className="text-center">
        <img height="359" src="/images/moot-court-20comittee.jpg" width="612" />
        </p>

<p><span><span >The Moot Court Committee at the National University of Study and Research in Law (NUSRL), Ranchi- where the art of advocacy meets excellence in legal education. Established with the firm belief that mooting is not just a competition, but a vital tool in honing legal skills, our committee has played a pivotal role in shaping NUSRL's academic landscape.</span></span></p>

<p><span><span >The committee stands as a testament to the significance of practical legal training. By fostering a culture of rigorous preparation, legal analysis, and persuasive argumentation, we have not only elevated the mooting culture within the university but also paved the way for our students to shine on national and international platforms.</span></span></p>

<p><span><span >Through meticulous guidance, research support, and mock trial sessions, we have empowered our students to compete and excel in prestigious competitions, both at home and abroad. The accolades they have earned are a testament to our commitment to nurturing the future legal luminaries. The Moot Court Committee at NUSRL, Ranchi, continues to be the beacon guiding our students towards legal brilliance, advocacy mastery, and recognition on the global stage.</span></span></p>

<p><span><span >The Moot Court Committee has organised various national level moot court competitions such as the National Trial and Advocacy Competition, NUSRL-NHRC National Human Rights Moot Court Competition etc.</span></span></p>

<pre><strong><span><span >Contact Person:
</span></span><span><span >Dr. Priya Vijay +91 93695 50018, </span></span>
<span ><span ><span>Faculty Convenor, NUSRL, Ranchi.</span></span></span></strong></pre>

<p>Email:- nusrl.mcc@gmail.com<br/>
&nbsp;</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default moot_court_committee