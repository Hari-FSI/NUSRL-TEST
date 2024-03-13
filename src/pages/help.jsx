import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})
const help = () => {
  const herobanner = [
    { id:1, 
      title: "Help", 
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
    <div className="list_of_pdfs <p>&nbsp;</p>">
    <div ><h4 className="mb_15">Viewing Information in Various File Formats</h4>

<p>The information provided by this website is available in various file formats, such as Portable Document Format (PDF), Word, Excel and PowerPoint. To view the information properly, your browser needs to have the required plug-ins or software. For example, the Adobe Flash software is required to view the Flash files. In case your system does not have this software, you can download it from the Internet for free. The table lists the required plug-ins needed to view the information in various file formats.</p>

<h4 className="mb_15 mt_30">Plug-in for alternate document types</h4>

<div className="cc-cell">
<table><tbody><tr><th>Document Type</th>
			<th>Plug-in for Download</th>
		</tr></tbody><tbody><tr><td>Portable Document Format (PDF) files</td>
			<td><a href="https://get.adobe.com/reader/" onclick="myFunction();" target="_blank">Adobe Acrobat Reader</a> Convert a PDF file online into HTML or text format</td>
		</tr><tr><td>Word files</td>
			<td><a href="https://www.microsoft.com/downloads/details.aspx?familyid=941b3470-3ae9-4aee-8f43-c6bb74cd1466&amp;displaylang=en" onclick="myFunction();" target="_blank">
            Word Viewer (in any version till 2003)</a> Microsoft Office Compatibility Pack for Word (for 2007 version)</td>
		</tr><tr><td>Excel files</td>
			<td><a href="https://www.microsoft.com/downloads/details.aspx?FamilyID=c8378bf4-996c-4569-b547-75edbd03aaf0&amp;displaylang=EN" onclick="myFunction();" target="_blank">Excel Viewer 2003 (in any version till 2003)</a> Microsoft Office Compatibility Pack for Excel (for 2007 version)</td>
		</tr><tr><td>PowerPoint presentations</td>
			<td><a href="https://www.microsoft.com/downloads/details.aspx?familyid=941b3470-3ae9-4aee-8f43-c6bb74cd1466&amp;displaylang=en" onclick="myFunction();" target="_blank">PowerPoint Viewer 2003 (in any version till 2003)</a> Microsoft Office Compatibility Pack for PowerPoint (for 2007 version)</td>
		</tr><tr><td>Flash content</td>
			<td><a href="https://get.adobe.com/flashplayer/" onclick="myFunction();" target="_blank">Adobe Flash Player</a></td>
		</tr></tbody></table></div>
</div>
    </div>
  </div>
</section>

    <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default help