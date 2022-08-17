import './Current.scss'
import DetailsCard from './components/DetailsCard'
import moment from "moment";




function Current({city, currentWeather, weatherIcon}: any) {
  const date = currentWeather;
        return (
          <>
          {currentWeather.length === 0 ? 
            <div>
              <div className="nodatd">
              <h1>The Data On {city} Is Currently Unavailable</h1>
              </div>
            </div> : 
            <> 
              <h1>Current Weather</h1>
              <DetailsCard weather_icon = {weatherIcon} date = {date}/>
        
            </>
          }
          </>
        )
    } 

    export default Current