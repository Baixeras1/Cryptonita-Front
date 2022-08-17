import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import SelectButton from "../SelectButton";
import { chartDays } from "../config/data";

var first = true;

const Graphic = ({ history }) => {
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);
  if (history == undefined || history.data == undefined) return;

  //console.log(history.data.map(entry => entry.time))

  const data = {
    labels: history.data.map((entry) => new Date(entry.time)),
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#3773f5",
        borderColor: "#3773f5",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#3773f5",
        pointBackgroundColor: "#3773f5",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#3773f5",
        pointHoverBorderColor: "#3773f5",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: history.data.map((entry) => entry.priceUsd),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      // to remove the labels
      x: {
        ticks: {
          display: false,
        },

        // to remove the x-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        // to remove the y-axis grid
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  return (
    <>
      <Line
        data={{
          labels: history.data.map((entry) => {
            let date = new Date(entry[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: history.data.map((entry) => entry[1]),
              label: `Price ( Past ${days} Days )`,
              borderColor: "#EEBC1D",
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
      <div
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        {chartDays.map((day) => (
          <SelectButton
            key={day.value}
            onClick={() => {
              setDays(day.value);
              setFlag(false);
            }}
            selected={day.value === days}
          >
            {day.label}
          </SelectButton>
        ))}
      </div>
    </>
  );
};

export default Graphic;
