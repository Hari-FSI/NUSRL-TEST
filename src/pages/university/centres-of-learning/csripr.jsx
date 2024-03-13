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
const csripr = () => {

    const herobanner = [
        { id:1, 
          title: "CSRIPR ", 
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

    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicuniversityMenu /></Suspense>
    </div>
    <div className="col-md-9  mt_30"> 
  <div className="text_block text-justify">
  <h4 className="mb_15">Centre for Study and Research in Intellectual Property Rights</h4>
  <div className=" height-auto">
      <Image 
      src="/images/csripr-img.jpg"
      alt="CSRIPR"
      width={240}
      height={360}
      />
    </div>
<p>Innovation and creativity are the premise of today’s world. The information age created abundant options in the fields of access and communication of information.&nbsp; The technology age created ample chances for creation of impossibility into possibility. The life of human being in the present day context is driven by the various vehicles covered under Intellectual Property regime such as Patents, Copyright, Designs, trademark etc. Every second of the human life is governed and covered by Intellectual Property rights either as consumer or owner. The predictions of Hindu Mythology about space, virtual presence of human beings in various places, creation of chimeras, challenging the nature etc. became reality at the cross cutting edge of science and humans. The economics started playing role behind creation/innovation.</p>

<p>The ownership and related rights over the creation were litigated among the peer group. The lack of awareness about Intellectual Property Rights leads to piracy and misappropriation.&nbsp; The free flow of knowledge is restricted by a barrier called Intellectual Property regime and recognition of ownership and rights acquired the foremost position.&nbsp;&nbsp; NUSRL established CSRIPR with a noble vision of creating a forum for training the various clusters such as scientists, lawyers, corporate, academicians, judiciary, advocates etc., who are into the circle of IPR due to their profession, trade or creative skills.&nbsp; The Centre is striving hard to reach to the society through various programmes such as seminars, workshops, awareness programmes.&nbsp; The Centre is also focusing on conducting various competitions among the student community from various fields such as law, science, engineering and management to create a common platform.&nbsp; The Centre is initially focusing on extending its academic and technical support to the IP holders in State of Jharkhand by providing consultation and awareness to the Small and Medium Scale entrepreneurs and tribal population who are repositories of vast indigenous knowledge.</p>

<h4 className="mt_30 mb_15">Seminar on World Intellectual Property Day</h4>

<p>The National University of Study and Research in Law, Ranchi commemorated World Intellectual Property Day by organizing a seminar to celebrate the effect, impact and need for IPR as well as to discuss the positive and negative connotation affiliated with the concept of IPR.&nbsp; The Key- Note Speaker was the Honorable Vice- Chancellor A.K Koul. In his speech he traced the development of TRIPS and India’s struggle in being part of the convention. Followed by this the I.G.CID Mr. Anurag Gupta spoke of how IPR may lead to complete monopolization of every aspect or dimension of life. He depicted that it would result in a world where free thought would be curbed.&nbsp; The Technical Session was started by a presentation given by Assistant Professor Nimesh Das Guru opposing the need for IPR by challenging the popular arguments in favor of IPR. He contended that there were no substantial moral grounds for protection proposed by IPR and in today’s world the stringent IPR regime is hampering rather than fostering the growth and development of new ideas. Dr. Syamala followed this by providing with a glimpse on the requisite of IPR in this day and age. The 21st century has been flooded by the Corporate houses and MNC’s as a product of globalization. Hence initially there might have been no need for IPR , however that has changed since the modern trend several companies from all over seek to explore new markets. Dr. Sreenivasa Murthy Assistant Professor of NUSRL concluded the second session. He spoke about the recent controversies pertaining to patents.&nbsp; In the latter Technical Session students from various colleges presented their papers on various issues pertaining to IPR.&nbsp; M.S Lakra, the chief guest for the valedictory session gave a succinct account of how MSME is helping the entrepreneur to protect all IPR’s for the entrepreneurial interest. He illustrated few of the schemes keeping in mind all sections in the social construct.</p>

<h4 className="mt_30 mb_15">Contact Person:</h4>

<p>Dr. M.R.S. Murthy<br />
Assistant Professor<br />
Chairman, CSRIPR</p>

<p>Mobile: 918292400250<br />
Email: csipr@nusrlranchi.ac.in<br />
Website: https://nusrliplaw.weebly.com/</p>


<p>At present the centre comprises of 5 Teams working on different aspect:</p>
<ul><li><strong>Event: -</strong> to organize various events including seminars, symposium, conference, lecture series, talk shows, awareness camps among others;</li>
	<li><strong>Litigation:-</strong> to ensure competent legal representation for environmental issues and issues related to animal rights in various parts of India, irrespective of the any classification;</li>
	<li><strong>Publication: -</strong> to publish materials including books, edited books, journal, research articles, papers etc. focusing on environmental issues and animal rights;</li>
	<li><strong>Public Affairs and Management (PAM):-</strong> to explore new fronts and methods for discussing the rise of environmental issues and animal rights issues among various stakeholders including engagement with legislators, judges, legal services authorities, and the general public;</li>
	<li><strong>Research: -</strong> to identify and undertake new avenues of research on the administration of the environmental issues and animal rights issues that deepens our understanding of the issues, challenges and also to find a reasonable solution to the problem. Our research activities use various methodologies including a significant emphasis on empirical work.</li>
</ul><h4 className="mt_30 mb_15">Our recent endeavour includes:</h4>

<ul><li>Organising National Seminar on Environmental Laws held on 5th June 2016 on occasion of World Environment Day,</li>
	<li>Celebrating Van Mahotsav, on 12th August 2016, where a massive plantation drive was initiated and more than 1100 sapling were planted in the university campus,</li>
	<li>Organising a National Symposium on Environmental Justice in 21st Century on 27th May 2017 and</li>
	<li>We are currently working to publish an Edited Book, on Environmental Justice in 21st Century.</li>
	<li>The centre is planning to organize various field trips for the members aiming to conduct research and study to have a practical understanding of problems related to environment.</li>
</ul><p>As a part of this initiative we have scheduled a visit to “Birsa Zoological Park” situated at Ormanjhi to conduct a study focusing on the living condition of animals, management of zoo and various other aspects.</p>

<p>Our students (Mohit and Sakshi Jamuar) have participated in Wipro-Earthian Contest and were adjudged winners and won a cash prize of Rs. 1.5 Lakh Rupees. The students also secured an internship with Wipro.</p>

<h4 className="mt_30 mb_15">Contact:</h4>

<p>Centre for Advocacy and Research in Environment and Animal Protection (CARE-AP),</p>

<p>National University of Study and Research in Law, Ranchi</p>

<p>AT- Nagri, P.O Bukru, Kanke-Pithoria Road, Kanke, Ranchi, Jharkhand 834006</p>

<p>Email: careap@nusrlranchi.ac.in</p>

<h4 className="mt_30 mb_15">Office Bearers:</h4>

<p>Dr. Rabindra Kr. Pathak, Akash Pandey,</p>

<p>Faculty Convener Student Convener</p>

<p>Email: rabindra.pathak@nusrlranchi.ac.in Email: akash.pandey@nusrlranchi.ac.in</p>

<p>Mob No: +91-7063033448 Mob No: +91-8271852292/ Whatsapp: +91-8797777879</p>

  </div>
 
  </div>
  </div>
</section> 



<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default csripr