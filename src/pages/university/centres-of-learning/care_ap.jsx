import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const care_ap = () => {

    const herobanner = [
        { id:1, 
          title: "CARE-AP ", 
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

    <section className="un_messge container">
  <div className="text_block">
    <h4 className="mb+_15">About CARE-AP</h4>

<p>Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP)</p>

<p>Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP) was founded on 22nd April 2016, making CARE-AP the very first Animal Law Centre of the nation and a pioneer in working for the cause of Animals. The centre was created with an objective to work on protection of nature. The centre focuses on various environmental issues including wildlife conservation, biodiversity preservation, sustainable development, water conservation, deforestation, and also takes up local environmental issues related.</p>

<p>Our university is situated in Jharkhand, also known as the land of forest, thus it is our morale and social obligation to work for the conservation of flora and fauna in this region, the centre works in furtherance of this objective. We also encourage our students to research on environmental laws, animal protection laws and follows up issues related to environment and animal rights.</p>

<p>Furthermore, the centre promotes, operate and monitor the environmental activities of the university and aim to create a clean, green and environment friendly campus of NUSRL.</p>


  </div>
  <div className="img_block">
  
    <div className="image">
      <Image 
      src="/images/careap.jpg"
      alt="CARE-AP"
      width={240}
      height={360}
      />
    </div>
  
  </div>
  <hr/>
</section> 

    <section className="container">
<div className="text_para ">
  <div className="text_para_section">
  <p>At present the centre comprises of 5 Teams working on different aspect:</p>
<ul><li><strong>Event: -</strong> to organize various events including seminars, symposium, conference, lecture series, talk shows, awareness camps among others;</li>
	<li><strong>Litigation:-</strong> to ensure competent legal representation for environmental issues and issues related to animal rights in various parts of India, irrespective of the any classification;</li>
	<li><strong>Publication: -</strong> to publish materials including books, edited books, journal, research articles, papers etc. focusing on environmental issues and animal rights;</li>
	<li><strong>Public Affairs and Management (PAM):-</strong> to explore new fronts and methods for discussing the rise of environmental issues and animal rights issues among various stakeholders including engagement with legislators, judges, legal services authorities, and the general public;</li>
	<li><strong>Research: -</strong> to identify and undertake new avenues of research on the administration of the environmental issues and animal rights issues that deepens our understanding of the issues, challenges and also to find a reasonable solution to the problem. Our research activities use various methodologies including a significant emphasis on empirical work.</li>
</ul><h3>Our recent endeavour includes:</h3>

<ul><li>Organising National Seminar on Environmental Laws held on 5th June 2016 on occasion of World Environment Day,</li>
	<li>Celebrating Van Mahotsav, on 12th August 2016, where a massive plantation drive was initiated and more than 1100 sapling were planted in the university campus,</li>
	<li>Organising a National Symposium on Environmental Justice in 21st Century on 27th May 2017 and</li>
	<li>We are currently working to publish an Edited Book, on Environmental Justice in 21st Century.</li>
	<li>The centre is planning to organize various field trips for the members aiming to conduct research and study to have a practical understanding of problems related to environment.</li>
</ul><p>As a part of this initiative we have scheduled a visit to “Birsa Zoological Park” situated at Ormanjhi to conduct a study focusing on the living condition of animals, management of zoo and various other aspects.</p>

<p>Our students (Mohit and Sakshi Jamuar) have participated in Wipro-Earthian Contest and were adjudged winners and won a cash prize of Rs. 1.5 Lakh Rupees. The students also secured an internship with Wipro.</p>

<h3>Contact:</h3>

<p>Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP),</p>

<p>National University of Study and Research in Law, Ranchi</p>

<p>AT- Nagri, P.O Bukru, Kanke-Pithoria Road, Kanke, Ranchi, Jharkhand 834006</p>

<p>Email: careap@nusrlranchi.ac.in</p>

<h3>Office Bearers:</h3>

<p>Dr. Rabindra Kr. Pathak, Akash Pandey,</p>

<p>Faculty Convener Student Convener</p>

<p>Email: rabindra.pathak@nusrlranchi.ac.in Email: akash.pandey@nusrlranchi.ac.in</p>

<p>Mob No: +91-7063033448 Mob No: +91-8271852292/ Whatsapp: +91-8797777879</p>
  </div>
</div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default care_ap