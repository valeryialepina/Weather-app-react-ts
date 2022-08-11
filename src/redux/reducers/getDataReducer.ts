
import { SET_LOCATION, GET_LOCATION, SET_WEATHER_ON_HOURS, SET_CURRENT_WEATHER } from "../actions/getDataAction";

 
// interface IData {
//   cod: string;
//   message: number;
//   cnt: number;
//   list: [
//     {
//       dt: number;
//       main: {
//         temp: number;
//         feels_like: number;
//         temp_min: number;
//         temp_max: number;
//         pressure: number;
//         sea_level: number;
//         grnd_level: number;
//         humidity: number;
//         temp_kf: number;
//       };
//       weather: [
//         {
//           id: number;
//           main: string;
//           description: string;
//           icon: string;
//         }
//       ];
//       clouds: {
//         all: number;
//       };
//       wind: {
//         speed: number;
//         deg: number;
//         gust: number;
//       };
//       visibility: number;
//       pop: number;
//       sys: {
//         pod: string
//       };
//       dt_txt: string
//     };


//  ];
//   city: {
//     id: number;
//     name: string;
//     coord: {
//       lat: number;
//       lon: number
//     };
//     country: string;
//     population: number;
//     timezone: number;
//     sunrise: number;
//     sunset: number
//   }
// }



const initialState = {
    userLocation: '',
    data: {},
    currentWeather: {},
    weatherOnHours: [],

}

const dataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_LOCATION:
            return { ...state,  userLocation: action.payload}
        case SET_LOCATION:
            return { ...state, data: action.payload }
        case SET_WEATHER_ON_HOURS:
            return { ...state, weatherOnHours: action.payload }        
        case SET_CURRENT_WEATHER:
            return { ...state, currentWeather: action.payload }     
      
        default:
            return { ...state }
    }
}

export default dataReducer;