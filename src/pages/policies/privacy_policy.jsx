import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const privacy_policy = () => {
  const herobanner = [
    { id:1, 
      title: "Privacy Policy", 
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
      <p className="active" ><Link href="/policies/privacy_policy">Privacy Policy</Link></p>
      <p ><Link href="/policies/hyperlink_policy">Hyperlink Policy</Link></p>
      <p ><Link href="/policies/content_archival_policy">Content Archival Policy</Link></p>
      <p ><Link href="/policies/website_monitoring_plan">Website Monitoring Plan</Link></p>
      <p ><Link href="/policies/content_contribution_moderation_approval_policy">Content Contribution, <br/>Moderation & Approval Policy</Link></p>
      <p ><Link href="/policies/content_review_policy">Content Review Policy</Link></p>
      <p ><Link href="/policies/contingency_management_plan">Contingency Management Plan</Link></p>
      <p ><Link href="/policies/security_policy">Security Policy</Link></p>
    </div>
    <div className="list_of_pdfs text-justify">
    <h4 className="mb_15">Privacy Policy</h4> 
    <div><p>Thanks for visiting the website of NUSRL, Ranchi National University of Study and Research in Law, India, &nbsp;and reviewing our privacy policy.&nbsp;</p>

<p>We collect no personal information, like names or addresses, when you visit our website. If you choose to provide that information to us, it is only used to fulfill your request for information.</p>

<p>We do collect some technical information when you visit to make your visit seamless. &nbsp;The section below explains how we handle and collect technical information when you visit our website.</p>

<p>Information collected and stored automatically:</p>

<p>When you browse, read pages, or download information on this website, we automatically gather and store certain technical information about your visit. This information never identifies who you are. &nbsp;The &nbsp;information &nbsp;we &nbsp;collect and store about your visit is listed below:</p>

<p>1. The &nbsp;Internet domain of your service provider &nbsp;(e.g. &nbsp;mtnl.net.in) and IP address (an IP address is a number that is automatically assigned to your computer whenever you are surfing the web) from which you access our website.</p>

<p>2. The type of browser &nbsp;(such as &nbsp;Firefox, &nbsp;Netscape, &nbsp;or &nbsp;Internet Explorer) and operating system (Windows, Linux) used to access our site.</p>

<p>3. The date and time you access/accessed our site.</p>

<p>4. The pages/URLs you have visited, and</p>

<p>5. If you reached this website from another website, the address of that referring website.</p>

<p>This information is only used to help us make the site more useful for you. With this data, we learn about the number of visitors to our site and the types of technology our visitors use. &nbsp;We never track or record information about individuals and their visits.</p>

<p>Cookies:</p>

<p>When &nbsp;you &nbsp;visit some &nbsp;websites, &nbsp;they &nbsp;may download &nbsp;small &nbsp;pieces &nbsp;of &nbsp;software &nbsp;on your computer/browsing device known as cookies. &nbsp;Some cookies collect personal information to recognize your computer in the future. &nbsp;We only use non-persistent cookies or “per-session cookies”.</p>

<p>Per-session &nbsp;cookies &nbsp;serve &nbsp;technical &nbsp;purposes, &nbsp;like &nbsp;providing &nbsp;seamless &nbsp;navigation through &nbsp;this &nbsp;website. &nbsp;These &nbsp;cookies &nbsp;do &nbsp;not &nbsp;collect &nbsp;personal &nbsp;information &nbsp;on users and they are deleted as soon as you leave our website. The cookies do not permanently record data and they are not stored on your computer’s hard drive. The cookies are stored in memory and are only available during an active browser session. Again, once you close your browser, the cookie disappears.</p>

<p>If you send us personal information:</p>

<p>We do not collect personal information for any purpose other than to respond to you (for example, to respond to your questions or provide subscriptions you have chosen). If you choose to provide us with personal information, like filling out a Contact Us form, with an e-mail address or postal address, we use that information to &nbsp;respond &nbsp;to &nbsp;your &nbsp;message, &nbsp;and &nbsp;to &nbsp;help &nbsp;you &nbsp;get &nbsp;the &nbsp;information &nbsp;you &nbsp;have requested. We only share the information you give us with another Government agency if your question relates to that agency, or as otherwise required by law.</p>

<p>Our website never collects information or creates individual profiles for commercial marketing. While you must provide an email address for a localized response to any &nbsp;incoming &nbsp;questions &nbsp;or &nbsp;comments &nbsp;to &nbsp;us, &nbsp;we &nbsp;recommend &nbsp;that &nbsp;you &nbsp;do &nbsp;NOT include any other personal information.</p>

<p>Site Security:</p>

<p>1. For &nbsp;site &nbsp;security &nbsp;purposes &nbsp;and &nbsp;to &nbsp;ensure &nbsp;that &nbsp;this &nbsp;service &nbsp;remains available &nbsp;to all &nbsp;users, &nbsp;this &nbsp;Government &nbsp;computer &nbsp;system &nbsp;employs commercial software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.&nbsp;</p>

<p>2. Except for authorized law &nbsp;enforcement &nbsp;investigations, &nbsp;no &nbsp;other attempts are made to identify individual users or their usage habits. Raw data logs are used for no other purposes and are scheduled for regular deletion.</p>

<p>3. Unauthorized attempts to upload information or change information on this service are strictly prohibited and may be punishable under the Indian IT Act (2000).</p>

<p>Thanks &nbsp;for &nbsp;visiting &nbsp;website &nbsp;of NUSRL, Ranchi National University of Study and Research in Law,India, &nbsp;and &nbsp;reviewing &nbsp;our privacy policy.</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default privacy_policy