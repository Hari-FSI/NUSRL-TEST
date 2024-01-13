import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";

import jsonData from './api/clatAdmission.json';

const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const clat_2024_admission = () => {

    const herobanner = [
        { id:1, 
          title: "CLAT 2024 ADMISSION", 
          image: "/images/inner-banner.webp"
        }
      ];

      const clat2024 = jsonData.clat2024 || [];
      

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
<section className="container mt_30 mb_60">
  <h4 className="mt_15">Admission related inquiry, contact</h4>
<div className="table-responsive mt_15 mb_15">
<table>
<tbody>
<tr>
<th>SN</th>
<th>Name</th>
<th>Phone</th>
</tr>
{clat2024.map((person) => (
<tr key={person.id}>
<td>{person.id}</td>
<td>{person.name}</td>
<td><Link href={`tel:${person.phone}`}>{person.phone}</Link></td>
</tr>
))}
</tbody>
</table>
</div>

</section>


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default clat_2024_admission