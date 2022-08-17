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


  const dispatch = useDispatch();

  const weatherData = useSelector((store: any) => store.weather.weatherOnHours);
  console.log(weatherData)
  const currentWeather = useSelector((store: any) => store.weather.currentWeather);
  console.log(currentWeather)

  const city = useSelector((store: any) => store.weather.weatherOnHours?.[0]?.city?.name + ', ' + store.weather.weatherOnHours?.[0]?.city.country);
  const weatherIcon: string = useSelector((store: any) => store.weather.weatherOnHours?.[1]?.list?.[0]?.weather); //?.[0]?.icon
  const currentWeatherIcon: string = useSelector((store: any) => store.weather.currentWeather?.weather?.[0]?.icon); //?.[0]?.icon
  console.log(currentWeatherIcon)

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
              <Route path="current" element={<Current city = {city}  currentWeather = {currentWeather} weatherIcon = {currentWeatherIcon}/>} />

            </Route>
          </Routes>
        </BrowserRouter>
       </div>
    </div>
    </div>
  );
}

export default App;
