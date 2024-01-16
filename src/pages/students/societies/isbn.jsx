import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const isbn = () => {
  const herobanner = [
    { id:1, 
      title: "ISBN (Initiative by Students for Books in NUSRL)", 
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

    <div><h3 className="mb_30 text-center">Initiative by Students for Books in NUSRL</h3>

<p className="text-center"><img src="/images/ISBN-Logo.jpg" /></p>

<p><strong>INTRODUCTION</strong></p>

<p>I.S.B.N (Initiative by Students for Books in NUSRL) is a campus-based initiative which aims at providing a parallel pool of educational, recreational and community resources and reading materials to the students of the university. This is a unique opportunity to bring the untapped resources present within the university to optimal utilization. It is a Book Bank run by the students and for the students.</p>

<p><br/><strong>HOW IT WORKS?</strong></p>

<ul><li>This is a well-framed process wherein we intend to collect books from the students of the university which they are not currently using.</li>
	<li>These books will be put up in the ISBN room for other students to issue and use. Issuing a book shall be subject to a nominal charge of Rs 10 per week.</li>
	<li>For anyone who lends a book to the I.S.B.N. there is an incentive that out of every 10Rs their book earns, he/she/hex shall be entitled to 5Rs, the leftover 5Rs shall be used for functioning of I.S.B.N.</li>
	<li>There will be proper database which will keep a record of the books and their owners.</li>
	<li>The owners are entitled to withdraw their books at any given point. It shall be the liability of the maintenance team to return the books in the shortest time period to the owners, if claimed back.</li>
	<li>S.B.N. shall be responsible for the proper maintenance of all the books in possession.</li>
	<li>All the financial transactions shall be properly recorded and maintained by the official ‘Treasurer’. These accounts shall be audited by appointed Faculty Auditor.</li>
	<li>There shall be a weekly operative who will be responsible for the functioning during his\her\hex tenure. The operative will also be entitled for a salary subject to the efficient functioning of I.S.B.N.</li>
	<li>The operative shall be appointed on first come first serve basis.</li>
</ul><p>&nbsp;</p>

<p><strong>GENERAL RULES</strong></p>

<ol><li>Anyone who uses I.S.B.N. shall identify themselves as a part of the university. Outside students are not permitted to use I.S.B.N. unless there is a special permission [Students shall carry their university identity cards as a proof of their identification]</li>
	<li>Smoking, eating and drinking is strictly forbidden inside I.S.B.N.</li>
	<li>Mobile phones or personal stereos should not be used in I.S.B.N.</li>
	<li>Any person leaving I.S.B.N. shall, if called upon to do so by the operative, present for inspection all books and property being carried out from I.S.B.N.</li>
	<li>The maintenance team accepts no responsibility for any personal property brought into I.S.B.N.</li>
	<li>Books which are issued for, must be returned on or before the last date as allotted. Sending reminders to defaulters is not obligatory on the part of I.S.B.N.</li>
	<li>The maximum time period for which one can issue the book is one week. Books will not be re-issued unless special circumstances.</li>
	<li>One issuer can only issue a maximum of two books in one week.</li>
	<li>For any book issued, the issuer has to pay a nominal charge of Rs.10 per week. If the issuer returns it before the expiration of the time period, he is liable pay the same amount.</li>
	<li>In case of any default in returning the book, the person shall be liable to pay the late fine.<br/><strong>[NOTE: Late fee of Rs 5/-/day/book would be charged from all the issuers who retain book(s) beyond the due date]</strong></li>
	<li>The issuer should check the fitness of the document/book before getting it issued. Any discrepancy should be brought to the notice of the operative who will put necessary remarks on the document before issuing. The issuer will be held responsible for any defect/damage found at the time of return of the document, if not recorded on it earlier, and will be liable to pay the penalty as decided.</li>
	<li>In case the book is lost or misplaced and not returned after ample reminders, the issuer will be charged cost of the book plus the fine.</li>
	<li>&nbsp;Any kind of misappropriation with the property of I.S.B.N. including the books in possession shall be subjected to the Disciplinary Committee or Proctorial Board of the University.</li>
	<li>In any case of conflict the decision taken by the I.S.B.N. team along with the concerned authority shall be considered final.</li>
</ol></div>

    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}


export default isbn