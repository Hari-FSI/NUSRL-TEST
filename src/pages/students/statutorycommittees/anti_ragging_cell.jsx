import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const anti_ragging_cell = () => {
  const herobanner = [
    { id:1, 
      title: "Anti Ragging Cell", 
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
    <div className="list_of_pdfs">
    <p>As per the guidelines of UGC an Anti Ragging Cell has been established by the National University of Study and Research in Law, Ranchi to provide a healthy and congenial atmosphere to students of the University. The cell has been constituted to meet the four basic objectives:</p>

<ol><li>&nbsp; &nbsp; To develop the guidelines and norms for a policy against Ragging;</li>
	<li>&nbsp; &nbsp; To develop principles and procedures for combating Ragging;</li>
	<li>&nbsp; &nbsp; To work out details for the implementation of the policy;</li>
	<li>&nbsp; &nbsp; To prepare a detailed plan of action, both short and long term.</li>
</ol>

<div className="row">
    <div className="col-md-8">
    <h4 className="mt_15 mb_15">Anti Ragging Activity</h4>
<p>The Convener and Members of the Anti Ragging Cell are as follows:</p>
<ul><li>Dr. Arabindo Sahoo (Convenor) Mobile no.8580322033</li>
	<li>Dr. Subir Kumar (Member) Mobile no.8580322043</li>
	<li>Dr. Gunjan (Member) Mobile no.8580322065</li>
	<li>Dr. Mausam (Member)&nbsp;</li>
	<li>Ms. Soni Bhola (Member)</li>
</ul>
    </div>
    <div className="col-md-4 video-blk">
    <a href="https://youtu.be/TJ97Eifs-eA" data-fancybox>
             <Image
             className="playicon"
                src="/images/icons/play-icon.png"
                alt="playicon"
                width={60}
                height={60}
              />

              <Image
                src="https://i3.ytimg.com/vi/TJ97Eifs-eA/maxresdefault.jpg"
                alt="Anti Ragging Activity"
                width={240}
                height={360}
              />
            </a>
    </div>
</div>

    </div>
  </div>
</section>

<section className="container mt_60 mb_60">
      <div className="cards">
        <div className="card">
          <h5>Anti Ragging Notification</h5>
          <div>
          <Link className="btn-blue-brd" href="/pdf/Anti-Ragging-Notification.pdf" target="_blank">
          <span className="material-symbols-outlined">visibility</span>
            View
          </Link>
          </div>
        </div>

        <div className="card">
          <h5>Anti-ragging affidavit by staff</h5>
          <div>
          <Link className="btn-blue-brd" href="/pdf/anti-ragging-afidavit-by-staff.pdf" target="_blank">
          <span className="material-symbols-outlined">visibility</span>
            View
          </Link>
          </div>
        </div>

      </div>
    </section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}
export default anti_ragging_cell