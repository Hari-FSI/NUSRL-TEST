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
      <p><Link href="/programmes/phd_admission">Ph.D Admission</Link></p>
      <p className="active"><Link href="/programmes/phd_course_description">Ph.D Course Description</Link></p>
      <p><Link href="/pdf/PhDFullTime-Fee Structure.pdf" target='_blank'>Fee Structure of Ph.D. (Full Time)</Link></p>
      <p><Link href="/pdf/PhDPartTimeFeeStructure.pdf" target='_blank'>Fee Structure of Ph.D. (Part Time)</Link></p>
      <p><Link href="/pdf/Fees-structure-of-PhD-Thesis submission.pdf" target='_blank'>Fees structure of Ph. D. Thesis submission </Link></p>
    </div>
    <div className="list_of_pdfs">
    <h4 className="mb_15">Ph.D Course Description</h4>
    <div className="table-responsive">
<table role="presentation"><tbody><tr><td colspan="3"><strong>Ph.D Course Work (Semester I)</strong></td>
		</tr><tr><td><strong>SN</strong></td>
			<td><strong>Code</strong></td>
			<td><strong>Subject (Compulsory Papers)</strong></td>
		</tr><tr><td>1</td>
			<td>R01</td>
			<td>Research Methodology and Legal Writing</td>
		</tr><tr><td>2</td>
			<td>R02</td>
			<td>Law and Justice in a globalizing world</td>
		</tr><tr><td>3</td>
			<td>R03</td>
			<td>Comparative Public Law</td>
		</tr></tbody></table></div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default phd_admission