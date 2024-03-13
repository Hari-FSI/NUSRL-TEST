import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import jsonData from '../api/tendersArchive.json';
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })

  const DynamicnotifyMenu = dynamic(() => import('../../components/HeaderMain/notifyMenu'), {
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
    }}
    >
    <div className="container">   
    <div className="hero_text">
    <h4>{herobanner[0].title}</h4>
    </div>
    </div>
    </section>
    <section className="breadcrumb">
       <div className="container"> 
      <div className="row">  
      <div className="col-md-12 col-sm-12 col-xs-12">
      <ul>
      <li><Link href="/">Home</Link></li>
      <li>{herobanner[0].title}</li>
      </ul>
      </div>
      </div>
      </div>
      </section>
    <section className="container page-sec txt-justfy">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicnotifyMenu /></Suspense>
    </div>
    <div className="col-md-9  mt_30">

       <ul className="ul-listing-block">
       {archives.map((archive) => (
        <li key={archive.id} className="list-block">
          <div className="in-block">
          {archive.notices.map((notice) => (
              <h4 key={archive.title}>
              <Link href={notice.pdf} target={notice.target} rel="noopener noreferrer">
              {notice.title}
              </Link>
              </h4>
              ))}
              <h5 className="mt_15">Documents</h5>
              <ul className="list-documents">
              {archive.documents.map((document) => (  
              <li key={document.title}>
              <Link href={document.pdf} target={document.target} rel="noopener noreferrer">
              {document.title}
              </Link>
              </li>
              ))}
              </ul>
              <p className="date">
                <strong>Last Date of Submission</strong> : 
                <span class="material-symbols-outlined">calendar_month</span> 
                <span>{archive.date}</span> 
              </p>

          </div>
        </li>
        ))}
       </ul>   

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