import React from "react";
import Navbar from "./Navbar";
import Skill from "./coinList/CoinList";
import Banner from "./Banner";
import Graphic from "./coinList/Graphic";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skill></Skill>
    </>
  );
}

export default Home;
