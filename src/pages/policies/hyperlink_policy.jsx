import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const hyperlink_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Hyperlink Policy", 
      image: "/images/inner-banner.webp"
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
  <div className="pdfs_as_list">
    <div className="list_of_pdf_titles">
      <p><Link href="/policies/copyright_policy">Copyright Policy</Link></p>
      <p ><Link href="/policies/privacy_policy">Privacy Policy</Link></p>
      <p className="active" ><Link href="/policies/hyperlink_policy">Hyperlink Policy</Link></p>
      <p ><Link href="/policies/content_archival_policy">Content Archival Policy</Link></p>
      <p ><Link href="/policies/website_monitoring_plan">Website Monitoring Plan</Link></p>
      <p ><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
    <h4 className="mb_15">Hyperlink Policy</h4> 
    <div><p>We do not object to you linking directly to the information that is hosted on our site and no prior permission is required for the same. However, we would like you to inform us about any links provided to our site so that you can be informed of any changes or updations therein. Also, we do not permit our pages to be loaded into frames on your site. NUSRL, Ranchi National University of Study and Research in Law, India pages must load into a newly opened browser window of the user.</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default hyperlink_policy