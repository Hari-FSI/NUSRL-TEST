import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const security_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Security Policy", 
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
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p className="active"><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
    <h4 className="mb_15">Security Policy</h4> 
    <div><p>NUSRL, Ranchi National University of Study and Research in Law India has a responsibility to protect from disclosure to unauthorized parties the personally identifiable information (name, address, date of birth, social security number, etc.) of its website users. Therefore, the NUSRL, Ranchi National University of Study and Research in Law India has adopted and implemented a website security policy to protect the account information of its website users.&nbsp;<br/>
&nbsp;&nbsp; &nbsp;<br/><strong>Notice and Disclosures:</strong><br/>
NUSRL, Ranchi National University of Study and Research in Law India will not sell, trade, nor disclose the personally identifiable information of its website users to any unauthorized third parties.</p><br/>

<p><strong>Data Quality and Access</strong>:<br/>
NUSRL, Ranchi National University of Study and Research in Law India takes all steps possible to ensure that the data on the website is accurate. If something is found to be inaccurate NUSRL, Ranchi National University of Study and Research in Law India will make every effort to correct said information as quickly as possible. If it is found to be an inaccuracy with the entire system NUSRL, Ranchi National University of Study and Research in Law India will work swiftly to correct the problem so that your web experience is as trouble-free as possible.&nbsp;</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default security_policy