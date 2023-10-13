// Actions are for updating the state

// cryptocurrency selector action
export const cryptocurrency = (currency) => {
    return {
        type: "Cryptocurrency",
        payload: currency
    }
}

// country currency selector action e.g. INR, USD etc..
export const currencyOfCountry = (currency) => {
    return {
        type: "CountryCurrency",
        payload: currency
    }
}

// number of days selector
export const numberOfDays = (days) => {
    return {
        type: "NumberOfDays",
        payload: days
    }
}

// chart-type selector
export const myChartType = (chart) => {
    return {
        type: "chartType",
        payload: chart
    }
}

// Error Handling
export const networkError = (error) => {
    return {
        type: "NetwokError",
        payload: error
    }
}