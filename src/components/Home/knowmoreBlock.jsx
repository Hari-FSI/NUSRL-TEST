import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const knowmoreBlock = () => {
  return (
<>
<hr/>
<section className="container-fluid know_more">
  <div className="container know_more_blocks">
    <div className="text_block">
      <h3>Want to know more?</h3>
      <p>Please get in touch to find out how we can help you.</p>
    </div>
    <div className="more_blocks">
      <div className="more_block">
        <div>
            <Image src='/images/icons/icon-11.gif' 
            alt="Picture of the author"
            width={90}
            height={90} 
            /> 
            <div className="text_block">
              <h5>Visit Campus</h5>
              <p>Take a campus tour.</p>
            </div>
          </div>
          <Link href="/visit_NUSRL" className="btn-white-brd">Learn more</Link>
      </div>
      <div className="more_block">
        <div>
        <Image src='/images/icons/icon-12.gif' 
        alt="Picture of the author"
       width={90}
        height={90} 
        /> 
        <div>
          <h5>Contact Us</h5>
          <p>Get in touch with us.</p>
        </div>
      </div>
        <Link href="/contact" className="btn-white-brd">Learn more</Link>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default knowmoreBlock
