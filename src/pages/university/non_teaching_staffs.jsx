import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../api/NonTeachingStaffs.json';

const non_teaching_staffs = () => {

    const herobanner = [
        { id:1, 
          title:"1.	Non-Teaching Staffs",  
          image: "/images/inner-banner.webp"
        }
      ];


      const it = jsonData.it;
      const administrative = jsonData.administrative;

  return (
    <>
    <section
    classNameName="hero inner-banner"
    style={{
    backgroundImage: `url(${herobanner[0].image})`,
    height: '300px',
    }}
    >
    <div classNameName="container">   
    <div classNameName="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>
    
    <section className="facultydetails container">

<div className="col-md-12 col-sm-12">
  <div className="vertical-tabs">
    <ul className="nav nav-pills nav-stacked pull-left">
      <li className="active"><a data-toggle="pill" href="#pill21">IT Staffs</a></li>      
      <li><a data-toggle="pill" href="#pill22">Library Staffs</a></li>
      <li><a data-toggle="pill" href="#pill23">Administrative Staffs</a></li>
    </ul>

    <div className="tab-content txt-justify">
      
      <div id="pill21" className="tab-pane fade in active">						 
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
        <h5>{it.name}</h5>
        <p>{it.designation}</p>
        </div>
        </div>
        ))}
        </div>
      </div>
      <div id="pill22" className="tab-pane fade">						  
         <h4>Library Staffs</h4>
         <p>No data</p>
      </div>
      <div id="pill23" className="tab-pane fade">				  
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
        <h5>{administrative.name}</h5>
        <p>{administrative.designation}</p>
        </div>
        </div>
        ))}
         </div>
      </div>
     
    </div>
 </div>                  
</div>

</section>
    </>
  )
}

export default non_teaching_staffs