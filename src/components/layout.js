import Header from "./HeaderMain/HeaderMain";
import Footer from "./FooterMain/FooterMain";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';
export default function Layout({ children }) {
  return (
    <>
      {" "}
      <div className="conatiner-box">
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  );
}
