import { useState } from "react";
import { myCurrencies } from "../../static-data/fake-data";
import { useDispatch, useSelector } from "react-redux";
import { currencyOfCountry } from "../../redux/state/action";

const CurrencySelector = () => {
  const selectedCurrency = useSelector((state) => state.currentCurrency);
  // dispatch to update the states of react-redux
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // function to open and close the drop-down on clicking
  const toggling = () => {
    setIsOpen((prev) => !prev);
  };

  // function to select the crypto currencies from the list
  const selectCurrency = (currency) => {
    dispatch(currencyOfCountry(currency));
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="lg:w-4/12 inline-flex transition ease-in-out hover:ring-4 ring-blue-400 ring-offset-slate-50 rounded-md">
      <div className="w-full h-12 lg:h-14 items-center relative flex rounded-md bg-white shadow-sm">
        <div
          onClick={toggling}
          className="w-full rounded-l-md px-4 py-2 font-medium text-base lg:text-lg cursor-pointer"
        >
          {selectedCurrency || "Select Currency"}
        </div>
        <div onClick={toggling} className="h-full relative">
          <button
            type="button"
            className="flex h-full items-center justify-center rounded-r-md border-1 border-gray-10 px-2 hover:bg-gray-100"
          >
            {!isOpen && <img src="./svg-images/drop-down.svg" alt="" />}
            {isOpen && <img src="./svg-images/drop-up.svg" alt="" />}
          </button>
        </div>

        {isOpen && (
          <div className="min-w-[100px] absolute top-11 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
            <div>
              {myCurrencies.map((currency, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => selectCurrency(currency)}
                    className="block rounded-lg px-4 py-2 text-base text-gray-600 no-underline hover:bg-gray-100 cursor-pointer"
                  >
                    {currency}
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
export default CurrencySelector;
