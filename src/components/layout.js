import React,{ useState, useEffect} from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicHeaderMain = dynamic(() => import('./HeaderMain/HeaderMain'), {
  suspense: true,
})

const DynamicFooterMain = dynamic(() => import('./FooterMain/FooterMain'), {
  suspense: true,
})

export default function Layout({ children }) {
  return (
    <>
      <div className="conatiner-box">
        <Suspense fallback={<div>Loading...</div>}><DynamicHeaderMain /></Suspense>
        {children}
        <Suspense fallback={<div>Loading...</div>}><DynamicFooterMain /></Suspense>
      </div>
    </>
  );
}
