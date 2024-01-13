import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import jsonData from '../api/tendersArchive.json';
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const tenders_archive = () => {

    const herobanner = [
        { id:1, 
          title: "Tenders Archive", 
          image: "/images/inner-banner.webp"
        }
      ];
  const archives = jsonData.archives || [];
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
<p className="text-right"><Link href="/tenders/tenders"> TENDERS <span className="material-symbols-outlined btn-symbols-arrow"> chevron_right </span></Link></p>  
</div> 
<div className="table-responsive mb_15">
<table>
<tbody>
<tr>
<th>SN</th>
<th>Tender Related Notices</th>
<th>Documents</th>
<th>Last Date of Submission</th>
</tr>

{archives.map((archive) => (
<tr key={archive.id}>
<td>{archive.id}</td>
<td>
{archive.notices.map((notice) => (    
<p key={notice.title}>
<Link href={notice.pdf} target={notice.target} rel="noopener noreferrer">
{notice.title}
</Link>
</p>
))}
</td>
<td>
{archive.documents.map((document) => (    
<p key={document.title}>
<Link href={document.pdf} target={document.target} rel="noopener noreferrer">
{document.title}
</Link>
</p>
))}
</td>
<td>{archive.date}</td>
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
export default tenders_archive