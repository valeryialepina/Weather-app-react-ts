import './Current.scss'
import moment from "moment";



const ICON_URL = 'http://openweathermap.org/img/wn/'

function Current({city}: any) {
  
        return (
          <div className='details'>
            <h1>The Data On {city} Is Currently Unavailable</h1>
          </div>
        )
    } 

    export default Current