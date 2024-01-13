import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";

import jsonData from './api/alumni.json';

const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const alumni = () => {

    const herobanner = [
        { id:1, 
          title: "Alumni", 
          image: "/images/inner-banner.webp"
        }
      ];

      const currentOfficeBearer = jsonData.CurrentOfficeBearers || [];
      const facultyInCharge = jsonData.FacultyInCharge || [];
      const BankDetails = jsonData.BankAccountDetails[0];
      

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

    <section className="container">
<div className="text_para mt_30">
  <div className="text_para_section">
  <h3 className="mt_10">National University of Study and Research in Law Alumni Association</h3>
    <p className="">(Registered in Ranchi under the Societies Registration Act, 1860 with registration number: 326/2022)</p>
  
  </div>
  </div>
  </section>
<section className="container mt_30 mb_60">
  <h4 className="mt_15">Current office bearers:</h4>
<div className="table-responsive mt_15 mb_15">
<table>
<tbody>
<tr>
<th>SN</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
</tr>
{currentOfficeBearer.map((person) => (
<tr key={person.id}>
<td>{person.id}</td>
<td>{person.title}</td>
<td>{person.desination}</td>
<td><Link href={`mailto:${person.email}`}>{person.email}</Link></td>
<td><Link href={`tel:${person.phone}`}>{person.phone}</Link></td>
</tr>
))}
</tbody>
</table>
</div>

<h4 className="mt_15">Faculty In-Charge:</h4>
<div className="table-responsive  mt_15 mb_15">
<table>
<tbody>
<tr>
<th>SN</th>
<th>Name</th>
<th>Desination</th>
<th>Email</th>
<th>Phone</th>
</tr>
{facultyInCharge.map((person) => (
<tr key={person.id}>
<td>{person.id}</td>
<td>{person.title}</td>
<td>{person.desination}</td>
<td><Link href={`mailto:${person.email}`}>{person.email}</Link></td>
<td><Link href={`tel:${person.phone}`}>{person.phone}</Link></td>
</tr>
))}
</tbody>
</table>
</div>
<h4 className="mt_30 mb_15">Bank Account Details:</h4>
<p><strong>Account number</strong> : {BankDetails.account} </p>
<p><strong>Name</strong> : {BankDetails.name} </p>
<p><strong>Bank and Branch</strong> : {BankDetails.branch} </p>
<p><strong>IFSC code</strong> : {BankDetails.ifsc} </p>

</section>


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default alumni