import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const aboutMenu = () => {

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
<li className={pathName === '/about/vision' ? 'active' : ''}>
<Link href="/about/vision">
Vision
</Link>    
</li>
<li>
<Link href="/pdf/organisational-chart.pdf" target='_blank'>
Organisational Chart
</Link>
</li>
<li className={pathName === '/about/nusrl_act_2010' ? 'active' : ''}>
<Link href="/about/nusrl_act_2010">
NUSRL Act 2010
</Link>
</li>
<li className={pathName.includes('rules_regulation') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown"> 
Rules And Regulation <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li>
<Link href="/pdf/Attendance-Rules.pdf" target="_blank" >
Rules for Attendance
</Link>
</li>
<li className={pathName === '/about/rules_regulation/rules_of_examination' ? 'active' : ''} >
<Link href="/about/rules_regulation/rules_of_examination" >
Rules of Examination
</Link>
</li>
<li>
<Link href="/pdf/rules-for-backlog.pdf" target="_blank"  >
Rules for Backlog
</Link>
</li>
<li>
<Link href="/pdf/gold-medals-regulations.pdf" target="_blank" >
Gold Medals Regulation
</Link> 
</li>
<li className={pathName === '/about/rules_regulation/hostels_rules' ? 'active' : ''} >
<Link href="/about/rules_regulation/hostels_rules" >
Hostels Rules
</Link>
</li>
<li>
<Link href="/pdf/library-rules-and-regulation.pdf" target="_blank" >
Library Rules and Regulation
</Link>
</li>
<li>
<Link href="/pdf/rules-for-alumni-association.pdf" target="_blank" >
Rules for Alumni Association
</Link>
</li>
<li>
<Link href="/pdf/administrative-and-management-regulations-2017.pdf" target="_blank" >
Administrative and Management Regulations, 2017
</Link>
</li>
</ul>
</li>

<li className={pathName.includes('governing_bodies') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown"> 
Governing Bodies <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li className={pathName === '/about/governing_bodies/internal_management_structure' ? 'active' : ''} >
<Link  href="/about/governing_bodies/internal_management_structure" >
Internal Management Structure
</Link>
</li>
<li>
<Link  href="/pdf/academic-council.pdf" target='_blank'>
Academic Council
</Link>
</li>
<li>
<Link  href="/pdf/executive-council.pdf" target="_blank">
Executive Council
</Link>
</li>
<li>
<Link  href="/pdf/general-council.pdf" target="_blank">
General Council
</Link>
</li>
<li>
<Link  href="/pdf/academic-planning-development-board.pdf"  target="_blank">
Academic Planning &amp; Development Board
</Link>
</li>
</ul>
</li>

<li className={pathName.includes('keypersonnel') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown">
  Key Personnel <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li className={pathName === '/about/keypersonnel/Rector' ? 'active' : ''} >
<Link  href="/about/keypersonnel/Rector" >
Rector
</Link>
</li>
<li className={pathName === '/about/keypersonnel/Visitor' ? 'active' : ''} >
<Link  href="/about/keypersonnel/Visitor" >
Visitor
</Link>
</li>
<li className={pathName === '/about/keypersonnel/Chancellor' ? 'active' : ''} >
<Link href="/about/keypersonnel/Chancellor">
Chancellor
</Link>
</li>
<li className={pathName === '/about/keypersonnel/Vice_Chancellor' ? 'active' : ''} >
<Link  href="/about/keypersonnel/Vice_Chancellor" >
Vice Chancellor
</Link>
</li>
<li className={pathName === '/about/keypersonnel/Assistant_Registrar' ? 'active' : ''} >
<Link  href="/about/keypersonnel/Assistant_Registrar">
Assistant Registrar (In charge)
</Link>
</li>
</ul>
</li>

<li className={pathName === '/about/rti' ? 'active' : ''} >
    <Link   href="/about/rti" className="menu-link" >
    RTI
    </Link></li>
</ul>
    
    
    </div>
  )
}

export default aboutMenu