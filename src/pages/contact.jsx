import React, { Suspense, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import MapContainer from '../components/Map';
import ContactForm from '../components/Forms/contact_form';
import Image from 'next/image';
import Link from 'next/link';


const contact = () => {
  const [results, setResults] = useState();
  const [showMore, setShowMore] = useState(false);
  const [value, setValue] = useState();

  const herobanner = [
    { id:1, 
      title: "Contact Us", 
      image: "/images/inner-banner.webp"
    }
  ]

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

<section className="breadcrumb">
<div className="container"> 
<div className="row">  
<div className="col-md-12 col-sm-12 col-xs-12">
<ul>
<li><Link href="/">Home</Link></li>
<li>{herobanner[0].title}</li>
</ul>
</div>
</div>
</div>
</section>

<section className="contact-tab-sec">
<div className="container"> 
<div className="c-filtering">
<ul  className="tabs demo_class nav nav-pills">
<li className="tab-link active"><a  href="#1a" data-toggle="tab">Get In Touch</a></li>
<li className="tab-link "><a href="#2a" data-toggle="tab">Approximate Distance</a></li>
<li className="tab-link "><a href="#3a" data-toggle="tab">From Airport</a></li>
<li className="tab-link "><a href="#4a" data-toggle="tab">By Taxi/Autorickshaw</a></li>
<li className="tab-link "><a href="#5a" data-toggle="tab">By Car</a></li>
</ul>
<div className="tab-content clearfix">
<div className='row'>
<aside className='col-md-6'>
<div className="tab-pane active" id="1a">
<h4 className='mt_15 mb_15'>Get In Touch</h4>
<p> Please get in touch to find out how we can help you </p>
<ContactForm />
</div>

<div className="tab-pane" id="2a">
<h4 className='mt_15 mb_15'>Approximate Distance</h4>
<p>From Ranchi Railway Station: <strong>14 Kms</strong></p>
<p>From Hatia Railway Station: <strong>18 Kms</strong></p>
<p>From Khadgara Bus Stand, Ranchi: <strong>14 Kms</strong></p>
<p>From Birsa Munda Airport: <strong>18 Kms</strong></p>
<p>Getting to NUSRL, Ranchi</p>
</div>

<div className="tab-pane" id="3a">
<h4 className='mt_15 mb_15'>From Airport</h4>
<p>There is no direct bus service from the airport to the University. Several prepaid cabs are available from the Airport to NUSRL besides options like Ola/Uber.</p>
</div>

<div className="tab-pane" id="4a">
<h4 className='mt_15 mb_15'>By Taxi/Autorickshaw</h4>
<p>From City Railway Station/ Bus Depot:<br/>
Ridesharing services like Ola and Uber are an easy way of commuting to NUSRL. If you hail a regular auto, an easy landmark would be the NUSRL, Kanke.</p>
</div>

<div className="tab-pane" id="5a">
<h4 className='mt_15 mb_15'>By Car</h4>
<p>Please enter 'NUSRL' on your GPS to reach the NUSRL campus.<br/>
            Contact Us:<br/>
            Email: <a href='mailto:registrar@nusrlranchi.ac.in'>registrar@nusrlranchi.ac.in</a></p>
</div>

</aside>
<aside className='col-md-6'>
<div className="statutory-blue">
<h4 className='mb_15'>Contact Us</h4>
<p><strong>National University of Study and Research in Law</strong><br/>
At: Nagri, PO: Bukru, PS: Kanke<br/>
Kanke Pithoria Road, Kanke, Ranchi (Jharkhand)<br/>
Pin - 834006
</p>
<p><strong>Phone Nos.:&nbsp; &nbsp;</strong><Link href="pdf/contacts-numbers-2023.pdf" target="_blank">Click here</Link></p>
<p><strong>E-mails:&nbsp; &nbsp;</strong><br/>
<strong>Vice Chancellor :</strong> vc@nusrlranchi.ac.in<br/>
<strong>Registrar : </strong>registrar@nusrlranchi.ac.in<br/>
<strong>Dean Academic :</strong> dean@nusrlranchi.ac.in<br/>
<strong>Controller of Examination :</strong> coe@nusrlranchi.ac.in
</p>

<div className="mapsec">
 <MapContainer />
</div>

</div>
</aside>
</div>
</div>
</div>
</div>
</section>


    </>
  );
};

export default contact;
