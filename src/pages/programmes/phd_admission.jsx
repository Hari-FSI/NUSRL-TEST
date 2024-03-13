import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const phd_admission = () => {
  const herobanner = [
    { id:1, 
      title: "Doctor of Philosophy (Ph.D)", 
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
      <p className="active"><Link href="/programmes/phd_admission">Ph.D Admission</Link></p>
      <p><Link href="/programmes/phd_course_description">Ph.D Course Description</Link></p>
      <p><Link href="/pdf/PhDFullTime-Fee Structure.pdf" target='_blank'>Fee Structure of Ph.D. (Full Time)</Link></p>
      <p><Link href="/pdf/PhDPartTimeFeeStructure.pdf" target='_blank'>Fee Structure of Ph.D. (Part Time)</Link></p>
      <p><Link href="/pdf/Fees-structure-of-PhD-Thesis submission.pdf" target='_blank'>Fees structure of Ph. D. Thesis submission </Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4>Ph.D Admission</h4>
    <div>
      <h5 className="mt_15 mb_15">National University of Study and Research in Law, Ranchi<br/>
PhD Program Admission List –&nbsp;June 30, 2016</h5>

<p><strong>Notice</strong><br/>
Following students have been shortlisted on the basis of their performance in the viva-voice held on June 30, 2016:</p>

<div className="table-responsive">
<table><tbody><tr><th>S.No.</th>
			<th>Name of the Candidate</th>
			<th>Course in which admission is offered</th>
		</tr><tr><td>1</td>
			<td>Bhavna Jha</td>
			<td>PhD Course Work</td>
		</tr><tr><td>2</td>
			<td>Aakanksha Kalia</td>
			<td>PhD Course Work</td>
		</tr><tr><td>3</td>
			<td>Sanchita Tewari</td>
			<td>PhD Course Work</td>
		</tr><tr><td>4</td>
			<td>Apoorva Roy</td>
			<td>PhD Course Work</td>
		</tr><tr><td>5</td>
			<td>Vinayak Pandey</td>
			<td>PhD Course Work</td>
		</tr></tbody></table></div>

<p><strong>Note: the above mentioned students are required to take note of the followings:</strong></p>

<ul><li>PhD program is residential. Therefore, students are required to reside in the Hostel compulsorily provided by the University during the course of their program.</li>
	<li>PhD program is time-bound program. Therefore, the students are required to complete their degree programs within the stipulated time or else they shall not be eligible for getting a degree. There is no provision for extension of the time required for the completion of the Programs.</li>
</ul>

<h5 className="mt_15 mb_15">Admission Procedure:</h5>

<ul><li>Shortlisted candidates are required to complete all admission related formalities from July 04, 2016 to July 14, 2016. <strong>Next list will be published on July 20, 2016</strong>.</li>
	<li>The candidates are required to report to the University on any of the weekdays between 11.00 am to 4.00 pm with the Bank Draft of First Semester Fee in respective courses.</li>
	<li>After depositing the fees they should collect the Admission Form from the Student Desk.</li>
	<li>They should fill-up the Admission Form and submit the same along with the copy of relevant certificates and the copy of Fee Receipt.</li>
	<li>The Admitted students are required to report to the University after completion of admission formalities and also to report the Office of the undersigned for allocation of seats in the Halls of Residence of the University.</li>
	<li>Commencement of Course work: August 08, 2016.</li>
	<li>For Fee Structure&nbsp;<strong><a href="sites/default/files/documents/Phd-fee.pdf" target="_blank">click here</a>&nbsp;</strong>(<strong>Size: </strong> 580.5 KB,<strong> Format: </strong> PDF,<strong> Language: </strong> English)</li>
</ul></div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default phd_admission