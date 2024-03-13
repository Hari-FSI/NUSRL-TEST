import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const content_contribution_moderation_approval_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Content Contribution, Moderation & Approval Policy", 
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
      <p className="active"><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
    <h4 className="mb_15">Content Contribution, Moderation & Approval Policy</h4> 
    <div><p>NUSRL, Ranchi National University of Study and Research in Law India has a mechanism stating the responsibility, authorization and workflow details with regard to content publishing on the site.&nbsp;<br/>
The overall content of the website has been verified and checked thoroughly before publishing. The website also has a mechanism to ensure that the content has an appropriate authorization from within the Department before being published to the website. &nbsp;<br/>
Audit trail of content entering, approval, and publishing of each content is being maintained showing who approved and when. &nbsp;<br/>
The website of the NUSRL, Ranchi National University of Study and Research in Law India represents a single department where most content is contributed by a single set of sources. We hereby adopt a 2-tiered structure to implement COMAP requiring a minimum of 2 officials to execute the COMAP roles, viz.&nbsp;<br/>
1.&nbsp;&nbsp; &nbsp;Contributor<br/>
2.&nbsp;&nbsp; &nbsp;Moderator/Approver/Publisher</p>

<p><strong>**Note: Currently, an approved copy of the content is received by the publisher through email and the same is published on the website.</strong></p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default content_contribution_moderation_approval_policy