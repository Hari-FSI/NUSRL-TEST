import React from 'react'
import Link from "next/link";
import Image from 'next/image'
const Gallery = () => {
  return (
    <>
<section className="gallery container-fluid ">
  <div className="column_1 wow animate__slideInLeft" data-wow-duration="2s" style={{
    backgroundImage:`url(/images/gallery/gallery-2.webp)`,
    }}
    >
    <div className="block bg_blue">
      <h4 className="title">Gallery</h4>
      <h6>Our visual tapestry tells stories, evokes emotions, and celebrates artistic diversity. Explore the extraordinary through our gallery.</h6>
      <p><Link href="/gallery">Read More <span className="material-symbols-outlined"> chevron_right </span></Link></p>
    </div>
  </div>
  <div className="column_2 wow animate__fadeIn" data-wow-duration="3s">
    <div className="image" 
    style={{
        backgroundImage:`url(/images/gallery/gallery-4.webp)`,
        }}
    ></div>
    <div className="block bg_red">
      <h4 className="title">Scholarship Programs</h4>
      <h6>Explore diverse scholarships at NUSRL - fueling academic excellence and rewarding achievements.</h6>
      <p><Link href="/students/scholarship">Read More <span className="material-symbols-outlined"> chevron_right </span></Link></p>
    </div>
  </div>
  <div className="column_3 wow animate__slideInRight" data-wow-duration="2s">
    <div className="block bg_green">
      <h4 className="title">Faculties</h4>
      <h6>Faculties are skilled educators who guide students, shape curricula, and contribute to academic excellence in specific subjects.</h6>
      <p><Link href="/university/faculties">Read More <span className="material-symbols-outlined"> chevron_right </span></Link></p>
    </div>
    <div className="image"
    style={{
        backgroundImage:`url(/images/gallery/gallery-5.webp)`,
        }}
    ></div>
  </div>
</section>
    </>
  )
}

export default Gallery