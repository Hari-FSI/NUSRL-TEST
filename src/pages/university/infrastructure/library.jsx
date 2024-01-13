import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const library = () => {

    const herobanner = [
        { id:1, 
          title: "Library", 
          image: "/images/inner-banner.webp"
        }
      ];

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

    <section className="un_messge container">
  <div className="text_block">
  <h3>Library</h3>
  <p>The University has a rich library with a wide range of books that include legal classics as well as books on social science. The admirable corpus of book continues to grow with continuous influx of quality books. The library also subscribes to law journals and reviews of repute such as The Economic &amp; Political Weekly, The Journal of The Indian Law Institute, The Patents and Trade Marks Cases along with back volume CD, Taxman Journals, All India Reporter, Indian Journal of Public Administration, weekly subscription of India Today, The Week, Time, Outlook, Frontline (fortnightly) and Sports Star etc.. Regular newspapers subscription includes The Times of India, The Telegraph, The Economic Times, The Hindu, The Statesman, The Financial Express, The Pioneer, Hindustan Times, Prabhat Khabar (Hindi) and Hindustan (Hindi).</p>

<p>The NUSRL library also subscribes to valuable E-resource databases. Online services like Manupatra, SCC Online, WestLaw-India, Hein Online and Jstor are always just a click away. The University from time to time arranges for training sessions to make the students comfortable with the E-resources.</p>

<p>The NUSRL library also has a valuable resource available in the form of CD-Rom databases. Some of the notables resources in form of&nbsp; CD- Rom are Company Law Online, Conveyancing, Direct Tax Law, The Indian Draftsman (A Practical Guide to Legal Drafting), Trademark and Copyright Disputes: Litigation Forms and Analysis), Company Law: K M Ghosh &amp; Dr K R Chandratre’s, Palmer’s Company Law, Chambers 21st Century Dictionary, Principles of Corporate Finance, 8th ed., Macroeconomics: Jagdish Handa,&nbsp; Social Psychology: Robert A. Baron, The New Oxford Companion to Economics in India Edited by Kaushik Basu and Annemie Maertens, Hitler: A Career by Joachim C. Fest and The Patents and Trade Marks Cases are available in the form of CD-Rom.</p>

<h3><a href="https://nusrl.remotlog.com/">LIBRARY ACCESS FROM OFF-CAMPUS</a></h3>

<h3><a href="https://nusrl.turnitin.com/">TURNITIN</a></h3>

<h3>Library e-Resources</h3>
<h3>NUSRL Library <a href="https://192.168.1.210/">OPAC</a></h3>

<p>&nbsp;</p>
  </div>
  
  <hr/>
</section> 

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default library