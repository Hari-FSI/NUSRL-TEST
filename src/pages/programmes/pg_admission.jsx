import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const pg_admission = () => {
  const herobanner = [
    { id:1, 
      title: "PG Admission", 
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
    <div className="list_of_pdf_titles">
      <h5>Links</h5>
      <p className="active"><Link href="/programmes/pg_admission">PG Admission</Link></p>
      <p><Link href="/programmes/pg_course_description">PG Course Description</Link></p>
      <p><Link href="/programmes/pg_llm_syllabus">L.L.M. Syllabus</Link></p>
      <p><Link href="/pdf/PG-Fee-Statement-2023.pdf" target='_blank'>PG Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h5>{herobanner[0].title}</h5>
    <div>
      <p><strong>National University of Study and Research in Law, Ranchi </strong>
      <br/><strong>Admission Process of LL.M (One-Year) (PG 2016) </strong></p>

<p>Ref: NUSRL/Adm/PG/2016/01 – June 17, 2016</p>

<h3>STEP ONE</h3>

<ul><li>The Candidates, who have deposited the fee at CLAT office, are required to deposit the balance amount of Fee Rs.88,000/- (Eighty Eight Thousands) as their Fee for First Semester from June 23, 2016 – June 25, 2016 (Thursday to Saturday).</li>
	<li>Candidates are required to submit the copy of receipt of counselling Fee paid at CLAT office, RGNUL, Patiala.</li>
	<li>The Payment of Semester Fee to the University shall be treated as their confirmation regarding Admission.</li>
	<li>The Semester Fee may be submitted in one of the following ways:</li>
	<li>By cash in University’s Account No <strong>490710110003104</strong> at the Bank Counter at the University Campus.</li>
	<li>By NEFT transfer to the University Account, the details of Bank Account are mentioned below, at the time of admission an acknowledgement of NEFT should be submitted:</li>
</ul><div className="table-responsive">
<table role="presentation"><tbody><tr><td>1</td>
			<td>University’s Banker</td>
			<td>Bank of India, NUSRL Campus Branch, Ranchi</td>
		</tr><tr><td>2</td>
			<td>University’s Account Number</td>
			<td><strong>490710110003104</strong></td>
		</tr><tr><td>3</td>
			<td>IFSC Code of the Bank</td>
			<td>BKID0005900</td>
		</tr><tr><td>4</td>
			<td>Name of Account</td>
			<td>Registrar, NUSRL, Ranchi</td>
		</tr></tbody></table></div>

<p>&nbsp;</p>

<ul><li>Bank Draft of any Bank—in favor of <strong>Registrar, NUSRL, Ranchi</strong>, Payable at <strong>Ranchi</strong>. [Cheque and Cash shall not be entertained]</li>
	<li>Completion of admission formalities at University level by submitting required certificates/documents/receipt of CLAT and the balance amount of fees by the candidates.</li>
	<li>In case a candidate wants to withdraw his/her Admission at a later date before the commencement of classes he/she shall forfeit his/her Admission Fee of Rs.10,000/-.</li>
</ul><h3>STEP TWO</h3>

<ul><li>At the time of Admission the students are required to submit the Medical Certificate in the prescribed format, you may get the same from University (Office of Student Desk). For format of Medical Certificate <b>&nbsp; <a href="sites/default/files/documents/Medical-Certificate-Final.pdf" target="_blank">click here</a></b> (<strong>Size: </strong> 459 KB,<strong> Format: </strong> PDF,<strong> Language: </strong> English)</li>
	<li>Incomplete Admission Form may lead to cancellation of the offer of Admission.</li>
	<li>Students claiming Reservation in different categories must submit the required documents (both in Original and one Self Attested Photocopy) along with their duly Filled-in Admission Form.</li>
	<li>Lack of any document related to Reservation in different categories (SC, ST, OBC, BC-I, BC-II) and Residential Certificate (for students claiming the Reserved Seats from Jharkhand) from an appropriate State Authority may also lead to cancellation of the offer of Admission.</li>
	<li>The Documents referred above at no.3 must be submitted at the time of Admission otherwise the Admission shall stand cancelled.</li>
	<li>All Admission related formalities must be completed by 10 am to 4 pm from June 23, 2016 – June 25, 2016 (Thursday to Saturday). The offer of admission shall stand cancelled for students who fail to comply with the given time and date.</li>
	<li>All Admitted Candidates are required to report to the University on August 07, 2016(Sunday) between 10 am to 5 pm and collect information regarding allocation of their room in the Halls of Residence. They must check into their allotted Halls of Residence immediately after room allotment.</li>
	<li>Classes of Semester- I will be commenced on August 08, 2016 (Monday) followed by orientation program.</li>
</ul><h3>STEP THREE</h3>

<ul><li>List of Document required at the time of admission, For Detail List <strong><a href="sites/default/files/documents/List-of-Documents-for-students-PG-With-Logo.pdf" target="_blank">click here</a></strong>(<strong>Size: </strong> 86 KB,<strong> Format: </strong> PDF,<strong> Language: </strong> English)</li>
	<li>Students are required to bring certain essential things with them to check into their Hostel. For the detail List <strong><a href="sites/default/files/documents/List-of-Articles-for-students-With-Logo.pdf" target="_blank">click here</a></strong>(<strong>Size: </strong> 14 KB,<strong> Format: </strong> PDF,<strong> Language: </strong> English)</li>
	<li>For Anti-ragging Affidavit&nbsp;<strong><a href="sites/default/files/documents/anti_ragging_affidavit.pdf" target="_blank">click here</a></strong>(<strong>Size: </strong> 159 KB,<strong> Format: </strong> PDF,<strong> Language: </strong> English)</li>
</ul></div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default pg_admission
