import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


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
  return (
<>
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
  <nav>
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
  <div className="links_list container">


  <ul className="menu menu-bar main_nav">

  <li className={ pathName == 'about' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              About Us
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                      <li>
                      <Link className="menu-link" href="/about/vision">Vision</Link>
                      </li>
                      <li>
                      <Link className="menu-link" href="/pdf/organisational-chart.pdf" target='_blank'>Organisational Chart</Link>
                      </li>
                      <li>
                      <Link className="menu-link" href="/about/nusrl_act_2010">NUSRL Act 2010</Link>
                      </li>
                       <li className={ pathName == 'about/rules_of_examination' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                          Rules And Regulation 
                        </Link>
                          <ul className="menu menu-list">
                          <li>
                          <Link className="menu-link"  href="/pdf/Attendance-Rules.pdf" target="_blank">
                          Rules for Attendance
                          </Link>
                          </li>

                          <li>
                          <Link className="menu-link"  href="/about/rules_of_examination">
                          Rules of Examination
                          </Link>
                          </li>

                          <li>
                          <Link className="menu-link"  href="/pdf/rules-for-backlog.pdf" target="_blank">
                          Rules for Backlog
                          </Link>
                          </li>

                          <li>
                          <Link className="menu-link"  href="/pdf/gold-medals-regulations.pdf" target="_blank">
                          Gold Medals Regulation
                          </Link>
                          </li>
                          <li>
                          <Link className="menu-link"  href="/about/hostels_rules">
                          Hostels Rules
                          </Link>
                          </li>
                          <li>
                          <Link className="menu-link"  href="/pdf/library-rules-and-regulation.pdf" target="_blank">
                          Library Rules and Regulation
                          </Link>
                          </li>

                          <li>
                          <Link className="menu-link"  href="/pdf/rules-for-alumni-association.pdf" target="_blank">
                          Rules for Alumni Association
                          </Link>
                          </li>

                          <li>
                          <Link className="menu-link"  href="/pdf/administrative-and-management-regulations-2017.pdf" target="_blank">
                          Administrative and Management Regulations, 2017
                          </Link>
                          </li>
                          </ul>
                    </li>
                    <li className={ pathName == 'about/rules_of_examination' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                          Governing Bodies
                        </Link>
                        <ul className="menu menu-list">
                        <li>
                        <Link className="menu-link" href="/about/internal_management_structure" >
                        Internal Management Structure
                        </Link>
                        </li>

                        <li>
                        <Link className="menu-link" href="/pdf/academic-council.pdf" target='_blank'>
                        Academic Council
                        </Link>
                        </li>

                        <li>
                        <Link className="menu-link" href="/pdf/executive-council.pdf" target="_blank">
                        Executive Council
                        </Link>
                        </li>

                        <li>
                        <Link className="menu-link" href="/pdf/general-council.pdf" target="_blank">
                        General Council
                        </Link>
                        </li>
                        <li>
                        <Link className="menu-link" href="/pdf/academic-planning-development-board.pdf"  target="_blank">
                        Academic Planning &amp; Development Board
                        </Link>
                        </li>
                        </ul>
                    </li>

                    <li className={ pathName == 'about/keypersonnel' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                          Key Personnel
                        </Link>
                      <ul className="menu menu-list">
                      <li>
                      <Link className="menu-link" href="/about/keypersonnel/Rector" >
                      Rector
                      </Link>
                      </li>

                      <li>
                      <Link className="menu-link" href="/about/keypersonnel/Visitor" >
                      Visitor
                      </Link>
                      </li>

                      <li>
                      <Link className="menu-link" href="/about/keypersonnel/Chancellor">
                      Chancellor
                      </Link>
                      </li>

                      <li>
                      <Link className="menu-link" href="/about/keypersonnel/Vice_Chancellor" >
                      Vice Chancellor
                      </Link>
                      </li>
                      <li>
                      <Link className="menu-link" href="/about/keypersonnel/Assistant_Registrar">
                      Assistant Registrar (In charge)
                      </Link>
                      </li>
                      </ul>
                    </li>
                    <li className={ pathName == 'about' ? 'active' : '' }>
                        <Link 
                          href="/about/rti" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                          RTI
                        </Link>
                     </li>   
                   
                </ul>
            </li>


              <li className={ pathName == 'university' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              The University
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                <li><Link className="menu-link" href="/pdf/academic-calendar.pdf" target='_blank'>Academic Calendar</Link></li>
      <li><Link className="menu-link" href="/university/admission_form">Admission Form</Link></li>
      <li><Link className="menu-link" href="/pdf/nirf.pdf" target='_blank'>NIRF</Link></li>
      <li><Link className="menu-link" href="/university/audit_report">Audit Report</Link></li>
                       <li className={ pathName == '/university/centres-of-learning' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                         Centres of Learning 
                        </Link>
                          <ul className="menu menu-list">
                          <li><Link className="menu-link" href="/university/centres-of-learning/care_ap">CARE-AP</Link></li>
        <li><Link className="menu-link" href="/university/centres-of-learning/chrss">CHRSS</Link></li>
        <li><Link className="menu-link" href="/university/centres-of-learning/clap">CLAP</Link></li>
        <li><Link className="menu-link" href="/university/centres-of-learning/csrcr">CSRCR</Link></li>
        <li><Link className="menu-link" href="/university/centres-of-learning/csripr">CSRIPR</Link></li>
        <li><Link className="menu-link" href="/university/centres-of-learning/center_for_criminal_law_nusrl_ranchi">Center for Criminal Law, NUSRL Ranchi</Link></li>
                          </ul>
                    </li>

                    <li><Link className="menu-link" href="/pdf/committees-centers-and-societies.pdf" target='_blank'>Committees, Centers And Societies</Link></li>
      <li><Link className="menu-link" href="/pdf/donation-with-tax-exemption.pdf" target='_blank'>Donation with Tax Exemption</Link></li>
      <li><Link className="menu-link" href="/university/faculties">Faculties</Link></li>


                    <li className={ pathName == '/university/infrastructure/' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                          Infrastructure
                        </Link>
                        <ul className="menu menu-list">
                        <li><Link className="menu-link" href="/university/infrastructure/gymnasium">Gymnasium</Link></li>
        <li><Link className="menu-link" href="/university/infrastructure/hostel">Hostel</Link></li>
        <li><Link className="menu-link" href="/university/infrastructure/library">Library</Link></li>
        <li><Link className="menu-link" href="/university/infrastructure/sports">Sports</Link></li>
                        </ul>
                    </li>

                    <li><Link className="menu-link" href="/pd/NOCForm.pdf"  target='_blank'>N O C Form</Link></li>
      <li><Link className="menu-link" href="/university/non_teaching_staffs">Non-Teaching Staffs</Link></li>
                   
                </ul>
            </li>


<li className={ pathName == 'payonline' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              Pay Online
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                       <li className={ pathName == 'PayOnline' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                        HDFC Pay Online
                        </Link>
                          <ul className="menu menu-list">
                          <li><Link className="menu-link" href="/PayOnline/hdfc_bank_account_details">HDFC Bank Account Details</Link></li>
        <li><Link className="menu-link" href="/PayOnline/login_problem">Login problem ?</Link></li>
        <li><Link className="menu-link" href="/pdf/QFIX-one-pager-app-web.pdf" target='_blank'>Help To Pay</Link></li>
                          </ul>
                    </li>
                    <li><Link className="menu-link" href="/PayOnline/fee_statement">Fee Statement</Link></li>
                   
                </ul>
            </li>
            
            <li className={ pathName == 'students' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              Students
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                <li><Link className="menu-link" href="/students/scholarship">Scholarship</Link></li>
                <li><Link className="menu-link" href="/pdf/Rank-List_2.pdf" target='_blank'>Rank List</Link></li>
                       <li className={ pathName == 'students/mentoring' ? 'active' : '' }>
                        <Link 
                          href="javascript:void(0);" 
                          className="menu-link" 
                          aria-haspopup="true"
                        >
                        Mentoring
                        </Link>
                          <ul className="menu menu-list">
                          <li><Link className="menu-link" href="/students/mentoring/sharp">SHARP</Link></li>
<li><Link className="menu-link" href="/students/mentoring/endurance">ENDURANCE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/grace">GRACE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/drive">DRIVE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/hope">HOPE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/ideal">IDEAL</Link></li>
<li><Link className="menu-link" href="/students/mentoring/joy">JOY</Link></li>
<li><Link className="menu-link" href="/students/mentoring/calm">CALM</Link></li>
<li><Link className="menu-link" href="/students/mentoring/kind">KIND</Link></li>
<li><Link className="menu-link" href="/students/mentoring/time">TIME</Link></li>
<li><Link className="menu-link" href="/students/mentoring/truth">TRUTH</Link></li>
<li><Link className="menu-link" href="/students/mentoring/alert">ALERT</Link></li>
<li><Link className="menu-link" href="/students/mentoring/gyan">GYAN</Link></li>
<li><Link className="menu-link" href="/students/mentoring/energy">ENERGY</Link></li>
<li><Link className="menu-link" href="/students/mentoring/agile">AGILE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/focus">FOCUS</Link></li>
<li><Link className="menu-link" href="/students/mentoring/steady">STEADY</Link></li>
<li><Link className="menu-link" href="/students/mentoring/swift">SWIFT</Link></li>
<li><Link className="menu-link" href="/students/mentoring/noble">NOBLE</Link></li>
<li><Link className="menu-link" href="/students/mentoring/firm">FIRM</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">TOUGH</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">WISDOM</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">VISION</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">PASSION</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">EMPATHY</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">STRENGTH</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">BELIEF</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">IMPACT</Link></li>
<li><Link className="menu-link" href="/students/mentoring/">GUIDANCE</Link></li>
                          </ul>
                    </li>
                    <li><Link className="menu-link" href="/students/phd_scholars">Ph.D. Scholars</Link></li>
      <li><Link className="menu-link" href="/students/">Committees</Link></li>
      <li><Link className="menu-link" href="/students/">Societies</Link></li>
      <li><Link className="menu-link" href="/students/">Activities</Link></li>
      <li><Link className="menu-link" href="/students/">Campus Life</Link></li>
      <li><Link className="menu-link" href="/students/">Statutory Committees</Link></li>
      <li><Link className="menu-link" href="/students/">Achievements</Link></li>
      <li><Link className="menu-link" href="/students/endowmentsawards">Endowments/Awards</Link></li>
      <li><Link className="menu-link" href="/students/internship_placement_committee">Internship &amp; Placement</Link></li>
                   
                </ul>
            </li>      




            <li className={ pathName == 'examinations' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              Examinations
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                <li><Link className="menu-link" href="/examinations/examinations_schedule">Examinations Schedule</Link></li>
      <li><Link className="menu-link" href="/examinations/mid_term_project_result">Mid Term Result</Link></li>
      <li><Link className="menu-link" href="/examinations/end_term_repeat_results">End Term Repeat Results</Link></li>
      <li><Link className="menu-link" href="/examinations/end_term_results">End Term Results</Link></li>
      <li><Link className="menu-link" href="/examinations/re_evaluation_result">Re-Evaluation Result</Link></li>
      <li><Link className="menu-link" href="/examinations/attendance">Attendance</Link></li>
      <li><Link className="menu-link" href="/examinations/examinations">Examination Backlog</Link></li>
      <li><Link className="menu-link" href="/examinations/application_forms">Application &amp; Forms</Link></li>
                   
                </ul>
            </li>  


            <li className={ pathName == 'academic' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              Academic
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                <li><Link className="menu-link" href="/programmes">Under Graduate Programmes</Link></li>
      <li><Link className="menu-link" href="/programmes">Center of post graduate studies</Link></li>
      <li><Link className="menu-link" href="/programmes">Doctor of Philosophy (Ph.D)</Link></li>
      <li><Link className="menu-link" href="/programmes">Certificate & Diploma Courses</Link></li>
                   
                </ul>
            </li>  

            <li className={ pathName == 'publications' ? 'active' : '' }>
              <Link
              className="menu-link menu-bar-link"
              aria-haspopup="true"
              href="javascript:void(0);"
              >
              Publications
              </Link>
                <ul className="mega-menu mega-menu--multiLevel">
                <li><Link className="menu-link" href="/publications/journal">Journal</Link></li>
      <li><Link className="menu-link" href="/publications/news_letter">News Letter</Link></li>
      <li><Link className="menu-link" href="/publications/annual_report">Annual Report</Link></li>
                   
                </ul>
            </li> 

            <li className={pathName == 'tenders' ? 'active' : ''}>
         <a href="/tenders/tenders">Tenders </a>
    </li>
    
    <li className={pathName == 'clat_2024_admission' ? 'active' : ''}>
         <a href="/clat_2024_admission">Clat Admission 2024</a>
    </li>
    
    <li className={pathName == 'alumni' ? 'active' : ''}>
         <a href="/alumni">Alumni</a>
    </li>

    <li className={pathName == 'event_calendar' ? 'active' : ''}>
         <a href="https://calendar.online/33293f7c86bf9ebbcd54" target='_blank'>Event Calendar</a>
    </li> 
        
        </ul>

 

</div>
</nav>
)}
  </>
  );
};

export default HeaderMain;
