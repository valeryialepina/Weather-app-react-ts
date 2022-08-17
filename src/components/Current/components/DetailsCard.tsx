import './DetailsCard.scss';
import moment from "moment";

const ICON_URL = 'http://openweathermap.org/img/wn/'

function DetailsCard({weather_icon, date}:any) {
const clouds = date?.clouds?.all
const main = date?.main
const weather = date?.weather
    return (
      <div className='details'>
        <div className="clouds">
            <p className="celsius">{Math.round(main.temp)}&deg;C</p>
            <div className="clouds-icon">
                {weather[0].main}
                <img src={ICON_URL + weather_icon + `@4x.png`} alt=""  />
            </div>
            <div className="des">{weather[0].discription}</div>
            <div className="time">{moment().format("dddd MMM YYYY")}</div>
        </div>
        <div className="more-info">
            <p>Feels like: {Math.round(main.feels_like)}{'\u00b0'}C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Cloud cover: {clouds}%</p>
            <p>Min temp: {Math.round(main.temp_min)}{'\u00b0'}C</p>
            <p>Max temp: {Math.round(main.temp_max)}{'\u00b0'}C</p>
        </div>
      </div>
    )
} 



export default DetailsCard;