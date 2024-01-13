import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const pg_course_description = () => {
  const herobanner = [
    { id:1, 
      title: "L.L.M. Syllabus", 
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
      <p><Link href="/programmes/pg_admission">PG Admission</Link></p>
      <p><Link href="/programmes/pg_course_description">PG Course Description</Link></p>
      <p className="active"><Link href="/programmes/pg_llm_syllabus">L.L.M. Syllabus</Link></p>
      <p><Link href="/pdf/PG-Fee-Statement-2023.pdf" target='_blank'>PG Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h5>{herobanner[0].title}</h5>
    <div >
        <h3>Course Curriculum LLM (One Year)</h3>

<div className="table-responsive">
<table><tbody><tr><th colspan="3">
			<p>Semester I</p>
			</th>
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
		</tr><tr><td colspan="3">
			<p><strong>Specialization –I</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Intellectual Property Rights</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester I</strong></p>
			</td>
		</tr><tr><td>1</td>
			<td>IPR01</td>
			<td>Copyrights</td>
		</tr><tr><td>2</td>
			<td>IPR02</td>
			<td>Trade Mark and Geographical Indication</td>
		</tr><tr><td>3</td>
			<td>IPR03</td>
			<td>Patents</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester II</strong></p>
			</td>
		</tr><tr><td>4</td>
			<td>IPR04</td>
			<td>Design and Undisclosed Information</td>
		</tr><tr><td>5</td>
			<td>IPR05</td>
			<td>WTO and TRIPS</td>
		</tr><tr><td>6</td>
			<td>IPR06</td>
			<td>E-Commerce and The Emerging Legal Framework</td>
		</tr><tr><td>7</td>
			<td>DIS02</td>
			<td>Dissertation</td>
		</tr><tr><td colspan="3">
			<p><strong>Specialization- II</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Corporate and Commercial Law</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester I</strong></p>
			</td>
		</tr><tr><td>1</td>
			<td>CCL01</td>
			<td>Banking and Insurance Law</td>
		</tr><tr><td>2</td>
			<td>CCL02</td>
			<td>Competition Law</td>
		</tr><tr><td>3</td>
			<td>CCL03</td>
			<td>Laws on securities and Financial Markets</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester II</strong></p>
			</td>
		</tr><tr><td>4</td>
			<td>CCL04</td>
			<td>International Trade law</td>
		</tr><tr><td>5</td>
			<td>CCL05</td>
			<td>Investment Law</td>
		</tr><tr><td>6</td>
			<td>CCL06</td>
			<td>Commercial Arbitration</td>
		</tr><tr><td>7</td>
			<td>DIS02</td>
			<td>Dissertation</td>
		</tr><tr><td colspan="3">
			<p><strong>Specialization – III</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Constitutional and Administrative Law</strong></p>
			</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester I</strong></p>
			</td>
		</tr><tr><td>1</td>
			<td>CAL01</td>
			<td>Center-State Relations and Constitutional Governance</td>
		</tr><tr><td>2</td>
			<td>CAL02</td>
			<td>Local Self Government and Federal Governance</td>
		</tr><tr><td>3</td>
			<td>CAL03</td>
			<td>Fundamental Rights and Directive Principles</td>
		</tr><tr><td colspan="3">
			<p><strong>Semester II</strong></p>
			</td>
		</tr><tr><td>4</td>
			<td>CAL04</td>
			<td>Media Law</td>
		</tr><tr><td>5</td>
			<td>CAL05</td>
			<td>Administrative Law</td>
		</tr><tr><td>6</td>
			<td>CAL07</td>
			<td>Election Law</td>
		</tr><tr><td>7</td>
			<td>DIS02</td>
			<td>Dissertation</td>
		</tr></tbody></table></div>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default pg_course_description