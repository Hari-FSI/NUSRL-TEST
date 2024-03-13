import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
  suspense: true,
})
const moot_courts = () => {
  const herobanner = [
    { id:1, 
      title: "Moot Courts", 
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
   <p><a href="/pdf/moot-court-winner.pdf"><b><u>NUSRL Team declared Winners in National Insolvency Law Moot Court Competition, 2023</u></b></a></p>

<p><a href="/students/achievements/nusrl_ranchi_wins_the_7th_wipro_earthian_award">NUSRL Ranchi wins the 7th Wipro Earthian Award</a>&nbsp;2018</p>

<div class="table-responsive">
<table><tbody><tr><th>Moot Court</th>
			<th>Date Of Competition</th>
			<th>Venue</th>
			<th>Position</th>
		</tr><tr><td>9th GLC-Trivandrum Moot Court Competition, 2014</td>
			<td>21st March-23rd March</td>
			<td>GLC, Trivandrum</td>
			<td>Winners</td>
		</tr><tr><td>Late Kusumtai Chavan Memorial 2nd National Level Moot Court Competition 2015</td>
			<td>28th February, 2015</td>
			<td>Narayanrao Chavan Law College, Nanded, Maharashtra</td>
			<td>Winners</td>
		</tr><tr><td>Nyayavalokan-5th National Trial Advocacy &amp; Judgement Writing Competition,2014</td>
			<td>24-28 September, 2014</td>
			<td>Praveen Gandhi College of Law, Mumbai</td>
			<td>Runners up</td>
		</tr><tr><td>1st IP Markets National IPR Moot Court Competition – 2015</td>
			<td>20th – 22nd February, 2015</td>
			<td>University College of Law, Osmania University</td>
			<td>Runners up</td>
		</tr><tr><td>3rd NHRC – Law Center I National Moot Court Competition 2015</td>
			<td>Februay 20-22, 2015</td>
			<td>Law Center I, Faculty of Law, Delhi</td>
			<td>Runners up</td>
		</tr><tr><td>4th RGNUL National Moot Court Competition, 2015</td>
			<td>27 – 29th March, 2015</td>
			<td>RGNUL, Patiala</td>
			<td>Runners up</td>
		</tr><tr><td>26th Kerala Law Academy Moot Court Competition 2015</td>
			<td>12th to 14th of February, 2015</td>
			<td>Kerala Law Academy, Trivandrum</td>
			<td>Runners up</td>
		</tr><tr><td>1st Manipal Ranka National Moot Court Competition 2016</td>
			<td>27th – 28th February, 2016</td>
			<td>School of Law, Manipal University Jaipur Campus</td>
			<td>Runners up</td>
		</tr><tr><td>IV Mahamana Malviya National Moot Court Competition, 2016.</td>
			<td>2nd-3rd April 2016</td>
			<td>BHU, Varanasi</td>
			<td>Runners up</td>
		</tr><tr><td>4th Mahamana Malviya National Moot Court 2014</td>
			<td>&nbsp;</td>
			<td>Faculty of Law, BHU, Benaras</td>
			<td>Semi Finalists</td>
		</tr><tr><td>5th SLCU National Moot Court Competition, 2014</td>
			<td>4th -7th September, 2014</td>
			<td>School of Law, Christ University, Bangalore</td>
			<td>Semi Finalists</td>
		</tr><tr><td>JUSTIFIED ’15- 2nd National Moot Court and Debate Competition</td>
			<td>27th March-29th March 2015</td>
			<td>Law Centre-II, Faculty of Law, University of Delhi</td>
			<td>Semi Finalists</td>
		</tr><tr><td>Surana &amp; Surana National Trial Advocacy Moot, 2015</td>
			<td>18th to 20th September, 2015</td>
			<td>Bharati Vidyapeeth University, Pune</td>
			<td>Semi Finalists</td>
		</tr><tr><td>PES Law College’s Mock Trial and Judgement Writing Competition 2015</td>
			<td>11th to 13th September, 2015</td>
			<td>PES Law College, Mumbai</td>
			<td>Semi Finalists</td>
		</tr><tr><td>Tarka Sastra, 2015</td>
			<td>18th-20th September , 2015</td>
			<td>School of Law, Sastra University</td>
			<td>Semi Finalists</td>
		</tr><tr><td>The All India USLLS First Year Students’ Moot Court Competition, 2016.</td>
			<td>26th to 28th February, 2016</td>
			<td>University School of Law and Legal Studies, Guru Gobind Singh Indraprastha University, Dwarka</td>
			<td>Semi Finalists</td>
		</tr><tr><td>UILC 2nd National Trial Advocacy Competition, 2016</td>
			<td>17th March to 19th March, 2016</td>
			<td>Punjab University, Chandigarh</td>
			<td>Semi Finalists</td>
		</tr><tr><td>2nd ITMU Moot Court Competition 2014</td>
			<td>12 March-14 March,2014</td>
			<td>ITM University, Gurgaon</td>
			<td>Best Memorial</td>
		</tr><tr><td>5th SLCU National Moot Court Competition, 2014</td>
			<td>4th -7th September, 2014</td>
			<td>School of Law, Christ University, Bangalore</td>
			<td>Best Memorial</td>
		</tr><tr><td>5th NLIU-Juris Corp National Corporate Law Moot Court Competition, 2014</td>
			<td>5th -7th September, 2014</td>
			<td>NLIU, Bhopal</td>
			<td>Best Memorial</td>
		</tr><tr><td>3rd NHRC – Law Center I National Moot Court Competition 2015</td>
			<td>Februay 20-22, 2015</td>
			<td>Law Center I, Faculty of Law, Delhi</td>
			<td>Best Memorial</td>
		</tr><tr><td>27th All India Moot Court Competition for Kerala Law Academy, 2016</td>
			<td>12- 14 February, 2016</td>
			<td>Kerala Law Academy, Trivandrum</td>
			<td>Best Memorial</td>
		</tr><tr><td>Institute of Law, Jiwaji University, Gwalior’s National Level Moot Court Competition-2016</td>
			<td>18th – 20th March, 2016</td>
			<td>Jiwaji University, Gwalior</td>
			<td>Best Memorial</td>
		</tr><tr><td>5th SLCU National Moot Court Competition, 2014</td>
			<td>4th -7th September, 2014</td>
			<td>School of Law, Christ University, Bangalore</td>
			<td>Best Speaker</td>
		</tr><tr><td>3rd NHRC – Law Center I National Moot Court Competition 2015</td>
			<td>Februay 20-22, 2015</td>
			<td>Law Center I, Faculty of Law, Delhi</td>
			<td>Best Speaker</td>
		</tr><tr><td>4th RGNUL National Moot Court Competition, 2015</td>
			<td>27 – 29th March, 2015</td>
			<td>RGNUL, Patiala</td>
			<td>Best Speaker</td>
		</tr><tr><td>Rakesh Aggarwal Memorial Moot Court Competition 2015</td>
			<td>4th to 5th April, 2015</td>
			<td>Ideal Institute of Management &amp; Technology, Delhi</td>
			<td>Best Speaker</td>
		</tr><tr><td>Tarka Sastra, 2015</td>
			<td>18th-20th September , 2015</td>
			<td>School of Law, Sastra University</td>
			<td>Best Speaker</td>
		</tr><tr><td>9th NALSAR Justice BR Sawhny National Moot Court Competition, 2015</td>
			<td>1st – 4th October, 2015</td>
			<td>NALSAR, Hyderabad</td>
			<td>Best Speaker</td>
		</tr><tr><td>Surana &amp; Surana National Trial Advocacy Moot, 2015</td>
			<td>18th to 20th September, 2015</td>
			<td>Bharati Vidyapeeth University, Pune</td>
			<td>2<sup>nd</sup> Best Speaker</td>
		</tr><tr><td>14th Surana &amp; Surana National Corporate Law Moot 2016</td>
			<td>12 – 14 February 2016</td>
			<td>JSS Law College, Mysore</td>
			<td>Octa Finalists</td>
		</tr><tr><td>20th M C Chagla Memorial GLC National Moot Court Competition, 2014</td>
			<td>11th – 12th January, 2014</td>
			<td>GLC, Mumbai</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>15th D M Harish GLC International Moot Court Competition, 2014</td>
			<td>6th – 9th Feb, 2014</td>
			<td>GLC, Mumbai</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>2nd ITMU Moot Court Competition 2014</td>
			<td>12 March-14 March,2014</td>
			<td>ITM University, Gurgaon</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>4th Edition of Paras Diwan National Moot Court Competition, 2014</td>
			<td>3rd April-6th April,2014</td>
			<td>UPES Dehradun</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>SLS Noida Moot Court Competition, 2014</td>
			<td>September 19-21, 2014</td>
			<td>Symbiosis Law School, Noida</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>Lex Omnia Moot Court, 2014</td>
			<td>31st October – 2nd November, 2014.</td>
			<td>BITS Pilani, Goa</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>3rd RMLNLU- SCC Online International Media Law Moot Court Competition, 2015</td>
			<td>27th February – 1st March, 2015</td>
			<td>RMLNLU, Lucknow</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>3rd Mahamana Malaviya National Moot Court Competition, 2015</td>
			<td>28th Feb – 1st March, 2015</td>
			<td>Faculty of Law, BHU, Benaras</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>5th NLIU – Justice RK Tankha Memorial National Moot Court Competition, 2015</td>
			<td>20-22 February, 2015</td>
			<td>National Law Institute University, Bhopal</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>22nd M.C. Chagla Memorial Government Law College National Moot Court Competition, 2015</td>
			<td>26TH &amp; 27TH SEPTEMBER 2015</td>
			<td>GLC, Mumbai</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>9th NALSAR Justice BR Sawhny National Moot Court Competition, 2015</td>
			<td>1st – 4th October, 2015</td>
			<td>NALSAR, Hyderabad</td>
			<td>Quarter Finalists, Second</td>
		</tr><tr><td>27th All India Moot Court Competition for Kerala Law Academy, 2016</td>
			<td>12- 14 February, 2016</td>
			<td>Kerala Law Academy, Trivandrum</td>
			<td>Quarter Finalists</td>
		</tr><tr><td>Institute of Law, Jiwaji University, Gwalior’s National Level Moot Court Competition-2016</td>
			<td>18th – 20th March, 2016</td>
			<td>Jiwaji University, Gwalior</td>
			<td>Quarter Finalists</td>
		</tr></tbody></table></div>
      

    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default moot_courts