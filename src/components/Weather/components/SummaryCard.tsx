import moment from 'moment';
import './SummaryCard.scss';

function SummaryCard({day}:any) { 

  const ICON_URL = 'http://openweathermap.org/img/wn/'
    const day_icon = `${ICON_URL + day.weather[0]['icon']}@2x.png`
    return (
      <li className="summary-items">
        <div>
            <p>{Math.round(day.main.temp)}&deg;C</p>
            <p>
                {day.weather[0].main}
                <img src={day_icon} alt="" />
            </p>
            <p>{day.weather[0].description}</p>
            <p>{moment(day.dt_txt).format('hh:mm a')}</p>
        </div>
      </li>
    )
}



export default SummaryCard; 