import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image';
import jsonData from '../api/NonTeachingStaffs.json';

const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const DynamicuniversityMenu = dynamic(() => import('../../components/HeaderMain/universityMenu'), {
  suspense: true,
})  

const non_teaching_staffs = () => {

    const herobanner = [
        { id:1, 
          title:"Non-Teaching Staffs",  
          image: "/images/inner-banner.webp"
        }
      ];


      const it = jsonData.it;
      const administrative = jsonData.administrative;

  return (
    <>
    <section
    className="hero inner-banner"
    style={{
    backgroundImage: `url(${herobanner[0].image})`,
    }}
    >
    <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicuniversityMenu /></Suspense>
    </div>
    <div className="col-md-9  pt_30 facultydetails"> 

    <ul className="nav nav-tabs" role="tablist" id="myTab">
  <li className="active">
    <Link href="#nonteachingtab-1" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">account_box</span> IT Staffs
    </Link>
  </li>
  <li>
    <Link href="#nonteachingtab-2" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">book_5</span> Library Staffs
    </Link>
  </li>
  <li>
    <Link href="#nonteachingtab-3" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">apartment</span> Administrative Staffs
    </Link>
  </li>
</ul>

<div className="tab-content txt-justify">
  <div className="tab-pane active" id="nonteachingtab-1">
  <h4>IT Staffs</h4>
  <div className="faculties"> 
          {it.map((it) => (
        <div className="faculty" key={it.id}>
        <Image 
        src={it.image}
        alt={it.name}
        width={240}
        height={360}
        />
        <div className="faculity_details">
        <h6>{it.name}</h6>
        <p className="desi">{it.designation}</p>
        </div>
        </div>
        ))}
        </div>
  </div>
  <div className="tab-pane fade" id="nonteachingtab-2">
  <h4>Library Staffs</h4>
  <p>No data</p>
  </div>
  <div className="tab-pane fade" id="nonteachingtab-3">
  <h4>Administrative Staffs</h4>
         <div className="faculties"> 
         {administrative.map((administrative) => (
        <div className="faculty" key={administrative.id}>
        <Image 
        src={administrative.image}
        alt={administrative.name}
        width={240}
        height={360}
        />
        <div className="faculity_details">
        <h6>{administrative.name}</h6>
        <p className="desi">{administrative.designation}</p>
        </div>
        </div>
        ))}
         </div>
  </div>
</div>

    </div>
    </div>
    </section>
    
    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default non_teaching_staffs