import './Weather.scss'
import DetailsCard from './components/DetailsCard'
import SummaryCard from './components/SummaryCard'
import { useSelector } from 'react-redux';

function Weather ({weatherData, weatherIcon, city}: any) {
  const date = weatherData;
    return (
        <>
        {weatherData.length === 0 ? 
          <div>
            <div className="nodatd">
              <h1>No Data</h1>
            </div>
          </div> : 
          <> 
            <h1>Today</h1>
            <DetailsCard weather_icon = {weatherIcon} date = {date}/>
            <h1 className="title">More on {city}</h1>
            <ul className="summary">
              {weatherData?.[1]?.list?.map((days: any, index: number) => {
                if (index > 0) {
                  return (<SummaryCard key = {index} day = {days} /> )
                }
              })}
            </ul>
          </>
        }
        </>
    )
}

export default Weather;