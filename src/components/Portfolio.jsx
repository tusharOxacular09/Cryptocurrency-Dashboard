import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { networkError } from "../redux/state/action";
import { OfflineData } from "../fake-data";

const Portfolio = () => {
  const [topCryptos, setTopCryptos] = useState([]);
  const selectedCurrency = useSelector((state) => state.currentCurrency);
  const [totalVal, setTotalVal] = useState(0);
  const dispatch = useDispatch();
  const Top3CryptoCurrenciesSelector = async () => {
    try {
      const topCryptoCurrencies = await axios.get(
        "https://tusharoxacular09.github.io/cryptocurrency_api/api.json"
      );
      setTopCryptos(topCryptoCurrencies.data.slice(1, 4));
    } catch (error) {
      setTopCryptos(OfflineData.slice(0, 3));
      dispatch(networkError(true));
    }
  };

  const TotalValue = () => {
    let val = 0;
    topCryptos.map((crypto) => {
      val += parseInt(crypto.current_price);
    });
    setTotalVal(val);
  };

  useEffect(() => {
    Top3CryptoCurrenciesSelector();
  }, [selectedCurrency]);

  useEffect(() => {
    TotalValue();
  }, [topCryptos]);

  return (
    <div className="lg:w-1/2 flex max-sm:flex-col p-2 lg:h-64 h-fit bg-white shadow-sm transition ease-in-out hover:ring-4 ring-blue-400 ring-offset-slate-50 rounded-md">
      <div className="w-3/12 max-sm:w-full max-sm:gap-1 flex flex-col items-start justify-between pt-2 pl-2">
        <p className="max-sm:text-base text-xl align-middle font-semibold">
          Portfolio
        </p>
        <div className="flex flex-col">
          {topCryptos.map((crypto, i) => {
            return (
              <div key={i} className="flex items-center gap-1">
                <img src={crypto.image} alt="logo" className="w-4 h-4" />
                <p className="font-medium text-base max-sm:text-sm">
                  {crypto.name}:
                </p>
                <p className="text-base max-sm:text-sm">
                  {crypto.current_price}
                </p>
              </div>
            );
          })}
        </div>
        <p className="text-gray-400 align-middle max-sm:text-base text-xl">
          Total value{" "}
          <span className="text-black font-semibold">{totalVal}</span>
        </p>
      </div>
      <div className="w-9/12 max-sm:w-full h-full">
        <Pie
          data={{
            labels: topCryptos.map((crypto) => crypto.name), // x-axis
            datasets: [
              {
                label: "Value",
                data: topCryptos.map((crypto) => crypto.total_volume),
                backgroundColor: ["#FF6361", "#2984C3", "#39C05E"],
                borderColor: ["#FF6361", "#2984C3", "#39C05E"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;
