import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import jsonData from '../api/tenders.json';
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const tenders = () => {

    const herobanner = [
        { id:1, 
          title: "Tenders", 
          image: "/images/inner-banner.webp"
        }
      ];
  const tenders = jsonData.tenders || [];
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
<div > 
<p className="text-right"><Link href="/tenders/tenders_archive"> ARCHIVE <span className="material-symbols-outlined btn-symbols-arrow"> chevron_right </span></Link></p>  
</div> 
<div className="clearfix"></div>
<div className="table-responsive mb_15">
<table>
<tbody>
<tr>
<th>SN</th>
<th>Tender Related Notices</th>
<th>Documents</th>
<th>Last Date of Submission</th>
</tr>

{tenders.map((tender) => (
<tr key={tender.id}>
<td>{tender.id}</td>
<td>
{tender.notices.map((notice) => (    
<p key={notice.title}>
<Link href={notice.pdf} target={notice.target} rel="noopener noreferrer">
{notice.title}
</Link>
</p>
))}
</td>
<td>
{tender.documents.map((document) => (    
<p key={document.title}>
<Link href={document.pdf} target={document.target} rel="noopener noreferrer">
{document.title}
</Link>
</p>
))}
</td>
<td>{tender.date}</td>
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

export default tenders

