import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const sharp = () => {
  const herobanner = [
    { id:1, 
      title: "Sharp", 
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
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>

    <section className="container mt_60 mb_60">
  <div className="pdfs_as_list">
    <div className="list_of_pdfs">
    <div><p><strong>National University of Study &amp; Research in Law, Ranchi</strong></p>

<p>Name of the Faculty&nbsp; : <strong>Dr. Sangita Laha</strong></p>

<p>Name of the Team &nbsp; :<strong> Sharp</strong></p>

<div className="table-responsive mt_30">

<table>
<tbody>
<tr>
<td>1<sup>st</sup>&nbsp;Semester</td>
<td>3<sup>rd</sup> Semester</td>
<td>5<sup>th</sup>&nbsp;Semester</td>
<td>7<sup>th</sup> Semester</td>
<td>9<sup>th</sup> Semester</td>
</tr>
<tr>
<td >Allen Toppo</td>
<td>Chandrashekhar Honhaga</td>
<td>Aakarsh Mayank</td>
<td>Astha Jaiswal</td>
<td>Archisman Sanbui</td>
</tr>
<tr>
<td >Anupriya</td>
<td>Aditi Verma</td>
<td>Kanashya Abhistha Arjunbahi</td>
<td>Nandini Tibrewal</td>
<td>Rajkumar Sirsat</td>
</tr>
<tr>
<td >Abhisri Bharawaj</td>
<td>Abhinav Mahatha</td>
<td>Priyanshu Lakra</td>
<td>Abhay Shankar Yadav</td>
<td>Abhishek Kumar</td>
</tr>
<tr>
<td >Aditi Vivek Singh</td>
<td>Abhinav Datta</td>
<td>Aabhash Kumar</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td >&nbsp;</td>
<td>&nbsp;</td>
<td>Aakriti Ojha</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

</div>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default sharp