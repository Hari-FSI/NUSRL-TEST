import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Link from "next/link";
const DynamicknowmoreBlock = dynamic(() => import('../../../components/Home/knowmoreBlock'), {
    suspense: true,
  })

  const DynamicaboutMenu = dynamic(() => import('../../../components/HeaderMain/aboutMenu'), {
    suspense: true,
}) 

const hostels_rules = () => {

    const herobanner = [
        { id:1, 
          title: "Hostels Rules", 
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
    <Suspense fallback={<div>Loading...</div>}><DynamicaboutMenu /></Suspense>
    </div>
    <div className="col-md-9  pt_30">
<div className="text_para">
  <div className="text_para_section ">
  <h4 className="mt_15">Rules Of Conduct — Halls Of Residence</h4>

<p className="mt_15 mb_10"><strong>(I) WARDEN</strong><br />
There shall be a warden in each Halls of Residence, herein after called HoR, appointed by the Vice Chancellor from time to time who shall submit periodical reports to the Chief Warden, if any, to be placed before the Committee of Wardens, if any or directly to the Campus Security &amp; Disciplinary Committee. The Warden should present in the respective HoR at 10.30 pm to check the attendance and discipline of the students. The Warden should make a list of faculties and should invite the faculties who are residents and non-residents of the campus to visit the hostels to check the maintenance and to provide suggestions. The Warden should shift the sweepers and Chowkidars from one hostel to another every fortnight.</p>

<p className="mt_15 mb_10"><strong>(II) CHIEF WARDEN AND COMMITTEE OF WARDENS</strong><br />
All the wardens of all HoR shall form the Committee of Wardens which shall be presided over by the Chief Warden appointed by the Vice Chancellor. The Committee should meet in the last working day of week and shall discuss about the periodical reports about the respective HoR and the minutes should be circulated to the Campus Security and Disciplinary Committee and who shall place the same before the Vice-Chancellor.</p>

<p><strong>General Rule on Discipline</strong>: Students shall, in general, maintain a high standard of peace and tranquility all the time, during their stay in HoR, and in particular,</p>

<ul><li>Maintain cleanliness and strict discipline in their flats, rooms and in HoR</li>
	<li>Not play music at high volume, shout, scream or any such misbehavior that would annoy, disturb or irritate any resident of HoR and</li>
	<li>Not to smoke, drink, consume narcotic drugs and misbehaving due to their impact</li>
	<li>Not to remain in HoR during the class hours unless there is permission from Warden</li>
	<li>Not violate any other guidelines given by the HoR Committee to maintain strict discipline.</li>
</ul>

<p className="mt_15 mb_10"><strong>(III) DINING HALL CONDUCT</strong><br />
The Common Mess will serve vegetarian regulated healthy food. Non-vegetarian food may also be served on demand of the student (extra payment) twice a week, as fixed by the Mess Committee.&nbsp;&nbsp; Inmates of the HoR shall take breakfast, lunch and dinner in the Dining Hall and shall not carry any food articles, Cutleries and crockery from the Dinner Hall to their respective rooms or flats provided that the Warden may give special permission to carry food to the room of a sick student in special circumstances.</p>

<p className="mt_15 mb_10"><strong>(IV) HALLS OF RESIDENCE (HOR) COMMITTEE</strong><br />
There shall be a HoR Committee constituted by the Warden. Committee should contain representatives from all floors of all HoR. The duty of the members of the Committee is given below:</p>

<ul><li>Allotment of rooms</li>
	<li>Formulating and notifying guidelines for maintenance of discipline and order</li>
	<li>To look after the maintenance of cleanliness, strict discipline and welfare of the students in their respective floor</li>
	<li>To check the working nature of the sweepers, Chowkidars and care-takers</li>
	<li>To look into day to day administration and instances of grievances and complaints</li>
	<li>To discharge any other functions as may be given by the Warden.</li>
</ul><p>The periodical reports should be intimated to the Warden from time to time and the Committee should conduct a meeting once in a week under the chairmanship of Warden. The decision taking authority is vested with the Warden and Warden’s decision is final.</p>

<p>The HoR Committee under the chairmanship of Warden, shall deal with the grievances and complaints. Notice should be issued.</p>

<p className="mt_15 mb_10"><strong>(V) APPEAL</strong><br />
In the event a student is not satisfied with the grievance remedy as decided by the HoR Committee, there may be an appeal to the Chief Warden and Committee of Wardens. In the event the decision of the Chief Warden and Committee of Warden is not satisfactory either to the student/Warden, there may be an appeal to the Campus Security &amp; Disciplinary Committee and the same should be notified to the Vice Chancellor.</p>

<p className="mt_15 mb_10"><strong>(VI) TIMINGS</strong><br />
The residents of HoR shall observe strictly the following:</p>

<ul><li>Return to the respective HoR latest by 10:00 pm</li>
	<li>Special permission may be taken to come to the Campus after 09:00 pm. Such permission is given only in case of emergency, special circumstances which the Warden feels reasonable. The purpose should be given in the application for permission. The Warden may refuse such permission where late coming in the Campus is not strictly required.</li>
	<li>Special permission may be taken to come to the HoR after 10:30 pm from the Warden provided that the purpose for the same is given in the application for permission. The Warden may refuse such permission where late coming in the HoR is not strictly required.</li>
	<li>Stay out overnight is strictly prohibited unless a prior permission is taken from the Warden and the same is in the knowledge of the parent/local guardian. (Stay out permission is for whole night and reporting to campus after 5 am). Provided further that, the application must specify reason for stay out, place of stay out and the contact telephone number, if available. The warden may insist the student to confirm the same from the parent/ local guardian.</li>
	<li>Visitors shall not be taken to the room of the students. They can only meet in the lobby unless in special circumstances the Warden permits the visitor in the room. In case of HoR for girls, no male member as a visitor is allowed i.e., above the age of 14 years.</li>
	<li>No inter-hostel movement after 10:30 pm unless in special circumstances the Warden permits.</li>
</ul><p>All the main doors of the HoR should be closed by 11.00 pm and will be opened at 4.30 am. In case of any emergency, the student should report the same to the floor member of HoR Committee and if the reason is found justifiable the member can allow and the same should be intimated to the Warden immediately in the morning.</p>

<p className="mt_15 mb_10"><strong>(VII) PROHIBITION</strong><br />
Smoking of intoxicated and contraband substances and consumption of alcohol or alcoholic substances shall be strictly prohibited. Any one found in possession of such substance shall be expelled from the HoR on spot and the decision of the Warden in this regard shall be final. Such student shall also be liable for expulsion from the university.</p>

<p className="mt_15 mb_10"><strong>(VII) OBSCENE AND INDECENT BEHAVIOR</strong><br />
Obscene and indecent behavior in the campus and in the HoR shall invite strict disciplinary action. If the same is found by any employee of the university, the same should be reported to the Warden and Warden should expel them from the HoR. The decision of the Warden in this regard shall be final<strong>.</strong></p>

<p className="mt_15 mb_10"><strong>(VIII) EVE TEASING AND DEROGATORY PRACTICES</strong><br />
Eve teasing and any practice derogatory to human dignity and personal privacy are strictly prohibited. Any one found indulging in such acts would be placed before the Prevention of Sexual Harassment Committee constituted by the University authorities for taking appropriate action.</p>

<p className="mt_15 mb_10"><strong>(IX) MAINTENANCE AND INFRASTRUCTURE</strong><br />
Each room in the flat has been provided with furniture and appliances such as table, chair, sleeping cot, fan, tube light, geysers in the bathroom and other such material as may be notified by the Warden from time to time. Each student shall use such material with adequate care like an ordinary prudent person. Any damage or loss caused or loss caused thereto shall be borne by the student concerned.</p>

<p className="mt_15 mb_10"><strong>(X) REFERENCE</strong><br />
Any dispute or problem arising between the students, for whatsoever reasons, shall lodge immediately to the Warden who shall refer the same to the Proctorial Board.</p>

<p className="mt_15 mb_10"><strong>(XI) PROTOCOL</strong><br />
The protocol should be developed by the Warden with the help of the HoR Committee which shall inter Alia, include guidelines for use of facilities to be developed by HoR.</p>

<p className="mt_15 mb_10"><strong>(XII) FINALITY</strong><br />
In matters of maintenance of discipline in the HoR the decision of the Warden shall be final.</p>
  </div>
</div>
</div>
</div>
</section>

<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </>
  )
}

export default hostels_rules
