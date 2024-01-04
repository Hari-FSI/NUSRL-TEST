import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongarrowright, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const DynamicBannersection = dynamic(() => import('../components/Bannersection'), {
  suspense: true,
})
const DynamicLatestNews = dynamic(() => import('../components/LatestNews'), {
  suspense: true,
})
const DynamicExplore = dynamic(() => import('../components/Explore'), {
  suspense: true,
})
const DynamicknowmoreBlock = dynamic(() => import('../components/knowmoreBlock'), {
  suspense: true,
})
const DynamicStatsSec = dynamic(() => import('../components/StatsSec'), {
  suspense: true,
})

export default function pages() {
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  useEffect(()=>{
      new WOW.WOW({
        live: true
    }).init();
    },[])
    
  const [results, setResults] = useState()
return (
<main>

<Suspense fallback={<div>Loading...</div>}><DynamicBannersection /></Suspense>


<section className="notification-sec">
	  <div className="container-fluid">
	  <div className="row">
    <article className="col-md-1 col-sm-12"></article>
    <article className="col-md-3 col-sm-6">
    <div className="oneblock inblock">
    <h2>Visit NUSRL</h2>
    <p>Campus tour: modern classrooms, vibrant spaces.</p>
    <p><Link href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></Link></p> 
    </div>
	  </article>

    <article className="col-md-3  col-sm-6">
    <div className="twoblock inblock" >
    <h2>Infrastructure</h2>
    <p>Innovative infrastructure for inspired learning.</p>
    <p><Link href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></Link></p> 
    </div>
	  </article>
	  
	  <article className="col-md-5  col-sm-12">
    <Suspense fallback={<div>Loading...</div>}><DynamicLatestNews /></Suspense>
	  </article>
	  
	  </div>
	  
	  </div>
	  </section>

    <section className="about-sec">
<div className="container">
<div className="row">
<div className="col-md-6 col-sm-6 img-block">
<Image 
className="abt1-img"
    src="/images/about-1.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    />

<Image 
className="abt1-img"
    src="/images/about-2.webp"
    alt="Picture of the author"
    width={278}
    height={395}
    />

</div>

<div className="col-md-6 col-sm-6 content-txt">
<div className="heading-sec">
<h2>About NUSRL</h2>
</div>
<h4>National University of Study and Research in Law, Ranchi (NUSRL) was established by Act No. 4 of Jharkhand State Assembly in 2010.</h4> 
<p>The University has subsequently been recognized by University Grants Commission (UGC) in September 2011 u/s 22, u/s 12B in the year 2018 of the UGC Act of 1956 and Bar Council of India (BCI). The University started functioning in September 2010. At present, the University has more than 600 students on rolls in the undergraduate course. The University has been included as member of the CLAT w.e.f. CLAT 2012.</p>
<p className="btn-sec"><Link className="btn btn-blue" href="/about">Know More</Link></p>
</div>
</div>
</div>

</section>


<section className="explore-nusrl-sec">
<div className="container">
   <Suspense fallback={<div>Loading...</div>}><DynamicExplore /></Suspense>
</div>
</section>


<Suspense fallback={<div>Loading...</div>}><DynamicStatsSec/></Suspense>

<section className="message-sec">
<div className="container">
<div className="div-table">
<aside className="txt-cell">
<div className="heading-sec">
<h2>University Message</h2>
<p>Empowering minds, fostering innovation—our university is a hub of knowledge and inclusive learning, preparing students for a limitless future.</p>
<p className="btn-sec"><Link className="btn btn-blue" href="/">All Faculties</Link></p>
</div>
</aside>

<aside>
<ul>
<li>
    <Image 
    src="/images/faculty/chancellor.webp"
    alt="Picture of the author"
    width={240}
    height={360}
    />
    <div className="userinfo">
      <h3>Hon’ble The Chief Justice Sanjaya Kumar Mishra</h3>
      <p>Chancellor</p>
    </div>
    <Link href="/"></Link>
  </li>

  <li>
    <Image 
    src="/images/faculty/vcmessage.webp"
    alt="Picture of the author"
    width={240}
    height={360}
    />
    <div className="userinfo">
      <h3>Prof. (Dr.) Ashok R. Patil</h3>
      <p>Vice-Chancellor</p>
    </div>
    <Link href="/"></Link>
  </li>

</ul>
</aside>
</div>
</div>
</section>

<section className="explore1-nusrl-sec">
  <div className='container'>
   <div className="row">
   <aside className="col-md-12">
    <div className="heading-sec text-center">
     <h2>Academic Programmes</h2>
    </div>
   </aside>


   </div>
  </div>


  <div className="layout--tabs">
  <div className="">
    <div className="nav-tabs-wrapper">
    <div className="container">
      <ul className="nav nav-tabs" id="tabs-title-region-nav-tabs" >
        <li className="nav-item active">
          <a className="nav-link" role="tab" data-toggle="tab"   href="#block-simple-text-1" aria-selected="true" aria-controls="block-simple-text-1" id="block-simple-text-1-tab">
          <Image 
          src="/images/explore/program-1.webp"
          alt="Picture of the author"
          width={60}
          height={60}
          />
            Under Graduate
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" role="tab" href="#block-simple-text-2" aria-selected="false" aria-controls="block-simple-text-2" id="block-simple-text-2-tab">
          <Image 
          src="/images/explore/program-2.webp"
          alt="Picture of the author"
          width={60}
          height={60}
          />
          Center of Post Graduate Legal Studies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" role="tab" href="#block-simple-text-3" aria-selected="false" aria-controls="block-simple-text-3" id="block-simple-text-3-tab">
          <Image 
          src="/images/explore/program-3.webp"
          alt="Picture of the author"
          width={60}
          height={60}
          />
          Ph. D.</a>
        </li>
      </ul>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <div className="tab-content">

          <div id="block-simple-text-1"
          style={{
            backgroundImage:`url(/images/explore/program-1.webp)`,
            }}
          className="tab-pane active block block-layout-builder block-inline-blockqfcc-blocktype-simple-text" role="tabpanel" aria-labelledby="block-simple-text-1-tab">
            <div className='container'>
           <div className='programms-block'>
              <h3> UNDER GRADUATE PROGRAMMES</h3>
              <ul>
              <li><a href="/">UG Admission</a></li>
              <li><a href="/">Course Description</a></li>
              <li><a href="/">Syllabus</a></li>
              <li><a href="/">Subject List</a></li>
              <li><a href="/">Fee Structure</a></li>
              </ul>
           </div>
           </div>
          </div>
          <div id="block-simple-text-2"
          style={{
            backgroundImage:`url(/images/explore/program-2.webp)`,
            }}
          className="tab-pane block block-layout-builder block-inline-blockqfcc-blocktype-simple-text" role="tabpanel" aria-labelledby="block-simple-text-2-tab">
           <div className='container'>
            <div className='programms-block'>
              <h3>CENTER OF POST GRADUATE LEGAL STUDIES</h3>
              <h4>Post Graduate LLM (One Year)</h4>
              <p><strong>LL.M. (One Year)</strong></p>
              <ul>
              <li><a href="/">PG Admission</a></li>
              <li><a href="/">PG Course Description</a></li>
              <li><a href="/">L.L.M. Syllabus</a></li>
              <li><a href="/">PG Fee Structure</a></li>
              </ul>
           </div>
           </div>
          </div>
          <div id="block-simple-text-3"
           style={{
            backgroundImage:`url(/images/explore/program-3.webp)`,
            }}
          className="tab-pane block block-layout-builder block-inline-blockqfcc-blocktype-simple-text" role="tabpanel" aria-labelledby="block-simple-text-3-tab">
          <div className='container'>
          <div className='programms-block'>
              <h3> PH. D.</h3>
              <ul>
              <li><a href="/">Ph.D Admission</a></li>
              <li><a href="/">PHD Course Description</a></li>
              <li><a href="/">Fee Structure of Ph.D. (Full Time)</a></li>
              <li><a href="/">Fee Structure of Ph.D. (Part Time)</a></li>
              <li><a href="/">Fees structure of Ph. D. Thesis submission </a></li>
              </ul>
           </div>
           </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>


</section>





<section className="gallery-sec">
  <div className='container'>
   <div className="row">
   <div className="">
   <div class="notices">
   <div className="heading-sec float">
     <h2>Announcements</h2>
     <a className="allBtn" href="/">View All <span className="material-symbols-outlined">trending_flat</span></a>
     <div className="clearfix"></div>
    </div>
    <div class="announcementsBox">
      <div class="row">
        <ul class="timeline ">
          <li className="col-md-4 col-sm-6">
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          <li className="col-md-4 col-sm-6">
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          <li className="col-md-4 col-sm-6">
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          <li className="col-md-4 col-sm-6">
          <div class="timelineDot"></div>
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          <li className="col-md-4 col-sm-6">
          <div class="timelineDot"></div>
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          <li className="col-md-4 col-sm-6">
          <div class="timelineDot"></div>
          <div class="timelineWork">
          <p class="date"><span class="material-symbols-outlined">calendar_month</span> June 28, 2023</p>
          <h3>RECRUITMENT NOTIFICATION (For IPR-Chair Research Assistant (Law) Position by PhD Scholars only)</h3>
          <Link  href="http://www.nusrlranchi.ac.in/sites/default/files/2023-11/Corrigendum-Internet%20Leased%20Line.pdf" className="link-block" target="_blank"></Link>
          </div>
          </li>

          
        </ul>
      </div>
    </div>
  </div>
   </div>

   </div>

  </div>
</section>

<section className="gallery-blks-sec">
   <div className="div-table">
    <aside  
    style={{
    backgroundImage:`url(/images/gallery/gallery-2.webp)`,
    }}
    >
      <div className="in-block">  
      <div className="content1-txt blue-bg">
        <h3 class="title">Gallery</h3>
        <p>Our visual tapestry tells stories, evokes emotions, and celebrates artistic diversity. Explore the extraordinary through our gallery.</p>
        <p><a href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></a></p>
        </div>
        </div> 
    </aside>

    <aside>
      <ul>
        <li className="green">
        <div className="in-block"> 
        <div className="content-txt">
        <h3 class="title">Scholarship Programs</h3>
        <p>Explore diverse scholarships at NUSRL - fueling academic excellence and rewarding achievements.</p>
        <p><a href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></a></p>
        </div>
        </div> 
        </li>
        <li 
        style={{
        backgroundImage:`url(/images/gallery/gallery-4.webp)`,
        }}
        >
          
        </li>
      </ul>

      <ul>
      <li 
        style={{
        backgroundImage:`url(/images/gallery/gallery-5.webp)`,
        }}
        >
          
        </li>
        <li className="blue-bg">
        <div className="in-block"> 
        <div className="content-txt">
        <h3 class="title">Facilities</h3>
        <p>Discover cutting-edge facilities, fostering innovation at every corner of our university.</p>
        <p><a href="/">Read More <span class="material-symbols-outlined"> chevron_right </span></a></p>
        </div>
        </div> 
        </li>
        
      </ul>
    </aside>

   </div>
</section>





<section className="news-home-sec">
<div id="rs-latest-news" className="rs-latest-news sec-spacer">
			<div className="container">
    
          <div className="row">
          <aside className="col-md-12">
          <div className="heading-sec float">
          <h2>Lastest Events</h2>
          <a className="allBtn" href="/">View All <span className="material-symbols-outlined">trending_flat</span></a>
          <div className="clearfix"></div>
          </div>
          </aside>
          </div>
				<div className="row">
			        <div className="col-md-6 col-sm-6">
						<div className="news-normal-block">
		                    <div className="news-img">
		                    	<a href="/">
                            <Image 
                            src="/images/news/1.webp"
                            alt="Picture of the author"
                            width={555}
                            height={262}
                            />
		                    	</a>
		                    </div>
	                    	<div className="news-date">
	                    		<i className="fa fa-calendar-check-o"></i>
	                    		<span>June  28,  2017</span>
	                    	</div>
	                    	<h4 className="news-title"><a href="/">Those Other College Expenses You Aren't Thinking About</a></h4>
	                    	<div className="news-desc">
	                    		<p>
	                    			Blandit rutrum, erat et egestas ultricies, dolor tortor egestas enim, quiste rhoncus sem the purus eu sapien curabitur.Lorem Ipsum is therefore always free from repetitionetc.
	                    		</p>
	                    	</div>
	                    <br/>
		                </div>
			        </div>
			        <div className="col-md-6 col-sm-6">
			        	<div className="news-list-block">
			        		<div className="news-list-item">
			                    <div className="news-img">
			                    	<a href="/">
                            <Image 
                            src="/images/news/2.webp"
                            alt="Picture of the author"
                            width={170}
                            height={128}
                            />
			                    	</a>
			                    </div>			        			
								<div className="news-content">
			                    	<h5 className="news-title"><a href="/">While the lovely valley team work</a></h5>
			                    	<div className="news-date">
			                    		<i className="fa fa-calendar-check-o"></i>
			                    		<span>June  28,  2017</span>
			                    	</div>
			                    	<div className="news-desc">
			                    		<p>
			                    			Excepteur sint occaecat cupidatat non proident,
			                    			sunt in culpa qui officia deserunt.
			                    		</p>
			                    	</div>
				                </div>			        			
			        		</div>
			        		<div className="news-list-item">
			                    <div className="news-img">
			                    	<a href="/">
                                <Image 
                                src="/images/news/3.webp"
                                alt="Picture of the author"
                                width={170}
                                height={128}
                                />
			                    	</a>
			                    </div>			        			
								<div className="news-content">
			                    	<h5 className="news-title"><a href="/">I must explain to you how all this idea</a></h5>
			                    	<div className="news-date">
			                    		<i className="fa fa-calendar-check-o"></i>
			                    		<span>June  28,  2017</span>
			                    	</div>
			                    	<div className="news-desc">
			                    		<p>
			                    			Excepteur sint occaecat cupidatat non proident,
			                    			sunt in culpa qui officia deserunt.
			                    		</p>
			                    	</div>
				                </div>			        			
			        		</div>
			        		<div className="news-list-item">
			                    <div className="news-img">
			                    	<a href="/">
                                <Image 
                                src="/images/news/4.webp"
                                alt="Picture of the author"
                                width={170}
                                height={128}
                                />
			                    	</a>
                            
			                    </div>			        			
								<div className="news-content">
			                    	<h5 className="news-title"><a href="/">I should be incapable of drawing a stroke</a></h5>
			                    	<div className="news-date">
			                    		<i className="fa fa-calendar-check-o"></i>
			                    		<span>June  28,  2017</span>
			                    	</div>
			                    	<div className="news-desc">
			                    		<p>
			                    			Excepteur sint occaecat cupidatat non proident,
			                    			sunt in culpa qui officia deserunt.
			                    		</p>
			                    	</div>
				                </div>			        			
			        		</div>
			        	</div>
			        </div>
			    </div>
			</div>
        </div>
        </section>







<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>

<section className="patner-sec">
  <div className='container'>
   <div className="row">
   <aside className="col-md-4">
    <div className="heading-sec">
     <h2>Our Partners</h2>
    </div>
   </aside>
   <aside className="col-md-8">
    <div className="in-block patnerlogo">
    <aside> 
    <Image 
      src="/images/patners/india-gov.webp"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="/images/patners/mygov.webp"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="/images/patners/goiweb.webp"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    
    </div>
  </aside>


   </div>
  </div>
</section>
</main>

  )
}
