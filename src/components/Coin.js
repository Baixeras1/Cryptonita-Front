import styled from "styled-components";
import MiniChart from "./MiniChart";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import axios from "axios";
// import Icon from 'react-crypto-icons'

const updated = new Map();

const Coin = ({ coin }) => {
  const [history, setHistory] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://api.coincap.io/v2/assets/" + coin.name + "/history?interval=d1"
    );
    setHistory(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  let symbol = coin.symbol.toUpperCase();

  return (
    <Wrapper>
      <div>
        <div style={{ flex: 0.6 }}></div>
        <div style={{ flex: 1.4 }}>
          <NameCol>
            <CoinIcon>
              <img src={coin.logo} alt={coin.id} />
            </CoinIcon>
            <div>
              <Primary>{symbol}</Primary>
              <Secondary>{coin.name}</Secondary>
            </div>
          </NameCol>
        </div>
        <div style={{ flex: 2 }}>
          <Primary>
            <NumberFormat
              value={coin.priceUsd}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </Primary>
          <div
            style={{
              color:
                coin.changePercent24Hr < 0 ? "#f0616d" : "#26ad75",
            }}
          >
            {coin.changePercent24Hr > 0 && "+"}
            {coin.changePercent24Hr}%
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <NumberFormat
            value={coin.marketCapUsd}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div style={{ flex: 2 }}>
          <MiniChart history={history} />
        </div>
      </div>
    </Wrapper>
  );
};

function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default Coin;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  &:hover {
    background-color: #0e0f14;
    cursor: pointer;
  }
`;

const NameCol = styled.div`
  display: flex;
  align-items: center;
`;

const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`;

const Primary = styled.div`
  margin-bottom: 0.1rem;
`;

const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`;