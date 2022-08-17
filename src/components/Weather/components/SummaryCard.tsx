import moment from 'moment';
import './SummaryCard.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function SummaryCard({ weather}:any) { 
  const ICON_URL = 'http://openweathermap.org/img/wn/'
    console.log( weather?.[1]?.list)
    return (
<div className='WeatherForHours component'>
  <Swiper className="summary-items"
      spaceBetween={0}
      breakpoints={{
          600: { slidesPerView: 5},
          400: { slidesPerView: 3 },
      }}
  > {weather && weather?.[1]?.list?.map((days: any, index: number) => {
      return (
          <SwiperSlide className="weatherOnHourSlide" key={index}>
            <p className="date">{moment(days.dt_txt).format("dddd MMM YYYY")}</p>
              <p className="temperature">{Math.round(days.main.temp)}&deg;C</p>
              <p className="icon">
                  {days.weather[0].main}
                  <img src={`${ICON_URL + days.weather[0]['icon']}@2x.png`} alt="" />
              </p>
              <p className="desc">{days.weather[0].description}</p>
              <p className="date">{moment(days.dt_txt).format('hh:mm a')}</p>
          </SwiperSlide>
      )
  })}
  </Swiper>
</div>

    )
}



export default SummaryCard; 

