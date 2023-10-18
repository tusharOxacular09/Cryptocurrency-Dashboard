import React, { useEffect, useState } from "react";
import { defaults } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { HistoricalChart } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { networkError } from "../redux/state/action";
import { toast } from "react-toastify";
import axios from "axios";

export const MyChart = () => {
  // dispatch to update the states of react-redux
  const dispatch = useDispatch();
  // selected current cryptocurrency through react-redux
  const id = useSelector((state) => state.currentCryptocurrency);
  // selected current currency through react-redux
  const currency = useSelector((state) => state.currentCurrency);
  // selected days count through react-redux
  const days = useSelector((state) => state.DaysCount);
  // selected chart type through react-redux
  const selectedChart = useSelector((state) => state.ChartTypeSelector);
  const [data, setData] = useState([]);

  // useEffect hook to render te function on each changes in the following dependency
  useEffect(() => {
    // async function to get historical data from api
    const getData = async () => {
      try {
        const { data } = await axios.get(
          HistoricalChart(id.toLowerCase(), days, currency)
        );
        setData(data.prices);
      } catch (error) {
        if (error.message === "Request failed with status code 404") {
          toast.warning(`The Data is unavailable for ${id.toUpperCase()}`);
        }
        if (error.message === "Network Error") {
          dispatch(networkError(true));
        }
        console.log(error.message);
      }
    };
    // calling function
    getData();
  }, [id, days, currency, dispatch]);

  // Adding some default properties to the charts
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  defaults.plugins.title.display = true;
  defaults.plugins.title.align = "start";
  defaults.plugins.title.font.size = 20;
  defaults.plugins.title.color = "black";

  return (
    <div className="h-full px-4 lg:px-12">
      {selectedChart === "Bar-Chart" && (
        <Bar
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ], // x-axis
            datasets: [
              {
                label: "Price",
                data: data.map((element) => element[1]),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(75, 192, 192, 0.8)",
                  "rgba(255, 99, 132, 0.8)",
                  "rgba(54, 162, 235, 0.8)",
                  "rgba(255, 206, 86, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5, // y-axis
              },
            ],
          }}
        />
      )}
      {selectedChart === "Line-Chrat" && (
        <Line
          data={{
            labels: data.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: "Price",
                data: data.map((element) => element[1]),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
          }}
        />
      )}
    </div>
  );
};
