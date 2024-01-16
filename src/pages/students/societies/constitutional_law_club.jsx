import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const constitutional_law_club = () => {
  const herobanner = [
    { id:1, 
      title: "Constitutional Law Club", 
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
    <div>
    <p className="text-center">
        <img height="359" src="/images/Clc_logo.jpg" width="612" />
        </p>
        <br/>
        <div>
<div>
<div>&nbsp;</div>
<p><strong>About the Club</strong></p>
<p>&ldquo;<em>The Constitution does not just protect those whose views we share; it also protects those with whose views we disagree</em>.&rdquo;</p>
<p>No Constitution can&nbsp;guarantee&nbsp;a democracy for a country. Democracy depends on the democratic attitudes and beliefs of the people of a country and the more&nbsp;people participate in a<em>&nbsp;</em>democracy, the more democratic it becomes<em>.&nbsp;</em>The fundamental right to freedom of speech and expression is regarded as&nbsp;one of the most basic elements of a healthy democracy for it allows its citizens to participate fully and effectively in the social and political process of the country.&nbsp;In fact, the freedom of speech and expression gives greater scope and meaning to the citizenship of a person extending the concept from the level of basic existence to giving the person a political and social life.</p>
<p>The Constitutional Law Club was established in the year 2019 to study the contemporary issues and its validity under the Constitution. This Club&nbsp;provides to the future lawmakers and lawyers an opportunity to understand the depth of the Constitution and provide suggestion for better functioning of the government machinery.</p>
<p><strong>Vision</strong></p>
<p>The Club strives at creating opportunity and in-depth understanding of the nuances of the Constitution. It also aims at creating a platform where students and scholars can freely exchange their views regarding the contemporary issues and provide solutions to these issues.</p>
<p><strong>Mission</strong></p>
<ol>
<li>To create a platform for discussion for the students, academicians and public scholar on the various contemporary issues and their impact on the Constitution.</li>
<li>To analyse the different laws and public policies, and seek solutions to join the loopholes which are yet not paid much attention.</li>
</ol>
<ul>
<li>To provide awareness regarding the changes brought to the Constitutions across the World and make a comparative study.</li>
</ul>
<ol>
<li>To bring various stakeholders like academicians, policy planners, officials, programme administrators, representatives of civil society, NGOs, media, social and development activists and practitioners to debate and discuss about constitutional law and inclusive development.</li>
<li>To publish journals, books, research papers and reports containing original and primary research works by the faculty and students on issues pertaining to Constitutional law.</li>
</ol>
<p><strong>Structure</strong></p>
<p>The Club will compromise of the following wings and would perform different tasks.</p>
<p><strong><em>Information and Technology (IT) Wing:&nbsp;</em></strong>As the name suggests this wing will compromise of students and faculty and their main task will be to managing the social networking groups, which would be the main platform for disseminating information regarding the contemporary changes and their impact on Constitution. It would be the backbone of this club as this club is aimed at creating a platform where experts, academicians, law scholar and students can share their views on the contemporary issues. It will also be responsible for handling the blog and social media accounts of this Club.</p>
<p><strong><em>Drafting Wing:&nbsp;</em></strong>This wing will be responsible&nbsp;wing for editing and scrutinising abstract and research papers for its Blog, Workshops, Seminars/Webinars and Journals. It will also be responsible for drafting the articles for the blogs and other social media platform.</p>
<p><strong><em>Research Wing:&nbsp;</em></strong>This wing will compromise of students and faculty and it will carry on research in the field of Constitutional law, so as to disseminate knowledge regarding new developments in this field. They will also be responsible for organisation of panel discussions and seminar/webinar on the various constitutional developments.</p>
<p><strong>Office Bearers-</strong></p>
<p><strong>Faculty Convener-</strong></p>
<p>Dr. Rabindra Kumar Pathak (Assistant Professor, NUSRL).</p>
<p><strong>Student Convener-</strong></p>
<p>Shreya Mishra (Batch 2017-22)</p>
<p>&nbsp;</p>
<p><strong>Contact details</strong><strong>:</strong></p>
<p><strong>Email Address-&nbsp;</strong><a href="mailto:clclub@nusrlranchi.ac.in">clclub@nusrlranchi.ac.in</a></p>
<p><strong>LinkedIn:</strong>&nbsp;<a href="https://www.linkedin.com/company/constitutional-law-club">https://www.linkedin.com/company/constitutional-law-club</a></p>
<p>&nbsp;</p>
</div>
</div>

</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default constitutional_law_club