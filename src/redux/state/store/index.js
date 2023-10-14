import { createStore, combineReducers } from "redux";
import { currentCryptocurrency, currentCurrency, DaysCount, ChartTypeSelector, NetworkErrorHandler } from "../reducer";

// Redux store
export const store = createStore(
    combineReducers({
        currentCryptocurrency: currentCryptocurrency,
        currentCurrency: currentCurrency,
        DaysCount: DaysCount,
        ChartTypeSelector: ChartTypeSelector,
        NetworkErrorHandler: NetworkErrorHandler
    })
)