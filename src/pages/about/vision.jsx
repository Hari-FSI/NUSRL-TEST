import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const vision = () => {

    const herobanner = [
        { id:1, 
          title: "Vision", 
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

    <section className="container">
<div className="text_para mt_30">
  <div className="text_para_section">
    <p>NUSRL has been established by an Act of the State Legislature prompted by the vision of the constitutional forefathers that the law,
      legal system and legal institutions have an overarching role for human, social, political and economic development of the nation.
      Law is one of the social processes having the maximum filtering capacity of societal processes is sinew for healthier growth of
      democracy and constitutional rule of law. India in the 21st century and beyond having a rich heritage of legal culture, thoughts and
      traditions needs to tread the path where the law has to act as catalyst in achieving the goals enshrined in the Constitution as well
      as see India amid one in the galaxy of developed nation.</p>
      
      <br/>
      <p>For achieving these goals enshrined in the Constitution and law being an
      instrument in achieving these goals needs a new perspective for its understanding, dissemination and structural innovations.
      Therefore, for the last two decades a new awakening of the thrust has been given to the study of law and its constitution by
      establishing National Law Universities. NUSRL obviously has been crafted to develop new and progressive orientation towards the legal studies,
      its institutions and its relationship with other sciences.</p>

      <br/>
      <p>Encapsulated in its objectives, the NUSRL is established to develop a holistic perspective of
      legal education in all its ramifications particularly advocacy, judicial and legal institutional services,
      legislation, law reforms and all the research in these areas .The social and political milieu at present
      requires an interdisciplinary approach for law and its knowledge and obviously in globalized world comparative
      analysis of the law and legal institutions cannot be avoided.</p>
  </div>
  <div className="text_para_section">
    <p>The present era and education system needed for it require a new set of responses, innovations and specializations,
      which are to be multidisciplinary in context, acquiring knowledge from across the spectrum of all other sciences,
      which to the great extent is the bedrock of modern legal education. NUSRL shall aspire to groom its students,
      researchers and intellectuals as techno-legal craftsmen where the central focus of inquiry shall stand to be outbound.
      NUSRL in this pursuit therefore, to not only develop subjects which are mandatory in pursuance of the Bar Council of
      India’s (BCI) uniform standards but would also develop technological linkages with the technological institutions specially BIT,
      Mesra in whatever filed the law and technology intercept. </p>
      
      <br/>
      <p>The University would develop knowledge and learning currently in the fields of Law and Biotechnology,
      Law and IPR, Law and Genetic Engineering, Law and Genome, Law and Information technology, Law and Medicine, Law and Economics and all such other interrelationships,
      which may be figured out in future years to come. The University would like to develop research centers for various policy related
      research especially in the fields of science and technology, economic planning and development, industrial relations and human
      resource management, banking, finance, insurance, taxation, corporate finance, capital markets, human rights,
      mines and minerals, environment, criminal law studies, agriculture, media and law.</p>
  </div>
</div>
</section>

<section className="container-fluid bg_grey mt_60">
    <div className="container mb_60">
      <h4 className="mt_60">Keeping in view the available resources and prospect of getting more funds from the State or
        the Union government the University perceives to initiate the following steps:</h4>
        
        <ol className="mt_30">
            <li>To develop undergraduate integrated five-year LLB (Hons.) Programs focusing on contemporary legal issues in fast evolving global environments. This program shall be distinctively a program of international standard to meet the new emerging domestic and global challenges.</li>
	<li>To develop postgraduate programs especially in the field of international trade, Law and Science Technology, Business Law, Corporate Law, Law and Mines &amp; Minerals, Constitutional Law and Jurisprudence Law and Poverty, Law and Human Rights, Law and Economic Development.</li>
	<li>To develop Doctoral Programs in Law and other Interdisciplinary subjects such as science and technology, economics and policy sciences.</li>
	<li>To develop the following Centers of Excellence:
	<ul><li>Center for Study and Research in Law and Panchayat Raj System;</li>
		<li>Center for Study and Research in Law and Natural Resources(Mines ,Minerals, Forests etc);</li>
		<li>Center for Advocacy of Human Rights with special focus on Tribal Rights;</li>
		<li>Center for Study and Research in Law, Science &amp; technology with special emphasis on areas where law and technology intercept such as Bio-technology, Informational Technology etc;</li>
		<li>Center for Study and Research in International Trade , International Economics Institutions(GATT,IMF,WTO,WB and other Multilaterals economic organizations );</li>
	</ul></li>
	<li>To undertake Research Projects from State and Central Governments on issues of national and international importance.</li>
	<li>To conduct a training programs for young lawyers, legal officers, judicial officers, administrative officers.</li>
	<li>To extend legal skills and knowledge to professionals from industry such as insurance, banking capital market, Information Technology, Education, Teachers, and Telecommunication etc.</li>
	<li>To aid and advice the State and Central government on diverse legal issues connected with the law at drafting, interpretation, and application stages.</li>
	<li>To establish a Legal Advocacy Clinic to provide legal aid and advice.</li>
	<li>To develop alliances with foreign University of repute for exchange of scholars and students towards dissemination knowledge and skills.</li>
</ol>
    </div>
    <br/>
</section>
<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default vision