interface WeatherProps {
    weather: {
        country: string,
        city: string,
        temp: number,
        pressure: number,
        sunset: number
    },
    message: string
} 

function Weather({ weather, message }: WeatherProps) {

    return (
      <div className='infoWeath'>{
        !message &&  <>
          <p>Location: {weather.country}, {weather.city}</p>
          <p>Temp: {weather.temp}</p>
          <p>Pressure: {weather.pressure}</p>
          <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
        </>
      }
        <>{message}</>
      </div>
    )
  }
  
  export default Weather