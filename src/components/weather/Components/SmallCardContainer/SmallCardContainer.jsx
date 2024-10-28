import React ,{useContext} from 'react'
import SmallCard from '../SmallCard/SmallCard'
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { TiWeatherSunny } from "react-icons/ti";
import { FaTemperatureHigh } from "react-icons/fa";
import { Context } from '../../Context/Context'
import ReactAnimatedWeather from "react-animated-weather";

function SmallCardContainer() {
    const {weatherData}=useContext(Context);

  return (
    <div className="smallcards flex justify-evenly gap-12 mobile:flex-col mobile:gap-2 ">
      
      <SmallCard text='Wind Speed' data={weatherData?.wind?.speed}   icon={<ReactAnimatedWeather icon="WIND" size="40" color="#FFFFFF" />} parameter="KM/H"/>
      {/* <FaWind />  */}

      <SmallCard text='Humidity' icon={  <ReactAnimatedWeather icon="RAIN" size="40" color="#FFFFFF" />} data={weatherData?.main?.humidity} parameter="%"/>

      {/* <WiHumidity /> */}

      <SmallCard text='Feels Like' icon={
        <ReactAnimatedWeather icon="CLEAR_DAY" size="40" color="#FFFFFF" />} data={(weatherData?.main?.feels_like - 273.15).toFixed(2)} parameter="°C"/>
        {/* <TiWeatherSunny /> */}

      <SmallCard text='Max Temp' icon={<FaTemperatureHigh />} data={(weatherData?.main?.temp_max - 273.15).toFixed(2)} parameter="°C"/>
    </div>
  )
}

export default SmallCardContainer
