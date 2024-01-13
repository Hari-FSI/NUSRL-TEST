import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import jsonData from '../../pages/api/keypersonnel.json';
const Universitymessage = () => {
  const rector = jsonData.rector[0];
  const chancellor = jsonData.chancellor[0];
  const vicechancellor = jsonData.vicechancellor[0];
  
  return (
    <>
   <section className="un_messge container">
  <div className="text_block">
    <h3>University Message</h3>
    <p>Empowering minds, fostering innovation—our university is a hub of knowledge and inclusive learning, preparing students for a limitless future.</p>
  </div>
  <div className="img_block" key={rector.id}>
  
    <div className="image">
      <Image 
      src={rector.image}
      alt={rector.title}
      width={240}
      height={360}
      />
      <div className="userinfo">
        <p><b>{rector.title}</b></p>
        <p>{rector.designation}</p>
        <Link href={rector.link}></Link>
      </div>
    </div>
    
    <div className="image">
      <Image 
      src={chancellor.image}
      alt={chancellor.title}
      width={240}
      height={360}
      />
      <div className="userinfo">
        <p><b>{chancellor.title}</b></p>
        <p>{chancellor.designation}</p>
        <Link href={chancellor.link}></Link>
      </div>
    </div>

    <div className="image">
      <Image 
      src={vicechancellor.image}
      alt={vicechancellor.title}
      width={240}
      height={360}
      />
      <div className="userinfo">
        <p><b>{vicechancellor.title}</b></p>
        <p>{vicechancellor.designation}</p>
        <Link href={vicechancellor.link}></Link>
      </div>
    </div>
  
  </div>
  <hr/>
</section> 
    </>
  )
}

export default Universitymessage