import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const Explore = () => {
  return (
    <div className='row'>
    <aside className='col-md-5'>
      <div className='block-explore'>
      <div className="heading-sec">
     <h2>Explore the NUSRL</h2>
     <p>Discover NUSRL — a dynamic blend of academic excellence and vibrant campus life, offering modern education in a rich cultural setting. From state-of-the-art classrooms to collaborative study spaces, engage in legal discourse and shape your legal journey amid a diverse and stimulating atmosphere.</p>
    </div>
      </div>
    </aside>
    <aside className='col-md-7'>
      <div className='block-explore'>
        <article className='hovershine'>
        <Image 
        src="/images/icons/icon-academic.png"  
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Academics</h3>
        <Link href="/"></Link>
        </article>

        <article className='whitebox hovershine'>
        <Image 
        src="/images/icons/icon-infrastructure.png" 
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Infrastructure</h3>
        <Link href="/"></Link>
        </article>

        <article className='whitebox hovershine'>
        <Image 
        src="/images/icons/icon-award.png" 
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Endowments/ Awards</h3>
        <Link href="/"></Link>
        </article>

        <article className='hovershine'>
        <Image 
        src="/images/icons/icon-placement.png" 
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Placement</h3>
        <Link href="/"></Link>
        </article>

        <article className='hovershine'>
        <Image 
        src="/images/icons/icon-center.png" 
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Centres of Learning </h3>
        <Link href="/"></Link>
        </article>

        <article className='whitebox hovershine'>
        <Image 
        src="/images/icons/icon-program.png" 
        alt="Picture of the author"
        width={60}
        height={60} 
        />
        <h3>Academic Programmes</h3>
        <Link href="/programmes/programmes"></Link>
        </article>
      </div>
    </aside>
     </div>
  )
}

export default Explore