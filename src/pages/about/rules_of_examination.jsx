import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const rules_of_examination = () => {

    const herobanner = [
        { id:1, 
          title: "Rules of Examination", 
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
    
<h3>Appendix IV</h3>
<ol className="mt_30">
    <li>Short title and Commencement
	<ol><li>These rules may be called as Rules of Examination and Evaluation, 2010.</li>
	</ol></li>
	<li>Controller of Examination
	<ol><li>There shall be a Controller of Examination as per The National University of Study and Research in Law, Ranchi 2010 (Act 4 of 2010, Jharkhand).</li>
		<li>The Vice-Chancellor shall appoint the Controller of Examination from time to time.</li>
		<li>The Controller of Examination shall be responsible for holding of all Examinations to be conducted by the University.</li>
		<li>He shall be custodian of entire examination records.</li>
		<li>He shall be responsible for preparation and dispatch of Grade Cards. However, the Registrar shall sign notification of results.</li>
	</ol></li>
	<li>Examination Committee
	<p>There shall be a standing committee comprising of Controller of Examination as Chairman and such other members as may be appointed by the Vice-chancellor from time to time to assist and advice Controller of Examination and further perform such other functions as may be assigned by the Vice-Chancellor from time to time.</p>
	</li>
	<li>Assessment System
	<p>All examination shall consist of continuous assessment and the end-term examination. The end-term examination component will be of 50%. The scheme of continuous assessment shall be designed according to the need of teaching-learning process in the course as approved by the Faculty concerned viz. Law / Management / Science / Policy Science. The scheme of continuous evaluation shall be made known to the students at the beginning of every semester by the teacher concerned.</p>
	</li>
	<li>Grades and Grade Point
	<p>The marks secured by the students in individual courses shall be converted into Grades and Grade Points as per the following table.</p>

	<div className="table-responsive">
	<table><tbody><tr><th>SN</th>
				<th>SCORE</th>
				<th>GRADE</th>
				<th>GRADE POINT</th>
			</tr><tr><td>1</td>
				<td>90% and above</td>
				<td>O –&nbsp;Outstanding</td>
				<td>10</td>
			</tr><tr><td>2</td>
				<td>85% to 89%</td>
				<td>A+ –&nbsp;Excellent</td>
				<td>9.0</td>
			</tr><tr><td>3</td>
				<td>80% to 84%</td>
				<td>A –&nbsp;Excellent</td>
				<td>8.5</td>
			</tr><tr><td>4</td>
				<td>75% to 79%</td>
				<td>B+ –&nbsp;Very Good</td>
				<td>8.0</td>
			</tr><tr><td>5</td>
				<td>70% to 74%</td>
				<td>B –&nbsp;Very Good</td>
				<td>7.5</td>
			</tr><tr><td>6</td>
				<td>65% to 69%</td>
				<td>C+ –&nbsp;Good</td>
				<td>7.0</td>
			</tr><tr><td>7</td>
				<td>60% to 64%</td>
				<td>C –&nbsp;Good</td>
				<td>6.5</td>
			</tr><tr><td>8</td>
				<td>55% to 59%</td>
				<td>D+ – Above Average</td>
				<td>6.0</td>
			</tr><tr><td>9</td>
				<td>48% to 54%</td>
				<td>D – Average</td>
				<td>5.5</td>
			</tr><tr><td>10</td>
				<td>Below 48%</td>
				<td>E – Failure</td>
				<td>0</td>
			</tr></tbody></table></div>
	</li>
	<li><strong>Pass Grade per Semester</strong>
	<p>A student must secure at least Grade D (Grade Point = 5.5) in individual subject and in aggregate to pass.</p>
	</li>
	<li><strong>Repeat/Improvement Examinations</strong>
	<p>A student failing in not more than three subjects will be allowed to take repeat examination in the end-term component of the Course(s) in which he/she has failed. A student shall be allowed to take only one repeat examination. The grades secured at a repeat examination shall carry letter “R” against the subject in the Grade Card. Students unable to take the main examinations due to participation in Moot Court competitions or on medical grounds shall be allowed to appear in the repeat examination as first attempt. However, he/she shall not be given a second attempt and grade secured in such repeat examination shall not carry the letter “R” against the subject in Grade Card.</p>

	<p>Students will be allowed to take improvement examination in the end-term component of not more than two subjects. In case the marks secured in the improvement examination, is less than those secured in the original examination, the original marks shall stand.</p>

	<p>A student seeking repeat/improvement examinations in any subject shall apply to the Controller of Examination along with a fee of Rs. 500/- per subject by such date as notified by the Controller of Examination.</p>
	</li>
	<li><strong>Promotion to next higher semester</strong>
	<p dir="ltr" id="docs-internal-guid-d43ee89d-7fff-92ca-2fab-4c6d7fa92392">A student shall be required to pass 9 out 12 courses in a given academic year to be promoted to the next Academic year.&nbsp; However, if a student has been allowed to take repeat examination(s), he/she may be provisionally registered for the next higher session.&nbsp; In case, he/she fails to meet the requirement of the Rule (6) above, as a result of the repeat examination(s), his/her registration for the next higher academic session shall automatically stand cancelled.&nbsp; Students, who failed in more than three courses in an academic year, shall seek re-admission to the same class.&nbsp; He/she will be eligible to get a refund of fee of higher academic year as per rules.</p>
	</li>
	<li><strong>Moderation</strong>
	<p>All results shall be moderated. The moderation will be carried by committee(s) appointed by the Vice-Chancellor.</p>
	</li>
	<li><strong>Limitation</strong>
	<p>The integrated five-year course shall be completed within a maximum period of eight years. The limitation of PG courses shall be four years.</p>
	</li>
	<li><strong>Semester Grade Card</strong>
	<p>Students’ score-sheet with Cumulative Grade Point Average (CGPA) shall be communicated to the parents at the end of each semester.</p>
	</li>
	<li><strong>Maintenance of Records</strong>
	<p>The University shall maintain the Answer Sheets of the Continuous Assessments, Project Works, Memorials, Mid Term Examination and End Term Examination. However, the same shall be destroyed after three months of the declaration of the Results of Repeat Examination of every semester.</p>
	</li>
	<li><strong>Saving Clause</strong>
	<p>Notwithstanding anything contained in these rules, the decision of the Vice Chancellor shall be final on any matter not specified above but relates to supplicating Examination and Evaluation for the Under Graduate Programs.</p>
	</li>
</ol>
  </div>
</div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default rules_of_examination

