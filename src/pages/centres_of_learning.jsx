import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const centres_of_learning = () => {
  const herobanner = [
    { id:1, 
      title: "Centres Of Learning", 
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
    
    <div className="list_of_pdfs " >
    
    <div><p>The University is committed in making the learning of students socially relevant. Towards this endeavor the University has established these Centres of learning and research to facilitate due research in different platforms of social and economic problems so that with these researches the students could be appraised of the prevailing situations at the ground level and some legal remedies could be provided to the needy.</p>

<h3>Centre&nbsp;for Legal Aid Programme</h3>

<p>Centre for Legal Aid and Program, NUSRL [CLAP] is a student and faculty run society with an aim to spread legal awareness and give real time effective legal aid to the people belonging to marginalized section of our society.&nbsp; CLAP was established in the very first year of the inception of the University and within this short span of three years, CLAP has run several programs, conducted seminars, workshops and legal aid camps in remote areas of Jharkhand. One of the major achievements of Centre for Legal Aid came when six member students filed an application with a prayer to be impleading as co-petitioners for bringing on record certain relevant facts for just decision in the ongoing Public Interest Writ Petition in High Court of Ranchi with respect to the allocation of land for the construction of University Campus. The Hon’ble High Court was pleased to allow the application and our student members of Centre of Legal Aid were included as a necessary party.</p>

<p>CLAP initiated a “Prison Advocacy Program” to realize the mandate of Section 436 (A) of Code of Criminal Procedure, 1973.&nbsp; According to this section a prisoner is entitled to bail if he had already spend half of the terms in prisons that he could have been awarded if he is found guilty in the end of trial. The objective of this program is to ensure that no under trail prisoners be detained beyond the maximum period of imprisonment for the alleged offence. CLAP has already secured permission from Inspector General of Prison to run this program throughout state of Jharkhand and we have already met the Jail Superintend of Central Prison at Hotwar, Ranchi to start this program from there. We are in the process of collecting data with respect to such prisoners.</p>

<p>CLAP initiated a “Prison Advocacy Program” to realize the mandate of Section 436 (A) of Code of Criminal Procedure, 1973.&nbsp; According to this section a prisoner is entitled to bail if he had already spend half of the terms in prisons that he could have been awarded if he is found guilty in the end of trial. The objective of this program is to ensure that no under trail prisoners be detained beyond the maximum period of imprisonment for the alleged offence. CLAP has already secured permission from Inspector General of Prison to run this program throughout state of Jharkhand and we have already met the Jail Superintend of Central Prison at Hotwar, Ranchi to start this program from there. We are in the process of collecting data with respect to such prisoners.</p>

<p>Clap is also conducting an empirical study at Ranchi Institute of Neuro Psychiatry and Allied Science, (RINPAS) Kanke, to understand the difference between mentally challenged criminals and a criminal with a normal mind. This study also aims to evaluate the grass root working of providing legal aid to mentally challenged persons.&nbsp; This is a long term study and we have made two visits to RINPAS to collect relevant information and we would be continuing this study in coming academic session.&nbsp; CLAP is also in consultation to build some kind of more regular association with RINPAS to work closely with them in their prison ward.</p>

<p>CLAP also attempts to organize the “Meet your Lawmaker”programme which is attended by the political big wigs and other decision-makers from bureaucratic circles. It is aimed at showcasing the deeper misunderstood realities of an administrative and political set up. Several prominent politicians likeMr. Babulal Marandi, former. Chief Minister, State of Jharkhand, Mr. C. P. Singh, Hon’ble Speaker of Jharkhand Legislative AssemblyMr. Ravindra Rai, Hon’ble Minister of Mines [former] has visited the University under this programme.</p>

<p><strong>Legal Aid Camps under CLAP</strong><br/>
CLAP has organized several camps with an aim to spread legal awareness, to understand life in the hinterland more closely and to make students aware of the actual functioning of several government run schemes. Several such camps were organized across the state of Jharkhand. CLAP team reached the Tenughat village (Bokaro District) early in the morning and proceeded to a village called Jhirki to conduct a social audit of the village. It collected relevant information to understand the demography, literacy level and actual grass root implementation of several pro poor schemes run by state and central government. The volunteers also presented anukkad-natakto make people aware of Right to Information Act, and the functioning of free Legal Aid programs. CLAP organized another legal Aid camp in association with District Legal Service Authority of Giridih. Volunteers participated in an awareness program on the issues of female feticide organized by District Legal Service Authority. In the program the villagers raised their queries that were answered by our faculty members. Some of our volunteers also made a visit to District Prison to conduct a survey on conditions of prison inmates and to observe the functioning of Jail Adalat.</p>

<p><strong>RTI Seminar</strong><br/>
CLAP conducted its first seminar on RTI. Sunil Mahto, a renowned RTI activist interacted with the students. In his session, Mr. Mahto dealt with various queries that the students raised about the method of filing an RTI application. He also shared with the students, his past experiences as an RTI activist. A Workshop was also conducted by CLAP in collaboration with HRLN on Consolidating Legal Aid Network in West Bengal and Jharkhand. The Human Rights Law Network (HRLN) is a collective of lawyers and social activists dedicated to the use of the legal system to advance human rights in India and the sub-continent.</p>

<p><strong>Blood Camp</strong><br/>
The Center has successfully organized a blood donation camp in the University premises in collaboration with the Indian Red Cross Society with Smt. Annapurna Devi, the Minister, Government of Jharkhand as the Chief Guest. The camp was aided by the Department of Health and Family Welfare, Jharkhand Medical Officers Blood Donation Vehicles wherein 100s of the University students donated blood.</p>

<h3>Centre for Study and Research in Tribal Rights (CSRTR)</h3>

<p>The Centre for Study and Research in Tribal Rights was established in the year 2013 at the National University of Study and Research in Law with the objective of initiating and conducting research study on tribal issues i.e. Land Rights, Tribal Ecosystem, Displacement of Tribal’s in Jharkhand, Livelihood of Tribal’s, customary law, changing cultural pattern among tribal’s, socio-economic profile of Primitive tribal communities and tribal development, conduct sensitization programme to create among tribal’s on specific issues like PESA, tribal education, rights and health through various IEC Methods. The CSRTR has conducted many events, both in theory and practise for the development of tribal’s.</p>

<h3>Centre for Study and Research in Child Rights (CSRCR)</h3>

<p>This Centre is an initiative to conduct research work in the field of child rights, especially the problems that abound in this part of the country, that is, the state of Jharkhand. The nature and diversity of child rights problems require a systematic and spirited research to understand and appreciate the myriad manifestations of such problems, besides endeavoring to find seeming solutions through research and study. The Centre is a step in the same direction.</p>

<h3>Centre for Study and Research in Intellectual Property Rights</h3>

<p>Innovation and creativity are the premise of today’s world. The information age created abundant options in the fields of access and communication of information.&nbsp; The technology age created ample chances for creation of impossibility into possibility. The life of human being in the present day context is driven by the various vehicles covered under Intellectual Property regime such as Patents, Copyright, Designs, trademark etc. Every second of the human life is governed and covered by Intellectual Property rights either as consumer or owner. The predictions of Hindu Mythology about space, virtual presence of human beings in various places, creation of chimeras, challenging the nature etc. became reality at the cross cutting edge of science and humans. The economics started playing role behind creation/innovation.</p>

<p>The ownership and related rights over the creation were litigated among the peer group. The lack of awareness about Intellectual Property Rights leads to piracy and misappropriation.&nbsp; The free flow of knowledge is restricted by a barrier called Intellectual Property regime and recognition of ownership and rights acquired the foremost position.&nbsp;&nbsp; NUSRL established CSRIPR with a noble vision of creating a forum for training the various clusters such as scientists, lawyers, corporate, academicians, judiciary, advocates etc., who are into the circle of IPR due to their profession, trade or creative skills.&nbsp; The Centre is striving hard to reach to the society through various programmes such as seminars, workshops, awareness programmes.&nbsp; The Centre is also focusing on conducting various competitions among the student community from various fields such as law, science, engineering and management to create a common platform.&nbsp; The Centre is initially focusing on extending its academic and technical support to the IP holders in State of Jharkhand by providing consultation and awareness to the Small and Medium Scale entrepreneurs and tribal population who are repositories of vast indigenous knowledge.</p>

<h3>Seminar on World Intellectual Property Day</h3>

<p>The National University of Study and Research in Law, Ranchi commemorated World Intellectual Property Day by organizing a seminar to celebrate the effect, impact and need for IPR as well as to discuss the positive and negative connotation affiliated with the concept of IPR. &nbsp;The Key- Note Speaker was the Honorable Vice- Chancellor A.K Koul. In his speech he traced the development of TRIPS and India’s struggle in being part of the convention. Followed by this the I.G.CID Mr. Anurag Gupta spoke of how IPR may lead to complete monopolization of every aspect or dimension of life. He depicted that it would result in a world where free thought would be curbed.&nbsp; The Technical Session was started by a presentation given by Assistant Professor Nimesh Das Guru opposing the need for IPR by challenging the popular arguments in favor of IPR. He contended that there were no substantial moral grounds for protection proposed by IPR and in today’s world the stringent IPR regime is hampering rather than fostering the growth and development of new ideas. Dr. Syamala followed this by providing with a glimpse on the requisite of IPR in this day and age. The 21st century has been flooded by the Corporate houses and MNC’s as a product of globalization. Hence initially there might have been no need for IPR , however that has changed since the modern trend several companies from all over seek to explore new markets. Dr. Sreenivasa Murthy Assistant Professor of NUSRL concluded the second session. He spoke about the recent controversies pertaining to patents. &nbsp;In the latter Technical Session students from various colleges presented their papers on various issues pertaining to IPR.&nbsp; M.S Lakra, the chief guest for the valedictory session gave a succinct account of how MSME is helping the entrepreneur to protect all IPR’s for the entrepreneurial&nbsp;interest. He illustrated few of the schemes keeping in mind all sections in the social construct.</p>
</div>
     
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default centres_of_learning