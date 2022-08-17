import { GET_LOCATION, setLocation, setWeatherOnHours, setCurrentWether } from "../actions/getDataAction";
import { call, all, takeLatest, put, fork } from 'redux-saga/effects';
import axios from "axios";

const API_KEY = '5e8e9681d6b7f3d44bf3fd927388c2ec'
const ICON_URL = 'http://openweathermap.org/img/wn/'

let threeHours: any;

async function setDataFor3hours(city: any, list: any) {
    threeHours = [];
    const c = {city}
    const l = {list}
    return threeHours = [c, l, ]
};

function* sendLocationSaga(action: any) {
    try {     
         

        const { data } = yield call(axios.get, 
            `http://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&appid=${API_KEY}&units=metric&exclude=hourly,minutely` );
        
        const { data: d} = yield call(axios.get, 
            `https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${API_KEY}&units=metric&cnt=5` );    
        yield put(setLocation(data));

        console.log('data', data)

        const {city, list} = data;
        setDataFor3hours( city, list)
        yield put(setWeatherOnHours(threeHours));



                console.log('d', d)
                yield put(setCurrentWether(d));
            
    



    } catch (error: any) {
        console.error(error.message)
    }
}


function* locationSaga() {
    yield all([takeLatest(GET_LOCATION, sendLocationSaga)])
}



export default locationSaga;