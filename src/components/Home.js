import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Skill from "./coinList/CoinList";
import TradeViewChart from "react-crypto-chart";

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
