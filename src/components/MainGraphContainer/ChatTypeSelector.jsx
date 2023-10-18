import React, { useState } from "react";
import { ChatType } from "../../static-data/fake-data";
import { useDispatch, useSelector } from "react-redux";
import { myChartType } from "../../redux/state/action";

const ChatTypeSelector = () => {
  // state for opening the drop-down
  const [isOpen, setIsOpen] = useState(false);
  // selected chart through react-redux
  const selectedChart = useSelector((state) => state.ChartTypeSelector);
  // dispatch to update the states of react-redux
  const dispatch = useDispatch();

  // function to open the drop-down on clicking
  const toggling = () => {
    setIsOpen((prev) => !prev);
  };

  // function to select currencies from the drop-down list
  const selectCurrency = (chart) => {
    dispatch(myChartType(chart));
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="max-sm:w-10/12 w-4/12 max-lg:w-5/12 max-sm:h-6 h-10 flex rounded-md border hover:text-blue-700 hover:border-blue-500">
      <div className="w-full h-full items-center relative flex rounded-md bg-slate-100 shadow-sm">
        <div
          onClick={toggling}
          className="w-full rounded-l-md px-4 max-sm:px-2 py-2 font-medium max-sm:text-xs max-md:text-sm lg:text-base cursor-pointer"
        >
          {selectedChart || "Chat-Type"}
        </div>
        <div onClick={toggling} className="h-full relative">
          <button
            type="button"
            className="flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 hover:bg-gray-200"
          >
            {!isOpen && <img src="./svg-images/drop-down.svg" alt="" />}
            {isOpen && <img src="./svg-images/drop-up.svg" alt="" />}
          </button>
        </div>

        {isOpen && (
          <div className="min-width-[200px] absolute max-sm:top-2 top-7 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
            <div>
              {ChatType.map((chart, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => selectCurrency(chart)}
                    className="block rounded-lg px-4 py-2 max-sm:text-xs text-base text-gray-600 no-underline hover:bg-gray-100 cursor-pointer"
                  >
                    {chart}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Default export
export default ChatTypeSelector;
