import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const copyright_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Copyright Policy", 
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
      <p className="active"><Link href="/policies/copyright_policy">Copyright Policy</Link></p>
      <p><Link href="/policies/privacy_policy">Privacy Policy</Link></p>
      <p ><Link href="/policies/hyperlink_policy">Hyperlink Policy</Link></p>
      <p ><Link href="/policies/content_archival_policy">Content Archival Policy</Link></p>
      <p ><Link href="/policies/website_monitoring_plan">Website Monitoring Plan</Link></p>
      <p ><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
       <h4 className="mb_15">Copyright Policy</h4> 
    <p className="mt_15">Material featured on this Portal may be reproduced free of charge after taking proper permission by sending a mail to us. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorisation to reproduce such material must be obtained from the departments/copyright holders concerned.</p>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default copyright_policy