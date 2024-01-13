import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../../pages/api/faculties.json';
const faculties = () => {

    const herobanner = [
        { id:1, 
          title: "FACULTIES ", 
          image: "/images/inner-banner.webp"
        }
      ];


      // Access the JSON data
      const faculties = jsonData.faculties;

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
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>
    <section className="container faculties">
    
        {faculties.map((faculties) => (
        <div className="faculty" key={faculties.id}>
        <Image 
        src={faculties.image}
        alt={faculties.name}
        width={240}
        height={360}
        />
        <div className="faculity_details">
        <h5>{faculties.name}</h5>
        <p>{faculties.designation}</p>
        <Link className="block-link" href={`faculties/${faculties.id}`}>More Info</Link>
        </div>
        </div>
        ))}

    </section>
    </>
  )
}

export default faculties
