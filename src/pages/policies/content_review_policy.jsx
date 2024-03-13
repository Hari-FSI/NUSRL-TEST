import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const content_review_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Content Review Policy", 
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
      <p className="active" ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4 className="mb_15">Content Review Policy</h4> 
    <div><p>The contents are review as and when required by the department/Division and the revised content is published through CMS as per COMAP.</p>

<div className="table-responsive">
<table><tbody><tr><th rowspan="2"><strong>S. No</strong></th>
			<th rowspan="2"><strong>Content Element</strong></th>
			<th colspan="3"><strong>Type of Content</strong></th>
			<th><strong>Frequency of Review</strong></th>
			<th><strong>Approver</strong></th>
		</tr><tr><td><strong>Event</strong></td>
			<td><strong>Time</strong></td>
			<td><strong>Policy</strong></td>
			<td><strong>&nbsp;</strong></td>
			<td><strong>&nbsp;</strong></td>
		</tr><tr><td>1</td>
			<td>About us</td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td>Yearly<br/>
			Immediate in case of change.</td>
			<td>WIM</td>
		</tr><tr><td>2</td>
			<td>Residents</td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td>Yearly<br/>
			Immediate in case of change.</td>
			<td>WIM</td>
		</tr><tr><td>3</td>
			<td>Developer</td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td>Yearly<br/>
			Immediate in case of change.</td>
			<td>WIM</td>
		</tr><tr><td>4</td>
			<td>Land Owners</td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td>Yearly<br/>
			Immediate in case of change.</td>
			<td>WIM</td>
		</tr><tr><td>5</td>
			<td>Contact Us</td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td><strong>√</strong></td>
			<td>Yearly<br/>
			Immediate in case of change.</td>
			<td>WIM</td>
		</tr></tbody></table></div>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default content_review_policy