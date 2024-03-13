import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image';
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
    }}
    >
    <div className="container">   
    <div className="hero_text">
    <h4>{faculty.name}</h4>
    </div>
    </div>
    </section>
      
      <section className="breadcrumb">
       <div className="container"> 
      <div className="row">  
      <div className="col-md-8 col-sm-8 col-xs-8">
      <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/university/faculties">Faculties</Link></li>
      <li>{faculty.name}</li>
      </ul>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-4 text-right">
      <a className="btn-blue-brd" href="/university/faculties"> <span className="material-symbols-outlined">chevron_left </span> Back</a>
      </div>
      </div>
      </div>
      </section>
      
    <section className="facultydetails container">

     <div className="profile-header">
      <div className="row">
      <div className="col-md-3">
      <Image 
      src={faculty.image}
      alt={faculty.name}
      width={240}
      height={360}
      />
      </div>
      <div className="col-md-9">
      <h3 className="mb_15">{faculty.name}</h3>
      <p className="position mb_15">{faculty.designation}</p>
      <h6 className="bborder"><span className="material-symbols-outlined">call</span> Phone Number : <span className="txt">{faculty.phone}</span></h6>
      <h6 className="bborder mb_15"><span className="material-symbols-outlined">drafts</span> Email Id : <span className="txt">{faculty.email}</span></h6>
      </div>
      </div>

     </div>


<ul className="nav nav-tabs" role="tablist" id="myTab">
  <li className="active">
    <Link href="#facultytab-1" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">account_box</span> About
    </Link>
  </li>
  <li>
    <Link href="#facultytab-2" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">school</span> Qualifications
    </Link>
  </li>
  <li>
    <Link href="#facultytab-3" role="tab" data-toggle="tab">
    <span className="material-symbols-outlined">book_5</span> Publications
    </Link>
  </li>
  <li>
    <Link href="#facultytab-4" role="tab" data-toggle="tab">
    <span class="material-symbols-outlined">diversity_2</span> Conferences
    </Link>
  </li>
</ul>

<div className="tab-content txt-justify">
  <div className="tab-pane active" id="facultytab-1">
  <h4>About {faculty.name}</h4>
  <div className="mt_30">
  {faculty.about.map((paragraph, index) => (
  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
  ))}
  </div>
  </div>
  <div className="tab-pane fade" id="facultytab-2">
  <h4>Qualifications</h4>
  <div className="mt_30">
  {faculty.qualifications.map((paragraph, index) => (
  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
  ))}
  </div>
  </div>

  <div className="tab-pane fade" id="facultytab-3">
  <h4>Publications</h4>
  <div className="mt_30">
  {faculty.publications.map((paragraph, index) => (
  <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
  ))}
  </div>
  </div>

  <div className="tab-pane fade" id="facultytab-4">
  <h4>Conferences</h4>
  <div className="mt_30">
  {faculty.conferences.map((paragraph, index) => (
  <p key={index} className="mt_30" dangerouslySetInnerHTML={{ __html: paragraph }} />
  ))}
  </div>
  </div>

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