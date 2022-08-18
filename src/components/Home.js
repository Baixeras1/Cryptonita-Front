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
      <TradeViewChart
        containerStyle={{
          minHeight: "300px",
          minWidth: "400px",
          marginBottom: "30px",
        }}
        pair="BTCUSDT"
        chartLayout={{
          layout: {
            backgroundColor: "#ededed",
            textColor: "#253248",
          },
          grid: {
            vertLines: {
              color: "#838fa3",
            },
            horzLines: {
              color: "#838fa3",
            },
          },

          priceScale: {
            borderColor: "#485c7b",
          },
          timeScale: {
            borderColor: "#485c7b",
            timeVisible: true,
            secondsVisible: false,
          },
        }}
      />
    </>
  );
}

export default Home;
