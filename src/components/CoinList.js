import colorSharp from "../assets/img/color-sharp.png";
import TableCoins from "./TableCoins";
import axios from "axios";
import React, { Component } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default class Skills extends Component {
  state = { coins: [], isLoading: true };

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=marketcapdesc&perpage=100&page=1"
      )
      .then((data) => {
        console.log(data.data);
        this.setState({ coins: data.data, isLoading: false });
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { coins, isLoading } = this.state;

    if (isLoading) return;
    <LoadingButton loading variant="outlined">
      Submit
    </LoadingButton>;

    return (
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx wow zoomIn">
                <TableCoins coins={coins} />
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    );
  }
}
