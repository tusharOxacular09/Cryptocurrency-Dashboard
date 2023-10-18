import React, { useState } from "react";
import CryptocurrencySelector from "./CryptocurrencySelector.jsx";
import ChatTypeSelector from "./ChatTypeSelector.jsx";
import { useDispatch, useSelector } from "react-redux";
import { MyChart } from "./MyChart.jsx";
import { numberOfDays } from "../../redux/state/action/index.js";

const MainGraph = () => {
  // dispatch to update the states of react-redux
  const dispatch = useDispatch();
  // selected current cryptocurrency through react-redux
  const selectedCryptocurrency = useSelector(
    (state) => state.currentCryptocurrency
  );
  // selected current currency through react-redux
  const selectedCurrency = useSelector((state) => state.currentCurrency);
  const [daysStyle, setDaysStyle] = useState({
    one: false,
    week: false,
    month: false,
    six_months: false,
    year: true,
  });

  // constant styling for tailwind css
  const mystyle = `bg-slate-100 max-sm:p-1 max-sm:text-xs px-4 py-2 max-lg:px-3 max-sm:rounded-lg rounded-xl max-sm:border border-2 hover:bg-blue-200 cursor-pointer`;
  return (
    <div className="mt-4 p-1 w-full h-96 bg-white shadow-sm transition ease-in-out hover:ring-4 ring-blue-400 ring-offset-slate-50 rounded-md">
      <div className="h-1/6 pt-2">
        <div className="max-sm:h-[68px] pb-1 flex">
          <div className="lg:w-2/12 h-full"></div>
          <div className="w-6/12 lg:w-5/12 h-full flex justify-evenly items-center lg:font-medium">
            <div
              className={`${mystyle} ${
                daysStyle["one"] ? "border-blue-800 text-blue-700" : ""
              }`}
              onClick={() => {
                dispatch(numberOfDays(1));
                setDaysStyle({
                  one: true,
                  week: false,
                  month: false,
                  six_months: false,
                  year: false,
                });
              }}
            >
              1D
            </div>
            <div
              className={`${mystyle} ${
                daysStyle["week"] ? "border-blue-800 text-blue-700" : ""
              }`}
              onClick={() => {
                dispatch(numberOfDays(7));
                setDaysStyle({
                  one: false,
                  week: true,
                  month: false,
                  six_months: false,
                  year: false,
                });
              }}
            >
              1W
            </div>
            <div
              className={`${mystyle} ${
                daysStyle["month"] ? "border-blue-800 text-blue-700" : ""
              }`}
              onClick={() => {
                dispatch(numberOfDays(30));
                setDaysStyle({
                  one: false,
                  week: false,
                  month: true,
                  six_months: false,
                  year: false,
                });
              }}
            >
              1M
            </div>
            <div
              className={`${mystyle} ${
                daysStyle["six_months"] ? "border-blue-800 text-blue-700" : ""
              }`}
              onClick={() => {
                dispatch(numberOfDays(180));
                setDaysStyle({
                  one: false,
                  week: false,
                  month: false,
                  six_months: true,
                  year: false,
                });
              }}
            >
              6M
            </div>
            <div
              className={`${mystyle} ${
                daysStyle["year"] ? "border-blue-800 text-blue-700" : ""
              }`}
              onClick={() => {
                dispatch(numberOfDays(365));
                setDaysStyle({
                  one: false,
                  week: false,
                  month: false,
                  six_months: false,
                  year: true,
                });
              }}
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

// Default export
export default MainGraph;
