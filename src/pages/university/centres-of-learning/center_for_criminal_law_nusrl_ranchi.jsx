import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
  const DynamicuniversityMenu = dynamic(() => import('../../../components/HeaderMain/universityMenu'), {
    suspense: true,
  }) 
const center_for_criminal_law_nusrl_ranchi = () => {

    const herobanner = [
        { id:1, 
          title: "Center For Criminal Law, Nusrl Ranchi", 
          image: "/images/inner-banner.webp"
        }
      ];

  return (
    <>
    <section
    className="hero inner-banner"
    style={{
    backgroundImage: `url(${herobanner[0].image})`,
    }}
    >
    <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="un_messge container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicuniversityMenu /></Suspense>
    </div>
    <div className="col-md-9  pt_30"> 
  <div className="text_block text-justify">
  <h4 className="mt_15">About the Center</h4>
  <div className="text-center">
      <Image 
      src="/images/ccl-logo.jpg"
      alt="Chrss"
      width={240}
      height={360}
      />
    </div>
<p>With the changing times the societal norms also change and people who are part of the society have to accept this change either by way of compromise or any other way in order to adjust and make them still the part of the very same society. This led to the journey of no criminal law in uncivilized society to Penal Provisions in civilised society. Considering the quantum of resources in the nature of funds, manpower and expertise that have been committed and/or expended in pursuance to these laws and policies, it is expedient to assess and evaluate their success, study and learn from their short-comings which can be worked upon and identify areas which are yet to fall within the ambit of governmental largesse. Law is subject to change with times and the same applies to Criminal Law.</p>

<p>Center for Criminal Law was established in 2017 to study the Contemporary Issues and Challenges in Criminal Law. Center for Criminal Law has been one of the most active academics societies in the area of Criminal Law in NUSRL. This Center provides to the future lawmakers and lawyers an opportunity to understand the depth of criminal justice system and developing strategies to mitigate the threat to this system. Center promotes and encourages its students for research in the field of Criminal Law.</p>

<h4 className="mt_15">Vision of Center for Criminal Law</h4>

<p>Center strives to create an opportunity to in-depth understanding and awareness of contemporary challenges and issues of Criminal Law, make analytical assessment of provisions of Criminal Law and provide solutions and suggestions on the basis of research.</p>

<h4 className="mt_15">Mission-</h4>

<ol><li>To promote and encourage research by students and scholars on specific issues regarding offences which are still uncovered by legal guardians.</li>
	<li>To give exposure to law students to the society to understand the law and obstacles in its implementation</li>
</ol><ul><li>To analyse different laws and public policies, and seek solutions to join the loopholes which are yet not paid much attention.</li>
</ul><ol><li>To organize a platform where experts in respective fields and researchers can interact and formulate new opinions which can serve as a learning environment for the students.</li>
	<li>To bring various stakeholders like academicians, policy planners, officials, programme administrators, representatives of civil society, NGOs, media, social and development activists and practitioners to debate and discuss about criminal law and justice and inclusive development: issues, challenges and social work perspective.</li>
	<li>To provide training, research and advisory services to government, non-government and other agencies, both national and international, in policy formation and implementation.</li>
</ol><ul><li>To assist law makers in the preparation and analytical evaluation of legislations pertaining to the Criminal Law.</li>
	<li>To publish journals, books, research papers and reports contain original and primary research works by the faculty and students on issues pertaining to Criminal Law in India.</li>
</ul><h4 className="mt_15">Composition of Center-</h4>

<p>Center comprises of following wings which performs the different tasks of Center-</p>

<ol><li><strong>Research Wing –</strong> As the name suggest, the task allotted to this wing is to Research about Contemporary Issues and Challenges in Criminal Law. At present this wing is working in developing Study Materials and Modules for Center’s forthcoming workshop on “Prison Administration, Prison Reforms &amp; Rights And Entitlements Of Prisoners: National And International Perspective”.</li>
	<li><strong>Drafting Wing –</strong> Drafting Wing comprises of students and faculty members with excellent drafting skills. This wing works in editing and scrutinising abstract and research papers for its Workshops, Seminars and Journals. The wing is also allotted task of drafting an article periodically in order to publish on the official Blog of the Center. At present Drafting Wing is assisting Research Wing of the Center in developing Study Materials and Modules for Center’s forthcoming workshop on “Prison Administration, Prison Reforms &amp; Rights And Entitlements Of Prisoners: National And International Perspective”.</li>
	<li><strong>Event Organiser –</strong> This wings is consider as backbone of the Center as it is the responsibility of this Wing to organise events such as Seminars, Workshops, Panel Discussions and Guest Lectures on different issues related to Criminal Law.</li>
	<li>&nbsp;<strong>Public Affairs –</strong> Members of this wing are constantly working on establishing relations with eminent scholars, academicians, judicial and other government officers, legal service authorities, practising lawyers and general public so that these may guide and help the students in exploring Criminal Law in-depth and can get practical approach of it.</li>
	<li><strong>Information and Technology (IT) Wing –</strong> IT Wing handles digital and visual task of the Center such as managing Blog, Social Networking Pages etc.</li>
</ol><h4 className="mt_15">BRIEF OVERVIEW OF ACTIVITIES OF CENTER</h4>

<h4 className="mt_15">Past Activities</h4>

<ul><li>Center in November, 2017 i.e. in its very first year of its inception has organised a seminar on theme “Crime and Consent: A Feministic Re-visitation” where 35 participants including faculties, academicians, scholar’s, lawyers, and law students presented papers on sub themes “Consent under I.P.C.; Mohd. Farooqui Case: Revisiting “Consent”; Misreading Consent in Sexual Offence; and Marital Rape: Does Consent matter?”</li>
	<li>Center has organised guest lectures of Prof. Mrinal Satish on “IPC on Sexual Offence” and “A brief introduction of Code of Criminal Procedure, 1973.”</li>
	<li>Center has organised stimulating talks and panel discussions on various issues related to Criminal Law</li>
</ul><h4 className="mt_15">Ongoing Activities</h4>

<ul><li>Center is working to release its own journal in order to publish the research paper of different research scholars.</li>
	<li>Center on bi-monthly basis organises Panel discussions on Contemporary Issues and Challenges related to Criminal Law.</li>
	<li>Center time-to-time publishes an article on its official Blog on different issues related to Criminal Law.</li>
	<li>Center is organising “Guest Lecture Programme” under which different faculties, academicians, scholar’s, lawyers delivers lecture on different topics of Criminal Law.</li>
</ul><h4 className="mt_15">Future Activities</h4>

<ul><li>Center is going to organise a three day workshop on “Prison Administration, Prison Reforms &amp; Rights And Entitlements Of Prisoners: National And International Perspective” which is a Training Programme in the month of August where renowned academicians and professors are going to give lecture on different topics of Criminal Law to Police Officials of Jharkhand Police. The Center, at present, is developing module for the same.</li>
	<li>Center in October 2018 is again going to organise a seminar on Criminal Law issues where participants including faculties, academicians, scholars, lawyers, and law students are going to present papers.</li>
	<li>Center is soon going to invite call for papers for publication in its very first journal.</li>
	<li>&nbsp;Center will always be working in organising Panel Discussions, Guest Lectures and Stimulating Talks on different topics and issues related to Criminal Law.</li>
</ul><h4 className="mt_15">OFFICE BEARERS-</h4>

<h4 className="mt_15">Faculty Convenors:-</h4>

<p>Mr. Shubham Srivastava</p>

<p>(Asst. Prof. of Law)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>

<p>Mr. Anubhav Jha</p>

<p>(Asst. Prof. of Law)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</p>

<h4 className="mt_15">Student Advisor</h4>

<p>Mr. Gouransh Bhurrak,</p>

<p>(Student of Batch 2013-2018)</p>

<h4 className="mt_15">Student Convenor</h4>

<p>Mr. Shubhendra Deep Singh</p>

<p>(Student of Batch 2014-2019)</p>

<h4 className="mt_15">Student Co-Convenor</h4>

<p>Miss. Shreya Singh</p>

<p>(Student of Batch 2015-2020)</p>

<h4 className="mt_15">CENTER DETAILS-</h4>

<p>Email Address: – ccl@nusrlranchi.ac.in &nbsp;</p>

<p>&nbsp;</p>

  </div>
  
  </div>
  </div>
</section> 

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default center_for_criminal_law_nusrl_ranchi