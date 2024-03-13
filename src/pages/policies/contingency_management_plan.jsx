import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const contingency_management_plan = () => {
  const herobanner = [
    { id:1, 
      title: "Contingency Management Plan", 
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
      <p ><Link href="/policies/hyperlink_policy">Hyperlink Policy</Link></p>
      <p ><Link href="/policies/content_archival_policy">Content Archival Policy</Link></p>
      <p ><Link href="/policies/website_monitoring_plan">Website Monitoring Plan</Link></p>
      <p ><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p className="active" ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
    <h4 className="mb_15">Contingency Management Plan</h4> 
    <div property="schema:text" className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item"><p><strong>Website Monitoring Policy in place and the website is monitored periodically to address and fix the quality and compatibility issues around the following parameters:</strong></p>

<ul><li><strong>Performance:</strong>&nbsp;Site download time is optimized for a variety of network connections as well as devices. All-important pages of the website are tested for this.</li>
	<li><strong>Functionality:</strong>&nbsp;All modules of the website are tested for their functionality. The interactive components of the site such as, feedback forms are working smoothly.</li>
	<li><strong>Broken Links:</strong>&nbsp;The website is thoroughly reviewed to rule out the presence of any broken links or errors.</li>
	<li><strong>Traffic Analysis:&nbsp;</strong>The site traffic is monitored to analyze the usage patterns as well as visitors.</li>
	<li><strong>Feedback:&nbsp;</strong>Feedback from the visitors is the best way to judge a website’s performance and make the necessary improvements. A proper mechanism for feedback is in place to carry out the changes and enhancements as suggested by the visitors.</li>
</ul><p>The Hosting Service Provider possesses state-of-the-art multi-tier security infrastructure as well as devices such as firewalls and intrusion prevention systems.</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default contingency_management_plan