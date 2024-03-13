import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const HeaderMain = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    document.body.style.overflow = 'hidden';
    setIsNavOpen(true);
  };

  const closeNav = () => {
    document.body.style.overflowY = 'scroll';
    setIsNavOpen(false);
  };


  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = $(window).scrollTop();

      if (scroll >= 300) {
        $(headerRef.current).addClass('fixedheader');
      } else {
        $(headerRef.current).removeClass('fixedheader');
      }
    };

    $(window).scroll(handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts



  const [pathName, setPathName] = useState('');
  var matchArr = [
    'brochures',
    'case_studies',
    'testimonials',
    'certifications',
    'quality_assurance_practice',
  ];
  useEffect(() => {
    var pathArr = globalThis.window?.location.href
      .split('/')
      .filter(function (el) {
        return el != '';
      });
    if (pathArr.length == 3) {
      const selectedPage = pathArr.pop();
      if (matchArr.includes(selectedPage)) setPathName('resources');
      else setPathName(selectedPage);
    } else if (pathArr.length == 4) {
      pathArr.pop();
      setPathName(pathArr.pop());
    } else {
      setPathName('/');
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };



  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.querySelector('.page-loader');
      if (loader) {
        loader.style.transition = 'opacity 0.5s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500); // Fading out duration
      }
    }, 2000); // Loader display duration

    return () => clearTimeout(timer);
  }, []);

  return (
<>

<div className="page-loader">
      <div className="spinner">
        <Image
        src="/images/logo.png"
        alt="logo"
        width={86}
        height={94} 
        />
      </div>
    </div>
    
  <header id="header" ref={headerRef}>
    <Link href="/" className="logo_section">
        <Image
        className='logo_img'
        src="/images/logo.png"
        alt="logo"
        width={86}
        height={94} 
        />
      <div className="logo_text">
        <h5>NUSRL, Ranchi</h5>
        <p>National University of Study and Research in Law</p>
      </div>
    </Link>
    <div className="menu_section">
      <Link className="clat_btn" href="/clat_2024_admission">CLAT 2024</Link>
      <div className="menu_icon" onClick={openNav}>
        <Image
        src="/images/icons/menu.svg"
        alt="Menu icon"
        width={36}
        height={36} 
        />
        </div>
    </div>
  </header>
  {isNavOpen && (

<Navbar expand="lg">

<div className="close_btn">
    <Link href="/" className="logo_section">
      <Image
        className='logo_img'
        src="/images/logo.png"
        alt="logo"
        width={86}
        height={94} 
        />
      <div className="logo_text">
        <h5>NUSRL, Ranchi</h5>
        <p>National University of Study and Research in Law</p>
      </div>
    </Link>
    <button className="menu_close" onClick={closeNav}><span className="material-symbols-outlined">close</span></button>
  </div>
  <div class="links_list container">
<Navbar.Collapse className='links_list '>

  <Nav className="menu menu-bar main_nav container" >

    <NavDropdown
    className={ pathName == 'about' ? 'menu-link active' : 'menu-link' } 
    title="About Us" 
    id="basic-nav-dropdown"
    >
    <Link href="/about/vision" onClick={closeNav}>
    Vision
    </Link>
    <Link href="/pdf/organisational-chart.pdf" target='_blank' onClick={closeNav}>
    Organisational Chart
    </Link>
    <Link href="/about/nusrl_act_2010" onClick={closeNav}>
    NUSRL Act 2010
    </Link>
    <NavDropdown 
    className={ pathName == 'about/rules_of_examination' ? 'menu-link active' : 'menu-link' } 
    title="Rules And Regulation " 
    id="basic-nav-dropdown-sub"
    >
    <Link href="/pdf/Attendance-Rules.pdf" target="_blank" onClick={closeNav}>
    Rules for Attendance
    </Link>
    <Link href="/about/rules_regulation/rules_of_examination" onClick={closeNav}>
    Rules of Examination
    </Link>
    <Link href="/pdf/rules-for-backlog.pdf" target="_blank"  onClick={closeNav}>
    Rules for Backlog
    </Link>
    <Link href="/pdf/gold-medals-regulations.pdf" target="_blank" onClick={closeNav}>
    Gold Medals Regulation
    </Link> 
    <Link href="/about/rules_regulation/hostels_rules" onClick={closeNav}>
    Hostels Rules
    </Link>
    <Link href="/pdf/library-rules-and-regulation.pdf" target="_blank" onClick={closeNav}>
    Library Rules and Regulation
    </Link>
    <Link href="/pdf/rules-for-alumni-association.pdf" target="_blank" onClick={closeNav}>
    Rules for Alumni Association
    </Link>
    <Link href="/pdf/administrative-and-management-regulations-2017.pdf" target="_blank" onClick={closeNav}>
    Administrative and Management Regulations, 2017
    </Link>
    </NavDropdown>

    <NavDropdown 
    title="Governing Bodies" 
    id="basic-nav-dropdown-sub"
    >
    <Link onClick={closeNav} href="/about/governing_bodies/internal_management_structure" >
    Internal Management Structure
    </Link>

    <Link onClick={closeNav} href="/pdf/academic-council.pdf" target='_blank'>
    Academic Council
    </Link>

    <Link onClick={closeNav} href="/pdf/executive-council.pdf" target="_blank">
    Executive Council
    </Link>

    <Link onClick={closeNav} href="/pdf/general-council.pdf" target="_blank">
    General Council
    </Link>

    <Link onClick={closeNav} href="/pdf/academic-planning-development-board.pdf"  target="_blank">
    Academic Planning &amp; Development Board
    </Link>
    </NavDropdown>

    <NavDropdown 
    className={ pathName == 'about/keypersonnel' ? 'menu-link active' : 'menu-link' } 
    title="Key Personnel" 
    id="basic-nav-dropdown-sub"
    >

    <Link onClick={closeNav} href="/about/keypersonnel/Rector" >
    Rector
    </Link>

    <Link onClick={closeNav} href="/about/keypersonnel/Visitor" >
    Visitor
    </Link>

    <Link onClick={closeNav} href="/about/keypersonnel/Chancellor">
    Chancellor
    </Link>

    <Link onClick={closeNav} href="/about/keypersonnel/Vice_Chancellor" >
    Vice Chancellor
    </Link>

    <Link onClick={closeNav} href="/about/keypersonnel/Assistant_Registrar">
    Assistant Registrar (In charge)
    </Link>
    </NavDropdown>

    <Link onClick={closeNav}  href="/about/rti" className="menu-link" >
    RTI
    </Link>
    </NavDropdown>


    
    
<NavDropdown 
className={ pathName == 'university' ? 'menu-link active' : 'menu-link' } 
title="The University" 
id="basic-nav-dropdown-sub"
>
    <Link onClick={closeNav} href="/pdf/academic-calendar.pdf" target='_blank'>Academic Calendar</Link>
<Link onClick={closeNav} href="/university/admission_form">Admission Form</Link>
<Link onClick={closeNav} href="/pdf/nirf.pdf" target='_blank'>NIRF</Link>
<Link onClick={closeNav} href="/university/audit_report">Audit Report</Link>

<NavDropdown 
className={ pathName == 'university/centres-of-learning' ? 'menu-link active' : 'menu-link' } 
title="Centres of Learning " 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav} href="/university/centres-of-learning/care_ap">CARE-AP</Link>
<Link onClick={closeNav} href="/university/centres-of-learning/chrss">CHRSS</Link>
<Link onClick={closeNav} href="/university/centres-of-learning/clap">CLAP</Link>
<Link onClick={closeNav} href="/university/centres-of-learning/csrcr">CSRCR</Link>
<Link onClick={closeNav} href="/university/centres-of-learning/csripr">CSRIPR</Link>
<Link onClick={closeNav} href="/university/centres-of-learning/center_for_criminal_law_nusrl_ranchi">Center for Criminal Law</Link>
</NavDropdown>
<Link onClick={closeNav} href="/pdf/committees-centers-and-societies.pdf" target='_blank'>Committees, Centers And Societies</Link>
<Link onClick={closeNav} href="/pdf/donation-with-tax-exemption.pdf" target='_blank'>Donation with Tax Exemption</Link>
<Link onClick={closeNav} href="/university/faculties">Faculties</Link>
<NavDropdown 
className={ pathName == 'university/infrastructure' ? 'menu-link active' : 'menu-link' } 
title="Infrastructure" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav} href="/university/infrastructure/gymnasium">Gymnasium</Link>
<Link onClick={closeNav} href="/university/infrastructure/hostel">Hostel</Link>
<Link onClick={closeNav} href="/university/infrastructure/library">Library</Link>
<Link onClick={closeNav} href="/university/infrastructure/sports">Sports</Link>
</NavDropdown>

<Link onClick={closeNav} href="/pdf/NOCForm.pdf"  target='_blank'>N O C Form</Link>
<Link onClick={closeNav} href="/university/non_teaching_staffs">Non-Teaching Staffs</Link>
    </NavDropdown>

    
    <NavDropdown 
className={ pathName == 'payonline' ? 'menu-link active' : 'menu-link' } 
title="Pay Online" 
id="basic-nav-dropdown"
>
<NavDropdown 
className={ pathName == 'university/centres-of-learning' ? 'menu-link active' : 'menu-link' } 
title="HDFC Pay Online" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav} href="/PayOnline/hdfc_bank_account_details">HDFC Bank Account Details</Link>
<Link onClick={closeNav} href="/PayOnline/login_problem">Login problem ?</Link>
<Link onClick={closeNav} href="/pdf/QFIX-one-pager-app-web.pdf" target='_blank'>Help To Pay</Link>
</NavDropdown>
<Link onClick={closeNav} href="/PayOnline/fee_statement">Fee Statement</Link>
</NavDropdown>

<NavDropdown 
className={ pathName == 'Students' ? 'menu-link active' : 'menu-link' } 
title="Students" 
id="basic-nav-dropdown"
>
<Link onClick={closeNav}  href="/students/scholarship">Scholarship</Link>
<Link onClick={closeNav}  href="/pdf/Rank-List_2.pdf" target='_blank'>Rank List</Link>
<NavDropdown 
className={ pathName == 'students/mentoring' ? 'menu-link active' : 'menu-link' } 
title="Mentoring" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/mentoring/sharp">SHARP</Link>
<Link onClick={closeNav}  href="/students/mentoring/endurance">ENDURANCE</Link>
<Link onClick={closeNav}  href="/students/mentoring/grace">GRACE</Link>
<Link onClick={closeNav}  href="/students/mentoring/drive">DRIVE</Link>
<Link onClick={closeNav}  href="/students/mentoring/hope">HOPE</Link>
<Link onClick={closeNav}  href="/students/mentoring/ideal">IDEAL</Link>
<Link onClick={closeNav}  href="/students/mentoring/joy">JOY</Link>
<Link onClick={closeNav}  href="/students/mentoring/calm">CALM</Link>
<Link onClick={closeNav}  href="/students/mentoring/kind">KIND</Link>
<Link onClick={closeNav}  href="/students/mentoring/time">TIME</Link>
<Link onClick={closeNav}  href="/students/mentoring/truth">TRUTH</Link>
<Link onClick={closeNav}  href="/students/mentoring/alert">ALERT</Link>
<Link onClick={closeNav}  href="/students/mentoring/gyan">GYAN</Link>
<Link onClick={closeNav}  href="/students/mentoring/energy">ENERGY</Link>
<Link onClick={closeNav}  href="/students/mentoring/agile">AGILE</Link>
<Link onClick={closeNav}  href="/students/mentoring/focus">FOCUS</Link>
<Link onClick={closeNav}  href="/students/mentoring/steady">STEADY</Link>
<Link onClick={closeNav}  href="/students/mentoring/swift">SWIFT</Link>
<Link onClick={closeNav}  href="/students/mentoring/noble">NOBLE</Link>
<Link onClick={closeNav}  href="/students/mentoring/firm">FIRM</Link>
<Link onClick={closeNav}  href="/students/mentoring/tough">TOUGH</Link>
<Link onClick={closeNav}  href="/students/mentoring/wisdom">WISDOM</Link>
<Link onClick={closeNav}  href="/students/mentoring/vision">VISION</Link>
<Link onClick={closeNav}  href="/students/mentoring/passion">PASSION</Link>
<Link onClick={closeNav}  href="/students/mentoring/empathy">EMPATHY</Link>
<Link onClick={closeNav}  href="/students/mentoring/strength">STRENGTH</Link>
<Link onClick={closeNav}  href="/students/mentoring/belief">BELIEF</Link>
<Link onClick={closeNav}  href="/students/mentoring/impact">IMPACT</Link>
<Link onClick={closeNav}  href="/students/mentoring/guidance">GUIDANCE</Link>
</NavDropdown>
<Link onClick={closeNav}  href="/students/phd_scholars">Ph.D. Scholars</Link>

<NavDropdown 
className={ pathName == 'students/committees' ? 'menu-link active' : 'menu-link' } 
title="Committees" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/committees/moot_court_committee">Moot Court Committee</Link>
<Link onClick={closeNav}  href="/students/committees/it_committee">IT Committee</Link>
<Link onClick={closeNav}  href="/students/committees/library_committee">Library Committee</Link>
<Link onClick={closeNav}  href="/students/committees/cultural_committee">Cultural Committee</Link>
<Link onClick={closeNav}  href="/students/committees/board_for_regulation_of_sports">Board for Regulation of Sports</Link>
</NavDropdown>
<NavDropdown 
className={ pathName == 'students/societies' ? 'menu-link active' : 'menu-link' } 
title="Societies" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/societies/isbn">ISBN</Link>
<Link onClick={closeNav}  href="/students/societies/NUSRL_through_lenses">NUSRL Through Lenses</Link>
<Link onClick={closeNav}  href="/students/societies/constitutional_law_club">Constitutional Law Club</Link>
</NavDropdown>

<NavDropdown 
className={ pathName == 'students/activities' ? 'menu-link active' : 'menu-link' } 
title="Activities" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/activities/seminars">Seminars</Link>
<Link onClick={closeNav}  href="/students/activities/moot_court">Moot Court</Link>
<Link onClick={closeNav}  href="/students/activities/cultural_programs">Cultural Programs</Link>
</NavDropdown>
<Link onClick={closeNav}  href="/students/campus_life">Campus Life</Link>
<NavDropdown 
className={ pathName == 'students/statutorycommittees' ? 'menu-link active' : 'menu-link' } 
title="Statutory Committees" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/statutorycommittees/anti_ragging_cell">Anti Ragging Cell</Link>
<Link onClick={closeNav}  href="/students/statutorycommittees/grievance_redressal_committee">Grievance Redressal Committee</Link>
<Link onClick={closeNav}  href="/students/statutorycommittees/internal_complaints_committee_icc">Internal Complaints Committee (ICC)</Link>
</NavDropdown>

<NavDropdown 
className={ pathName == 'students/achievements' ? 'menu-link active' : 'menu-link' } 
title="Achievements" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/achievements/sports">Sports</Link>
<Link onClick={closeNav}  href="/students/achievements/moot_courts">Moot Courts</Link>
</NavDropdown>
<Link onClick={closeNav}  href="/students/endowmentsawards">Endowments/Awards</Link>
<NavDropdown 
className={ pathName == 'students/internshipplacement' ? 'menu-link active' : 'menu-link' } 
title="Internship & Placement" 
id="basic-nav-dropdown-sub"
>
<Link onClick={closeNav}  href="/students/internshipplacement/internship_placement_committee">Internship & Placement Committee</Link>
<Link onClick={closeNav}  href="/students/internshipplacement/recruitment_co_ordination_commitee">Recruitment Co-Ordination Commitee</Link>
<Link onClick={closeNav}  href="/students/internshipplacement/placement_brochure_2024">PLACEMENT BROCHURE 2024</Link>
<Link onClick={closeNav}  href="/students/internshipplacement/recruitment_brochure">Recruitment Brochure</Link>
<Link onClick={closeNav}  href="/students/internshipplacement/statistics">Statistics</Link>
</NavDropdown>
</NavDropdown>

<NavDropdown 
className={ pathName == 'examinations' ? 'menu-link active' : 'menu-link' } 
title="Examinations" 
id="basic-nav-dropdown"
>
<Link onClick={closeNav}  href="/examinations/examinations_schedule">Examinations Schedule</Link>
<Link onClick={closeNav}  href="/examinations/mid_term_project_result">Mid Term Result</Link>
<Link onClick={closeNav}  href="/examinations/end_term_repeat_results">End Term Repeat Results</Link>
<Link onClick={closeNav}  href="/examinations/end_term_results">End Term Results</Link>
<Link onClick={closeNav}  href="/examinations/re_evaluation_result">Re-Evaluation Result</Link>
<Link onClick={closeNav}  href="/examinations/attendance">Attendance</Link>
<Link onClick={closeNav}  href="/examinations/examinations">Examination Backlog</Link>
<Link onClick={closeNav}  href="/examinations/application_forms">Application &amp; Forms</Link>
</NavDropdown>

<NavDropdown 
className={ pathName == 'academic' ? 'menu-link active' : 'menu-link' } 
title="Academic" 
id="basic-nav-dropdown"
>
<Link onClick={closeNav} href="/programmes">Under Graduate Programmes</Link>
<Link onClick={closeNav} href="/programmes">Center of post graduate studies</Link>
<Link onClick={closeNav} href="/programmes">Doctor of Philosophy (Ph.D)</Link>
<Link onClick={closeNav} href="/programmes">Certificate & Diploma Courses</Link>
</NavDropdown>

<NavDropdown 
className={ pathName == 'publications' ? 'menu-link active' : 'menu-link' } 
title="Publications" 
id="basic-nav-dropdown"
>
<Link onClick={closeNav} href="/publications/journal">Journal</Link>
<Link onClick={closeNav} href="/publications/news_letter">News Letter</Link>
<Link onClick={closeNav} href="/publications/annual_report">Annual Report</Link>
</NavDropdown>
    
<Link onClick={closeNav} className={pathName == 'tenders' ? 'menu-link active' : 'menu-link'} href="/tenders/tenders">
Tenders
</Link>

<Link onClick={closeNav} className={pathName == 'clat_2024_admission' ? 'menu-link active' : 'menu-link'} href="/clat_2024_admission">
Clat Admission 2024
</Link>

<Link onClick={closeNav} className={pathName == 'alumni' ? 'menu-link active' : 'menu-link'} href="/alumni">
Alumni
</Link>

<Link onClick={closeNav} href="https://calendar.online/33293f7c86bf9ebbcd54" className='menu-link' target='_blank'>
Event Calendar
</Link>

  </Nav>
</Navbar.Collapse>
</div>
</Navbar>


  
)}
  </>
  );
};

export default HeaderMain;
