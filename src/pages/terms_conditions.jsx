import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const terms_conditions = () => {
  const herobanner = [
    { id:1, 
      title: "Terms Conditions", 
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
    <div className="list_of_pdfs text-justify">
       <h4 className="mb_15">Terms Conditions</h4> 
       <div><p>This website is designed, developed and maintained by NUSRL, Ranchi National University of Study and Research in Law, Government of India.</p>
<p>&nbsp;</p>
<p>Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Department(s) and/or other source(s), and to obtain appropriate professional advice.</p>
<p>&nbsp;</p>
<p>Under no circumstances will this Department be liable for any expense, loss or &nbsp;damage &nbsp;including, &nbsp;without &nbsp;limitation, &nbsp;indirect &nbsp;or &nbsp;consequential &nbsp;loss &nbsp;or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.</p>
<p>&nbsp;</p>
<p>These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India.</p>
<p>&nbsp;</p>
<p>The &nbsp;information &nbsp;posted &nbsp;on &nbsp;this &nbsp;website &nbsp;could &nbsp;include &nbsp;hypertext &nbsp;links &nbsp;or pointers to information created and maintained by non-Government/private organisations. <strong>NUSRL, Ranchi National University of Study and Research in Law</strong>, Government of India&nbsp;is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the<strong>NUSRL, Ranchi National University of Study and Research in Law</strong>, Government of India website and are subject to the privacy and security policies of the owners/sponsors of the outside website.</p>
<p>&nbsp;</p>
<p><strong>NUSRL, Ranchi National University of Study and Research in Law</strong>, Government of India, does not guarantee the availability of such linked pages at all times <strong>NUSRL, Ranchi National University of Study and Research in Law</strong>, Government of India, &nbsp;cannot &nbsp;authorize &nbsp;the &nbsp;use &nbsp;of &nbsp;copyrighted &nbsp;materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website. <strong>NUSRL, Ranchi National University of Study and Research in Law</strong>, Government of India, &nbsp;does &nbsp;not &nbsp;guarantee &nbsp;that &nbsp;linked &nbsp;websites &nbsp;comply &nbsp;with Indian Government Web Guidelines.&nbsp;</p>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default terms_conditions