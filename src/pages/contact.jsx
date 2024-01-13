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
    <div className="main">

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

      <div className="mapsec">
        <MapContainer />
      </div>

      <section
        className="address-details-sec wow animate__fadeIn"
        data-wow-duration="4s"
      >
        <div className="container">
        <div className="row">
        <aside className='col-md-6'>
          <div className='in-block'>
            <div className="heading-sec">
            <h4 className='mt_15 mb_15'>Contact Us</h4>
            </div>
            <p>
            <strong>National University of Study and Research in Law</strong><br/>
            At: Nagri, PO: Bukru, PS: Kanke<br/>
            Kanke Pithoria Road, Kanke, Ranchi (Jharkhand)<br/>
            Pin - 834006
            </p>
            <p><strong>Phone Nos.:&nbsp; &nbsp;</strong><Link href="pdf/contacts-numbers-2023.pdf" target="_blank">Click here</Link></p>
            <p><strong>E-mails:&nbsp; &nbsp;</strong></p>
            <ul>
            <li><strong>Vice Chancellor :</strong> vc@nusrlranchi.ac.in</li>
            <li><strong>Registrar : </strong>registrar@nusrlranchi.ac.in</li>
            <li><strong>Dean Academic :</strong> dean@nusrlranchi.ac.in</li>
            <li><strong>Controller of Examination :</strong> coe@nusrlranchi.ac.in</li>
            </ul>
          </div>
        </aside>

        <aside className='col-md-6'>
          <div className='in-block'>
          <div className="heading-sec">
          <h4 className='mt_15 mb_15'>Approximate Distance</h4>
            </div>
            <p>From Ranchi Railway Station: <strong>14 Kms</strong></p>
            <p>From Hatia Railway Station: <strong>18 Kms</strong></p>
            <p>From Khadgara Bus Stand, Ranchi: <strong>14 Kms</strong></p>
            <p>From Birsa Munda Airport: <strong>18 Kms</strong></p>
            <p>Getting to NUSRL, Ranchi</p>
          </div>

          <div className='in-block'>
          <div className="heading-sec">
          <h4 className='mt_15 mb_15'>From Airport</h4>
            </div>
            <p>There is no direct bus service from the airport to the University. Several prepaid cabs are available from the Airport to NUSRL besides options like Ola/Uber.</p>
          </div>

        </aside>
        <div className='clearfix'></div>
        <hr/>
        <div className='clearfix'></div>

        <aside className='col-md-6'>
        <div className='in-block'>
        <div className="heading-sec">
        <h4 className='mt_15 mb_15'>By Taxi/Autorickshaw</h4>
            </div>
            <p>From City Railway Station/ Bus Depot:<br/>
Ridesharing services like Ola and Uber are an easy way of commuting to NUSRL. If you hail a regular auto, an easy landmark would be the NUSRL, Kanke.</p>
          </div>
        </aside>

        <aside className='col-md-6'>
          <div className='in-block'>
            <div className="heading-sec">
            <h4 className='mt_15 mb_15'>By Car</h4>
            </div>
            <p>Please enter ‘NUSRL’ on your GPS to reach the NUSRL campus.<br/>
            Contact Us:<br/>
            Email: <a href='mailto:registrar@nusrlranchi.ac.in'>registrar@nusrlranchi.ac.in</a></p>
          </div>

        </aside>

        </div>
        </div>
      </section>

      <section
        className="form-fotter-sec wow animate__fadeIn"
        data-wow-duration="4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              
            </div>
            <div className="col-md-8">
            <div className="in-block text-center">
              <div className="heading-sec text-center">
              <h4 className='mt_15 mb_15'>Get In Touch</h4>
              </div>
                <p>
                Please get in touch to find out how we can help you
                </p>
                <br/>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
