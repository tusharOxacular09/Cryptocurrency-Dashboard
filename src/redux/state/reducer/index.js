// Reducer is saying what to do.
const INIT_CRYPTOCURRENCY = "Bitcoin";
const INIT_CURRENCY = "INR";
const NO_OF_DAYS = 365;
const CHART_TYPE = "Line-Chrat";
const INIT_ERROR = false;

export const currentCryptocurrency = (state = INIT_CRYPTOCURRENCY, action) => {
    if (action.type === "Cryptocurrency") {
        return action.payload;
    }
    return state;
}

export const currentCurrency = (state = INIT_CURRENCY, action) => {
    if (action.type === "CountryCurrency") {
        return action.payload;
    }
    return state;
}

export const DaysCount = (state = NO_OF_DAYS, action) => {
    if (action.type === "NumberOfDays") {
        return action.payload;
    }
    return state;
}

export const ChartTypeSelector = (state = CHART_TYPE, action) => {
    if (action.type === "chartType") {
        return action.payload;
    }
    return state;
}

export const NetworkErrorHandler = (state = INIT_ERROR, action) => {
    if (action.type === "NetwokError") {
        return action.payload;
    }
    return state;
}
