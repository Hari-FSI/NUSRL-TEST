import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";


const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const hdfc_bank_account_details = () => {

    const herobanner = [
        { id:1, 
          title: "HDFC Bank Account Details", 
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
<div><p><strong>Account Name :</strong> NUSRL Ranchi</p>

<p><strong>Bank Name :</strong> HDFC Bank</p>

<p><strong>Branch :</strong> Kanke Road, Ranchi</p>

<p><strong>Bank Account No :</strong> 50100212797372</p>

<p><strong>IFSC :</strong> HDFC0002687</p>

<p>Note:This is to inform you that there is no need to have an account with HDFC bank fro online payments.<br/>
Irrespective of any bank account students/parents are having they can choose their respective bank and do the payment for fee through choosing either of thebelowoptions:</p>

<p><br/>
1. Debit Card<br/>
2. Credit card<br/>
3. Net Banking<br/>
Ps – students who have taken loan can do the payment through NEFT/ RTGS in the below account or deposit DD in the bank (HDFC, Kanke branch)</p></div>

</section>


<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default hdfc_bank_account_details