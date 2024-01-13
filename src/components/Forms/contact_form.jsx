"use client";

import React,{ useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

var divStyles = {display:"none"}
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = () => {

  const [gtoken, setGtoken] = useState("");
  const [vidyKey, setVidyKey] = useState([]);
  const recaptchaRef = useRef(null);
  const [isVerified, setIsverified] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  useEffect(() => {
      async function fetchData() {
          const response = await fetch("https://crm.vidy.in/api/get_captcha");
          const data = await response.json();
          console.log(data['data']['key'])
          setVidyKey(data['data']);
          setIsverified(true)
        }
        fetchData();
    }, []);

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      mobile: "",
      company_name: "",
      product_name: "",
      token: "",
      message: ""
    });

    const getPhone = (da) => {
      console.log(da)
      setFormData((prevState) => ({
          ...prevState,
          ["mobile"]: da
        }));
    }


    const handleInputx = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
  
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue
      }));
    }
  

    async function handleCaptchaSubmission(token  ) {
      // Server function to verify captcha
      setGtoken(token);
    }

    const submitForm = (e) => {
      // We don't want the page to refresh
      e.preventDefault()
      const formURL = 'https://crm.vidy.in/api/articles/contacts';
      const data = new FormData()
  
      // Turn our formData state into data we can use with a form submission
      Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
      })
      data.append("gtoken", gtoken);
      // POST the data to the URL of the form
      fetch(formURL, {
        method: "POST",
        body: data,
        headers: {
          'accept': 'application/json',
        },
      }).then((response) => response.json())
      .then((data) => {
        setFormData({ 
          name: "", 
          email: "", 
          mobile: "",
          company_name:"",
          product_name: "",
          token: "",
          message: "" 
        })
        setValue('');
        setFormSuccess(true)
        setFormSuccessMessage(data.submission_text)
        handleChange();
        recaptchaRef.current.reset()
      })
      return false;
    }

  
const [results, setResults] = useState()
const [showMore, setShowMore] = useState(false);
const [value, setValue] = useState()  


const [selectedOption, setSelectedOption] = useState('government'); // Set the default value to 'government'

  const options = [
    { value: 'government', label: 'Government' },
    { value: 'private', label: 'Private' },
  ];

  const handleChange = () => {
    document.querySelector("#submitb").click();
  };

return (
<form id="contact-form" name="contact_form" className="row default-form"  method="post"  onSubmit={submitForm}>
<div className="col-md-6">
<div className="form-group">
<input type="text" name="name" className="form-control" placeholder="Full Name" onChange={handleInputx} value={formData.name} required />
</div>

<div className="form-group">
<input type="email" name="email" className="form-control" placeholder="Email" onChange={handleInputx} value={formData.email} required />
</div>

<div className="form-group">
<PhoneInput
placeholder="Enter phone number"
international
countryCallingCodeEditable={false}
defaultCountry="IN"
value={value}
onChange={getPhone}
/>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<input type="text" name="subject" className="form-control" placeholder="Subject" onChange={handleInputx} value={formData.company_name} required/>
</div>

<div className="form-group">
<textarea name="message" className="form-control" placeholder="Message" rows="4" onChange={handleInputx} value={formData.message} required></textarea>
</div>
<div className="form-group">
{ (isVerified) && 
                        <ReCAPTCHA
            sitekey={vidyKey?.key}
            ref={recaptchaRef}
            size="invisible"

          />}
</div>
<div className="form-group text-right">
<input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
<button type="submit" className="btn-border-b" disabled={!isVerified ? true : false}>SUBMIT</button>   

<div style={divStyles}>
<button id='submitb' type="button" className="btn-border-b" data-toggle="modal" data-dismiss="modal" data-target="#success-pop">SUBMIT</button>    
</div>
</div>
</div>

</form>
)
}

export default ContactForm