import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
  const DynamicuniversityMenu = dynamic(() => import('../../../components/HeaderMain/universityMenu'), {
    suspense: true,
  })  
const chrss = () => {

    const herobanner = [
        { id:1, 
          title: "CHRSS", 
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

    <section className="container">
    <div className="row">
    <div className="col-md-3">
    <Suspense fallback={<div>Loading...</div>}><DynamicuniversityMenu /></Suspense>
    </div>
    <div className="col-md-9 mt_30"> 
  <div className="text_block text-justify">
  <div className="image height-auto pull-right" style={{ padding: '0 0 15px 30px' }} >
      <Image 
      src="/images/chrss-logo.png"
      alt="Chrss"
      width={240}
      height={360}
      />
    </div>
  <h4 className="mb_15">ABOUT CHRSS</h4>

<p>Centre for Human Rights and Subaltern Studies (CHRSS) was created with an objective to work on protection of human rights. The centre focuses on various human rights issues. The idea of human rights maintains that there are certain rights universal, inherent and inalienable in nature. Universality believes that these rights are given to all. Inalienability ensures that it can never be compromised except by the procedure established by law. These rights are also of inherent nature and are the backbone of any human rights treaty. The aim of Centre is to commit for achieving the goals of Social Justice enshrined in our Preamble and to achieve this goal, the members of the committee promises to engage in discourse, seminar, Legal Aid so as to ensure that we contribute even some percent back to the society.</p>

<p><a href="sites/default/files/Human rights journal 1.pdf">NUSRL JOURNAL OF HUMAN RIGHTS</a></p>

<div className="table-responsive">
<table role="presentation"><tbody><tr><td>Dr. Subir Kumar</td>
			<td>Dr Gunjan</td>
			<td>Ms. Soni Bhola</td>
		</tr><tr><td>Convenor</td>
			<td>Co-Convenor</td>
			<td>Co-Convenor</td>
		</tr></tbody></table></div>
  </div>

  </div>
  </div>
</section> 

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default chrss