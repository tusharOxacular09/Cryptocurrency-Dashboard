import React from "react";
import CryptocurrencySelector from "./CryptocurrencySelector.jsx";
import ChatTypeSelector from "./ChatTypeSelector.jsx";
import { useDispatch, useSelector } from "react-redux";
import { MyChart } from "./MyChart.jsx";
import { numberOfDays } from "../redux/state/action/index.js";

const MainGraph = () => {
  const dispatch = useDispatch();
  const selectedCryptocurrency = useSelector(
    (state) => state.currentCryptocurrency
  );
  const selectedCurrency = useSelector((state) => state.currentCurrency);

  const mystyle =
    "bg-slate-100 max-sm:p-1 max-sm:text-xs px-4 py-2 max-lg:px-3 max-sm:rounded-lg rounded-xl border hover:text-blue-700 hover:border-blue-700 hover:bg-blue-200 cursor-pointer";
  return (
    <div className="mt-4 p-1 w-full h-96 bg-white shadow-sm transition ease-in-out hover:ring-4 ring-blue-400 ring-offset-slate-50 rounded-md">
      <div className="h-1/6 pt-2">
        <div className="max-sm:h-[68px] pb-1 flex">
          <div className="lg:w-2/12 h-full"></div>
          <div className="w-6/12 lg:w-5/12 h-full flex justify-evenly items-center lg:font-medium">
            <div className={mystyle} onClick={() => dispatch(numberOfDays(1))}>
              1D
            </div>
            <div className={mystyle} onClick={() => dispatch(numberOfDays(7))}>
              1W
            </div>
            <div className={mystyle} onClick={() => dispatch(numberOfDays(30))}>
              1M
            </div>
            <div
              className={mystyle}
              onClick={() => dispatch(numberOfDays(180))}
            >
              6M
            </div>
            <div
              className={mystyle}
              onClick={() => dispatch(numberOfDays(365))}
            >
              1Y
            </div>
          </div>
          <div className="w-6/12 h-full flex max-sm:flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <CryptocurrencySelector />
            <ChatTypeSelector />
          </div>
        </div>
        <div className="flex justify-between px-4 lg:px-14">
          <p className="font-medium">{selectedCurrency}</p>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <p className="font-medium">{selectedCryptocurrency}</p>
          </div>
        </div>
      </div>
      <div className="h-5/6">
        <MyChart />
      </div>
    </div>
  );
};

export default MainGraph;
