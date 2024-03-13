import React, { useState, useEffect , useRef } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const notifyMenu = () => {

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

<li className={pathName.includes('tenders/tenders') ? 'dropdown open' : 'dropdown'}>
<Link href="javascript:vois(0);" className="dropdown-toggle" data-toggle="dropdown"> 
Tenders <span className="caret"></span> 
</Link>
<ul className="dropdown-menu">
<li className={pathName === '/tenders/tenders' ? 'active' : ''}>
<Link href="/tenders/tenders" target="_blank" >
Tenders
</Link>
</li>
<li className={pathName === '/tenders/tenders_archive' ? 'active' : ''} >
<Link href="/tenders/tenders_archive" >
Archive
</Link>
</li>
</ul>
</li>

<li className={pathName === '/announcements' ? 'active' : ''} >
<Link href="/announcements" >
Announcements
</Link>
</li>

<li className={pathName === '' ? 'active' : ''} >
<Link href="/" >
Examinations
</Link>
</li>

<li className={pathName === '' ? 'active' : ''} >
<Link href="javascript:void(0)" >
Admissions
</Link>
</li>

<li className={pathName === '' ? 'active' : ''} >
<Link href="javascript:void(0)" >
Events
</Link>
</li>

<li className={pathName === '' ? 'active' : ''} >
<Link href="javascript:void(0)" >
NEWS
</Link>
</li>


</ul>
    
    
    </div>
  )
}

export default notifyMenu