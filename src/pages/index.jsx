import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicBannersection = dynamic(() => import('../components/Home/Bannersection'), {
  suspense: true,
})
const DynamicNotificationsection = dynamic(() => import('../components/Home/Notificationsection'), {
  suspense: true,
})
const DynamicAboutsection = dynamic(() => import('../components/Home/Aboutsection'), {
  suspense: true,
})

const DynamicExplore = dynamic(() => import('../components/Home/Explore'), {
  suspense: true,
})

const DynamicStatsSec = dynamic(() => import('../components/Home/StatsSec'), {
  suspense: true,
})

const DynamicUniversitymessage = dynamic(() => import('../components/Home/Universitymessage'), {
  suspense: true,
})

const DynamicAcademicprogrammes = dynamic(() => import('../components/Home/Academicprogrammes'), {
  suspense: true,
})

const DynamicGallery = dynamic(() => import('../components/Home/Gallery'), {
  suspense: true,
})

const DynamicAnnouncements = dynamic(() => import('../components/Home/Announcements'), {
  suspense: true,
})

const DynamicLatestevents = dynamic(() => import('../components/Home/Latestevents'), {
  suspense: true,
})

const DynamicknowmoreBlock = dynamic(() => import('../components/Home/knowmoreBlock'), {
  suspense: true,
})

const DynamicPartners = dynamic(() => import('../components/Home/Partners'), {
  suspense: true,
})

export default function pages() {
  const isServer = typeof window === 'undefined'
  const [results, setResults] = useState()
return (
<main>


<Suspense fallback={<div>Loading...</div>}><DynamicBannersection /></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicNotificationsection /></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicAboutsection/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicExplore /></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicStatsSec/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicUniversitymessage/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicAcademicprogrammes/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicGallery/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicAnnouncements/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicLatestevents/></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicknowmoreBlock /></Suspense>
<Suspense fallback={<div>Loading...</div>}><DynamicPartners/></Suspense>


</main>

  )
}
