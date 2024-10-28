import { createContext, useEffect, useState } from "react";
export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [searchCity, setSearchCity] = useState("kanpur");

  useEffect(() => {
    const fetching = async () => {
      console.log("fetching start");
      const apiKey=import.meta.env.VITE_API_KEY_weather
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`;
      
      const respose = await fetch(url);
      const data = await respose.json();
      console.log(data);
      setWeatherData(data);
      console.log("fetching complete");
    };
    fetching();
  }, [searchCity]);

  // handle search function
  const handlesearchCity = (cityname) => {
    setSearchCity(cityname);
     
  };

  return (
    <Context.Provider value={{ setLoading, weatherData, handlesearchCity,searchCity }}>
      {children}
    </Context.Provider>
  );
};
