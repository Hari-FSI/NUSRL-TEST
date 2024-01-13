import React from 'react'
import Link from "next/link";
import Image from 'next/image'
const Academicprogrammes = () => {
  return (
    <>
    <section className="ac_progs container">
  <div>
  <div className="head"><h3>Academic Programmes</h3>
  <div className="line"><hr/></div>
  <Link href="/programmes">
  <span className="material-symbols-outlined more_arrow-filled">trending_flat</span>
 </Link>

  </div>
  <h5>Committed to transformative learning, leadership and enduring impact</h5>
</div>

  <div className="courses">
    <div className="course">
      <h5>Under Graduate Programmes</h5>
      <hr/>
      <p><Link href="/programmes/ug_admission">Under Graduate</Link></p>
      <p><Link href="/programmes/ug_course_description">Course Description</Link></p>
      <p><Link href="/programmes/ug_syllabus">Syllabus</Link></p>
      <p><Link href="/programmes/ug_subject_list">Subject List</Link></p>
      <p><Link href="/pdf/UG-Fee-Statement-2023.pdf" target='_blank'>Fee Structure</Link></p>
    </div>
    <div className="course">
      <h5>Center of post graduate studies</h5>
      <hr/>
      <p><Link href="/programmes/pg_admission">PG Admission</Link></p>
      <p><Link href="/programmes/pg_course_description">PG Course Description</Link></p>
      <p><Link href="/programmes/pg_llm_syllabus">L.L.M. Syllabus</Link></p>
      <p><Link href="/pdf/PG-Fee-Statement-2023.pdf" target='_blank'>PG Fee Structure</Link></p>
    </div>
    <div className="course">
      <h5>Doctor of Philosophy (Ph.D)</h5>
      <hr/>
      <p><Link href="/programmes/phd_admission">Ph.D Admission</Link></p>
      <p><Link href="/programmes/phd_course_description">Ph.D Course Description</Link></p>
      <p><Link href="/pdf/PhDFullTime-Fee Structure.pdf" target='_blank'>Fee Structure of Ph.D. (Full Time)</Link></p>
      <p><Link href="/pdf/PhDPartTimeFeeStructure.pdf" target='_blank'>Fee Structure of Ph.D. (Part Time)</Link></p>
      <p><Link href="/pdf/Fees-structure-of-PhD-Thesis submission.pdf" target='_blank'>Fees structure of Ph. D. Thesis submission </Link></p>
    </div>
	<div className="course">
      <h5>Certificate & Diploma Courses</h5>
      <hr/>
      <p className="active"><Link href="/programmes/diploma_admissions">Diploma Admission</Link></p>
      <p><Link href="/programmes/diploma_course_description">Diploma Course Description</Link></p>
      <p><Link href="/programmes/diploma__syllabus">Diploma Syllabus</Link></p>
      <p><Link href="/programmes/diploma_Fee_Statement">Diploma Fee Structure</Link></p>
    </div>
  </div>
</section>

    </>
  )
}

export default Academicprogrammes