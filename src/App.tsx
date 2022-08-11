import {  useState } from 'react';
import './App.scss';
import { TbMapSearch, TbSearch } from 'react-icons/tb'
import Weather from './components/Weather/Weather'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { getLocation } from './redux/actions/getDataAction';
import Current from './components/Current/Current'

import axios from 'axios';
import store from './redux/store';


function App() {

  const API_KEY = '5e8e9681d6b7f3d44bf3fd927388c2ec'
  const ICON_URL = 'http://openweathermap.org/img/wn/'

  // const [noData, setNoData] = useState('No Data Yet!');
  // const [searchTerm, setSearchTerm] = useState('');
  // const [weatherData, setWeatherData] = useState<any>([]);
  // const [city, setCity] = useState('Unknown Location');
  // const [weatherIcon, setWeatherIcon] = useState(`${ICON_URL}10n@2x.png`);
  
  // const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`
  // const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_KEY}&units=metric&cnt=5`
  // const urlMaps = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${API_KEY}`
  // // layer = clouds_new, precipitation_new, pressure_new, temp_new, wind_new

  // const handleChange = (input: { target: { value: string; }; }) => {
  //   const {value} = input.target 
  //   setSearchTerm(value)
  // }

//https://tile.openweathermap.org/map/precipitation_new/1/1/1.png?appid=5e8e9681d6b7f3d44bf3fd927388c2ec



  const dispatch = useDispatch();

  const weatherData = useSelector((store: any) => store.weather.weatherOnHours);
  console.log(useSelector((store: any) => store.weather))
  console.log(weatherData)


  const city = useSelector((store: any) => store.weather.weatherOnHours?.[0]?.city?.name + ', ' + store.weather.weatherOnHours?.[0]?.city.country);

  const weatherIcon: string = useSelector((store: any) => store.weather.weatherOnHours?.[1]?.list?.[0]?.weather); //?.[0]?.icon


  // const maxTemp: any = useSelector((store: any) => store.weather.forecastFor3Days[0]?.maxtemp_c);   
  // const minTemp: any = useSelector((store: any) => store.weather.forecastFor3Days[0]?.mintemp_c);
  // const dataForWetheronHours = useSelector((store: any) => store.weather.weatherOnHours);
  // const dataForWeatherForThreeDays = useSelector((store: any) => store.weather.forecastFor3Days);
  return (
    <div className="container">
      <div className="content">
        <div className="form-container">
          <div className="form-wrapper">
            <div className="name">
              <div className="logo">Valeryia Lepina - Weather App</div>
              <div className="city">
              <TbMapSearch />
                <p>
                  {city}
                </p>
              </div>
            </div>
            <div className="search">
              <h2>The Weather App</h2>
              <hr />

              <Formik
                initialValues={{
                    location: ''
                }}
                onSubmit={(values) => {
                    dispatch(getLocation(values.location));
                }}
              >
                <Form className='search-bar' noValidate>
                    <label htmlFor="location"></label>
                    <Field id="location" name="location" placeholder='#Explore?' />
                    <button type="submit" className='s-icon' > <TbSearch />  </button>
                </Form>
              </Formik>
             
                
            </div>
          </div>
        </div>
        <div className="info-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Weather weatherData = {weatherData} city = {city}  weatherIcon = {weatherIcon} />} />
              <Route path="current" element={<Current city = {city}/>} />
             
              {/* <Route path="news" element={<News />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
       </div>
    </div>
    </div>
  );
}

export default App;
