import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";


const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const login_problem = () => {

    const herobanner = [
        { id:1, 
          title: "Login Problem", 
          image: "/images/inner-banner.webp"
        }
      ];


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
<section className="container mt_30 mb_60">
<div >
    <p><strong>Please call 8292145001</strong><br/>
Mr Deepak of HDFC Bank</p>

<p><strong>Call 8580322075</strong><br/>
Ms. Debjani Sen of NUSRL</p>
</div>
</section>


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default login_problem