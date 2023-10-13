import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cryptocurrency, networkError } from "../redux/state/action";
import axios from "axios";

const CryptocurrencySelector = () => {
  const dispatch = useDispatch(); // it dispatches the action of redux.
  const selectedCurrency = useSelector((state) => state.currentCryptocurrency);
  const [isOpen, setIsOpen] = useState(false);
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  async function getCryptoCurrencies() {
    try {
      const { data } = await axios.get(
        "https://tusharoxacular09.github.io/cryptocurrency_api/api.json"
      );
      setCryptoCurrencies(data);
    } catch (error) {
        dispatch(networkError(true));
    }
  }

  useEffect(() => {
    getCryptoCurrencies();
  });

  const toggling = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCurrency = (currency) => {
    dispatch(cryptocurrency(currency));
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="max-sm:w-10/12 w-5/12 max-lg:w-6/12 max-sm:h-6 h-10 flex rounded-md border hover:text-blue-700 hover:border-blue-500">
      <div className="w-full h-full items-center relative flex rounded-md bg-slate-100 shadow-sm">
        <div
          onClick={toggling}
          className="w-full rounded-l-md px-4 max-sm:px-2 py-2 font-medium max-sm:text-xs max-md:text-sm lg:text-base cursor-pointer"
        >
          {`${selectedCurrency}`}
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
          <div className="min-w-[200px] max-h-[250px] absolute max-sm:top-2 top-7 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg overflow-y-scroll">
            <div>
              {cryptoCurrencies.map((currency, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      selectCurrency(currency.name);
                    }}
                    className="flex rounded-lg items-center hover:bg-gray-100 cursor-pointer gap-1 px-4 py-2 max-sm:text-xs text-base text-gray-600 no-underline"
                  >
                    {currency.name}
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

export default CryptocurrencySelector;
