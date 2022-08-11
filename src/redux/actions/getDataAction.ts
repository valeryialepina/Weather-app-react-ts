export const SET_LOCATION = "SET__LOCATION";
export const GET_LOCATION = "GET_LOCATION";
export const SET_WEATHER_ON_HOURS = "SET_WEATHER_ON_HOURS";
export const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER";






export const setLocation = (payload: {}) => {
    return {
        type: SET_LOCATION,
        payload: payload
    }
}

export const getLocation = (payload: string) => {
    return {
        type: GET_LOCATION,
        payload: payload
    }
}

export const setWeatherOnHours = (payload: []) => {
    return {
        type: SET_WEATHER_ON_HOURS,
        payload: payload
    }
}


export const setCurrentWether = (payload: {}) => {
  return {
      type: SET_CURRENT_WEATHER,
      payload: payload
  }
}


