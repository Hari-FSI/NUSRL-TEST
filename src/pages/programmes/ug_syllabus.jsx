import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const ug_syllabus = () => {
  const herobanner = [
    { id:1, 
      title: "Syllabus", 
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
      <p><Link href="/programmes/ug_admission">Under Graduate</Link></p>
      <p><Link href="/programmes/ug_course_description">Course Description</Link></p>
      <p  className="active"><Link href="/programmes/ug_syllabus">Syllabus</Link></p>
      <p><Link href="/programmes/ug_subject_list">Subject List</Link></p>
      <p><Link href="/pdf/UG-Fee-Statement-2023.pdf" target='_blank'>Fee Structure</Link></p>
    </div>
    <div className="list_of_pdfs">
    <h5>{herobanner[0].title}</h5>
    <div className="node__content clearfix details-page-content" tabindex="0">
    
    <div property="schema:text" className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">

<h6  className="mt_15 mp_15" >B.A. LL.B (Hons.) Program</h6>

<div className="table-responsive">
<table><tbody><tr><th><strong>S.N.</strong>
&nbsp;
    </th>
    <th>
    <strong>Name of the Courses</strong>
    </th>
    <th>
   <strong>S.N.</strong>
    </th>
    <th>
   <strong>Name of the Courses</strong>
    </th>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;</strong><strong>Semester I</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>&nbsp;</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>Pol. Science I #</td>
    <td>5</td>
    <td>Contract I *</td>
</tr><tr><td>2</td>
    <td>Economics I &nbsp;#</td>
    <td>6</td>
    <td>Law of Torts including CPA And Motor Vehicles*</td>
</tr><tr><td>3</td>
    <td>Philosophy I #</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>4</td>
    <td>English I</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="4">
    <p><strong>Semester II</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>English II</td>
    <td>5</td>
    <td>Contract II including Specific Relief*</td>
</tr><tr><td>2</td>
    <td>Pol. Science II #</td>
    <td>6</td>
    <td>Constitution I*</td>
</tr><tr><td>3</td>
    <td>Economics II #</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>4</td>
    <td>Philosophy I I#</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="4">
    <p><strong>Semester III</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>Psychology I #</td>
    <td>4</td>
    <td>Family Law I*</td>
</tr><tr><td>2</td>
    <td>History I #</td>
    <td>5</td>
    <td>Law of crimes I*</td>
</tr><tr><td>3</td>
    <td>Sociology I #</td>
    <td>6</td>
    <td>Constitution II*</td>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;</strong><strong>Semester IV</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>Psychology II #</td>
    <td>4</td>
    <td>Family Law II*</td>
</tr><tr><td>2</td>
    <td>History II #</td>
    <td>5</td>
    <td>Law of crimes II*</td>
</tr><tr><td>3</td>
    <td>Sociology II #</td>
    <td>6</td>
    <td>CPC and Limitation*</td>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;</strong><strong>Semester V</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>Jurisprudence*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>2</td>
    <td>Administrative Law*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>3</td>
    <td>Property Law*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>4</td>
    <td>Law of Evidence*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Commercial transaction $</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>Labour law I*</td>
</tr><tr><td colspan="4">
    <p><strong>Semester VI</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>Environmental Law*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>2</td>
    <td>Company Law*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>3</td>
    <td>International Law*</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>4</td>
    <td>IPR I$</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Interpretation of statutes $</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>Labour Law II*</td>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;Semester VII</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>IPR II</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>2</td>
    <td>Law of taxation *</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>3</td>
    <td>Law of Health &amp; Medicine $</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>4</td>
    <td>Law of Arbitration And ADR (Clinical Paper I)</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Honours I</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>Honours II</td>
</tr><tr><td colspan="4">
    <p><strong>Semester VIII</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>B.A. Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Honors Courses</strong></p>
    </td>
</tr><tr><td><strong>&nbsp;</strong></td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>Law of Taxation II*</td>
</tr><tr><td><strong>&nbsp;</strong></td>
    <td><strong>&nbsp;</strong></td>
    <td>2</td>
    <td>Law of Information Technology &nbsp;$</td>
</tr><tr><td><strong>&nbsp;</strong></td>
    <td><strong>&nbsp;</strong></td>
    <td>3</td>
    <td>Tribal and Customary Law</td>
</tr><tr><td><strong>&nbsp;</strong></td>
    <td><strong>&nbsp;</strong></td>
    <td>4</td>
    <td>Mining Law $</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Honours III</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>Honours IV</td>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;</strong><strong>Semester IX</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>&nbsp;</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>Drafting Pleading &amp; Conveyancing Clinical (Paper II)</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>2</td>
    <td>Forest &amp; Natural Resource Law $</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>3</td>
    <td>Seminar Paper I</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>4</td>
    <td>Seminar Paper II</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Honours V</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>Honours VI</td>
</tr><tr><td colspan="4">
    <p><strong>&nbsp;</strong><strong>Semester X</strong></p>
    </td>
</tr><tr><td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Courses</strong></p>
    </td>
    <td>
    <p><strong>S.N.</strong></p>
    </td>
    <td>
    <p><strong>Law Honors Courses</strong></p>
    </td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>1</td>
    <td>Professional Ethics &amp;&nbsp; Bar Bench Relation (Clinical Paper III)</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>2</td>
    <td>Seminar Paper III</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>3</td>
    <td>Seminar Paper IV</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>4</td>
    <td>Honours VII</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>5</td>
    <td>Honours VIII</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>6</td>
    <td>(Clinical Paper IV ) Legal Aid/Moot Court Practice</td>
</tr></tbody></table></div>

<h6  className="mt_15 mp_15" >Specialization Modules</h6>

<div className="table-responsive">
<table role="presentation"><tbody><tr><td>
    <p><strong>Sn</strong></p>
    </td>
    <td>
    <p><strong>Code</strong></p>
    </td>
    <td>
    <p><strong>Subject + Papers</strong></p>
    </td>
    <td>
    <p><strong>Hons.</strong></p>
    </td>
    <td>
    <p><strong>Semester</strong></p>
    </td>
</tr><tr><td colspan="5">
    <p><strong>Corporate Law Hons.</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>CLH101</td>
    <td>Banking and Insurance Laws</td>
    <td>Hons. I</td>
    <td>VII</td>
</tr><tr><td>2</td>
    <td>CLH102</td>
    <td>Competition Law and Policy</td>
    <td>Hons. II</td>
    <td>VII</td>
</tr><tr><td>3</td>
    <td>CLH103</td>
    <td>Corporate Finance (Finance Market Regulations)</td>
    <td>Hons. III</td>
    <td>VIII</td>
</tr><tr><td>4</td>
    <td>CLH104</td>
    <td>International Trade Law (WTO)</td>
    <td>Hons. IV</td>
    <td>VIII</td>
</tr><tr><td>5</td>
    <td>CLH105</td>
    <td>Corporate Law and Governance</td>
    <td>Hons. V</td>
    <td>IX</td>
</tr><tr><td>6</td>
    <td>CLH106</td>
    <td>Mergers &amp; Acquisition</td>
    <td>Hons. VI</td>
    <td>IX</td>
</tr><tr><td>7</td>
    <td>CLH107</td>
    <td>International Investment Law</td>
    <td>Hons. VII</td>
    <td>X</td>
</tr><tr><td>8</td>
    <td>CLH108</td>
    <td>Corporate Crime</td>
    <td>Hons. VIII</td>
    <td>X</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="5">
    <p><strong>Constitutional Law Hons.</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>CNH101</td>
    <td>Constitutional Jurisprudence</td>
    <td>Hons. I</td>
    <td>VII</td>
</tr><tr><td>2</td>
    <td>CNH102</td>
    <td>Decentralization, Local Self Governance(LSF)</td>
    <td>Hons. II</td>
    <td>VII</td>
</tr><tr><td>3</td>
    <td>CNH103</td>
    <td>Comparative Constitutional Law</td>
    <td>Hons. III</td>
    <td>VIII</td>
</tr><tr><td>4</td>
    <td>CNH104</td>
    <td>Comparative Federalism</td>
    <td>Hons. IV</td>
    <td>VIII</td>
</tr><tr><td>5</td>
    <td>CNH105</td>
    <td>Media Law</td>
    <td>Hons. V</td>
    <td>IX</td>
</tr><tr><td>6</td>
    <td>CNH106</td>
    <td>Service Law</td>
    <td>Hons. VI</td>
    <td>IX</td>
</tr><tr><td>7</td>
    <td>CNH107</td>
    <td>Election Law</td>
    <td>Hons. VII</td>
    <td>X</td>
</tr><tr><td>8</td>
    <td>CNH108</td>
    <td>Constitutional Litigation</td>
    <td>Hons. VIII</td>
    <td>X</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="5">
    <p><strong>Intellectual Property Law Hons.</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>IPH101</td>
    <td>Copyrights</td>
    <td>Hons. I</td>
    <td>VII</td>
</tr><tr><td>2</td>
    <td>IPH102</td>
    <td>Trade Mark and Geographical Indication</td>
    <td>Hons. II</td>
    <td>VII</td>
</tr><tr><td>3</td>
    <td>IPH103</td>
    <td>Patents,</td>
    <td>Hons. III</td>
    <td>VIII</td>
</tr><tr><td>4</td>
    <td>IPH104</td>
    <td>Designs and Undisclosed Information</td>
    <td>Hons. IV</td>
    <td>VIII</td>
</tr><tr><td>5</td>
    <td>IPH105</td>
    <td>WTO and TRIPS</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>6</td>
    <td>IPH106</td>
    <td>E-Commerce and The Emerging Legal Framework</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>7</td>
    <td>IPH107</td>
    <td>IP related to Health and Technology</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>8</td>
    <td>IPH108</td>
    <td>IPR and Settlements of Disputes</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="5">
    <p><strong>Criminal Law Hons.</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>CRH101</td>
    <td>Penology &amp; Victimology</td>
    <td>Hons. I</td>
    <td>VII</td>
</tr><tr><td>2</td>
    <td>CRH102</td>
    <td>Offence Against Child &amp; Juvenile Offence</td>
    <td>Hons. II</td>
    <td>VII</td>
</tr><tr><td>3</td>
    <td>CRH103</td>
    <td>International Criminal Law</td>
    <td>Hons. III</td>
    <td>VIII</td>
</tr><tr><td>4</td>
    <td>CRH104</td>
    <td>General Principles of Criminal Law</td>
    <td>Hons. IV</td>
    <td>VIII</td>
</tr><tr><td>5</td>
    <td>CRH105</td>
    <td>White Color Crime</td>
    <td>Hons. V</td>
    <td>IX</td>
</tr><tr><td>6</td>
    <td>CRH106</td>
    <td>Women &amp; Criminal law</td>
    <td>Hons. VI</td>
    <td>IX</td>
</tr><tr><td>7</td>
    <td>CRH107</td>
    <td>Comparative Criminal Procedure</td>
    <td>Hons. VII</td>
    <td>X</td>
</tr><tr><td>8</td>
    <td>CRH108</td>
    <td>IT Offences(Cyber Crimes)</td>
    <td>Hons. VIII</td>
    <td>X</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr><tr><td colspan="5">
    <p><strong>International Law Hons.</strong></p>
    </td>
</tr><tr><td>1</td>
    <td>ILH101</td>
    <td>International Organization</td>
    <td>Hons. I</td>
    <td>VII</td>
</tr><tr><td>2</td>
    <td>ILH102</td>
    <td>International Human Rights</td>
    <td>Hons. II</td>
    <td>VII</td>
</tr><tr><td>3</td>
    <td>ILH103</td>
    <td>International Environmental Law</td>
    <td>Hons. III</td>
    <td>VIII</td>
</tr><tr><td>4</td>
    <td>ILH104</td>
    <td>International Criminal Law</td>
    <td>Hons. IV</td>
    <td>VIII</td>
</tr><tr><td>5</td>
    <td>ILH105</td>
    <td>Humanitarian and Refugee law</td>
    <td>Hons. V</td>
    <td>IX</td>
</tr><tr><td>6</td>
    <td>ILH106</td>
    <td>International Labour Organization &amp; Labour Laws</td>
    <td>Hons. VI</td>
    <td>IX</td>
</tr><tr><td>7</td>
    <td>ILH107</td>
    <td>Maritime Law</td>
    <td>Hons. VII</td>
    <td>X</td>
</tr><tr><td>8</td>
    <td>ILH108</td>
    <td>Air &amp; Space Law</td>
    <td>Hons. VIII</td>
    <td>X</td>
</tr><tr><td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
</tr></tbody></table></div>
</div>

</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default ug_syllabus