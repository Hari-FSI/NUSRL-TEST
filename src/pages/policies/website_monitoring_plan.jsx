import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const website_monitoring_plan = () => {
  const herobanner = [
    { id:1, 
      title: "Website Monitoring Plan", 
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
      <p  className="active"><Link href="/policies/website_monitoring_plan">Website Monitoring Plan</Link></p>
      <p ><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify" >
    <h4 className="mb_15">Website Monitoring Plan</h4> 
    <div>
     
	<h5 className="mb_15 mt_30">Application Performance</h5>
	<p><strong>Frequency:</strong> Monthly</p>

<p>Application performance and availability is monitored using tool www.monitor.us. This tool provides specific Status Report generated on every day and user can get this report on his mail ID in 24 hr.</p>

<p>Tools Used: https://www.monitor.us/</p>
<h5 className="mb_15 mt_30">Website Availability &amp; Performance</h5>
<p><strong>Frequency:</strong> Monthly</p>

<p>Host of servers including web server and database servers are monitored periodically to ensure high availability and smooth functioning of the website.</p>

<p>Tools Used: https://tools.pingdom.com</p>

<h5 className="mb_15 mt_30">Hyperlink Accuracy</h5>
<p><strong>Frequency:</strong> Quarterly</p>

<p><strong>Process:</strong> While uploading of the content concerned division, checks for the hyperlink content posted on the page.</p>

<p>Administrator monthly visits all hyperlinks in the content on all the pages and tests the Hyperlink for the accuracy. The result is then shared with the respective uploading division.</p>

<p><strong>Tools Used</strong>: Manually</p>

<p><strong>Audit Log:</strong> The logs are maintained for audit purposes</p>

<h5 className="mb_15 mt_30">Presence on the National Portal</h5>
<p><strong>Frequency</strong>: Quarterly</p>

<p><strong>Process:</strong> Administrator monthly visits the national portal for presence of the content /details related to Amritsar Development Authority &amp; (Government of Punjab) website.</p>

<p>Web information Manager should register all the relevant documents with National Portal and is advised to visit National Portal www.india.gov.in for the same, and he should ensure that all the Citizen Services, Forms, Documents and Schemes are registered with the respective repositories over the National Portal. He is advised to use various mode of communication i.e. email, Letter, etc. with National Portal admin department to update their services and schemes over the national portal.</p>
<h5 className="mb_15 mt_30">Broken link Check</h5>
<p><strong>Frequency:</strong> Quarterly</p>

<p>Broken links on the website are checked every Quarterly using the W3C developer tool from “Link Checker” by using broken link checker and also ‘page not found’ errors are investigated. These ‘Page not found’ errors are reported to web information manager and WIM assign to the developer for immediate resolution.</p>

<p>Also, the Website is checked for dead links and these are removed immediately from the website. Validation of both internal and external URLs is done fortnightly.</p>

<p><strong>Tools Used:</strong> Link Checker</p>

<p><strong>Audit Log: </strong>The logs are maintained in the Admin Panel for audit purposes</p>

<h5 className="mb_15 mt_30">Feedback</h5>
<p>For details please visit section B.12</p>

<h5 className="mb_15 mt_30">About Us Section</h5>
<p>For details please visit section B.10</p>

<h5 className="mb_15 mt_30">Tenders and Recruitment</h5>
<p>For details please visit section B.11</p>
<h5 className="mb_15 mt_30">Virus Scan Mechanism</h5>
<p>For details please visit section B.13</p>
<h5 className="mb_15 mt_30">Backup, Storage/Restoration Defacement Policy</h5>
<p>For details please visit section D</p>
<h5 className="mb_15 mt_30">Log Maintain Policy</h5>
<p>We only keep the record of tools mentioned on above section. Apart from that we never maintained any log history. Related to content and updating please refer clause 5.2.1 and 5.2.3.</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default website_monitoring_plan