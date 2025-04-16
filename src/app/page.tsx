import React from "react";
import Navbar from "./components/navbar";
import About from "./aboutus/page";
import Accessories from "./accessories/page";
import Review from "./reviews/page";
import Bags from "./components/bags";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Accessories/>
      <Bags/>
      <Review/>
    </div>
  );
}
