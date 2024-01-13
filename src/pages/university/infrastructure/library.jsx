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

<table className="MsoTableGrid" style="width:421.65pt; border-collapse:collapse; border:solid windowtext 1.0pt" width="562"><tbody><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.scconline.com/" style="color:blue; text-decoration:underline" target="_blank">SCC ONLINE</a></span></span></b></span></span></span></p>
			</td>
			<td style="border:solid windowtext 1.0pt; width:286.85pt; border-left:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.culibrary.ac.in/digital-lib-dev/ebook/ebook_catalog.php?cat=12" style="color:blue; text-decoration:underline">TAGORE LAW LECTURE</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://home.heinonline.org/" style="color:blue; text-decoration:underline" target="_blank">HEINONLINE</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://sites.google.com/view/indianjournalofcriminology/home" style="color:blue; text-decoration:underline">INDIAN JOURNAL OF CRIMINOLOGY</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.manupatrafast.com/" style="color:blue; text-decoration:underline" target="_blank">MANUPATRA</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://law.exeter.ac.uk/hamlyn/hamlynarchives/" style="color:blue; text-decoration:underline">HAMLYN LECTURES</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:13.75pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:13.75pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://launch.westlawasia.com/signon?sp=nusrlrip-1" style="color:blue; text-decoration:underline" target="_blank">WESTLAW</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:13.75pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://network.bepress.com/" style="color:blue; text-decoration:underline">DIGITAL COMMONS</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://proview.thomsonreuters.com/library.html?sponsor=inpvnusrlrip-1" style="color:blue; text-decoration:underline">WESTLAW E-BOOK</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://tannerlectures.utah.edu/lecture-library.php" style="color:blue; text-decoration:underline">TANNERS LECTURES</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.jstor.org/" style="color:blue; text-decoration:underline" target="_blank">JSTOR</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://indiankanoon.org/" style="color:blue; text-decoration:underline">INDIAN KANOON</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://advance.lexis.com/in?identityprofileid=K9MT8359379" style="color:blue; text-decoration:underline" target="_blank">LEXISNEXIS</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<h3 style="margin-left:24px">&nbsp;</h3>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.ebcreader.com/" style="color:blue; text-decoration:underline">EBC READER</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<h3 style="margin-left:24px">&nbsp;</h3>
			</td>
		</tr><tr style="height:14.35pt"><td style="border:solid windowtext 1.0pt; width:134.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="180">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.legitquest.com/" style="color:blue; text-decoration:underline">LEGITQUEST</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:286.85pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.35pt" valign="top" width="382">
			<h3 style="margin-left:24px">&nbsp;</h3>
			</td>
		</tr></tbody></table><h3>&nbsp;</h3>

<table className="MsoTableGrid" style="border-collapse:collapse; border:solid windowtext 1.0pt"><tbody><tr style="height:14.85pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://shodhganga.inflibnet.ac.in/" style="color:blue; text-decoration:underline">Shodhganga</a></span></span></b></span></span></span></p>
			</td>
			<td style="border:solid windowtext 1.0pt; width:211.9pt; border-left:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://ndl.iitkgp.ac.in/" style="color:blue; text-decoration:underline">NDLI</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.25pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.25pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://epgp.inflibnet.ac.in/" style="color:blue; text-decoration:underline">Epgpathshala</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:211.9pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.25pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://pds.inflibnet.ac.in/" style="color:blue; text-decoration:underline">E-SODH SUDDHI</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.85pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://vidyamitra.inflibnet.ac.in/" style="color:blue; text-decoration:underline">Vidya Mitra</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:211.9pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://shodh.inflibnet.ac.in:8080/jspui/advanced-search" style="color:blue; text-decoration:underline">SHODHGANGOTRI</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.85pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://ncert.nic.in/textbook.php/" style="color:blue; text-decoration:underline">NCERT Books</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:211.9pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://vidwan.inflibnet.ac.in/" style="color:blue; text-decoration:underline">VIDWAN</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.85pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://doaj.org/" style="color:blue; text-decoration:underline">DOAJ</a></span></span></b></span></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:211.9pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="https://www.doabooks.org/" style="color:blue; text-decoration:underline">DOAB</a></span></span></b></span></span></span></p>
			</td>
		</tr><tr style="height:14.85pt"><td style="border:solid windowtext 1.0pt; width:211.9pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p>&nbsp;</p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; width:211.9pt; border-top:none; border-left:none; border-right:solid windowtext 1.0pt; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="283">
			<p>&nbsp;</p>
			</td>
		</tr><tr style="height:14.85pt"><td colspan="2" style="border:solid windowtext 1.0pt; width:423.8pt; border-top:none; padding:0in 5.4pt 0in 5.4pt; height:14.85pt" valign="top" width="565">
			<p align="center" style="text-align:center"><span style="font-size:11pt"><span style="line-height:normal"><span style="font-family:Calibri,&quot;sans-serif&quot;"><b><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><a href="../sites/default/files/documents/cd-rom.pdf" style="color:blue; text-decoration:underline">Cd Rom Databases</a></span></span></b></span></span></span></p>
			</td>
		</tr></tbody></table><h3>NUSRL Library <a href="https://192.168.1.210/">OPAC</a></h3>

<p>&nbsp;</p>
  </div>
  
  <hr/>
</section> 

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default library