import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const library_committee = () => {
  const herobanner = [
    { id:1, 
      title: "Library Committee", 
      image: "/images/inner-banner.webp"
    }
  ];


  return (
    <>
    <section
        className="hero inner-banner"
        style={{
          backgroundImage: `url(${herobanner[0].image})`
        }}
      >
     <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container mt_60 mb_60">
  <div className="pdfs_as_list">
    
    <div className="list_of_pdfs text-justify">
    
    <div class="table-responsive mt_30">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Designation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dr. Arabinda Sahoo</td>
        <td>Assistant Professor, NUSRL, Ranchi</td>
      </tr>
      <tr>
        <td>Mr. Shubham Srivastava</td>
        <td>Assistant Professor, NUSRL, Ranchi</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default library_committee