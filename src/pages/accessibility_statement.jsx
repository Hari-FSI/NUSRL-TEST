import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const accessibility_statement = () => {
  const herobanner = [
    { id:1, 
      title: "Accessibility Statement", 
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
    <div><p>We are committed to ensure that the website of India is accessible to all users irrespective of device in use, technology or ability. It has been built, with an aim, to provide maximum accessibility and usability to its visitors. As a result, this website can be viewed from a variety of devices, such as web-enabled mobile devices, wap phones, PDAs, and so on.</p>

<p>We have put in our best efforts to ensure that all information on this website is accessible to people with disabilities. For example, a user with visual disability can access this website using technologies, such as screen readers and magnifiers.</p>

<p>We also aim to be standards compliant and follow principles of usability and universal design, which should help all visitors of this website.</p>

<p>Part of the information in the Portal is also made available through links to external Web sites. External Web sites are maintained by the respective departments who are responsible for making these sites accessible.</p>

<p>&nbsp;</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default accessibility_statement
