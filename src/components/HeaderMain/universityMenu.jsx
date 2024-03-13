import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const universityMenu = () => {

  const [pathName, setPathName] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setPathName(currentPath);
  }, []);


  return (
    <div className='sidenav'>
    <div className='sidenav-logo'>  
<Image
src="/images/logo.png"
alt="logo"
width={86}
height={94} 
/>
</div>
<ul className="nav nav-pills" role="tablist">
<li>
<Link href="/pdf/academic-calendar.pdf" target='_blank'>Academic Calendar</Link>
</li>
<li className={pathName === '/university/admission_form' ? 'active' : ''}>
<Link href="/university/admission_form">Admission Form</Link>
</li>
<li>
<Link href="/pdf/nirf.pdf" target='_blank'>NIRF</Link>
</li>
<li className={pathName === '/university/audit_report' ? 'active' : ''}>
<Link href="/university/audit_report">Audit Report</Link>
</li>

<li className={pathName.includes('centres-of-learning') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown"> 
Centres of Learning <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li className={pathName === '/university/centres-of-learning/care_ap' ? 'active' : ''}>
<Link href="/university/centres-of-learning/care_ap">CARE-AP</Link>
</li>
<li className={pathName === '/university/centres-of-learning/chrss' ? 'active' : ''}>
<Link href="/university/centres-of-learning/chrss">CHRSS</Link>
</li>
<li className={pathName === '/university/centres-of-learning/clap' ? 'active' : ''}>
<Link href="/university/centres-of-learning/clap">CLAP</Link>
</li>
<li className={pathName === '/university/centres-of-learning/csrcr' ? 'active' : ''}>
<Link href="/university/centres-of-learning/csrcr">CSRCR</Link>
</li>
<li className={pathName === '/university/centres-of-learning/csripr' ? 'active' : ''}>
<Link href="/university/centres-of-learning/csripr">CSRIPR</Link>
</li>
<li className={pathName === '/university/centres-of-learning/center_for_criminal_law_nusrl_ranchi' ? 'active' : ''}>
<Link href="/university/centres-of-learning/center_for_criminal_law_nusrl_ranchi">Center for Criminal Law</Link>
</li>
</ul>
</li>

<li>
<Link href="/pdf/committees-centers-and-societies.pdf" target='_blank'>Committees, Centers And Societies</Link>
</li>
<li>
<Link href="/pdf/donation-with-tax-exemption.pdf" target='_blank'>Donation with Tax Exemption</Link>
</li>
<li className={pathName === '/university/faculties' ? 'active' : ''}>
<Link href="/university/faculties">Faculties</Link>
</li>

<li className={pathName.includes('infrastructure') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown"> 
Infrastructure <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li className={pathName === '/university/infrastructure/gymnasium' ? 'active' : ''}>
<Link href="/university/infrastructure/gymnasium">Gymnasium</Link>
</li>
<li className={pathName === '/university/infrastructure/hostel' ? 'active' : ''}>
<Link href="/university/infrastructure/hostel">Hostel</Link>
</li>
<li className={pathName === '/university/infrastructure/library' ? 'active' : ''}>
<Link href="/university/infrastructure/library">Library</Link>
</li>
<li className={pathName === '/university/infrastructure/sports' ? 'active' : ''}>
<Link href="/university/infrastructure/sports">Sports</Link>
</li>
</ul>
</li>
<li>
<Link href="/pdf/NOCForm.pdf"  target='_blank'>N O C Form</Link>
</li>
<li className={pathName === '/university/non_teaching_staffs' ? 'active' : ''}>
<Link href="/university/non_teaching_staffs">Non-Teaching Staffs</Link>
</li>
</ul>
    
    
    </div>
  )
}

export default universityMenu