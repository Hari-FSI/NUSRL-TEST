import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const HeaderMain = () => {
  const [searchText, setSearchText] = useState(null);
  const [stext, setStext] = useState('');

  const router = useRouter();

  const handleClick = (e, path) => {
    localStorage.setItem('searchText', $('.searchInput').val());
    if (path === '/about') {
      console.log('I clicked on the About Page');
    }
    if (path === '/posts') {
      console.log('I clicked on the Posts Page');
    }
    if (window.location.href.includes('search_result')) {
      window.location.reload(true);
    } else router.replace('/search_result');
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let searchText = localStorage.getItem('searchText');
      setSearchText(searchText);
    }
  }, []);

  function handleSave() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('searchText', '');
    }
  }
  useEffect(() => {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 300) {
        $('#header').addClass('fixedheader');
      } else {
        $('#header').removeClass('fixedheader');
      }
    });
  }, []);

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


  return (
    <header id="header">
     <nav class="navbar fixed-top">
        <div class="container-fluid">
 
        <div className="navbar-header">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Link className="clat-btn" href="/">
            CLAT 2023
            </Link>
            <Link className="navbar-brand" href="/">
              <div className='div-table'>
                <aside className='image-cell'>
                <Image
                  className='logo'
                  src="/images/logo.png"
                  alt="logo"
                  width={86}
                  height={94} 
                />
                </aside>
                <aside className='txt-cell'>
                <h1>NUSRL, Ranchi</h1>
                <p>National University of Study and Research in Law</p>
                </aside>
                
              </div>
              </Link>
            </div>
 
            <div class="collapse navbar-collapse" id="navbarNav">
            <button class="navbar-toggler1" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-outlined">close</span>
            </button>
                <div className='container-fluid'>
                <ul class="navbar-nav ml-auto">
                <li
                  className={
                    pathName == 'about' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    About Us <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/about">Vision</Link>
                    </li>
                    <li>
                      <Link href="/about">Organisational Chart</Link>
                    </li>
                    <li>
                      <Link href="/">NUSRL Act 2010</Link>
                    </li>
                    <li>
                      <Link href="/">Rules And Regulation</Link>
                    </li>
                    <li>
                      <Link href="/">Governing Bodies</Link>
                    </li>
                    <li>
                      <Link href="/">Key Personnel</Link>
                    </li>
                    <li>
                      <Link href="/">RTI</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    pathName == 'about1' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    The University <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">Academic Calendar</Link>
                    </li>
                    <li>
                      <Link href="/">Admission Form</Link>
                    </li>
                    <li>
                      <Link href="/">NIRF</Link>
                    </li>
                    <li>
                      <Link href="/">Audit Report</Link>
                    </li>
                    <li>
                      <Link href="/">Centres of Learning</Link>
                    </li>
                    <li>
                      <Link href="/">Committees, Centers And Societies</Link>
                    </li>
                    <li>
                      <Link href="/">Donation with Tax Exemption</Link>
                    </li>
                    <li>
                      <Link href="/faculty/facultys">Faculties</Link>
                    </li>
                    <li>
                      <Link href="/">Infrastructure</Link>
                    </li>
                    <li>
                      <Link href="/">N O C Form</Link>
                    </li>
                    <li>
                      <Link href="/">Non-Teaching Staffs</Link>
                    </li>
                  </ul>
                </li>
                
                <li
                  className={
                    pathName == 'about1' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Pay Online  <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/">HDFC Pay Online</Link>
                    </li>
                    <li>
                      <Link href="/">Fee Statement</Link>
                    </li>
                  </ul>
                </li>

                <li
                  className={
                    pathName == 'resources' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Students <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link href="/">Scholarship</Link></li>
                    <li><Link href="/">Rank List</Link></li>
                    <li><Link href="/">Mentoring</Link></li>
                    <li><Link href="/">Ph.D. Scholars</Link></li>
                    <li><Link href="/">Committees</Link></li>
                    <li><Link href="/">Societies</Link></li>
                    <li><Link href="/">Activities</Link></li>
                    <li><Link href="/">Campus Life</Link></li>
                    <li><Link href="/">Statutory Committees</Link></li>
                    <li><Link href="/">Achievements</Link></li>
                    <li><Link href="/">Endowments/Awards</Link></li>
                    <li><Link href="/">Internship &amp; Placement</Link></li>
                  </ul>
                </li>

                <li
                  className={
                    pathName == 'resources' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Examinations <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link href="/">Examinations Schedule</Link></li>
                    <li><Link href="/">Mid Term Result</Link></li>
                    <li><Link href="/">End Term Repeat Results</Link></li>
                    <li><Link href="/">End Term Results</Link></li>
                    <li><Link href="/">Re-Evaluation Result</Link></li>
                    <li><Link href="/">Attendance</Link></li>
                    <li><Link href="/">Examination Backlog</Link></li>
                    <li><Link href="/">Application &amp; Forms</Link></li>
                  </ul>
                </li>
                <li
                  className={
                    pathName == 'resources' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Academic <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link href="/programmes/programmes/">Under Graduate</Link></li>
                    <li><Link href="/programmes/programmes/">Post Graduate LLM (One Year)</Link></li>
                    <li><Link href="/programmes/programmes/">Ph. D.</Link></li>
                  </ul>
                </li>
                <li
                  className={
                    pathName == 'resources' ? 'active dropdown' : 'dropdown'
                  }
                >
                  <Link
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    href="/"
                  >
                    Publications <span className="caret"></span>
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link href="/">Journal</Link></li>
                    <li><Link href="/">News Letter</Link></li>
                    <li><Link href="/">Annual Report</Link></li>
                  </ul>
                </li>
                </ul>
                </div>
            </div>
 
        </div>
    </nav>
    </header>
  );
};

export default HeaderMain;
