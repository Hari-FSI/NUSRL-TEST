import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const Partners = () => {
  return (
    <>
    <section className="container partners">
    <div className="in-block partner_logos">
    <aside> 
    <Image 
      src="images/patners/c-logo-1.png"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="images/patners/c-logo-2.png"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="images/patners/c-logo-3.png"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="images/patners/c-logo-4.png"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    <aside> 
    <Image 
      src="images/patners/c-logo-5.png"
      alt="Picture of the author"
      width={160}
      height={44}
    />
    </aside>
    </div>
    </section>
    </>
  )
}

export default Partners