import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const endowmentsawards = () => {
  const herobanner = [
    { id:1, 
      title: "Endowments/ Awards", 
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
    <div><h4 className="mb_15">ENDOWMENT MEDAL AWARDS (U.G.)</h4>

<div className="table-responsive">
<table><tbody><tr><th>Sl.No.</th>
			<th>Subject</th>
			<th>Endowment details</th>
		</tr><tr><td>1.</td>
			<td>Intellectual Property Law (Hons)</td>
			<td>Datta Lal Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>2.</td>
			<td>Corporate Law (Hons)</td>
			<td>Smt. Laxmi Devi Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>3.</td>
			<td>Law of Torts</td>
			<td>Banshidhar Modi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>3.</td>
			<td>Jurisprudence</td>
			<td>Sitaram Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>4.</td>
			<td>Constitutional Law</td>
			<td>Kunj Bihari Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>5.</td>
			<td>Family Law</td>
			<td>Motilal Modi Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>6.</td>
			<td>Law of Taxation</td>
			<td>Smt. Narbadi Devi Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>7.</td>
			<td>Law of Contract</td>
			<td>Sitaram Modi Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>8.</td>
			<td>Transfer of Property Law</td>
			<td>Bajranglal Modi Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>9.</td>
			<td>Civil Procedure Code</td>
			<td>Purushottam Das Modi Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>10.</td>
			<td>Environmental Law</td>
			<td>Sitaram Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>11.</td>
			<td>Health Law</td>
			<td>Kunj Bihari Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>12.</td>
			<td>Administrative Law</td>
			<td>Smt. Parvati Devi Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>13.</td>
			<td>Law of Evidence</td>
			<td>Smt.Narayani Devi Modi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>14.</td>
			<td>Labour Law</td>
			<td>Ramdev Modi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>15.</td>
			<td>Interpretation of Statutes</td>
			<td>Govindram Modi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>16.</td>
			<td>Arbitration &amp; Alternate Dispute Resolution</td>
			<td>Jagdish Prasad Modi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>17.</td>
			<td>Drafting, Pleading and Conveyancing</td>
			<td>Smt. Laxmi Devi Jhunjhunwala Memorial medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>18.</td>
			<td>Professional Ethics</td>
			<td>Suraj Mal Sarawgi Memorial&nbsp; Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr><tr><td>19.</td>
			<td>Legal Methods</td>
			<td>Smt. Parmeshwari Devi Sarawgi Memorial Medal instituted by Mr. R. N. Jhunjhunwala, Solicitor, Advocate, Notary &amp; Senior Partner, Khaitan &amp; Co., Advocates</td>
		</tr></tbody></table></div>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default endowmentsawards