import React, { Suspense, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Feedbackform from '../components/Forms/feedback_form';

const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
    suspense: true,
  })
const feedback = () => {
  const [results, setResults] = useState();
  const [showMore, setShowMore] = useState(false);
  const [value, setValue] = useState();

  const herobanner = [
    { id:1, 
      title: "Feedback", 
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
             
                <p>
                Please get in touch to find out how we can help you
                </p>
                <br/>
              </div>
              <Feedbackform />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
    </div>
  );
};

export default feedback