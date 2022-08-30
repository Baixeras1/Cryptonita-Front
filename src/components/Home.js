import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Banner/Carousel";
import Skill from "./coinList/CoinList";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Skill></Skill>
    </>
  );
}

export default Home;
