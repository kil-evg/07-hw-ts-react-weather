import { useState } from "react";
import Form from "./Form";
import Weather from "./Weather";
import { api_key, base_url } from '../utils/constant';

interface WeatherInfo {
    city: string;
    country: string;
    temp: number;
    pressure: number;
    sunset: number;
  }

function Data() {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({city: '',country: '',temp: 0,pressure: 0,sunset: 0});
    const [message, setMessage] = useState('Enter city name')
  
    const getWeather = async (city: string) => {
      try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        const data = await response.json()
        const info = {
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          pressure: data.main.pressure,
          sunset: data.sys.sunset
        }
        setWeatherInfo(info)
        setMessage('');
      } catch (e) {
        setMessage('Enter correct city name');
      }
    }
  
    return (
      <div>
        <Form getWeather={getWeather} />
        <Weather weather={weatherInfo} message={message} /> 
      </div>
    )
  }
  
  export default Data