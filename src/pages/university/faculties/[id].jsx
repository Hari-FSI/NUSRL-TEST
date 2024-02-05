import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../../pages/api/faculties.json';

const details = ({ faculty  }) => {

    const herobanner = [
        { id:1, 
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
    <h4>{faculty.name}</h4>
    </div>
    </div>
    </section>
    
    <section className="facultydetails container">

<div className="col-md-9 col-sm-9">
  <div className="vertical-tabs">
    <ul className="nav nav-pills nav-stacked pull-left">
      <li className="active"><a data-toggle="pill" href="#pill21">About</a></li>
      
      <li><a data-toggle="pill" href="#pill22">Qualifications</a></li>
      <li><a data-toggle="pill" href="#pill23">Publications</a></li>
      <li><a data-toggle="pill" href="#pill24">Conferences</a></li>
      <li><a data-toggle="pill" href="#pill26">Contact</a></li>
    </ul>

    <div className="tab-content txt-justify">
      
      <div id="pill21" className="tab-pane fade in active">						 
          <h4>About {faculty.name}</h4>
          <div className="mt_30">
            {faculty.about.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
      </div>
      <div id="pill22" className="tab-pane fade">						  
         <h2>Qualifications</h2>
         {faculty.qualifications.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
      </div>
      <div id="pill23" className="tab-pane fade">				  
         <h2>Publications</h2>
         {faculty.publications.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
      </div>
      <div id="pill24" className="tab-pane fade">				  
         <h2>Conferences</h2>
         {faculty.conferences.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
      </div>
      <div id="pill25" className="tab-pane fade">				  
         <h2>Courses</h2>
         {faculty.courses.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
      </div>
      <div id="pill26" className="tab-pane fade">
      <h2>Contact Details</h2>
      {faculty.contact.map((paragraph, index) => (
            <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))} 
      </div>
    </div>
 </div>                  
</div>

<div className="col-md-3 col-sm-3 right-side">
<Image 
src={faculty.image}
alt={faculty.name}
width={240}
height={360}
/>
  <h5 className="mt_60">{faculty.name}</h5>
  <p className="position">{faculty.designation}</p>
  <h6 className="bborder">Phone</h6>
  <p>{faculty.phone}</p>

  <h6 className="bborder">Email</h6>
  <p>{faculty.email}</p>
</div>

</section>
    </>
  )
}

export async function getStaticPaths() {
    const paths = jsonData.faculties.map((faculty) => ({
      params: { id: faculty.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const id = params.id;
    const faculty = jsonData.faculties.find((faculty) => faculty.id === id);
  
    return { props: { faculty } };
  }

export default details